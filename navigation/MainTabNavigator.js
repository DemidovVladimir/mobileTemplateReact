import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator, createStackNavigator, createSwitchNavigator} from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SupplyDocumentsScreen from '../screens/SupplyDocumentsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import RegisterTruckDriverScreen from '../screens/RegisterTruckDriverScreen';
import ConfirmDriverRegistrationScreen from '../screens/RegisterTruckDriverConfirmationScreen';

const HomeStack = createStackNavigator({
    Home: HomeScreen,
});

HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? `ios-information-circle${focused ? '' : '-outline'}`
                    : 'md-information-circle'
            }
        />
    ),
};

const RegisterTruckDriverStack = createStackNavigator({
    TruckDriver: RegisterTruckDriverScreen
});

RegisterTruckDriverStack.navigationOptions = {
    tabBarLabel: 'Truck',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? 'ios-car'
                    : 'md-information-circle'
            }
        />
    ),
};

const ConfirmTruckDriverRegistrationStack = createStackNavigator({
    Confirmation: ConfirmDriverRegistrationScreen
});

ConfirmTruckDriverRegistrationStack.navigationOptions = {
    tabBarLabel: 'Confirmation',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? 'ios-cloud-done'
                    : 'md-cloud-done'
            }
        />
    ),
};
// TODO: Can be opened if needed...
// const SupplyDocumentsStack = createStackNavigator({
//     Documents: {
//         screen: SupplyDocumentsScreen,
//     },
// });
//
// SupplyDocumentsStack.navigationOptions = {
//     header: null,
//     tabBarLabel: 'Documents',
//     tabBarIcon: ({focused}) => (
//         <TabBarIcon
//             focused={focused}
//             name={Platform.OS === 'ios' ? 'ios-document' : 'md-document'}
//         />
//     ),
//     tabBarVisible: false
// };

const SettingsStack = createStackNavigator({
    Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
    tabBarLabel: 'Settings',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
        />
    ),
};

const TabNavigator = createBottomTabNavigator({
    HomeStack,
    SettingsStack,
    RegisterTruckDriverStack,
    ConfirmTruckDriverRegistrationStack
});

export default createSwitchNavigator({
    Tabs: TabNavigator,
    Documents: SupplyDocumentsScreen,
});
