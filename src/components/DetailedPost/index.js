import React from 'react';
import { View,Text, ScrollView, Pressable, Image } from 'react-native';
import styles from './styles';
import { Amplify, API, graphqlOperation } from 'aws-amplify'
import {getBoardingProvider, listBoardingProviders} from '../../graphql/queries'

const DetailedPost = (props) => {
    
    const post = props.post;
    console.log(post);
    return (
        <ScrollView style={styles.container}>
            {/* image  */}
            <Image 
                style={styles.image}
                source={{uri:`${post.profile_img}`}}
            />

            {/* bed  */}
            <Text style={styles.bedrooms}>
                {post.large_dog} space for large dogs {post.small_dog} space for small dogs
            </Text>
            {/* type and detail */}
            <Text style={styles.description}>
            {post.title}
                
            </Text>
            {/* old price and new price */}
            <Text style={styles.pricesBold}>
                
                <Text style={styles.oldPrices}> ${post.price_large}</Text>
                ${post.price_small} / Night
            </Text>

            {/* detailed description */}
            
            <Text style={styles.longDescription}>
                {post.description}
            </Text>
        </ScrollView>
        
    )
}

export default DetailedPost;