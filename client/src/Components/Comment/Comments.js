import { useNavigation } from '@react-navigation/native'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import tw from 'twrnc'


const Comments = () => {

    const handleLongPress = () => {

    }

    const handleGetProfile = () => {

    }

    return (
        <TouchableOpacity style={tw`w-full flex flex-row my-1 items-center`}
            onLongPress={handleLongPress}
        >
            <TouchableOpacity
                onPress={handleGetProfile}
            >
                <Image
                    // source={item.image ? {uri: item.image} : require('../../assets/images/defaultAvatar.png')}
                    source={require('../../images/defaultAvatar.png')}
                    style={tw`w-13 h-13 rounded-full mr-2 bg-gray-200 border-2 border-gray-200`}
                />
            </TouchableOpacity>
            <View style={tw`w-full`}>
                <View style={tw`flex flex-row items-center`}>
                    <Text style={tw`font-bold my-1`}>Tuanle</Text>
                    <Text style={tw`text-gray-500 text-xs`}> </Text>
                    {/* <Text style={tw`text-gray-500 text-xs`}> - {date.toLocaleDateString()}</Text> */}
                </View>
                <Text style={tw`ml-1`}>Comment</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Comments