import React from 'react'
import { StyleSheet, View, Text, SafeAreaView, PixelRatio, Image, Dimensions, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import Images from '../Components/Profile/Images'
import Posts from '../Components/Profile/Posts'
const { width } = Dimensions.get('window')
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

const ProfileScreen = () => {
    PixelRatio.getPixelSizeForLayoutSize(width);

    return (
        <SafeAreaView style={tw`w-full h-full bg-white`}>
            <View style={tw`mt-7`}>
                <View style={tw`relative`}>
                    <Image
                        source={require('../images/bgProfile3.jpg')}
                        style={styles.image}
                        resizeMode='cover'
                    />
                    <View style={tw`absolute -bottom-8 left-10 z-99 p-2 shadow-lg bg-white rounded-full`}>
                        <Image
                            source={require('../images/avatarProfile.jpg')}
                            style={tw`w-30 h-30 rounded-full`}
                        />
                    </View>
                </View>
                <View style={tw`w-full h-full bg-white -mt-10 rounded-t-[40px]`}>
                    <View style={tw`flex flex-row items-center justify-end p-3`}>
                        <View style={tw`flex`}>
                            <Text style={tw`text-xl font-bold`}>Tuan Le</Text>
                            <Text style={tw`text-sm text-gray-400`}>tuanle@gmail.com</Text>
                        </View>
                        <TouchableOpacity
                            style={tw`p-1 ml-10 border-2 border-pink-500 rounded-lg`}
                        >
                            <MaterialIcons name="mode-edit" size={24} style={tw`text-pink-500`} />
                        </TouchableOpacity>
                    </View>
                    <View style={tw`p-5`}>
                        <View style={tw`flex flex-row`}>
                            <View style={tw`flex-1 items-center`}>
                                <Text style={tw`font-bold text-base`}>12</Text>
                                <Text style={tw`text-gray-400 text-xs`}>Posts</Text>
                            </View>
                            <View style={tw`flex-1 items-center`}>
                                <Text style={tw`font-bold text-base`}>12</Text>
                                <Text style={tw`text-gray-400 text-xs`}>Posts</Text>
                            </View>
                            <View style={tw`flex-1 items-center`}>
                                <Text style={tw`font-bold text-base`}>12</Text>
                                <Text style={tw`text-gray-400 text-xs`}>Posts</Text>
                            </View>
                        </View>
                        <View style={tw`flex flex-row mt-3`}>
                            <TouchableOpacity
                                style={tw`flex-1 items-center bg-pink-100 rounded-xl py-1.5`}
                            >
                                <MaterialCommunityIcons name="camera-wireless-outline" style={tw`text-pink-500 text-2xl`} />
                                <Text style={tw`text-pink-500 text-xs`}>Photos</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={tw`flex-1 items-center bg-pink-100 rounded-xl py-1.5`}
                            >
                                <MaterialCommunityIcons name="view-grid-outline" style={tw`text-pink-500 text-2xl`} />
                                <Text style={tw`text-pink-500 text-xs`}>Posts</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={tw`flex-1 items-center bg-pink-100 rounded-xl py-1.5`}
                            >
                                <MaterialIcons name="event" style={tw`text-pink-500 text-2xl`} />
                                <Text style={tw`text-pink-500 text-xs`}>Events</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Posts />
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
        width: width, // 24 ~ p-3
        height: width / 2
    },
})