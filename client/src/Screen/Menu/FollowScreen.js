import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { FontAwesome } from '@expo/vector-icons';

const FollowScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={tw`flex flex-1 bg-white`}>
            <View>
                <View style={tw`relative flex flex-row  border-b border-gray-200 p-3`}>
                    <TouchableOpacity
                        style={tw`absolute top-0 left-0`}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={tw`py-2 pl-4 pr-8`}><FontAwesome name="angle-left" style={tw`text-black text-2xl`} /></Text>
                    </TouchableOpacity>
                    <Text style={tw`flex-1 text-base font-bold text-center`}>Privacy</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default FollowScreen