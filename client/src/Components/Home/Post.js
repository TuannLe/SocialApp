import React, { useRef, useState } from 'react'
import { View, Text, Image, Dimensions, TouchableOpacity, FlatList, Animated } from 'react-native'
import tw from 'twrnc';
import { AntDesign, Feather, MaterialCommunityIcons, Ionicons, FontAwesome } from '@expo/vector-icons';
import { TapGestureHandler } from 'react-native-gesture-handler';
import Paginator from './Paginator';
import ImageItem from './ImageItem'
import { BlurView } from 'expo-blur';

const Post = (props) => {
    const { width: SCREEN_WIDTH } = Dimensions.get('window');
    const FRAMESIZE_W = SCREEN_WIDTH - 24;
    const FRAMESIZE_H = SCREEN_WIDTH / 2 * 3;
    const { post } = props;
    const slidesRef = useRef(null);
    const scrollX = useRef(new Animated.Value(0)).current;
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePressHeart = () => {

    }

    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    return (
        <View style={[tw`bg-white mt-3 overflow-hidden border-b border-gray-200`, { width: FRAMESIZE_W, height: FRAMESIZE_H }]}>
            <View style={tw`flex flex-row justify-between items-center`}>
                <View style={tw`flex flex-row items-center`}>
                    <Image
                        style={tw`w-12 h-12 rounded-full`}
                        source={require('../../images/avatar.jpeg')}
                    />
                    <View>
                        <Text style={tw`text-base ml-3`}>TuanLe</Text>
                        <Text style={tw`text-sm ml-3 text-gray-400`}>2 giờ trước</Text>
                    </View>
                </View>
                <MaterialCommunityIcons name="dots-horizontal" size={26} color="black" />
            </View>
            <View style={tw`my-2`}>
                <Text style={tw`font-normal`}>Một ngày nào đó, bạn sẽ tha thứ cho tất cả những người đã làm tổn thương mình.</Text>
            </View>
            <View style={tw`relative`}>
                <TapGestureHandler
                    style={tw` w-full h-full mb-5`}
                    numberOfTaps={2}
                    onActivated={handlePressHeart}
                >
                    <FlatList
                        data={post.item.images}
                        renderItem={({ item }) => {
                            return <ImageItem image={item} />
                        }}
                        keyExtractor={(item, i) => i}
                        pagingEnabled
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        bounces={false}
                        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                            useNativeDriver: false,
                        })}
                        scrollEventThrottle={32}
                        onViewableItemsChanged={viewableItemsChanged}
                        viewabilityConfig={viewConfig}
                        ref={slidesRef}
                    >
                    </FlatList>
                </TapGestureHandler>
                <View style={tw`absolute right-2 top-50`}>
                    <BlurView
                        intensity={50}
                        tint="light"
                        style={tw`rounded-xl px-3 py-2`}
                    >
                        <View style={tw`flex flex-col`}>
                            <TouchableOpacity
                                style={tw`flex flex-col items-center justify-center`}
                            >
                                <Ionicons name="ios-heart" size={22} style={tw`text-white`} />
                                <Text style={tw`text-white`}>234</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={tw`pt-3 pb-5`}
                            >
                                <Ionicons name="chatbubble-ellipses" size={22} style={tw`text-white`} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <FontAwesome name="send" size={22} style={tw`text-white`} />
                            </TouchableOpacity>
                        </View>
                    </BlurView>
                </View>
            </View>
            <View style={tw`absolute bottom-1 inset-x-2`}>
                {(post.item.images.length > 1) ? (
                    <Paginator data={post.item.images} scrollX={scrollX} />
                ) : (
                    <></>
                )}
            </View>

        </View>
    )
}

export default Post