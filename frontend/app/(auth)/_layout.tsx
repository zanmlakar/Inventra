import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function AuthLayout() {
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