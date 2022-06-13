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
                    setIdPostSelected(item.item._id)
                }}
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