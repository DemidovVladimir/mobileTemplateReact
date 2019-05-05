import React from 'react';
import {Button, Platform, ScrollView, StyleSheet, Text, View, FlatList} from 'react-native';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getStitchClient, getUsers, userLogIn, userLogOut} from '../actions/db-actions';

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getStitchClient();
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    <View style={styles.helpContainer}>
                        <Text style={styles.helpLinkText}>Mobile App IOS</Text>
                        <Text>Mongo Stitch user ID:</Text>
                        <Text>{this.props.currentUser}</Text>
                        <Button
                            onPress={() => this.props.userLogIn()}
                            title="User Log In"/>
                        <Button
                            onPress={() => this.props.getUsers()}
                            title="Get All Users"/>
                        <Text>Users from Mongo Atlas DB:</Text>
                        <FlatList
                            data={this.props.users}
                            renderItem={({item}) => <Text>{item.key}</Text>}
                        />
                        <Button
                            onPress={() => this.props.userLogOut()}
                            title="User Log Out"/>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser, users} = state.dbclient;
    return {
        currentUser,
        users
    };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            getUsers,
            getStitchClient,
            userLogIn,
            userLogOut
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
