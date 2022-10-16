import React from 'react';
import { View,Text, ImageBackground, Pressable } from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();

    return (
        <View>
            <ImageBackground source={require('../../../assets/images/wallpaper.jpg')} style={styles.image}>
                {/* search bar */}
                <Pressable 
                    style={styles.searchbutton}
                    onPress={() => navigation.navigate("destination search")}
                >
                    <Fontisto name='search' size={25} color={'#f15454'} />
                    <Text style={styles.searchbuttonText}>Where are you going?</Text>

                </Pressable>
                {/* title */}
                <Text style={styles.title}>
                    Find boarding
                </Text>
                {/* button */}
                <Pressable 
                    style={styles.button}
                    onPress={() => navigation.navigate("destination search")}
                >
                    <Text style={styles.buttonText}>Explore nearby boardings</Text>

                </Pressable>

            </ImageBackground>
        </View>
    )
}

export default HomeScreen;