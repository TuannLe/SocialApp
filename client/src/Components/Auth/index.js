import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React, { useRef } from 'react'
import tw from 'twrnc';
import { BlurView } from 'expo-blur'
import RBSheet from 'react-native-raw-bottom-sheet'

const Auth = () => {
    const refRBSheet = useRef()
    return (
        <ImageBackground
            source={require('../../images/login-bg.jpg')}
            style={tw`w-full h-full`}
        >
            <SafeAreaView style={tw`py-2 flex flex-col  h-full`}>
                <View>
                    <View style={tw`w-full px-10 my-15`}>
                        <Text style={tw`text-5xl font-bold text-white`}>
                            Hello!
                        </Text>
                        <Text style={tw`text-lg tracking-wide text-white`}>
                            Sign in to your account.
                        </Text>
                    </View>
                </View>
                <View style={tw`w-full h-full px-8`}>
                    <BlurView
                        intensity={80}
                        style={tw`w-full rounded-lg overflow-hidden p-3`}
                    >
                        <TextInput
                            style={tw`w-full p-2 rounded-lg bg-[#F3F0F6] items-center`}
                            placeholder='Email...'
                        />

                        <TextInput
                            style={tw`w-full p-2 rounded-lg bg-[#F3F0F6] items-center my-3`}
                            placeholder='Password...'
                            secureTextEntry={true}
                        />
                        <TouchableOpacity>
                            <Text style={tw`text-pink-500`}>Forgot your password?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={tw`w-full bg-pink-500 p-3 items-center rounded-lg mt-3`}
                        >
                            <Text style={tw`text-white font-bold`}>
                                Login
                            </Text>
                        </TouchableOpacity>
                    </BlurView>

                    <Text style={tw`text-center text-black`}>
                        or
                    </Text>
                    <BlurView
                        intensity={80}
                        style={tw`w-full rounded-lg overflow-hidden px-3 py-3 mt-1`}
                    >
                        <TouchableOpacity style={tw`flex flex-row items-center w-full px-5`}>
                            <Image
                                style={tw`w-6 h-6`}
                                source={require('../../images/google_icon.png')}
                            />
                            <Text style={tw`flex-1 text-center font-bold`}>Continue with Google</Text>
                        </TouchableOpacity>
                    </BlurView>
                    <View style={tw`flex flex-row items-center mt-3 ml-3`}>
                        <Text style={tw`text-black`}>Don't have any account?</Text>
                        <TouchableOpacity
                            style={tw` px-2`}
                            onPress={() => refRBSheet.current.open()}
                        >
                            <Text style={tw`text-pink-500 font-bold`}> Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <RBSheet
                    ref={refRBSheet}
                    height={420}
                    closeOnDragDown={true}
                    closeOnPressMask={true}
                    closeOnPressBack={true}
                    openDuration={250}
                    customStyles={{
                        container: tw`flex rounded-t-xl px-5`
                    }}
                >
                    <Text style={tw`text-2xl text-pink-500 font-bold mb-5`}>Create Account</Text>
                    <View style={tw`flex flex-row`}>
                        <TextInput
                            style={tw`flex-1 p-2 rounded-lg bg-[#F3F0F6] `}
                            placeholder='First name...'
                        />
                        <TextInput
                            style={tw`flex-1 p-2 rounded-lg bg-[#F3F0F6] ml-2`}
                            placeholder='Last name...'
                        />
                    </View >
                    <TextInput
                        style={tw`w-full p-2 rounded-lg bg-[#F3F0F6] items-center my-2`}
                        placeholder='Phone number...'
                    />
                    <TextInput
                        style={tw`w-full p-2 rounded-lg bg-[#F3F0F6] items-center`}
                        placeholder='Email...'
                    />
                    <TextInput
                        style={tw`w-full p-2 rounded-lg bg-[#F3F0F6] items-center my-2`}
                        placeholder='Password...'
                        secureTextEntry={true}
                    />
                    <TextInput
                        style={tw`w-full p-2 rounded-lg bg-[#F3F0F6] items-center`}
                        placeholder='Confirm password...'
                        secureTextEntry={true}
                    />
                    <TouchableOpacity
                        style={tw`w-full bg-pink-500 p-3 items-center rounded-lg mt-5`}
                    >
                        <Text style={tw`text-white font-bold`}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </RBSheet>
            </SafeAreaView>
        </ImageBackground>
    )
}

export default Auth