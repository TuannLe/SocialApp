import React from 'react'
import { View, Text, Image, Dimensions, TouchableOpacity, FlatList, Animated } from 'react-native'
import tw from 'twrnc';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign, Feather } from '@expo/vector-icons';

const Post = () => {
    const { width: SCREEN_WIDTH } = Dimensions.get('window');
    const FRAMESIZE_W = SCREEN_WIDTH;
    const FRAMESIZE_H = SCREEN_WIDTH / 2 * 3;
    const data = [
        {
            image: 'post1.jpeg',
            title: ''
        },
        {
            image: 'post2.jpeg',
            title: ''
        }
    ]

    const renderItem = ({ item }) => {
        <Image source={require(`../../images/${item}`)} />
    }

    return (
        <View style={tw`border-t border-gray-300 mb-3`}>
            <View style={tw`flex flex-row justify-between items-center p-2`}>
                <View style={tw`flex flex-row items-center`}>
                    <Image
                        style={tw`w-10 h-10 rounded-full`}
                        source={require('../../images/avatar.jpeg')}
                    />
                    <Text style={tw`text-base ml-3`}>TuanLe</Text>
                </View>
                <MaterialCommunityIcons name="dots-horizontal" size={26} color="black" />
            </View>
            <Animated.FlatList
                data={data.item.image}
                renderItem={renderItem}
                keyExtractor={item => item}
                pagingEnabled
                horizontal
                showsHorizontalScrollIndicator={false}
                bounces={false}
            >

            </Animated.FlatList>
            {/* <Image
                style={{ width: FRAMESIZE_W, height: FRAMESIZE_H }}
                source={require('../../images/avatar.jpeg')}
                resizeMode='cover'
            /> */}
            <View style={tw`p-2`}>
                <View style={tw`flex flex-row justify-between`}>
                    <View style={tw`flex flex-row`}>
                        <TouchableOpacity>
                            <AntDesign name="hearto" size={26} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Feather name="message-circle" style={tw`mx-3`} size={26} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Feather name="send" size={26} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Feather name="bookmark" size={26} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Text>Cara va nhung nguoi khac da thich</Text>
                    <Text style={tw`font-bold`}>
                        TuanLe
                        <Text style={tw`font-normal`}>Một ngày nào đó, bạn sẽ tha thứ cho tất cả những người đã làm tổn thương mình.</Text>
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default Post