import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, OnBoarding, ProductsScreen } from './screens';
import "react-native-url-polyfill/auto"
import { Provider } from 'react-redux';
import store from './context/store';



const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
      <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen name="OnBoarding" component={OnBoarding}/>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ProductsScreen" component={ProductsScreen} />
      </Stack.Navigator>

      </Provider>
    </NavigationContainer>
  );
};

export default App



