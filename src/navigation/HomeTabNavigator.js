import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from "../screens/Home";
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import ExploreNavigator from "./ExploreNavigator";
import PostScreen from "../screens/PostScreen";
import ProfileScreen from '../screens/Profile';

const Tab = createMaterialBottomTabNavigator();
const HomeTabNavigator = () => {
    return(
    <Tab.Navigator
        activeColor='#f15454'
        barStyle={{ backgroundColor: 'white' }}
    >
        <Tab.Screen 
            name="Explore" 
            component={ExploreNavigator}
            options={{
                tabBarIcon: ({color}) => (
                    <Fontisto name="search" size={25} color={color} />
                )
            }} 
        />

        <Tab.Screen 
            name="saved" 
            component={HomeScreen}
            options={{
                tabBarIcon: ({color}) => (
                    <FontAwesome name="heart-o" size={25} color={color} />
                )
            }} 
        />

        <Tab.Screen 
            name="boarding" 
            component={HomeScreen}
            options={{
                tabBarIcon: ({color}) => (
                    <FontAwesome5 name="paw" size={25} color={color} />
                )
            }} 
        />

        <Tab.Screen 
            name="message" 
            component={HomeScreen}
            options={{
                tabBarIcon: ({color}) => (
                    <Feather name="message-square" size={25} color={color} />
                )
            }} 
        />

        <Tab.Screen 
            name="profile" 
            component={ProfileScreen}
            options={{
                tabBarIcon: ({color}) => (
                    <EvilIcons name="user" size={30} color={color} />
                )
            }} 
        />

    </Tab.Navigator>
    )
 }

 export default HomeTabNavigator;





