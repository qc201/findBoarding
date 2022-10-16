import React, { useCallback, useState } from 'react';
import { View,Text, FlatList, TextInput, Pressable} from 'react-native';
import styles from './styles';
import search from '../../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from "@react-navigation/native";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import SuggestionRow from './SuggestionRow';
import {GOOGLE_API_KEY} from "@env";

const DestinationSearchScreen = () => {
    
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            {/* input component */}
            <View>
            <GooglePlacesAutocomplete
                placeholder='Where are you going?'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    // console.log(data, details);
                    navigation.navigate("guest")// go to guest number page
                }}
                query={{
                    key: GOOGLE_API_KEY,
                    language: 'en',
                    type:'(cities)',
                }}
                styles={{
                    textInput: styles.textInput,

                }}
                suppressDefaultStyles
                renderRow={(item) => <SuggestionRow item={item} />}
            />
            </View>

            
        </View>
    )
}

export default DestinationSearchScreen;