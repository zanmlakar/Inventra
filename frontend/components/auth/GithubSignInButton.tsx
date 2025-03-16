import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { authClient } from "@/util/auth-client" //import the auth client
import { useRouter } from 'expo-router';
export default function GitHubSignInButton() {
    const router = useRouter()
    async function githubSignIn() {
        try {
            const { data, error } = await authClient.signIn.social({
                provider: 'github',
                
            })
            router.replace('/(tabs)');
            console.log(data);
        } catch (error) {
            console.log()
        }

    }


    return (
        <TouchableOpacity style={styles.button} onPress={githubSignIn} activeOpacity={0.7}>
            <Svg width={24} height={24} viewBox="0 0 24 24" fill="black">
                <Path d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.385.6.11.793-.261.793-.577v-2.28c-3.338.726-4.043-1.61-4.043-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.091-.745.083-.73.083-.73 1.206.085 1.84 1.238 1.84 1.238 1.07 1.835 2.809 1.305 3.495.998.107-.775.42-1.306.763-1.606-2.665-.305-5.467-1.334-5.467-5.93 0-1.31.467-2.38 1.236-3.22-.124-.303-.535-1.526.117-3.176 0 0 1.008-.323 3.3 1.23a11.525 11.525 0 0 1 3-.405c1.018.005 2.042.137 3 .405 2.29-1.553 3.297-1.23 3.297-1.23.654 1.65.243 2.873.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.807 5.625-5.48 5.92.43.372.815 1.102.815 2.222v3.293c0 .32.19.694.8.577C20.565 21.796 24 17.302 24 12c0-6.627-5.373-12-12-12z" />
            </Svg>
            <Text style={styles.text}>GitHub</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#670000',
        backgroundColor: '#fff',
        gap: 12,
    },
    text: {
        fontSize: 14,
        fontWeight: '700',
        textTransform: 'uppercase',
        color: 'rgb(65, 63, 63)',
    },
});
