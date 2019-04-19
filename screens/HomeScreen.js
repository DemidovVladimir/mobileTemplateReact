import React from 'react';
import {Button, Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import qrcode from 'yaqrcode';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {sendDocument} from "../actions/registerTruckDriverActions";
import {Buffer} from 'buffer';

class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        if (this.props.truckDriver.username) {
            this.base64 = qrcode(JSON.stringify({
                username: this.props.truckDriver.username,
                password: this.props.truckDriver.password
            }));
        }
    }

    _readQRCode = async (blob) => {
        var base64result = blob.split(',')[1];
        return Promise.resolve(new Buffer.from(base64result, 'base64'));
    };

    _sendQRCode = async () => {
        this._readQRCode(this.base64).then(buffer => {
            this.props.sendDocument(buffer, 'qr-code');
        }).catch(e => {
            console.log(e);
        });
    };

    render() {
        let generatedQRcode;
        if (this.props.truckDriver.username) {
            generatedQRcode =
                <View>
                    <Image
                        style={{width: 200, height: 200}}
                        source={{uri: this.base64}}
                    />
                    <Button
                        title="Send QR Code to DB"
                        onPress={() => this._sendQRCode()}
                    />
                </View>
        } else {
            generatedQRcode = <Text
                style={styles.helpLinkText}>https://www.dummies.com/business/marketing/social-media-marketing/how-to-scan-a-qr-code/</Text>;
        }

        return (
            <View style={styles.container}>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    <View style={styles.helpContainer}>
                        <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
                            <Text style={styles.helpLinkText}>Operator app</Text>
                            {generatedQRcode}
                            <Text>Last truck driver
                                registered: {this.props.truckDriver.username || 'Not yet any'}</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }

    _handleLearnMorePress = () => {
        // WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
    };

    _handleHelpPress = () => {
        // WebBrowser.openBrowserAsync(
        // 'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
        // );
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
)(HomeScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    developmentModeText: {
        marginBottom: 20,
        color: 'rgba(0,0,0,0.4)',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
    },
    contentContainer: {
        paddingTop: 30,
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
    },
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: {height: -3},
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 20,
            },
        }),
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 20,
    },
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
    navigationFilename: {
        marginTop: 5,
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
});
