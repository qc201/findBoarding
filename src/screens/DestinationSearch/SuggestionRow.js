import React, { useCallback, useState } from 'react';
import { View,Text, FlatList, TextInput, Pressable} from 'react-native';
import styles from './styles';
import search from '../../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from "@react-navigation/native";


const SuggestionRow = ({item}) => (
            <View style={styles.row}> 
                <View style={styles.iconContainer}>
                    <Entypo name={'location-pin'} size={35} />
                </View>
                <Text style={styles.locationText}>{item.description}</Text>
            </View>
            )
    


export default SuggestionRow;