import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../../Screens/SplashScreen/SplashScreen';
import TabNavigation from '../TabNavigation/TabNavigation';
import Rockets from '../../Screens/Rockets/Rockets';
import RocketDetails from '../../Screens/Rockets/components/RocketDetails';
import Launches from '../../Screens/Launches/Launches';
import LaunchPage from '../../Screens/Launches/Components/LaunchPage';
import LaunchDetails from '../../Screens/Launches/Components/LaunchDetails';
import Home from '../../Screens/Home/Home';
import DragonPage from '../../Screens/Home/Components/DragonPage';
import CompanyProfile from '../../Screens/Home/Components/CompanyProfile';
import RoadstarPage from '../../Screens/Home/Components/RoadstarPage';
import CrewPage from '../../Screens/Home/Components/CrewPage';
import CrewDetails from '../../Screens/Home/Components/CrewDetails';
import LaunchPadPage from '../../Screens/Home/Components/LaunchPadPage';
import LaunchPadDetails from '../../Screens/Home/Components/LaunchPadDetails';
import Rocketnames from '../../Screens/Home/Components/Rocketnames';

const Stack = createNativeStackNavigator();
const RocketStackNav = createNativeStackNavigator();
const LaunchStackNav = createNativeStackNavigator();
const HomeStackNav = createNativeStackNavigator();

export const StackNav = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name="TabNavigation" component={TabNavigation} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export const RocketStack = () => {
    return (
        <RocketStackNav.Navigator>
            <RocketStackNav.Screen name="Rocket" component={Rockets} options={{ headerShown: false }} />
            <RocketStackNav.Screen name="RocketDetails" component={RocketDetails} options={{ headerShown: false }} />
        </RocketStackNav.Navigator>
    );
}

export const LaunchStack = () => {
    return (
        <RocketStackNav.Navigator>
            <RocketStackNav.Screen name="Launch" component={Launches} options={{ headerShown: false }} />
            <RocketStackNav.Screen name="LaunchPage" component={LaunchPage} options={{ headerShown: false }} />
            <RocketStackNav.Screen name="LaunchDetails" component={LaunchDetails} options={{ headerShown: false }} />
        </RocketStackNav.Navigator>
    );
}

export const HomeStack = () => {
    return (
        <HomeStackNav.Navigator>
            <HomeStackNav.Screen name="Homes" component={Home} options={{ headerShown: false }} />
            <HomeStackNav.Screen name="DragonPage" component={DragonPage} options={{ headerShown: false }} />
            <HomeStackNav.Screen name="CompanyProfile" component={CompanyProfile} options={{ headerShown: false }} />
            <HomeStackNav.Screen name="RoadstarPage" component={RoadstarPage} options={{ headerShown: false }} />
            <HomeStackNav.Screen name="CrewPage" component={CrewPage} options={{ headerShown: false }} />
            <HomeStackNav.Screen name="CrewDetails" component={CrewDetails} options={{ headerShown: false }} />
            <HomeStackNav.Screen name="LaunchPadPage" component={LaunchPadPage} options={{ headerShown: false }} />
            <HomeStackNav.Screen name="LaunchPadDetails" component={LaunchPadDetails} options={{ headerShown: false }} />
            <HomeStackNav.Screen name="Rocketnames" component={Rocketnames} options={{ headerShown: false }} />
        </HomeStackNav.Navigator>
    );
}






