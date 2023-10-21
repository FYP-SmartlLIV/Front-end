import { View, Text } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import React from 'react'

const NoticeBoard = () => {
  return (
    <View className="mb-4">
    <View className=" rounded-2xl items-center justify-center my-4 h-48  mx-4 shadow-2xl bg-[#8DB3FD]">
        <Text className='text-center font-semibold text-xl p-2 text-slate-600'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        </Text>
    </View>
    <Text className="text-center text-sm text-slate-500">Notice board updates you with recent Activities
    happening Around you</Text>
    </View>
    
  )
}

export default NoticeBoard