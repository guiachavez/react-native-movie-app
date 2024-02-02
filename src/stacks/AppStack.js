import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ResultScreen from '../screens/ResultScreen';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ 
            title: 'Movies App',
            headerStyle: {
                backgroundColor: '#2c3e50'
            },
            headerTitleStyle: {
                color: '#fff'
            }
           }}
        />
        <Stack.Screen 
          name="Result"
          component={ResultScreen}
          options={{ 
            title: 'Title',
            headerStyle: {
                backgroundColor: '#2c3e50'
            },
            headerTitleStyle: {
                color: '#fff'
            },
            headerBackTitle: "Back to List"
           }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
