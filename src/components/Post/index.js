import React from 'react';
import { View,Text, Pressable, Image } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { createModuleResolutionCache } from 'typescript';

const Post = (props) => {
    const post = props.post;
    const navigation = useNavigation();
    const goToPostPage = () =>{
        // console.log(route.params)
        navigation.navigate('Post', {postId: post.id})
    }
    const route = useRoute();
    const onClick = () => {
        console.log(route.params);
        console.log(post.id);
    }
    return (
        <Pressable onPress={onClick} style={styles.container}>
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