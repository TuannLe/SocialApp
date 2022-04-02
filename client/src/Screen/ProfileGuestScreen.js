import React, { useRef } from 'react'
import { StyleSheet, View, Text, SafeAreaView, PixelRatio, Image, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import tw from 'twrnc';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons, Feather, Ionicons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import RBSheet from 'react-native-raw-bottom-sheet'
import { useNavigation } from '@react-navigation/native';
import { FlatGrid } from 'react-native-super-grid';
import PostItem from '../Components/Profile/PostItem'

const { width } = Dimensions.get('window')

const data = [
    {
        postId: '1',
        image:
            'https://i.vietgiaitri.com/2021/2/9/cara-phuong-toi-va-noway-dang-tim-hieu-nhau-thay-cung-hoa-hop-975-5573060.jpg',
        title: ''
    },
    {
        postId: '2',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Kim_Ji-soo_at_Incheon_Airport%2C_heading_to_Amsterdam_on_May_16th%2C_2019_21.png/1200px-Kim_Ji-soo_at_Incheon_Airport%2C_heading_to_Amsterdam_on_May_16th%2C_2019_21.png',
        title: ''
    },
    {
        postId: '3',
        image: 'https://2sao.vietnamnetjsc.vn/images/2022/02/20/21/00/IU-2.jpg',
        title: ''
    }
    ,
    {
        postId: '4',
        image: 'https://afamilycdn.com/150157425591193600/2021/6/8/photo-1-16229736437071881672186-16231223886751522999177.jpg',
        title: ''
    }
    ,
    {
        postId: '5',
        image: 'https://nguoinoitieng.tv/images/nnt/96/2/bbnh.jpg',
        title: ''
    }
    ,
    {
        postId: '6',
        image: 'https://thuthuatnhanh.com/wp-content/uploads/2021/06/Hinh-anh-Rose-Black-Pink-1.jpg',
        title: ''
    },
    {
        postId: '7',
        image:
            'https://i.vietgiaitri.com/2021/2/9/cara-phuong-toi-va-noway-dang-tim-hieu-nhau-thay-cung-hoa-hop-975-5573060.jpg',
        title: ''
    },
    {
        postId: '8',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Kim_Ji-soo_at_Incheon_Airport%2C_heading_to_Amsterdam_on_May_16th%2C_2019_21.png/1200px-Kim_Ji-soo_at_Incheon_Airport%2C_heading_to_Amsterdam_on_May_16th%2C_2019_21.png',
        title: ''
    },
    {
        postId: '9',
        image: 'https://2sao.vietnamnetjsc.vn/images/2022/02/20/21/00/IU-2.jpg',
        title: ''
    }
    ,
    {
        postId: '10',
        image: 'https://afamilycdn.com/150157425591193600/2021/6/8/photo-1-16229736437071881672186-16231223886751522999177.jpg',
        title: ''
    }
    ,
    {
        postId: '11',
        image: 'https://nguoinoitieng.tv/images/nnt/96/2/bbnh.jpg',
        title: ''
    }
    ,
    {
        postId: '12',
        image: 'https://thuthuatnhanh.com/wp-content/uploads/2021/06/Hinh-anh-Rose-Black-Pink-1.jpg',
        title: ''
    }
]

const ProfileGuestScreen = () => {
    PixelRatio.getPixelSizeForLayoutSize(width);
    const refRBSheet = useRef()
    const navigation = useNavigation()

    return (
        <SafeAreaView style={tw`w-full h-full bg-white`}>
            <View style={tw`flex w-full h-full`}>
                <View>
                    <Image
                        source={require('../images/bgProfile3.jpg')}
                        style={styles.image}
                        resizeMode='cover'
                    />
                    <TouchableOpacity
                        style={tw`absolute top-0 right-0 z-1 p-3`}
                        onPress={() => refRBSheet.current.open()}
                    >
                        <Feather name="menu" style={tw`text-[28px] text-white`} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={tw`absolute top-0 left-0 z-1 p-3`}
                        onPress={() => navigation.goBack()}
                    >
                        <FontAwesome name="angle-left" style={tw`text-[30px] text-white`} />
                    </TouchableOpacity>

                    <LinearGradient
                        colors={['rgba(0, 0, 0, 0.65)', 'rgba(0, 0, 0, 0.0003)']}
                        style={tw`w-full h-25 absolute top-0 inset-x-0`}
                    />
                </View>
                <View style={tw`relative flex-1 bg-white -mt-10 rounded-t-[40px]`}>
                    <View style={tw`absolute -top-14 left-10 z-1 p-1 shadow-lg bg-white rounded-full`}>
                        <Image
                            source={require('../images/avatarProfile.jpg')}
                            style={tw`w-25 h-25 rounded-full`}
                        />
                    </View>
                    <View style={tw`flex flex-row p-3`}>
                        <Text style={tw`w-[${width / 5 * 2}px]`}></Text>
                        <View style={tw`flex flex-1`}>
                            <Text style={tw`text-base font-bold`}>Tuan Le</Text>
                            <Text style={tw`text-sm text-gray-400`}>tuanle@gmail.com</Text>
                        </View>
                    </View>
                    <View style={tw`px-3 flex-1`}>
                        <View style={tw`flex flex-row`}>
                            <View style={tw`flex-1 items-center`}>
                                <Text style={tw`font-medium text-sm`}>12</Text>
                                <Text style={tw`text-gray-400 text-xs`}>Posts</Text>
                            </View>
                            <View style={tw`flex-1 items-center`}>
                                <Text style={tw`font-medium text-sm`}>120</Text>
                                <Text style={tw`text-gray-400 text-xs`}>Followers</Text>
                            </View>
                            <View style={tw`flex-1 items-center`}>
                                <Text style={tw`font-medium text-sm`}>50</Text>
                                <Text style={tw`text-gray-400 text-xs`}>Following</Text>
                            </View>
                        </View>
                        <View style={tw`flex flex-row my-2 `}>
                            <TouchableOpacity
                                style={tw`flex-1 py-2 rounded-lg bg-pink-500 mr-2`}
                            >
                                <Text style={tw`text-white text-center font-medium`}>Follow</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={tw`flex-1 py-2 rounded-lg bg-white border border-gray-300`}
                            >
                                <Text style={tw`text-black text-center font-medium`}>Message</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={tw`flex-1`}>
                            {
                                data.length
                                    ? (
                                        <FlatGrid
                                            data={data}
                                            itemDimension={100}
                                            renderItem={(item) => <PostItem item={item} />}
                                            style={tw`bg-white`}
                                            keyExtractor={item => item.postId}
                                            spacing={5}
                                            showsHorizontalScrollIndicator={false}
                                            showsVerticalScrollIndicator={false}
                                        />
                                    )
                                    : (
                                        <View style={tw`flex justify-center h-full`}>
                                            <Text style={tw`text-base font-medium text-center`}>Share your first post</Text>
                                            <Text style={tw`text-gray-400 text-center`}>Upload a image with captions, sounds and more. Your posts will appear on your profile</Text>
                                        </View>
                                    )
                            }
                        </View>
                    </View>
                </View>
            </View>
            <RBSheet
                ref={refRBSheet}
                height={220}
                closeOnDragDown={true}
                closeOnPressMask={true}
                closeOnPressBack={true}
                openDuration={300}
                customStyles={{
                    container: tw`flex rounded-t-xl px-3`
                }}
            >
                <View style={tw`flex`}>
                    <TouchableOpacity
                        style={tw`w-full p-3 border-b border-gray-200`}
                    >
                        <Text style={tw`text-base text-center text-red-500`}>Block</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={tw`w-full p-3 border-b border-gray-200`}
                    >
                        <Text style={tw`text-base text-center text-red-500`}>Report</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={tw`w-full p-3 border-b border-gray-200`}
                    >
                        <Text style={tw`text-base text-center`}>Share this profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={tw`w-full p-3 border-b border-gray-200`}
                        onPress={() => refRBSheet.current.close()}
                    >
                        <Text style={tw`text-base text-center`}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </RBSheet>
        </SafeAreaView>
    )
}

export default ProfileGuestScreen

const styles = StyleSheet.create({
    image: {
        width: width,
        height: width / 2
    },
})