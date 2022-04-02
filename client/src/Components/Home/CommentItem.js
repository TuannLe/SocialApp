import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';

const CommentItem = ({ item }) => {
    return (
        <View style={tw`flex flex-1`}>
            <TouchableOpacity
                style={tw`flex flex-row mt-3`}
            >
                <Image
                    source={{ uri: item.item.image }}
                    style={tw`h-8 w-8 rounded-full`}
                />
                <View style={tw`flex-1 ml-3`}>
                    <Text style={tw`text-sm font-medium`}>{item.item.name}</Text>
                    <Text style={tw`text-xs text-gray-400`}>{item.item.comment}</Text>
                </View>
                <TouchableOpacity
                    style={tw`ml-2`}
                >
                    <Ionicons name="heart-outline" style={tw`text-xl text-gray-400`} />
                </TouchableOpacity>
            </TouchableOpacity>
        </View>
    )
}

export default CommentItem