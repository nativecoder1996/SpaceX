import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TabBar from './TabBar'
import Home from '../../Screens/Home/Home'
import Launches from '../../Screens/Launches/Launches'
import Rockets from '../../Screens/Rockets/Rockets'
import { RocketStack, LaunchStack, HomeStack } from '../Routes/StackNav'
const Tab = createBottomTabNavigator()

const TabNavigation = () => {
  return (
    <Tab.Navigator
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeStack} initialParams={{ icon: 'home' }} options={{ headerShown: false }} />
      <Tab.Screen name="Launches" component={LaunchStack} initialParams={{ icon: 'message-circle' }} options={{ headerShown: false }} />
      <Tab.Screen name="Rockets" component={RocketStack} initialParams={{ icon: 'plus-circle' }} options={{ headerShown: false }} />
    </Tab.Navigator>
  )
}


export default TabNavigation