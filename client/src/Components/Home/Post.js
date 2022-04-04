import React, { useRef, useState } from 'react'
import { View, Text, Image, Dimensions, TouchableOpacity, FlatList, Animated } from 'react-native'
import tw from 'twrnc';
import { MaterialCommunityIcons, Ionicons, FontAwesome } from '@expo/vector-icons';
import { TapGestureHandler } from 'react-native-gesture-handler';
import { BlurView } from 'expo-blur';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import RBSheet from 'react-native-raw-bottom-sheet'
import Paginator from './Paginator';
import ImageItem from './ImageItem'
import CommentItem from './CommentItem';

const data = [
    {
        id: '1',
        image: 'https://indotech.vn/hinh-anh-cua-rose-black-pink/imager_2_12521_700.jpg',
        name: 'Rose',
        comment: 'hello hihih halo good morning hihi hyh hihd oshoi ohdoh hodho'
    },
    {
        id: '2',
        image: 'https://nguoinoitieng.tv/images/nnt/96/0/bbnh.jpg',
        name: 'Cara',
        comment: 'hello hihih halo good morning hihi hyh hihd oshoi ohdoh hodho'
    },
    {
        id: '3',
        image: 'https://1.bp.blogspot.com/-xoe-yLLhMsA/X3XmnozvxCI/AAAAAAAAPWE/Px6lNykKtiswyxWfgH_qgmqojUN__F4DwCLcBGAsYHQ/s1600/5a129327b91c191dcd7e2eed9c6b7d1d.jpg',
        name: 'IU',
        comment: 'hello hihih halo good morning hihi hyh hihd oshoi ohdoh hodho'
    }
]


const Post = (props) => {
    const refRBSheet = useRef()
    const navigation = useNavigation()

    const { width: SCREEN_WIDTH } = Dimensions.get('window');
    const FRAMESIZE_W = SCREEN_WIDTH;
    const FRAMESIZE_H = SCREEN_WIDTH / 2 * 3;
    const { post } = props;
    const slidesRef = useRef(null);
    const scrollX = useRef(new Animated.Value(0)).current;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [heart, setHeart] = useState(false);
    const [showMore, setShowMore] = useState(false)

    const handlePressHeart = () => {
        setHeart(!heart);
    }

    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    return (
        <View style={[tw`bg-white mt-3 overflow-hidden`, { width: FRAMESIZE_W, height: FRAMESIZE_H }]}>
            <View style={tw`flex flex-row justify-between items-center px-3`}>
                <View style={tw`flex flex-row items-center`}>
                    <Image
                        style={tw`w-12 h-12 rounded-full mr-2.5`}
                        source={require('../../images/avatar.jpeg')}
                    />
                    <View>
                        <Text style={tw`text-base font-medium`}>TuanLe</Text>
                        <Text style={tw`text-xs text-gray-400`}>2 giờ trước</Text>
                    </View>
                </View>
                <MaterialCommunityIcons name="dots-horizontal" style={tw`text-2xl text-black`} />
            </View>
            <View style={tw`my-2 px-3`}>
                <Text style={tw`font-normal `} numberOfLines={showMore ? 99 : 2} >
                    Một ngày nào đó, bạn sẽ tha thứ cho tất cả những người
                    đã làm tổn thương mình. Một ngày nào đó, bạn sẽ tha thứ cho tất cả những người đã làm
                    tổn thương mình. Một ngày nào đó, bạn sẽ tha thứ cho tất cả những người đã làm tổn thương mình.
                </Text>
                <TouchableOpacity
                    onPress={() => setShowMore(!showMore)}
                >
                    <Text style={tw`text-gray-400  mt-1`}>{showMore ? 'Read More' : 'Less'}</Text>
                </TouchableOpacity>
            </View>
            <View style={tw`relative`}>
                <TapGestureHandler
                    style={tw` w-full h-full`}
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
                        intensity={30}
                        tint="light"
                        style={tw`rounded-lg px-3 py-2 overflow-hidden`}
                    >
                        <View style={tw`flex flex-col`}>
                            <TouchableOpacity
                                onPress={() => setHeart(!heart)}
                                style={tw`flex flex-col items-center justify-center`}
                            >
                                <Ionicons name="ios-heart" size={22} style={heart ? tw`text-red-500` : tw`text-white`} />
                                <Text style={tw`text-white text-xs`}>140</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => refRBSheet.current.open()}
                                style={tw`pt-3 pb-5`}
                            >
                                <Ionicons name="chatbubble-ellipses" size={22} style={tw`text-white`} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <FontAwesome name="send" size={18} style={tw`text-white`} />
                            </TouchableOpacity>
                        </View>
                    </BlurView>
                </View>
                <LinearGradient
                    colors={['rgba(0, 0, 0, 0.0003)', 'rgba(0, 0, 0, 0.75)']}
                    style={tw`w-full h-55 absolute bottom-0 inset-x-0`}
                />
            </View>
            <View style={tw`absolute bottom-1 inset-x-2`}>
                {(post.item.images.length > 1) ? (
                    <Paginator data={post.item.images} scrollX={scrollX} />
                ) : (
                    <></>
                )}
            </View>

            <RBSheet
                ref={refRBSheet}
                height={420}
                closeOnDragDown={true}
                closeOnPressMask={true}
                closeOnPressBack={true}
                openDuration={350}
                customStyles={{
                    container: tw`flex rounded-t-xl px-5`
                }}
            >
                <View style={tw`flex flex-1`}>
                    <Text style={tw`text-center font-medium text-pink-500`}>200 comments</Text>
                    <FlatList
                        data={data}
                        renderItem={(item) => (<CommentItem item={item} />)}
                        keyExtractor={(item) => item.id}
                    />
                </View>
            </RBSheet>

        </View>
    )
}

export default Post