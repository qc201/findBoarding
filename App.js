import { NavigationContainer } from '@react-navigation/native';
import {Pressable, Text} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import * as React from 'react';
import type {Node} from 'react';
import {SafeAreaView,View,} from 'react-native';
import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';
import feed from './assets/data/feed';
import SearchResultPage from './src/screens/SearchResult';
import DestinationSearchScreen from './src/screens/DestinationSearch';
import GuestScreen from './src/screens/Guests';
import 'react-native-gesture-handler';
import Router from './src/navigation/Router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Home from './src/Home';
import { withAuthenticator } from 'aws-amplify-react-native';


const App = ({ signOut, user }) => {
  return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Router />
      </GestureHandlerRootView>
      // <View>
      //   <Home />
      // </View>
      
  );
}
// export default App;
export default withAuthenticator(App);