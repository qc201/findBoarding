import React from 'react';
import { StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height: 800,
        resizeMode:'cover',
        justifyContent:'center',
    },
    title:{
        fontSize:65,
        fontWeight:'bold',
        color:'white',
        width:'70%',
        marginLeft:25,
    },
    button:{
        backgroundColor:'#fff',
        width:200,
        height:40,
        borderRadius:5,
        marginTop:15,
        marginLeft:25,
        justifyContent:'center',
        alignContent:'center'
    },
    buttonText:{
        fontSize:16,
        fontWeight:'bold',
        alignContent:'center',
        justifyContent:'center',
    },
    searchbutton:{
        flexDirection:'row',
        backgroundColor:'#fff',
        height:30,
        borderRadius:30,
        marginHorizontal:10,
        justifyContent:'center',
        alignContent:'center',
        zIndex:100,
        position:'absolute',
        top:50,
        width:Dimensions.get('screen').width - 20,
    },
    searchbuttonText:{
        fontSize:16,
        fontWeight:'bold',
    },
})

export default styles;