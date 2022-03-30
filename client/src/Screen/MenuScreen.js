import { View, Text, SafeAreaView, TouchableOpacity, Switch } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc';

const HeartScreen = () => {
    const [statusAccount, setStatusAccount] = useState(false)
    return (
        <SafeAreaView style={tw`flex flex-1 bg-white`}>
            <View style={tw`p-3`}>
                <View style={tw`flex flex-row items-center`}>
                    <Text>Private Account?</Text>
                    <Switch
                        trackColor={{ false: "#C6CBD9", true: "#5EC2EA" }}
                        thumbColor={"#fff"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => setStatusAccount(!statusAccount)}
                        value={statusAccount}
                    />
                </View>
                <TouchableOpacity
                    style={tw`p-2.5 bg-pink-500 rounded-lg`}
                >
                    <Text style={tw`text-white font-medium text-center text-base`}>Logout</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default HeartScreen