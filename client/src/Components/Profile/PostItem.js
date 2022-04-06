import { View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc';

const PostItem = ({ item, handleVisible, setIdPostSelected }) => {
    return (
        <View style={tw`flex-1 h-40 `}>
            <TouchableOpacity
                activeOpacity={.7}
                onLongPress={() => {
                    handleVisible()
                    setIdPostSelected(item.item.postsId)
                }}
            >
                <Image
                    source={{ uri: item.item.image }}
                    style={tw`h-full w-full`}
                    resizeMode={'cover'}
                />
            </TouchableOpacity>
        </View>
    )
}

export default PostItem