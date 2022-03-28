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
    }
]

const Posts = () => {
    return (
        <View>
            <FlatGrid
                data={data}
                itemDimension={140}
                renderItem={(item, i) => <PostItem item={item} />}
                style={tw`pt-2`}
                keyExtractor={item => item.postId}
                spacing={5}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default Posts