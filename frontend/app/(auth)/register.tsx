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
    ScrollView,
} from 'react-native';
import { router } from 'expo-router';
import { isClerkAPIResponseError, useSignUp } from '@clerk/clerk-expo';
import { Toast } from 'toastify-react-native';
import { styles } from './styles/register.styles';

export default function Register() {

    const { isLoaded, signUp, setActive } = useSignUp();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
    const [pendingVerification, setPendingVerification] = useState(false);
    const [code, setCode] = useState('');

    const handleRegister = async () => {
        if (!isLoaded) return;

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            await signUp.create({
                username,
                emailAddress: email,
                password,
            });

            await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });
            setPendingVerification(true);
        } catch (err:unknown) {
            if (isClerkAPIResponseError(err)) {
                return Toast.error(err.errors[0].message);
            }
            console.error(JSON.stringify(err, null, 2));
            alert("Registration failed. Please check your details and try again.");
        }
    };

    const onVerifyPress = async () => {
        if (!isLoaded) return;
        try {
            const signUpAttempt = await signUp.attemptEmailAddressVerification({
                code,
            });
            console.log('sign up attempt', signUpAttempt.status);
            if (signUpAttempt.status === 'complete') {
                await setActive({ session: signUpAttempt.createdSessionId });
                router.replace('/(tabs)/inventory');
            } else {
                console.error(JSON.stringify(signUpAttempt, null, 2));
            }
        } catch (err) {
            console.log('sign up attempt failed');
            console.error(JSON.stringify(err, null, 2));
            alert("Verification failed. Please try again.");
        }
    };

    const navigateToLogin = () => {
        router.push('/(auth)/login');
    };

    if (pendingVerification) {
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}
            >
                <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.inner}>
                            <Text style={styles.title}>Verify Email</Text>
                            <Text style={styles.subtitle}>Enter the verification code sent to your email</Text>
                            <View style={styles.inputContainer}>
                                <Text style={styles.label}>Verification Code</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Enter code"
                                    placeholderTextColor="#999"
                                    value={code}
                                    onChangeText={setCode}
                                />
                            </View>
                            <TouchableOpacity activeOpacity={0.7} style={styles.registerButton} onPress={onVerifyPress}>
                                <Text style={styles.registerButtonText}>Verify</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableWithoutFeedback>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.inner}>
                        <Text style={styles.title}>Create Account</Text>
                        <Text style={styles.subtitle}>Sign up to get started</Text>

                        <View style={styles.inputContainer}>
                            <Text style={styles.label}>Username</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Your Name"
                                placeholderTextColor="#999"
                                autoCapitalize="words"
                                value={username}
                                onChangeText={setUsername}
                            />
                        </View>
                        
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
                                    activeOpacity={0.7}
                                    style={styles.visibilityToggle}
                                    onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                                >
                                    <Text style={styles.visibilityText}>
                                        {isPasswordVisible ? 'Hide' : 'Show'}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.inputContainer}>
                            <Text style={styles.label}>Confirm Password</Text>
                            <View style={styles.passwordContainer}>
                                <TextInput
                                    style={styles.passwordInput}
                                    placeholder="Confirm Password"
                                    placeholderTextColor="#999"
                                    secureTextEntry={!isConfirmPasswordVisible}
                                    value={confirmPassword}
                                    onChangeText={setConfirmPassword}
                                />
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    style={styles.visibilityToggle}
                                    onPress={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
                                >
                                    <Text style={styles.visibilityText}>
                                        {isConfirmPasswordVisible ? 'Hide' : 'Show'}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.termsContainer}>
                            <Text style={styles.termsText}>
                                By signing up, you agree to our{' '}
                                <Text style={styles.termsLink}>Terms of Service</Text> and{' '}
                                <Text style={styles.termsLink}>Privacy Policy</Text>
                            </Text>
                        </View>

                        <TouchableOpacity activeOpacity={0.7} style={styles.registerButton} onPress={handleRegister}>
                            <Text style={styles.registerButtonText}>Create Account</Text>
                        </TouchableOpacity>

                        <View style={styles.loginContainer}>
                            <Text style={styles.loginText}>Already have an account? </Text>
                            <TouchableOpacity activeOpacity={0.7} onPress={navigateToLogin}>
                                <Text style={styles.loginLink}>Sign In</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

