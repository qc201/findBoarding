import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    button:{
        borderWidth:1,
        borderRadius:15,
        width:30,
        height:30,
        borderColor:'lightgrey',
        justifyContent:'center',
        alignItems:'center',
    },
    row:{
        flexDirection:'row', 
        justifyContent:'space-between', 
        paddingVertical:20,
        borderBottomWidth:1,
        marginHorizontal:20,
        borderColor:'lightgrey',
        },
})

export default styles;