import React, { useState, useEffect } from 'react';
import {FlatList,Modal,Pressable,Text,TextInput,View,Platform,Image, SafeAreaView} from 'react-native';
import { DataStore } from 'aws-amplify';
import { CokeBoarding } from './models';
import '@azure/core-asynciterator-polyfill';
import Icon from 'react-native-vector-icons/FontAwesome';
import {GOOGLE_API_KEY} from "@env";



const Header = () => (
  <View>
    <Text>Boarding for Coke</Text>
  </View>
);


const TodoList = () => {
  const [hosts, setHosts] = useState([]);

  useEffect(() => {

    //query the initial todolist and subscribe to data updates
    const subscription = DataStore.observeQuery(CokeBoarding).subscribe((snapshot) => {
      //isSynced can be used to show a loading spinner when the list is being loaded. 
      const { items, isSynced } = snapshot;
      setHosts(items);
    });

    //unsubscribe to data updates when component is destroyed so that we don’t introduce a memory leak.
    return function cleanup() {
      subscription.unsubscribe();
    }

  }, []);


  const renderItem = ({ item }) => (
    <View>
      <Text>
        <Text>{item.title}</Text>
        {`\n${item.description}`}
      </Text>
      <Icon name="rocket" size={30} color="#900" />
      <Text>{item.small_dog}</Text>
      <Text>{item.coordinate[0]}</Text>
      <Text>{item.profile_img}</Text>
      <Image
        style={{width:'20%', height:'20%', resizeMode:'cover'}}
        source={{
          uri:`${item.profile_img}`,
        }}
      />
    </View>
  );

  return (
    <FlatList
      data={hosts}
      keyExtractor={({ id }) => id}
      renderItem={renderItem}
    />
  );
};

const Home = () => {
  return (
    <SafeAreaView>
      <Header />
      <TodoList />
    </SafeAreaView>
  );
};



export default Home;