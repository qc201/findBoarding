import React from 'react';
import { View,Text, Pressable, Image } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { createModuleResolutionCache } from 'typescript';
import { Amplify, API, graphqlOperation } from 'aws-amplify'
import {getBoardingProvider, listBoardingProviders} from '../../graphql/queries'




const Post = (props) => {
    const post = props.post;
    const navigation = useNavigation();
    const goToPostPage = () =>{
        // console.log(route.params)
        navigation.navigate('Post', {postId: post.id})
    }

    // async function getData() {
    //     const curId = post.id;
    //     console.log(curId)
    //     // add66799-1465-47b3-9c5b-0eaad74807f9
    //     try {
    //         const info = await API.graphql(graphqlOperation(getBoardingProvider, {id:curId}));
    //         selectedId = info.data.getBoardingProvider.id;
            
    //     } catch (e) {console.log(e)}
       
    //   }

    return (
        <Pressable onPress={goToPostPage} style={styles.container}>
            {/* image  */}
            <Image 
                style={styles.image}
                source={{uri:`${post.profile_img}`}}
            />

            {/* bed  */}
            <Text style={styles.bedrooms}>
                {post.large_dog} Large Dogs {post.small_dog} Small Dogs
            </Text>
            {/* type and detail */}
            <Text style={styles.description}>
            {post.type} {post.title}
                
            </Text>
            {/* old price and new price */}
            <Text style={styles.pricesBold}>
                
                <Text style={styles.oldPrices}> ${post.large_dog}</Text>
                ${post.small_dog} / Night
            </Text>
            
        </Pressable>
    )
}

export default Post;