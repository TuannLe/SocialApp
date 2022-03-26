import React from 'react'
import { Text, View } from 'react-native';
import tw from 'twrnc';

const Home = () => {
    return (
        <View style={tw`flex flex-1 bg-pink-200 items-center justify-center`}>
            <Text style={tw`text-blue-500 text-3xl`}>Hello ae</Text>
        </View>
    )
}

export default Home
