import { View, Text,TouchableOpacity,Image} from 'react-native'
import React from 'react'

const Module = ({title,color,circle_icon,icon}) => {
  return (
   
    <TouchableOpacity>
        <View className={`rounded-2xl  w-[120] h-[140] relative space-x-2 mx-4 ml-[-1]`} style={{ backgroundColor: color }}>
        <View className={`absolute rounded-full w-20 h-20 right-1 `}
        style={{ backgroundColor: circle_icon }}
        >
        <Image source={icon}
       className="w-[60] h-[60] rounded-full absolute right-1 mt-2" />
        </View>
        <Text className="absolute bottom-1 right-4 text-white font-semibold text-md">{title}</Text>
        </View>
       
    </TouchableOpacity>
  )
}

export default Module