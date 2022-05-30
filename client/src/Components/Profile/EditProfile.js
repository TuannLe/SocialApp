import { View, Text, Modal, TouchableOpacity, SafeAreaView, Image, TextInput } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { useDispatch, useSelector } from 'react-redux';

const EditProfile = ({ visible, handleVisible }) => {
    const currentUser = useSelector((state) => state.auth.currentUser)

    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent={false}
        >
            <SafeAreaView>
                <View>
                    <View style={tw`relative flex flex-row  border-b border-gray-200 p-2`}>
                        <TouchableOpacity
                            style={tw`absolute top-0 left-0`}
                            onPress={handleVisible}
                        >
                            <Text style={tw`py-2.5 pl-4 pr-8 text-base text-gray-400`}>Cancel</Text>
                        </TouchableOpacity>
                        <Text style={tw`flex-1 text-lg font-bold text-center`}>Edit Profile</Text>
                        <TouchableOpacity
                            style={tw`absolute top-0 right-0`}
                        >
                            <Text style={tw`py-2.5 pl-8 pr-4 font-medium text-base text-pink-500`}>Done</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={tw`flex items-center py-5`}>
                        <Image
                            source={require('../../images/defaultAvatar.png')}
                            style={tw`w-20 h-20 rounded-full`}
                        />
                        <TouchableOpacity
                            style={tw`mt-2`}
                        >
                            <Text style={tw`text-pink-500 font-medium text-base`}>Change your avatar</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={tw`border-t border-b border-[#CCC]`}>
                        <View style={tw` px-5 flex flex-row items-center`}>
                            <Text style={tw`font-medium flex-1`}>
                                First name
                            </Text>
                            <TextInput
                                placeholder={currentUser.firstName}
                                style={tw`border-b border-[#CCC] flex-3 py-4`}
                            />
                        </View>
                        <View style={tw` px-5 flex flex-row items-center`}>
                            <Text style={tw`font-medium flex-1`}>
                                Last name
                            </Text>
                            <TextInput
                                placeholder={currentUser.lastName}
                                style={tw`border-b border-[#CCC] flex-3 py-4`}
                            />
                        </View>
                        <View style={tw` px-5 flex flex-row items-center`}>
                            <Text style={tw`font-medium flex-1`}>
                                Email
                            </Text>
                            <View style={tw`border-b border-[#CCC] flex-3`}>
                                <Text
                                    style={tw`py-4 text-black`}
                                >
                                    {currentUser.email}
                                </Text>
                            </View>
                        </View>
                        <View style={tw` px-5 flex flex-row items-center`}>
                            <Text style={tw`font-semibold flex-1`}>
                                Bio
                            </Text>
                            <TextInput
                                placeholder='Bio'
                                style={tw`flex-3 py-4`}
                            />
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </Modal>
    )
}

export default EditProfile