import React, { useRef, useEffect } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, Image, Animated } from 'react-native';
import tw from 'twrnc';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux'
import Post from '../Components/Home/Post'
import * as actions from '../redux/actions'
import { postsState$ } from '../redux/selectors'

const Home = () => {
    const CONTAINER_HEIGHT = 45;
    const scrollY = useRef(new Animated.Value(0)).current;
    const offsetAnim = useRef(new Animated.Value(0)).current;
    const navigation = useNavigation();

    const dispatch = useDispatch()
    const data = useSelector(postsState$)
    useEffect(() => {
        console.log("reRender*******************************")
        dispatch(actions.getPosts.getPostsRequest())
    }, [dispatch])
    console.log(data)

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
                    data={data}
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
