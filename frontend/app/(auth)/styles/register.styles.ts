import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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