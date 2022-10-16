import React from 'react';
import { StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    image:{
        width:'100%',
        aspectRatio:3/2,
        resizeMode:'cover',
        borderRadius:10,

    },
    container:{
        margin:20,
    },
    bedrooms:{
        marginVertical:10,
        color:'#5b5b5b'
    },
    description:{
        fontSize:18,
        lineHeight:26,
    },
    pricesBold:{
        fontSize:18,
        fontWeight:'bold',
        marginVertical:10,
    },
    oldPrices:{
        color:'#5b5b5b',
        // textDecorationLine:'line-through'
    },
    totalPrice:{
        color:'#5b5b5b',
        textDecorationLine:'underline'
    },
})

export default styles;