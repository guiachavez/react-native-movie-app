import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import MovieScreen from '../../../screens/MovieScreen';
import SearchScreen from '../../../screens/SearchScreen';
import TvScreen from '../../../screens/TvScreen';

const Tab = createMaterialTopTabNavigator();

const TopNavigation = () => {
  return (
    <Tab.Navigator
    tabb
      screenOptions={{
        tabBarLabelStyle: { textTransform: 'capitalize' },
        tabBarIndicatorStyle: { backgroundColor: '#02B7D7'}
      }}
    >
      <Tab.Screen name="Movies" component={MovieScreen}/>
      <Tab.Screen name="Search Results" component={SearchScreen}/>
      <Tab.Screen name="T V Shows" component={TvScreen}/>
    </Tab.Navigator>
  )
}

export default TopNavigation
