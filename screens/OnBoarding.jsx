import { View, Text } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper';

const OnBoarding = () => {
  return (
    <View className='flex-1 items-center justify-center bg-white' >
      <Swiper>
        <ScreenOne/>
        <ScreenTwo/>
        <ScreenThree/>

      </Swiper>
    </View>
  )
}
export const ScreenOne = () => {
    return (
        <View className='flex-1 items-center justify-center bg-white'>
            <Text>Screen One</Text>
        </View>
    )
};
export const ScreenTwo = () => {
    return (
        <View className='flex-1 items-center justify-center bg-white'>
            <Text>Screen Two</Text>
        </View>
    )
};
export const ScreenThree = () => {
    return (
        <View className='flex-1 items-center justify-center bg-white'>
            <Text>Screen Three</Text>
        </View>
    )
};

export default OnBoarding