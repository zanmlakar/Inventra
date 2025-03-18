import { StatusBar } from "react-native";
import { Redirect, Stack } from 'expo-router'
import { useAuth, useClerk } from '@clerk/clerk-expo'
import { useEffect } from "react";
export default function AuthLayout() {

    const { isSignedIn } = useAuth();

    const { loaded } = useClerk();
    
    useEffect(() => {
        console.log('Clerk loaded:', loaded);
    }, [loaded]);

    if (isSignedIn) {
        return <Redirect href={'/(tabs)'} />
    }

    return (
        <>
            <StatusBar
                barStyle="light-content"
                backgroundColor="#000"
                translucent={true}
            />
            <Stack initialRouteName="login">
                <Stack.Screen name="login" options={{ headerShown: false }} />
                <Stack.Screen name="register" options={{ headerShown: false }} />
                <Stack.Screen name="index" options={{ headerShown: false }} />
            </Stack>
        </>
    );
}