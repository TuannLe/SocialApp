import { View, Text } from 'react-native'
import React from 'react'
import { FlatGrid } from 'react-native-super-grid';
import PostItem from './PostItem'
import tw from 'twrnc';

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
    }
]

const Posts = () => {
    return (
        <View style={tw`flex-1 bg-white`}>
            {
                data.length
                    ? (
                        <FlatGrid
                            data={data}
                            itemDimension={100}
                            renderItem={(item) => <PostItem item={item} />}
                            style={tw`pt-2 bg-white`}
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
    )
}

export default Posts