import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

export default function AuthBackground() {
    return (
        <ImageBackground style={styles.background_decor} source={require("../assets/images/backgroundImage.png")} resizeMode='cover'/>
    )
}

const styles = StyleSheet.create({
    background_decor:{
        position:'absolute',
        width:"100%",
        height:"100%",
        zIndex:-10,
        bottom:-80,
    },
})