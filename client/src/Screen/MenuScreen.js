import { View, Text, SafeAreaView, TouchableOpacity, Switch } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc';
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Privacy from '../Components/Menu/Privacy/Privacy'

const HeartScreen = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={tw`flex flex-1 bg-white`}>
            <View style={tw`p-3`}>
                <TouchableOpacity
                    style={tw`flex flex-row items-center py-2`}
                >
                    <Ionicons name="qr-code-outline" style={tw`text-2xl w-10`} />
                    <Text style={tw`text-base`}>QR Code</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={tw`flex flex-row items-center py-2`}
                >
                    <Feather name="settings" style={tw`text-2xl w-10`} />
                    <Text style={tw`text-base`}>Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={tw`flex flex-row items-center py-2`}
                    onPress={() => navigation.navigate('PrivacyStack')}
                >
                    <Ionicons name="md-lock-closed-outline" style={tw`text-2xl w-10`} />
                    <Text style={tw`text-base`}>Privacy</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={tw`flex flex-row items-center py-2`}
                    onPress={() => navigation.navigate('AccountStack')}
                >
                    <MaterialCommunityIcons name="account-circle-outline" style={tw`text-2xl w-10`} />
                    <Text style={tw`text-base`}>Account</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={tw`flex flex-row items-center py-2`}
                >
                    <Ionicons name="md-help" style={tw`text-2xl w-10`} />
                    <Text style={tw`text-base`}>Help</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default HeartScreen