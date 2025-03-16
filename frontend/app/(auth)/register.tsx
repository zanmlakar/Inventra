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
    ScrollView,
} from 'react-native';
import { router } from 'expo-router';

export default function Register() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

    const handleRegister = () => {
        // Implement your registration logic here
        console.log('Register with:', fullName, email, password);
        // On successful registration:
        // router.replace('/(tabs)');
    };

    const navigateToLogin = () => {
        router.push('/(auth)/login');
    };

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
                            <Text style={styles.label}>Full Name</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Your Name"
                                placeholderTextColor="#999"
                                autoCapitalize="words"
                                value={fullName}
                                onChangeText={setFullName}
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

                        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
                            <Text style={styles.registerButtonText}>Create Account</Text>
                        </TouchableOpacity>

                        <View style={styles.loginContainer}>
                            <Text style={styles.loginText}>Already have an account? </Text>
                            <TouchableOpacity onPress={navigateToLogin}>
                                <Text style={styles.loginLink}>Sign In</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    scrollContainer: {
        flexGrow: 1,
    },
    inner: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
    },
    logoContainer: {
        width: "100%",
        alignItems: "flex-start",
        marginBottom: 20,
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
        marginBottom: 40,
    },
    inputContainer: {
        marginBottom: 20,
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
    termsContainer: {
        marginVertical: 20,
    },
    termsText: {
        color: '#777',
        fontSize: 14,
        textAlign: 'center',
        lineHeight: 20,
    },
    termsLink: {
        color: '#670000',
        fontWeight: '500',
    },
    registerButton: {
        backgroundColor: '#670000',
        height: 56,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
    },
    registerButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
    loginContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
    },
    loginText: {
        color: '#777',
        fontSize: 14,
    },
    loginLink: {
        color: '#670000',
        fontSize: 14,
        fontWeight: '500',
    },
});