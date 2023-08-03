import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { ActivityIndicator } from 'react-native'
import { pressIcons } from '../colors'
import { SafeAreaView } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Dimensions } from 'react-native'
import { Image } from 'react-native'

const ProductsScreen = ({route}) => {
    const {_id} = route.params

    const feeds = useSelector ((state) => state.feeds)
    const [data, setData] = useState(null)
    const [isLoading, setisLoading] = useState(false)

    const screenHeight = Math.round(Dimensions.get("window").height)

    useEffect(() => {
        setisLoading(true)
        if(feeds){
            setData(feeds?.feeds.filter((item) => item._id === _id)[0])
            setInterval(() => {
                setisLoading(false)
            },2000)
        }

    }, [])



  return (
    <View className='flex-1 items-start justify-start bg-gray-200 space-y-4'>
      {isLoading ?( 
      <View className='w-full flex-1 h-full items-center justify-center'>
        <ActivityIndicator size={"large"} color={pressIcons} />
      </View>) 
      : 
      (<>
      <SafeAreaView className='w-full mt-7'>
        <View className='flex-row items-center justify-between px-4 py-2 w-full'>
            <TouchableOpacity>
            <Entypo name="chevron-left" size={32} color={pressIcons} />

            </TouchableOpacity>
            <TouchableOpacity>
            <FontAwesome name="shopping-basket" size={32} color={pressIcons} />
            </TouchableOpacity>
        </View>
        <View className='w-full flex items-center justify-center relative' style={{height: screenHeight /2}}>
            <Image
            source={{uri: data?.bgImage?.asset?.url}}
            resizeMode='cover'
            className='w-full h-full opacity-30'
            />
            <View className='w-full h-full absolute top-0 left-0 flex items-center justify-center'>
            <Image
            source={{uri: data?.mainImage?.asset?.url}}
            resizeMode='contain'
            className='w-80 h-80'
            />
            </View>
        </View>
        <View className='w-full flex-row items-center justify-evenly mb-4'>
        {data?.categories && data?.categories?.length > 0 && data?.categories.map(value => (
            <View key={value._id}>
                <Text>{value.title}</Text>
            </View>
        ))}

        </View>
      </SafeAreaView>
      </>)}
    </View>
  )
}

export default ProductsScreen