import { View, TouchableOpacity, Text, SafeAreaView } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { FontAwesome, Ionicons, Feather } from '@expo/vector-icons';

const AccountScreen = () => {
    return (
        <SafeAreaView style={tw`bg-white flex flex-1`}>
            <View>
                <View style={tw`relative flex flex-row  border-b border-gray-200 p-3`}>
                    <TouchableOpacity
                        style={tw`absolute top-0 left-0`}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={tw`py-2 pl-4 pr-8`}><FontAwesome name="angle-left" style={tw`text-black text-2xl`} /></Text>
                    </TouchableOpacity>
                    <Text style={tw`flex-1 text-base font-bold text-center`}>Account</Text>
                </View>
                <View style={tw`px-3`}>
                    <View style={tw`h-full py-2`}>
                        <TouchableOpacity
                            style={tw`flex flex-row items-center`}
                        >
                            <Feather name="user" style={tw` text-2xl w-10`} />
                            <Text style={tw`text-base flex-1`}>Personal information</Text>
                            <FontAwesome name="angle-right" style={tw`text-gray-300 text-2xl`} />
                        </TouchableOpacity>
                        <TouchableOpacity style={tw`flex flex-row items-center mt-2`}>
                            <Ionicons name="md-key-outline" style={tw` text-2xl w-10`} />
                            <Text style={tw`text-base flex-1`}>Password</Text>
                            <FontAwesome name="angle-right" style={tw`text-gray-300 text-2xl`} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={tw`p-2.5 mt-5 bg-pink-500 rounded-lg`}
                        >
                            <Text style={tw`text-white font-medium text-center text-base`}>Logout</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </SafeAreaView>
    )
}

export default AccountScreen