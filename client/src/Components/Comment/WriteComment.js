import { View, Image, TextInput } from 'react-native';
import tw from 'twrnc';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { BlurView } from 'expo-blur';

const WriteComment = () => {

    const handleComment = () => {

    }

    return (
        <BlurView
            style={tw`py-2 px-3 flex flex-row items-center`}
            intensity={20}
            tint='light'
        >
            <Image
                // source={avatar ? {uri: avatar} : require('../../assets/images/defaultAvatar.png')} 
                source={require('../../images/defaultAvatar.png')}
                style={tw`w-12 h-12 rounded-full mr-2 border border-gray-200`}
            />
            <TextInput
                style={tw`bg-white flex-1 py-3 rounded-xl px-3 border border-gray-200`}
                placeholder='Write your comment...'
                placeholderTextColor='#ccc'
                value='heheheh'
                onChangeText={val => setComment(val)}
                onEndEditing={handleComment}
            />
        </BlurView>
    )
}

export default WriteComment