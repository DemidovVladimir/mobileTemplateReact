import React from "react";
import {Button, Text, View, Image} from "react-native";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {ImagePicker, Permissions, FileSystem} from 'expo';
import { Buffer } from 'buffer';
import { sendDocument } from '../actions/registerTruckDriverActions';

class SupplyDocumentsScreen extends React.Component {
    state = {
        image: null,
        hasCameraPermission: null
    };

    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);

        this.setState({hasCameraPermission: status === "granted"});
    }

    render() {
        let {image, hasCameraPermission} = this.state;

        if (hasCameraPermission === null) {
            return <View/>;
        } else if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
        } else {
            return (
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Button
                        title="Pick an image from camera roll"
                        onPress={() => this._pickDriverLicense()}
                    />
                    {image &&
                    <Image source={{uri: image}} style={{width: 200, height: 200}}/>}
                </View>
            )
        }
    }

    readFile = async (filePath) => {
        const options = { encoding: FileSystem.EncodingTypes.Base64 };
        const fileBlob = await FileSystem.readAsStringAsync(filePath, options);

        return Promise.resolve(new Buffer.from(fileBlob, 'base64'));
    };

    _pickDriverLicense = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
        });

        if (!result.cancelled) {
            this.readFile(result.uri).then(buffer => {
                this.props.sendDocument(buffer, 'licence');
            }).catch(e => {
                console.log(e);
            });

            this.setState({image: result.uri});
        }
    };
}

const mapStateToProps = state => {
    const {truckDriver} = state;
    return {truckDriver};
};

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            sendDocument
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SupplyDocumentsScreen);
