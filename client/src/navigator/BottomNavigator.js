import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../Screen/HomeScreen'
import SearchScreen from '../Screen/SearchScreen'
import SvgHomeOutline from '../images/icons/home-161.svg'
import SvgHome from '../images/icons/home-175.svg'

const Tab = createBottomTabNavigator()

export class BottomNavigator extends Component {
    render() {
        return (
            <Tab.Navigator>
                <Tab.Screen
                    name='Home'
                    component={HomeScreen}
                    options={{
                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarIcon: (({ focused }) =>
                            <>
                                {focused ? (
                                    <SvgHome width={22} color='red' />
                                ) : (
                                    <SvgHomeOutline width={22} fill="green" />
                                )}
                            </>
                        ),
                        tabBarStyle: [tw`bg-[#F5F7FA]`],
                    }}
                />
                <Tab.Screen
                    name='Search'
                    component={SearchScreen}
                    options={{
                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarIcon: (({ focused }) =>
                            <>
                                {focused ? (
                                    <Ionicons name="ios-search-sharp" size={24} style={tw`text-pink-500`} />
                                ) : (
                                    <Ionicons name="ios-search-sharp" size={24} color="black" />
                                )}
                            </>
                        ),
                        tabBarStyle: [tw`bg-[#F5F7FA]`],
                    }}
                />
            </Tab.Navigator>
        )
    }
}

export default BottomNavigator