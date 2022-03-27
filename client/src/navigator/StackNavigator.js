import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../Components/Auth'
import BottomNavigator from '../navigator/BottomNavigator'

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
        </Stack.Navigator>
    )
}

export default StackNavigator