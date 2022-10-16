import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchResultPage from '../screens/SearchResult';
const Tab = createMaterialTopTabNavigator();
const SearchResultsTabNavigator = ()=> {
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor:'#f15454',
            indicatorStyle:{
                backgroundColor:'#f15454',
            }
        }}>
            <Tab.Screen 
                name={'list'}
                component={SearchResultPage}
            />
            <Tab.Screen 
                name={'map'}
                component={SearchResultPage}
            />
            
        </Tab.Navigator>
    )
}

export default SearchResultsTabNavigator;