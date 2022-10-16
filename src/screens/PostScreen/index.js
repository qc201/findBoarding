import React from "react";
import { View, Text } from "react-native";
import DetailedPost from '../../components/DetailedPost';
// import feed from '../../../assets/data/feed';
import { useRoute } from "@react-navigation/native";



export default PostScreen = (props) => {
    const route = useRoute();
    // console.log(route.params);
    const post = feed.find(p => p.id === route.params.postId);
    return (
        
        <View style={{backgroundColor:'white'}}>
            <DetailedPost post={post} />
        </View>
    )
}