import { View, Text, SafeAreaView, TextInput } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';

const Followers = () => {
    return (
        <SafeAreaView style={tw`flex flex-1 bg-white`}>
            <View>
                <View style={tw`flex flex-row items-center m-3 bg-[#F3F0F6] rounded-lg`}>
                    <Ionicons name="ios-search-outline" style={tw`text-xl text-gray-400 px-1.5`} />
                    <TextInput
                        style={tw`flex-1 py-2.5 `}
                        placeholder="Search..."
                    />
                </View>
                <View style={tw`flex items-center`}>
                    <View style={tw`my-4 p-6 border-2 border-gray-400 rounded-full`}>
                        <SimpleLineIcons name="user-follow" style={tw`text-5xl text-gray-400`} />
                    </View>
                    <Text style={tw`text-3xl font-medium`}>Followers</Text>
                    <Text style={tw`text-base text-gray-400 mt-2`}>You'll see all the people who follow you here</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Followers