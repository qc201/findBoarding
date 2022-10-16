import React, { useState, useEffect } from 'react';
import { View,Text, FlatList} from 'react-native';
import Post from '../../components/Post';
import { DataStore } from 'aws-amplify';
import { BoardingProvider} from '../../models'
import '@azure/core-asynciterator-polyfill';
// import feed from "../../../assets/data/feed";

const SearchResultPage = () => {
    const [hosts, setHosts] = useState([]);

    useEffect(() => {
        //query the initial todolist and subscribe to data updates
        const subscription = DataStore.observeQuery(BoardingProvider).subscribe((snapshot) => {
        //isSynced can be used to show a loading spinner when the list is being loaded. 
        const { items, isSynced } = snapshot;
        setHosts(items);
        });
        //unsubscribe to data updates when component is destroyed so that we don’t introduce a memory leak.
        return function cleanup() {
            subscription.unsubscribe();
            }
        }, []);


    return(
        <View>
            {/* Faltlist - 2 properties: data=array of data, renderItem=idivudial item in the array */}
            <FlatList 
                data={hosts}
                keyExtractor={({ id }) => id}
                renderItem={({item}) => <Post post={item} />}
            />
        </View>
    )
}

export default SearchResultPage;