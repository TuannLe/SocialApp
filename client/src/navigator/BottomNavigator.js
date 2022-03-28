import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import tw from 'twrnc';
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import HomeScreen from '../Screen/HomeScreen'
import SearchScreen from '../Screen/SearchScreen'
import PostScreen from '../Screen/PostScreen'
import ProfileScreen from '../Screen/ProfileScreen';
import HeartScreen from '../Screen/HeartScreen'
import SvgHomeOutline from '../images/icons/home_icon_184326.svg'

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
                                    <SvgHomeOutline style={tw`text-pink-500`} />
                                ) : (
                                    <SvgHomeOutline style={tw`text-black`} />
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
                                    <Ionicons name="ios-search-outline" size={24} style={tw`text-pink-500`} />
                                ) : (
                                    <Ionicons name="ios-search-outline" size={24} color="black" />
                                )}
                            </>
                        ),
                        tabBarStyle: [tw`bg-[#F5F7FA]`],
                    }}
                />
                <Tab.Screen
                    name='Post'
                    component={PostScreen}
                    options={{
                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarIcon: (() =>
                            <AntDesign name="plus" size={24} style={tw`text-white p-1 rounded-lg bg-pink-500`} />
                        ),
                        tabBarStyle: [tw`bg-[#F5F7FA]`],
                    }}
                />
                <Tab.Screen
                    name='Heart'
                    component={HeartScreen}
                    options={{
                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarIcon: (({ focused }) =>
                            <>
                                {focused ? (
                                    <AntDesign name="hearto" size={24} style={tw`text-pink-500`} />
                                ) : (
                                    <AntDesign name="hearto" size={24} color="black" />
                                )}
                            </>
                        ),
                        tabBarStyle: [tw`bg-[#F5F7FA]`],
                    }}
                />
                <Tab.Screen
                    name='Profile'
                    component={ProfileScreen}
                    options={{
                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarIcon: (({ focused }) =>
                            <>
                                {focused ? (
                                    <Ionicons name="ios-person-outline" size={24} style={tw`text-pink-500`} />
                                ) : (
                                    <Ionicons name="ios-person-outline" size={24} color="black" />
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