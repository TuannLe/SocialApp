import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc';

const SearchItem = ({ item }) => {
    return (
        <View style={tw`flex`}>
            <TouchableOpacity style={tw`flex flex-row items-center px-3 mb-3 `}>
                <Image
                    source={{ uri: item.item.image }}
                    style={tw`w-13 h-13 rounded-full`}
                />
                <View style={tw`flex flex-1 ml-3 `}>
                    <Text style={tw`text-sm font-medium`}>{item.item.name}</Text>
                    <Text style={tw`text-xs`}>{item.item.email}</Text>
                </View>

            </TouchableOpacity>
        </View>
    )
}

export default SearchItem