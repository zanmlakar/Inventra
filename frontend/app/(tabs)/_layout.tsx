import { Tabs, useSegments } from 'expo-router';
import { View, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from '@/app/(tabs)/styles/layout.style';
import { SignedIn } from '@clerk/clerk-expo';
import { useThemeStore } from '@/stores/store';
import { lightModeColors } from '@/assets/colors/colors';
import Animated, { FadeIn, FadeOut, useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { useEffect } from 'react';

export default function Layout() {
    const { theme, activeColors } = useThemeStore();
    const colors = activeColors || lightModeColors;
    const segments = useSegments();
    const currentRoute = segments[segments.length - 1];

    const opacity = useSharedValue(1);

    useEffect(() => {
        opacity.value = withTiming(currentRoute === "add" ? 0 : 1, { duration: 200 });
    }, [currentRoute]);

    const animatedStyle = useAnimatedStyle(() => ({
        opacity: opacity.value,
    }));

    const rippleConfig = {
        radius: 40,
        color: 'rgba(255, 255, 255, 0.1)',
    };

    return (
        <SignedIn>
            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: colors.primaryText,
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarStyle: {
                        borderRadius: 20,
                        marginHorizontal: 8,
                        height: 59,
                        marginVertical: 7,
                        borderTopWidth: 0,
                        backgroundColor: colors.secondaryBackground,
                    },
                    tabBarButton: (props) => (
                        <Pressable
                            {...props}
                            android_ripple={rippleConfig}
                            style={({ pressed }) => [
                                props.style,
                                {
                                    backgroundColor: pressed ? 'rgba(50, 50, 50, 0.07)' : 'transparent',
                                    transform: [{ scale: pressed ? 0.97 : 1 }],
                                    height: 56,
                                    padding: 2,
                                    borderRadius: 22,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                },
                            ]}
                        >
                            {props.children}
                        </Pressable>
                    ),
                }}
            >
                <Tabs.Screen
                    name="index"
                    options={{
                        tabBarIcon: ({ color, focused }) => (
                            <View style={styles.iconContainer}>
                                <Ionicons name={`home${!focused ? "-outline" : ""}`} size={37} color={color} />
                            </View>
                        ),
                    }}
                />

                <Tabs.Screen
                    name="search"
                    options={{
                        tabBarIcon: ({ color, focused }) => (
                            <View style={styles.iconContainer}>
                                <Ionicons name={`search${!focused ? "-outline" : ""}`} size={37} color={color} />
                            </View>
                        ),
                    }}
                />

                <Tabs.Screen
                    name="add"
                    options={{
                        tabBarIcon: ({ color, focused }) => (
                            <Animated.View
                                entering={FadeIn.duration(300)}
                                exiting={FadeOut.duration(300)}
                                style={[
                                    animatedStyle,
                                    {
                                        backgroundColor: colors.secondaryBackground,
                                        borderRadius: 30,
                                        marginBottom: 24,
                                        height: 67,
                                        width: 67,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    },
                                ]}
                            >
                                <Animated.View style={[styles.iconContainer, styles.addButton]}>
                                    <Ionicons name={`add${!focused ? "-outline" : ""}`} size={43} color="#d4d4d4" />
                                </Animated.View>
                            </Animated.View>
                        ),
                        tabBarButton: (props) => (
                            <Pressable {...props} android_ripple={null} style={[props.style, { backgroundColor: "transparent" }]}>
                                {props.children}
                            </Pressable>
                        ),
                    }}
                />

                <Tabs.Screen
                    name="inventory"
                    options={{
                        tabBarIcon: ({ color, focused }) => (
                            <View style={styles.iconContainer}>
                                <Ionicons name={`file-tray${!focused ? "-outline" : ""}`} size={37} color={color} />
                            </View>
                        ),
                    }}
                />

                <Tabs.Screen
                    name="profile"
                    options={{
                        tabBarIcon: ({ color, focused }) => (
                            <View style={styles.iconContainer}>
                                <Ionicons name={`person${!focused ? "-outline" : ""}`} size={37} color={color} />
                            </View>
                        ),
                    }}
                />
            </Tabs>
        </SignedIn>
    );
}
