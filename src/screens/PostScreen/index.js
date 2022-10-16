import React, {useState, useEffect} from "react";
import { View, Text } from "react-native";
import DetailedPost from '../../components/DetailedPost';
// import feed from '../../../assets/data/feed';
import { useRoute } from "@react-navigation/native";
import { Amplify, API, graphqlOperation } from 'aws-amplify'
import {getBoardingProvider, listBoardingProviders} from '../../graphql/queries'



export default PostScreen = (props) => {
    const route = useRoute();
    const [post, setPost] = useState([]);
    useEffect (() => {
        async function getData() {
            const curId = route.params.postId;
            console.log(curId)
            // add66799-1465-47b3-9c5b-0eaad74807f9
            try {
                const info = await API.graphql(graphqlOperation(getBoardingProvider, {id:curId}));
                setPost(info.data.getBoardingProvider);
                console.log(post)  
            } catch (e) {console.log(e)}
           
          };
          getData();
    }, [])    
      return (
        <View style={{backgroundColor:'white'}}>
            <DetailedPost post={post} />
        </View>
    )
    
    // console.log(route.params);
    // const post = feed.find(p => p.id === route.params.postId);
    
}