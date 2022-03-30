import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import tw from 'twrnc';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import Posts from '../Components/Profile/Posts'
import Hearts from '../Components/Profile/Hearts'
import PostsHide from '../Components/Profile/PostsHide'

const TopTabNavigator = () => {
    const Tab = createMaterialTopTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: tw`h-12`,
                tabBarIndicatorStyle: tw`bg-pink-500`,
                tabBarShowLabel: false,
                tabBarShowIcon: true,
            }}
        >
            <Tab.Screen
                name='PostsTab'
                component={Posts}
                options={{
                    tabBarIcon: (({ focused }) =>
                        <>
                            {focused ? (
                                <Ionicons name="ios-grid" style={tw`text-pink-500 text-lg`} />
                            ) : (
                                <Ionicons name="ios-grid-outline" style={tw`text-black text-lg`} />
                            )}
                        </>
                    ),
                }}
            />
            <Tab.Screen
                name='HeartTab'
                component={Hearts}
                options={{
                    tabBarIcon: (({ focused }) =>
                        <>
                            {focused ? (
                                <Ionicons name="ios-heart" style={tw`text-pink-500 text-xl`} />

                            ) : (
                                <Ionicons name="heart-outline" style={tw`text-black text-xl`} />
                            )}
                        </>
                    ),
                }}
            />
            <Tab.Screen
                name='PostsHide'
                component={PostsHide}
                options={{
                    tabBarIcon: (({ focused }) =>
                        <>
                            {focused ? (
                                <Ionicons name="md-lock-closed" style={tw`text-pink-500 text-xl`} />
                            ) : (
                                <Ionicons name="md-lock-closed-outline" style={tw`text-black text-xl`} />
                            )}
                        </>
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default TopTabNavigator