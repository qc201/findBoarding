import React from "react";

import { Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DestinationSearchScreen from "../screens/DestinationSearch";
import GuestScreen from "../screens/Guests";
import HomeTabNavigator from "./HomeTabNavigator";
import PostScreen from "../screens/PostScreen";
import SearchResultPage from "../screens/SearchResult";


const Stack = createNativeStackNavigator();

const Router = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                name={"Home"}
                component={HomeTabNavigator}
                options={{headerShown:false}}
                />
                <Stack.Screen
                name={"destination search"}
                component={DestinationSearchScreen}
                options={{title:"Search your destination"}}
                />
                <Stack.Screen
                name={"guest"}
                component={GuestScreen}
                options={{title:"How many pets"}}
                />
                <Stack.Screen
                name={"Post"}
                component={PostScreen}
                options={{title:"Accomodation"}}
                />
                <Stack.Screen
                name={"ResultList"}
                component={SearchResultPage}
                options={{headerShown:false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Router;