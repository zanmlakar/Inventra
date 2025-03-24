import LogOutButton from '@/components/profile/LogOutButton';
import { useUser, useClerk } from '@clerk/clerk-expo';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, StatusBar, Image, Switch } from 'react-native';


export default function Settings() {

    const { user } = useUser();
    const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <View style={styles.container}>

            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

            {/* log out modal*/}

            <LogOutButton/>

            <View style={styles.headerContainer}>
                <Image source={{ uri: user?.imageUrl }} style={styles.profileImage} />
                <Text style={styles.username}>{user?.username}</Text>
                <Text style={styles.email}>{user?.primaryEmailAddress?.emailAddress}</Text>
                <TouchableOpacity style={styles.editProfileButton}>
                    <Text style={styles.editProfileText}>Edit profile</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Preferences</Text>
                <View style={styles.settingItem}>
                    <Text style={styles.settingText}>Push notifications</Text>
                    <Switch
                        value={isNotificationsEnabled}
                        onValueChange={() => setIsNotificationsEnabled(!isNotificationsEnabled)}
                    />
                </View>
                <View style={styles.settingItem}>
                    <Text style={styles.settingText}>Dark Mode</Text>
                    <Switch
                        value={isDarkMode}
                        onValueChange={() => setIsDarkMode(!isDarkMode)}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 20,

        paddingBottom: 40, // Adds space at the bottom
    },
    headerContainer: {
        alignItems: 'center',
        marginBottom: 40, // More space below profile
    },
    profileImage: {
        borderColor: '#670000',
        borderWidth: 1,
        width: 90, // Slightly larger image
        height: 90,
        borderRadius: 45,
        marginBottom: 15,
    },
    username: {
        fontSize: 26, // Bigger text
        fontWeight: 'bold',
        color: '#670000',
        marginBottom: 4,
    },
    email: {
        fontSize: 16,
        color: '#666', // Slightly darker
        marginBottom: 15,
    },
    editProfileButton: {
        backgroundColor: '#670000',
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 25,
    },
    editProfileText: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '500',
    },
    section: {
        backgroundColor: '#F8F8F8',
        padding: 20,
        borderRadius: 12,
        marginBottom: 30, // More space before logout button
    },
    sectionTitle: {
        fontSize: 15,
        color: '#888',
        marginBottom: 12,
        fontWeight: '500',
    },
    settingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
    },
    settingText: {
        fontSize: 17,
        color: '#333',
    },
    logoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#670000',
        borderRadius: 12,
        paddingVertical: 14, // Slightly bigger button
        paddingHorizontal: 30,
        alignSelf: 'center', // Centers button
        width: '80%', // Makes button wider
    },
    logoutText: {
        color: '#670000',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
    },
});
