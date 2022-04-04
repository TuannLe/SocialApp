import React, { useRef } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, Image, Animated } from 'react-native';
import tw from 'twrnc';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Post from '../Components/Home/Post'

const Home = () => {
    const CONTAINER_HEIGHT = 45;
    const scrollY = useRef(new Animated.Value(0)).current;
    const offsetAnim = useRef(new Animated.Value(0)).current;
    const navigation = useNavigation();

    const clampedScroll = Animated.diffClamp(
        Animated.add(
            scrollY.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
                extrapolateLeft: 'clamp',
            }),
            offsetAnim,
        ),
        0,
        CONTAINER_HEIGHT
    )
    var _clampedScrollValue = 0;
    var _offsetValue = 0;
    var _scrollValue = 0;
    const data = [
        {
            postId: '1',
            images: [
                'https://i.vietgiaitri.com/2021/2/9/cara-phuong-toi-va-noway-dang-tim-hieu-nhau-thay-cung-hoa-hop-975-5573060.jpg',
                'https://afamilycdn.com/150157425591193600/2020/6/6/9680767027561324246145992919306575514435584o-15911578563721446424958-1591435339084164864584.jpg',
                'https://2sao.vietnamnetjsc.vn/images/2020/12/05/13/48/cara-phuong-1.jpg',

            ],
            title: ''
        },
        {
            postId: '2',
            images: [
                'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Kim_Ji-soo_at_Incheon_Airport%2C_heading_to_Amsterdam_on_May_16th%2C_2019_21.png/1200px-Kim_Ji-soo_at_Incheon_Airport%2C_heading_to_Amsterdam_on_May_16th%2C_2019_21.png'
            ],
            title: ''
        }
    ]

    var scrollEndTimer = null;
    const onMomentumScrollBegin = () => {
        clearTimeout(scrollEndTimer);
    };
    const onMomentumScrollEnd = () => {
        const toValue = _scrollValue > CONTAINER_HEIGHT && _clampedScrollValue > CONTAINER_HEIGHT / 2
            ? _offsetValue + CONTAINER_HEIGHT : _offsetValue - CONTAINER_HEIGHT;

        Animated.timing(offsetAnim, {
            toValue,
            duration: 300,
            useNativeDriver: true
        }).start();
    };
    const onScrollEndDrag = () => {
        scrollEndTimer = setTimeout(onMomentumScrollEnd, 250);
    }


    return (
        <SafeAreaView style={tw`flex flex-col h-full bg-white`}>
            <View style={tw`w-full h-full`}>
                <View style={tw`flex flex-row justify-between items-center p-3`}>
                    <View>
                        <Image
                            source={require('../images/logo.png')}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ChatBoxStack')}
                        style={tw`ml-5`}
                    >
                        <AntDesign name="message1" size={22} color="black" />
                    </TouchableOpacity>
                </View>
                <Animated.FlatList
                    data={data}
                    renderItem={(post) => {
                        return <Post post={post} />
                    }}
                    keyExtractor={post => post.postId}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                        { useNativeDriver: true }
                    )}
                    onMomentumScrollBegin={onMomentumScrollBegin}
                    onMomentumScrollEnd={onMomentumScrollEnd}
                    onScrollEndDrag={onScrollEndDrag}
                    scrollEventThrottle={1}
                />
            </View>
        </SafeAreaView>
    )
}

export default Home
