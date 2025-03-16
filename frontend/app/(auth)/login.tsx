import React, { useState } from 'react';
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
    Image,
} from 'react-native';
import { router } from 'expo-router';
import GoogleSignInButton from '@/components/auth/GoogleSignInButton';
import GitHubSignInButton from '@/components/auth/GithubSignInButton';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleLogin = () => {
        // Implement your login logic here
        console.log('Login with:', email, password);
        // On successful login:
        // router.replace('/(tabs)');
    };

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



                    <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                        <Text style={styles.loginButtonText}>Login</Text>
                    </TouchableOpacity>

                    <View style={styles.signupContainer}>
                        <Text style={styles.signupText}>Don't have an account? </Text>
                        <TouchableOpacity onPress={navigateToRegister}>
                            <Text style={styles.signupLink}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                    {/* Separator */}

                    <View style={{ position: 'relative', marginVertical: 20 }}>
                        <View style={{ height: 1, backgroundColor: '#670000', width: '100%', }}></View>
                        <View style={{ position: 'absolute', bottom: -10,alignItems:'center', width: 50, backgroundColor: 'white', zIndex: 10,alignSelf:'center' }}>
                            <Text style={{ color: '#670000'}}>OR</Text>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    inner: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
    },
    logoContainer: {
        width: "100%",
        alignItems: "flex-start",
        marginBottom: 30,
        padding: 20,
    },
    logo: {
        width: 80,
        height: 80,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#670000',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#777',
        marginBottom: 48,
    },
    inputContainer: {
        marginBottom: 24,
    },
    label: {
        fontSize: 14,
        fontWeight: '500',
        color: '#670000',
        marginBottom: 8,
    },
    input: {
        backgroundColor: '#F8F8F8',
        height: 56,
        borderRadius: 8,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#333',
        borderWidth: 1,
        borderColor: '#E0E0E0',
    },
    passwordContainer: {
        flexDirection: 'row',
        backgroundColor: '#F8F8F8',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        height: 56,
        alignItems: 'center',
    },
    passwordInput: {
        flex: 1,
        height: '100%',
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#333',
    },
    visibilityToggle: {
        paddingHorizontal: 16,
        height: '100%',
        justifyContent: 'center',
    },
    visibilityText: {
        color: '#670000',
        fontSize: 14,
        fontWeight: '500',
    },
    forgotPassword: {
        alignSelf: 'flex-end',
        marginBottom: 32,
    },
    forgotPasswordText: {
        color: '#670000',
        fontSize: 14,
    },
    loginButton: {
        backgroundColor: '#670000',
        height: 56,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
    },
    loginButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
    signupContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    signupText: {
        color: '#777',
        fontSize: 14,
    },
    signupLink: {
        color: '#670000',
        fontSize: 14,
        fontWeight: '500',
    },
});