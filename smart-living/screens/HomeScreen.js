import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    BellIcon, BeakerIcon,Cog8ToothIcon} from 'react-native-heroicons/outline'
const HomeScreen = () => {
   const navigation = useNavigation();
   useLayoutEffect(()=>{
    navigation.setOptions({
        headerShown:false,
   })
},[]);
const currentTime = new Date().getHours();
    return (
        <SafeAreaView className="ml-[10px] mr-[10px] mt-4">
            <View>
            <View className='flex-row items-center'>
              <View className='flex-1 '>
                {currentTime < 12?<Text  className=' text-3xl text-[#213555] font-bold' >Good Morning</Text>:currentTime <12 && currentTime <18?<Text className='text-xl text-[#213555]' >Good Evening</Text>:<Text Text className='text-xl text-[#213555]'>
                    Good Night
                </Text>}
              </View>
              <BellIcon size={35} color='#213555'/>
              <Cog8ToothIcon size={35} color='#213555'/>
              </View>
              
              <StatusBar style='auto'/>
            </View>
        </SafeAreaView>
  )
}

export default HomeScreen