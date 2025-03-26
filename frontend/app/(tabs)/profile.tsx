import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Switch } from 'react-native';
import { useThemeStore } from '@/stores/store';
import ThemeWrapper from '@/components/ui/ThemeWrapper';
import { useUser } from '@clerk/clerk-expo';
import LogOutButton from '@/components/profile/LogOutButton';

export default function Settings() {
    const { user } = useUser();
    const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);
    const { theme, setTheme,activeColors } = useThemeStore();

    function setDarkMode() {
        setTheme(!theme);
    }

    if(!activeColors) return null
    return (
        <ThemeWrapper>
            <View style={[styles.container]}>
                <LogOutButton />

                <View style={styles.headerContainer}>
                    <Image source={{ uri: user?.imageUrl }} style={styles.profileImage} />
                    <Text style={[styles.username, { color: activeColors.primaryText }]}>{user?.username}</Text>
                    <Text style={[styles.email, { color: activeColors.secondaryText }]}>{user?.primaryEmailAddress?.emailAddress}</Text>
                    <TouchableOpacity style={[styles.editProfileButton, { backgroundColor: activeColors.primary }]}>
                        <Text style={styles.editProfileText}>Edit Profile</Text>
                    </TouchableOpacity>
                </View>

                <View style={[styles.section, { backgroundColor: activeColors.primaryBackground }]}>
                    <Text style={[styles.sectionTitle, { color: activeColors.tertiaryText }]}>Preferences</Text>
                    <View style={styles.settingItem}>
                        <Text style={[styles.settingText, { color: activeColors.primaryText }]}>Push Notifications</Text>
                        <Switch
                            value={isNotificationsEnabled}
                            onValueChange={() => setIsNotificationsEnabled(!isNotificationsEnabled)}
                            thumbColor={isNotificationsEnabled ? activeColors.primary : activeColors.switchThumb}
                            trackColor={{ false: activeColors.switchOff, true: activeColors.switchOn }}
                            ios_backgroundColor={activeColors.switchOff}
                            style={{ transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }] }}
                        />
                    </View>
                    <View style={styles.settingItem}>
                        <Text style={[styles.settingText, { color: activeColors.primaryText }]}>Dark Mode</Text>
                        <Switch
                            value={theme}
                            onValueChange={setDarkMode}
                            thumbColor={theme ? activeColors.primary : activeColors.switchThumb}
                            trackColor={{ false: activeColors.switchOff, true: activeColors.switchOn }}
                            ios_backgroundColor={activeColors.switchOff}
                            style={{ transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }] }}
                        />
                    </View>
                </View>
            </View>
        </ThemeWrapper>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingBottom: 40,
    },
    headerContainer: {
        alignItems: 'center',
        marginBottom: 40,
    },
    profileImage: {
        borderColor: '#670000',
        borderWidth: 2,
        width: 90,
        height: 90,
        borderRadius: 45,
        marginBottom: 15,
    },
    username: {
        fontSize: 26,
        fontWeight: 'bold',
    },
    email: {
        fontSize: 16,
        marginBottom: 15,
    },
    editProfileButton: {
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
        padding: 20,
        borderRadius: 12,
        marginBottom: 30,
    },
    sectionTitle: {
        fontSize: 15,
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
    },
    logOutButton: {
        marginTop: 20,
        alignSelf: 'flex-end',
        padding: 10,
        backgroundColor: '#670000',
        borderRadius: 5,
    },
    logOutText: {
        color: '#fff',
    },
});
