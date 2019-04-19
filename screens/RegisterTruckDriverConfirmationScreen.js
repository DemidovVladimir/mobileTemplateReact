import React from "react";
import {Button, Text, View} from "react-native";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {confirmSignUp} from "../actions/registerTruckDriverActions";
import t from "tcomb-form-native";

const Form = t.form.Form;

const TruckDriverConfirm = t.struct({
    username: t.String,
    authCode: t.String
});

class RegisterTruckDriverConfirmationScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    confirmDriver = () => {
        this.props.confirmSignUp(this._confirmForm.getValue())
    };

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1}}>
                    <Text style={{fontSize: 18, marginBottom: 10, color: "black"}}>
                        Please confirm the registration of a new driver:
                    </Text>
                </View>
                <View style={{flex: 5}}>
                    <View style={formStyles.container}>
                        <Form
                            ref={k => (this._confirmForm = k)}
                            type={TruckDriverConfirm}
                        />
                        <Button title="Confirm a driver!" onPress={this.confirmDriver}/>
                    </View>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => {
    const {truckDriver} = state;
    return {truckDriver};
};

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            confirmSignUp
        },
        dispatch
    );

const formStyles = {
    ...Form.stylesheet,
    container: {
        justifyContent: "center",
        marginTop: 50,
        padding: 20,
        backgroundColor: "#ffffff"
    },
    controlLabel: {
        normal: {
            color: "blue",
            fontSize: 18,
            marginBottom: 7,
            fontWeight: "600"
        },
        error: {
            color: "red",
            fontSize: 18,
            marginBottom: 7,
            fontWeight: "600"
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterTruckDriverConfirmationScreen);
