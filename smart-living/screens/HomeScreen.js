import { View, Text,Image, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    BellIcon,Cog8ToothIcon} from 'react-native-heroicons/outline'
import NoticeBoard from '../components/NoticeBoard';
import Features from '../components/Features';
const HomeScreen = () => {
   const navigation = useNavigation();
   useLayoutEffect(()=>{
    navigation.setOptions({
        headerShown:false,
   })
},[]);
const currentTime = new Date().getHours();
    return (
        <SafeAreaView className=" bg-[#80899F] flex-0">
            <View className='m-8 mx-4'>
              <View className='flex-row'>
                {/* header */}
                <Image
                source={{uri:'https://pbs.twimg.com/media/FE6-Y6JUUAgpjpW?format=jpg&name=4096x4096'}}
                className="w-12 h-15 rounded-full z-10"
                />
                <View className="p-2 -ml-4 pl-6 rounded-r-full bg-[#213555]">
                  <Text className="text-lg font-semibold text-white">Hi,John</Text>
                </View>
                <View className="flex-1"></View>
                <Cog8ToothIcon size={35} color='#213555'/>
                <BellIcon size={35} color='#213555'/>
              </View>
              <StatusBar style='auto'/>
            </View>
            <ScrollView className="bg-gray-100 "
             
              contentContainerStyle={{
                  paddingBottom:100
              }}
            >
              {/* NoticeBoard */}
              <NoticeBoard/>
              {/* Features */}
              <Features/>
            </ScrollView>
            </SafeAreaView>
  )
}

export default HomeScreen


{/* <View className='flex-row items-center'>
              <View className='flex-1 '>
                {currentTime < 12?<Text  className=' text-3xl text-[#213555] font-bold' >Good Morning</Text>:currentTime <12 && currentTime <18?<Text className='text-3xl text-[#213555]' >Good Evening</Text>:<Text className='text-3xl text-[#213555]'> Good Night
                </Text>}
              </View>
              <BellIcon size={35} color='#213555'/>
              <Cog8ToothIcon size={35} color='#213555'/>
              </View> */}