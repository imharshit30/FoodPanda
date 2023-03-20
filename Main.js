import {View, Text} from 'react-native';
import React from 'react';
import HomePage from './screens/HomePage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './screens/MainScreen';
import LoginScreen from './screens/LoginScreen';
import MealsOverview from './screens/MealsOverview';
import AddToCart from './screens/AddToCart';

const Main = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MealsOverview"
          component={MealsOverview}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddToCart"
          component={AddToCart}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
