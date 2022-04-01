import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc';

const FollowingItem = ({ item }) => {
    return (
        <View style={tw`flex`}>
            <TouchableOpacity
                style={tw`flex flex-row items-center mt-3`}
            >
                <Image
                    source={{ uri: item.item.image }}
                    style={tw`h-13 w-13 rounded-full`}
                />
                <View style={tw`flex-1 ml-3`}>
                    <Text style={tw`text-sm font-medium`}>{item.item.name}</Text>
                    <Text style={tw`text-xs text-gray-400`}>{item.item.email}</Text>
                </View>
                <TouchableOpacity
                    style={tw`px-2.5 py-1.5 bg-white border border-gray-300 rounded-md`}
                >
                    <Text style={tw`text-black font-medium`}>Following</Text>
                </TouchableOpacity>
            </TouchableOpacity>
        </View>
    )
}

export default FollowingItem