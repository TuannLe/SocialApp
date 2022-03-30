import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import tw from 'twrnc';
import { AntDesign, Ionicons, Feather } from '@expo/vector-icons';
import HomeScreen from '../Screen/HomeScreen'
import SearchScreen from '../Screen/SearchScreen'
import PostScreen from '../Screen/PostScreen'
import ProfileScreen from '../Screen/ProfileScreen';
import MenuScreen from '../Screen/MenuScreen'
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
                                    <Ionicons name="ios-search-outline" style={tw`text-2xl text-pink-500`} />
                                ) : (
                                    <Ionicons name="ios-search-outline" style={tw`text-2xl text-black`} />
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
                            <View style={tw`p-1 rounded-lg bg-pink-500`}>
                                <AntDesign name="plus" size={24} style={tw`text-white`} />
                            </View>
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
                                    <Ionicons name="ios-person-outline" style={tw`text-2xl text-pink-500`} />
                                ) : (
                                    <Ionicons name="ios-person-outline" style={tw`text-2xl text-black`} />
                                )}
                            </>
                        ),
                        tabBarStyle: [tw`bg-[#F5F7FA]`],
                    }}
                />
                <Tab.Screen
                    name='Menu'
                    component={MenuScreen}
                    options={{
                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarIcon: (({ focused }) =>
                            <>
                                {focused ? (
                                    <Feather name="menu" style={tw`text-2xl text-pink-500`} />
                                ) : (
                                    <Feather name="menu" style={tw`text-2xl text-black`} />
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