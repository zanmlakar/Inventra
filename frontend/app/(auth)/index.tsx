import { Link, Redirect, useRouter } from 'expo-router';
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground, StatusBar, Image } from 'react-native';
import { useFonts } from 'expo-font';

export default function Index() {
  const router = useRouter();
  // In a real app, you would load fonts with useFonts hook
  // const [fontsLoaded] = useFonts({
  //   'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
  //   'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
  // });

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
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
          <TouchableOpacity onPress={()=>router.replace('/(auth)/login')} style={styles.button}>
            <Link href={"/(auth)/login"} style={styles.buttonText}>LOG IN</Link>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>router.replace('/(auth)/register')} style={[styles.button, styles.registerButton]}>
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

const styles = StyleSheet.create({
  landingPageImage:{
    width:320,
    height:320,
    right:-20
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  headerContainer: {
    alignItems: 'center',
  },
  logo: {
    fontSize: 62,
    letterSpacing:5,
    fontWeight: 'bold',
    color: '#670000',
    marginBottom: 10,
  },
  tagline: {
    fontSize: 24,
    color: '#670000',
    textAlign: 'center',
    fontWeight: '500',
  },
  descriptionContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  description: {
    fontSize: 16,
    color: '#333333',
    textAlign: 'center',
    lineHeight: 24,
  },
  buttonContainer: {
    marginTop: 40,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#670000',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  registerButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#670000',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  featureContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    marginBottom: 20,
  },
  featureItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#F8F8F8',
    marginHorizontal: 5,
    borderRadius: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#670000',
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#670000',
    marginBottom: 8,
  },
  featureDescription: {
    fontSize: 14,
    color: '#333333',
    textAlign: 'center',
  },
  footer: {
    padding: 5,
    backgroundColor: '#670000',
    alignItems: 'center',
  },
  footerText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
});