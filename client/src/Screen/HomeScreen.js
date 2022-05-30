import React, { useRef, useEffect } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, Image, Animated } from 'react-native';
import tw from 'twrnc';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux'
import Post from '../Components/Home/Post'
import { postsState$ } from '../redux/selectors'

const Home = () => {
    const CONTAINER_HEIGHT = 45;
    const scrollY = useRef(new Animated.Value(0)).current;
    const offsetAnim = useRef(new Animated.Value(0)).current;
    const navigation = useNavigation();

    // const dispatch = useDispatch()
    // const data = useSelector(postsState$)
    // useEffect(() => {
    //     dispatch(actions.getPosts.getPostsRequest())
    // }, [dispatch])

    const data1 = [
        {
            '_id': '1',
            'attachment': [
                'https://2sao.vietnamnetjsc.vn/images/2020/12/05/13/48/cara-phuong-1.jpg',
                'https://nguoinoitieng.tv/images/nnt/96/2/bbnh.jpg',
            ],
            'author': 'Tuan Le',
            'content': 'Hello. Good morning'
        },
        {
            '_id': '2',
            'attachment': [
                'https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/277177190_10216432238718271_6088471343420752349_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=0debeb&_nc_ohc=z0USGEuyJdEAX882erY&_nc_ht=scontent.fdad2-1.fna&oh=00_AT_WJMcJpBN07F9S9bmtSg1jhtUquM129_LXUULN-_cUow&oe=6295E2D7',
                'https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/277172033_10216432239678295_745198389531161213_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0debeb&_nc_ohc=TtT8pGynVVUAX8r-Zpp&tn=MQOwtL0IfDfHSRKJ&_nc_ht=scontent.fdad1-3.fna&oh=00_AT_1XxaaBLv1Nb-kQwnLXaKGWwQz5M7_p3T_949WDy9tng&oe=629608A6',
            ],
            'author': 'Thuy',
            'content': 'Xin chao tat ca moi nguoi'
        }
    ]

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
                    data={data1}
                    renderItem={(post) => {
                        return <Post post={post} />
                    }}
                    keyExtractor={post => post._id}
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
