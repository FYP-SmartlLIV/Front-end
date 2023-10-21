import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Module from './Module'
const Features = () => {
  return (
    <View className='mx-4 flex-1 mb-10'>
      <Text className="text-2xl font-bold tracking-widelist mb-4">FEATURES</Text>
      <View className="flex-row items-center justify-between my-4">
        <Module title='Maintanance' color='#84C15E' circle_icon='#A7D38C'icon={require('../assets/icons/maintenance.png')}/>
        <Module title='Visitor Access' color='#FF725E' circle_icon='#FF9A6C'/>
        <Module title='Event Management' color='#7DA7EF' circle_icon='#C2D9FF'/>
      </View>
      <View className='flex-row justify-center itens-center'>
      <Module title='Emergency Aid' color='#FCD307' circle_icon='#FFF8C9'/>
      <Module title='Fire Alarm' color='#FF2020' circle_icon='#FF7676'/>
      </View>
    </View>
  )
}

export default Features