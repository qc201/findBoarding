import React from 'react';
import { View, Text, Pressable } from 'react-native';

export default ProfileScreen = () => {
    return (
        <View style={{hight:'100%',
            display:'flex', 
            justifyContent:'center', 
            alignItems:'center', 
            padding:20}}>
            <Pressable 
            style={{
                width:'100%', 
                height:40, 
                backgroundColor:'#c3c3c3'}}
                onPress={() => console.alter("log out pressed")}
            >
        <Text>Log out</Text>
        </Pressable>
        </View>
    )
}