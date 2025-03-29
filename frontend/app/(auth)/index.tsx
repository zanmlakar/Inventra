import { Link, Redirect, useRouter } from 'expo-router';
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground, StatusBar, Image } from 'react-native';
import { styles } from './styles/index.styles';
import ThemeWrapper from '@/components/ui/ThemeWrapper';

export default function Index() {
  const router = useRouter();

  return (

    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.headerContainer}>
          <Text style={styles.logo}>Inventra</Text>
          <Text style={styles.tagline}>Your life, cataloged.</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            Organize your belongings with a snap. Never lose track of what matters.
          </Text>
        </View>
        <Image style={styles.landingPageImage} source={require('../../assets/images/landingPagePicture.png')} width={100} height={100}></Image>
        <View style={styles.buttonContainer}>
          <TouchableOpacity activeOpacity={0.7} onPress={()=>router.replace('/(auth)/login')} style={styles.button}>
            <Link href={"/(auth)/login"} style={styles.buttonText}>LOG IN</Link>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} onPress={()=>router.replace('/(auth)/register')} style={[styles.button, styles.registerButton]}>
            <Link href={"/(auth)/register"} style={[styles.buttonText,{color:'#670000'}]}>REGISTER</Link>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 Inventra</Text>
      </View>
    </View>
  );
}

