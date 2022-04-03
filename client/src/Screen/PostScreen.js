import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc';
import * as ImagePicker from 'expo-image-picker';
import { EvilIcons, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const PostScreen = () => {
    const [image, setImage] = useState(null)
    const navigation = useNavigation();
    const handleSelectPicture = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            aspect: [2, 3],
            quality: 1,
        })

        if (!result.cancelled) {
            console.log(result)
            const image = {
                uri: Platform.OS == 'ios' ? result.uri.substr(7) : result.uri,
                name: result.fileName || result.uri.substr(result.uri.lastIndexOf('/') + 1)
            }
            setImage(image);
        }
    }

    return (
        <SafeAreaView style={tw`flex flex-1 bg-white`}>
            <View style={tw`border-b border-gray-200 p-2`}>
                <Text style={tw`text-center text-lg font-medium`}>New Post</Text>
                <View style={tw`absolute top-0 right-0`}>
                    {image
                        ? (
                            <TouchableOpacity
                                style={tw`flex flex-row items-center p-1.5`}
                            >
                                <Text style={tw`text-pink-400 mr-2 text-base`}>Next</Text>
                                <FontAwesome name="angle-right" style={tw`text-pink-400 text-2xl`} />
                            </TouchableOpacity>
                        )
                        : (
                            <View style={tw`flex flex-row items-center p-1.5`}>
                                <Text style={tw`text-gray-400 mr-2 text-base`}>Next</Text>
                                <FontAwesome name="angle-right" style={tw`text-gray-400 text-2xl`} />
                            </View>
                        )
                    }
                </View>
            </View>
            {image
                ? (
                    <View style={[tw`w-full items-center`]}>
                        <Image
                            source={{ uri: image.uri }}
                            style={tw`w-30 h-50`}
                        />
                    </View>
                )
                : (
                    <View style={tw`flex flex-1 items-center justify-center`}>
                        <View style={tw`flex justify-center items-center w-25 h-25 border-2 border-pink-500 rounded-full`}>
                            <EvilIcons name="camera" style={tw`text-5xl text-pink-500`} />
                        </View>
                        <Text style={tw`text-base text-pink-500 font-medium my-2`}>Photos will be displayed here</Text>
                        <TouchableOpacity
                            style={tw`px-5 py-2 rounded-lg bg-pink-500`}
                            onPress={handleSelectPicture}
                        >
                            <Text style={tw`text-base text-white font-medium`}>Gallery</Text>
                        </TouchableOpacity>
                    </View>
                )
            }
        </SafeAreaView>
    )
}

export default PostScreen