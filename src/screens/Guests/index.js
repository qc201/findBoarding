import React, { useState } from 'react';
import { View,Text, FlatList, TextInput, Pressable} from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';


const GuestScreen = () => {
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const navigation = useNavigation();
    return (
        <View style={{justifyContent:'space-between', height:'100%'}}>
            <View>
                {/* row 1 adults */}
                <View style={styles.row}>
                <View>
                    <Text style={{fontWeight:'bold'}}>Large Dogs</Text>
                    <Text style={{color:'#8d8d8d'}}>Above 20lb</Text>
                </View>
                {/* buttons with value */}
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Pressable
                        onPress={() => setAdults(Math.max(adults-1,0))}
                        style={styles.button}
                    >
                        <Text style={{fontSize:20, color:'#474747'}}>-</Text>
                    </Pressable>

                    <Text style={{marginHorizontal:20, fontSize:16}}>{adults}</Text>
                    <Pressable
                        onPress={() => setAdults(Math.max(adults+1, 0))}
                        style={styles.button}
                    >
                        <Text style={{fontSize:20, color:'#474747'}}>+</Text>
                    </Pressable>
                </View>
                </View>
                {/* row 2 */}
                <View style={styles.row}>
                <View>
                    <Text style={{fontWeight:'bold'}}>Small Dogs</Text>
                    <Text style={{color:'#8d8d8d'}}>Below 20lb</Text>
                </View>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Pressable
                        onPress={() => setChildren(Math.max(children-1,0))}
                        style={styles.button}
                    >
                        <Text style={{fontSize:20, color:'#474747'}}>-</Text>
                    </Pressable>

                    <Text style={{marginHorizontal:20, fontSize:16}}>{children}</Text>
                    <Pressable
                        onPress={() => setChildren(Math.max(children+1, 0))}
                        style={styles.button}
                    >
                        <Text style={{fontSize:20, color:'#474747'}}>+</Text>
                    </Pressable>
                </View>
                </View>
            </View>
            <View>
                <Pressable
                // onPress={() => navigation.navigate('HomeScreen', { screen: 'SearchResultse' })} 
                
                // onPress={() => navigation.navigate('ResultList' )}
                // onPress={() => navigation.navigate('SearchResultse' )}
                onPress={() => navigation.navigate('Home', {screen: 'Explore', params: {screen: 'SearchResults'}} )}
                style={{
                    marginBottom:20, 
                    backgroundColor:'#f15454',
                    alignItems:'center',
                    justifyContent:'center',
                    height:50,
                    marginHorizontal:20,
                    borderRadius:10}}>
                    <Text style={{fontSize:20, color:'white', fontWeight:'bold'}}>Search</Text>
                </Pressable>
            </View>
            
        </View>
    )
}

export default GuestScreen;