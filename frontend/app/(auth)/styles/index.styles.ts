import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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