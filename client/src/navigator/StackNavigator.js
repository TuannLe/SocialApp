import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useSelector } from 'react-redux'
import LoginScreen from '../Components/Auth'
import BottomNavigator from '../navigator/BottomNavigator'
import PrivacyScreen from '../Screen/Menu/PrivacyScreen'
import BlockedAccountScreen from '../Screen/Menu/BlockedAccScreen'
import FollowScreen from '../Screen/Menu/FollowScreen'
import AccountScreen from '../Screen/Menu/AccountScreen'
import ChatBoxScreen from '../Screen/ChatBoxScreen'
import ProfileGuestScreen from '../Screen/ProfileGuestScreen'
import UploadImageScreen from '../Screen/UploadImageScreen'
import MessageScreen from '../Screen/MessageScreen'
import { authState$ } from '../redux/selectors'

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    const auth = useSelector(authState$)
    // console.log(auth)

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            {auth.currentUser ? (
                <>
                    <Stack.Screen name="HomeStack" component={BottomNavigator} />
                    <Stack.Screen name="PrivacyStack" component={PrivacyScreen} />
                    <Stack.Screen name="BlockedAccountStack" component={BlockedAccountScreen} />
                    <Stack.Screen name="FollowStack" component={FollowScreen} />
                    <Stack.Screen name="AccountStack" component={AccountScreen} />
                    <Stack.Screen name="ProfileGuestStack" component={ProfileGuestScreen} />
                    <Stack.Screen name="ChatBoxStack" component={ChatBoxScreen} />
                    <Stack.Screen name="UploadImageStack" component={UploadImageScreen} />
                    <Stack.Screen name="MessageStack" component={MessageScreen} />
                </>
            ) : (
                <Stack.Screen name="LoginStack" component={LoginScreen} />
            )}

        </Stack.Navigator>
    )
}

export default StackNavigator