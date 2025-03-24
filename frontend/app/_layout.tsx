import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { ClerkProvider, ClerkLoaded, ClerkLoading, useClerk } from '@clerk/clerk-expo'
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { tokenCache } from "@/cache";
import ToastManager from "toastify-react-native";
import { styles } from "./layout.styles";
const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

export default function RootLayout() {

  if (!publishableKey) {
    throw new Error(
      'Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env',
    )
  } else {
    console.log('Clerk Publishable Key:', publishableKey);
  }

  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      {/* Show a loading indicator while Clerk is initializing */}
      <ClerkLoading>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#670000" />
        </View>
      </ClerkLoading>
      {/* Render the app content once Clerk is loaded */}
      <ClerkLoaded>
        <ToastManager animationStyle="slideInOut"
          animationIn="slideInDown"
          animationOut="slideOutUp"
          width={340}
          animationInTiming={500}
          animationOutTiming={300} 
          showProgressBar={false}
          showCloseIcon={false}
          textStyle={{
            textAlign: 'center',
            fontSize: 16,
            fontWeight: 'bold',
          }}
          />
        <SafeAreaView style={{ flex: 1 }}>
          <Stack initialRouteName="(auth)">
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
        </SafeAreaView>
      </ClerkLoaded>
    </ClerkProvider>
  );
}
