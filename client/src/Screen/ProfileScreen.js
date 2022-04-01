import React from 'react'
import { StyleSheet, View, Text, SafeAreaView, PixelRatio, Image, Dimensions, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { TopTabNavigator } from '../navigator/TopTabNavigator'
const { width } = Dimensions.get('window')
import { MaterialIcons } from '@expo/vector-icons';

const ProfileScreen = () => {
    PixelRatio.getPixelSizeForLayoutSize(width);

    return (
        <SafeAreaView style={tw`w-full h-full bg-white`}>
            <View style={tw`flex w-full h-full`}>
                <View style={tw``}>
                    <Image
                        source={require('../images/bgProfile3.jpg')}
                        style={styles.image}
                        resizeMode='cover'
                    />
                </View>
                <View style={tw`relative flex-1 bg-white -mt-10 rounded-t-[40px]`}>
                    <View style={tw`absolute -top-14 left-10 z-1 p-1 shadow-lg bg-white rounded-full`}>
                        <Image
                            source={require('../images/avatarProfile.jpg')}
                            style={tw`w-25 h-25 rounded-full`}
                        />
                    </View>
                    <View style={tw`flex flex-row items-center justify-end p-3`}>
                        <View style={tw`flex`}>
                            <Text style={tw`text-base font-bold`}>Tuan Le</Text>
                            <Text style={tw`text-sm text-gray-400`}>tuanle@gmail.com</Text>
                        </View>
                        <TouchableOpacity
                            style={tw`p-1 ml-5 border-2 border-pink-500 rounded-lg`}
                        >
                            <MaterialIcons name="mode-edit" size={20} style={tw`text-pink-500`} />
                        </TouchableOpacity>
                    </View>
                    <View style={tw`px-3 flex-1`}>
                        <View style={tw`flex flex-row`}>
                            <View style={tw`flex-1 items-center`}>
                                <Text style={tw`font-medium text-sm`}>12</Text>
                                <Text style={tw`text-gray-400 text-xs`}>Posts</Text>
                            </View>
                            <View style={tw`flex-1 items-center`}>
                                <Text style={tw`font-medium text-sm`}>120</Text>
                                <Text style={tw`text-gray-400 text-xs`}>Followers</Text>
                            </View>
                            <View style={tw`flex-1 items-center`}>
                                <Text style={tw`font-medium text-sm`}>50</Text>
                                <Text style={tw`text-gray-400 text-xs`}>Following</Text>
                            </View>
                        </View>
                        <View style={tw`flex-1`}>
                            <TopTabNavigator />
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    image: {
        width: width,
        height: width / 2
    },
})