import { View, SafeAreaView, TextInput, FlatList, Text } from 'react-native';
import React, { useState, useEffect } from 'react'
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../redux/actions/user'
import SearchItem from '../Components/Search/SearchItem'

const SearchScreen = () => {
    const dispatch = useDispatch()
    const token = useSelector((state) => state.auth.currentUser.accessToken)
    const userId = useSelector((state) => state.auth.currentUser._id)

    const data = useSelector((state) => state.user.data)

    const [input, setInput] = useState('')

    useEffect(() => {
        if (input) {
            dispatch(actions.findUsersStart({ token, query: input }))
        }
    }, [input])

    return (
        <SafeAreaView style={tw`flex flex-1 bg-white`}>
            <View style={tw`flex flex-row items-center mx-3 mt-1.5 mb-3 bg-[#F3F0F6] rounded-lg`}>
                <Ionicons name="ios-search-outline" style={tw`text-xl text-gray-400 px-1.5`} />
                <TextInput
                    value={input}
                    style={tw`flex-1 py-2.5 `}
                    placeholder="Search..."
                    onChangeText={val => setInput(val)}
                />
            </View>
            {data.length ?
                (
                    <FlatList
                        data={data}
                        renderItem={(item) => (<SearchItem item={item} />)}
                        keyExtractor={(item) => item._id}
                    />
                ) :
                (
                    input ?
                        (
                            <View style={tw`px-3 py-5 border-b border-gray-200 `}>
                                <Text style={tw`font-light tracking-[.2]`}>
                                    No result were found for '{input}'
                                </Text>
                            </View>
                        ) :
                        (
                            <Text></Text>
                        )
                )
            }
        </SafeAreaView>
    )
}

export default SearchScreen