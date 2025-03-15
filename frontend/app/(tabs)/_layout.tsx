import { Tabs } from 'expo-router';
import { View, StyleSheet, Pressable, StatusBar } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from '@/app/(tabs)/layout';

export default function TabLayout() {
    return (
        <>
            <StatusBar
                translucent={true}
                barStyle="dark-content"
                backgroundColor={"transparent"}
            />
            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: 'black',
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarStyle: {
                        borderRadius: 20,
                        marginHorizontal: 8,
                        marginBottom: 7,
                        backgroundColor: 'white',
                        borderTopWidth: 1,
                        borderTopColor: '#e0e0e0',
                    },
                    tabBarButton: (props) => {
                        return (
                            <Pressable
                                {...props}
                                android_ripple={null}
                                style={({ pressed }) => [
                                    props.style,
                                    {
                                        backgroundColor: pressed ? 'rgba(50, 50, 50, 0.07)' : 'transparent',
                                        transform: [{ scale: pressed ? 0.97 : 1 }],
                                        height: 56,
                                        padding: 2,
                                        borderRadius: 9999,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    },
                                ]}
                            >
                                {props.children}
                            </Pressable>
                        );
                    },
                }}
            >

                <Tabs.Screen
                    name="index"
                    options={{
                        tabBarIcon: ({ color, focused }) => (
                            <View style={styles.iconContainer}>
                                <Ionicons name={`home${!focused ? "-outline" : ""}`} size={35} color={color} />
                            </View>
                        ),
                    }}
                />

                <Tabs.Screen
                    name="search"
                    options={{
                        tabBarIcon: ({ color, focused }) => (
                            <View style={styles.iconContainer}>
                                <Ionicons name={`search${!focused ? "-outline" : ""}`} size={35} color={color} />
                            </View>
                        ),
                    }}
                />

                <Tabs.Screen
                    name="add"
                    options={{
                        tabBarIcon: ({ color, focused }) => (
                            <View style={[styles.iconContainer, styles.addButton]}>
                                <Ionicons name={`add${!focused ? "-outline" : ""}`} size={40} color="white" />
                            </View>
                        ),
                        tabBarButton: (props) => {
                            // Custom button just for this specific tab
                            return (
                                <Pressable  {...props} android_ripple={null} style={[props.style, { backgroundColor: "transparent" }]}>
                                    {props.children}
                                </Pressable>
                            );
                        },
                    }}
                />

                <Tabs.Screen
                    name="inventory"
                    options={{
                        tabBarIcon: ({ color, focused }) => (
                            <View style={styles.iconContainer}>
                                <Ionicons name={`file-tray${!focused ? "-outline" : ""}`} size={35} color={color} />
                            </View>
                        ),
                    }}
                />

                <Tabs.Screen
                    name="profile"
                    options={{
                        tabBarIcon: ({ color, focused }) => (
                            <View style={styles.iconContainer}>
                                <Ionicons name={`person${!focused ? "-outline" : ""}`} size={35} color={color} />
                            </View>
                        ),
                    }}
                />

            </Tabs>
        </>
    );
}
