import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../Components/Auth'
import BottomNavigator from '../navigator/BottomNavigator'
import PrivacyScreen from '../Screen/Menu/PrivacyScreen'
import BlockedAccountScreen from '../Screen/Menu/BlockedAccScreen'
import FollowScreen from '../Screen/Menu/FollowScreen'
import AccountScreen from '../Screen/Menu/AccountScreen'
import InformationScreen from '../Screen/Menu/InformationScreen'
import ChatBoxScreen from '../Screen/ChatBoxScreen'
import ProfileGuestScreen from '../Screen/ProfileGuestScreen'
import UploadImageScreen from '../Screen/UploadImageScreen'

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="LoginStack" component={LoginScreen} />
            <Stack.Screen name="HomeStack" component={BottomNavigator} />
            <Stack.Screen name="PrivacyStack" component={PrivacyScreen} />
            <Stack.Screen name="BlockedAccountStack" component={BlockedAccountScreen} />
            <Stack.Screen name="FollowStack" component={FollowScreen} />
            <Stack.Screen name="AccountStack" component={AccountScreen} />
            <Stack.Screen name="InformationStack" component={InformationScreen} />
            <Stack.Screen name="ProfileGuestStack" component={ProfileGuestScreen} />
            <Stack.Screen name="ChatBoxStack" component={ChatBoxScreen} />
            <Stack.Screen name="UploadImageStack" component={UploadImageScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigator