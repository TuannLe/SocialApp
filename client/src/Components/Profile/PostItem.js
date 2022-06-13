import { View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

const PostItem = ({ item, handleVisible, setIdPostSelected }) => {
    const navigation = useNavigation()

    return (
        <View style={tw`flex-1 h-40 `}>
            <TouchableOpacity
                activeOpacity={.7}
                onLongPress={() => {
                    handleVisible()
                    setIdPostSelected(item.item._id)
                }}
                onPress={() => navigation.navigate('DetailPostStack', {
                    image: item.item.images,
                    content: item.item.content,
                    postId: item.item.postId,
                    author: item.item.author
                })}
            >
                <Image
                    source={{ uri: `data:image/png;base64,${item.item.images}` }}
                    style={tw`h-full w-full`}
                    resizeMode={'cover'}
                />
            </TouchableOpacity>
        </View>
    )
}

export default PostItem