import React, { useState, useCallback } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    StatusBar,
} from 'react-native';
import { router } from 'expo-router';
import { isClerkAPIResponseError, useSignIn } from '@clerk/clerk-expo'; // Import Clerk's useSignIn hook
import GoogleSignInButton from '@/components/auth/GoogleSignInButton';
import GitHubSignInButton from '@/components/auth/GithubSignInButton';
import { ClerkAPIError, ClerkAPIErrorJSON } from '@clerk/types';
import { Toast } from 'toastify-react-native';
import * as WebBrowser from 'expo-web-browser'
import * as AuthSession from 'expo-auth-session'
import { styles } from './styles/login.styles';

export default function Login() {

    const { signIn, setActive, isLoaded } = useSignIn();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

      
    const onSignInPress = useCallback(async () => {
        if (!isLoaded) return;
        try {
            if (!email || !password) {
                return Toast.error("Fill required fields!");
            }
            const signInAttempt = await signIn.create({
                identifier: email,
                password,
            });
            if (signInAttempt.status === 'complete') {
                await setActive({ session: signInAttempt.createdSessionId });
                router.replace('/(tabs)');
            } else {
                console.error(JSON.stringify(signInAttempt, null, 2));
            }
        }catch (err: unknown) {
            if (isClerkAPIResponseError(err)) {
                return Toast.error(err.errors[0].message);
            }
            console.error(JSON.stringify(err, null, 2));
            Toast.error("There was an issue");
        }
    }, [isLoaded, email, password]);

    const navigateToRegister = () => {
        router.push('/(auth)/register');
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inner}>
                    <Text style={styles.title}>Welcome Back</Text>
                    <Text style={styles.subtitle}>Sign in to continue</Text>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="your@email.com"
                            placeholderTextColor="#999"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Password</Text>
                        <View style={styles.passwordContainer}>
                            <TextInput
                                style={styles.passwordInput}
                                placeholder="Password"
                                placeholderTextColor="#999"
                                secureTextEntry={!isPasswordVisible}
                                value={password}
                                onChangeText={setPassword}
                            />
                            <TouchableOpacity
                                style={styles.visibilityToggle}
                                onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                            >
                                <Text style={styles.visibilityText}>
                                    {isPasswordVisible ? 'Hide' : 'Show'}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.forgotPassword}>
                        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.loginButton} onPress={onSignInPress}>
                        <Text style={styles.loginButtonText}>Login</Text>
                    </TouchableOpacity>

                    <View style={styles.signupContainer}>
                        <Text style={styles.signupText}>Don't have an account? </Text>
                        <TouchableOpacity onPress={navigateToRegister}>
                            <Text style={styles.signupLink}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ position: 'relative', marginVertical: 20 }}>
                        <View style={{ height: 1, backgroundColor: '#670000', width: '100%' }}></View>
                        <View style={{ position: 'absolute', bottom: -10, alignItems: 'center', width: 50, backgroundColor: 'white', zIndex: 10, alignSelf: 'center' }}>
                            <Text style={{ color: '#670000' }}>OR</Text>
                        </View>
                    </View>

                    <View style={{ alignItems: 'center', flexDirection: 'row', marginVertical: 4, gap: 6 }}>
                        <GoogleSignInButton />
                        <GitHubSignInButton />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

