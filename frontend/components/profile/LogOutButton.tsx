import { useClerk } from '@clerk/clerk-expo';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react'
import { Text, TouchableOpacity, View, Modal, Alert } from 'react-native'

export default function LogOutButton() {
    const [signOutModalState, setSignOutModalState] = useState<boolean>(false);
    const { signOut } = useClerk();
    const router = useRouter();

    const handleSignOut = async () => {
        try {
            await signOut();
            router.replace('/(auth)/login');
        } catch (err) {
            console.error(JSON.stringify(err, null, 2));
        }
    };

    return (
        <>
            <Modal
                animationType="fade"
                transparent={true}
                visible={signOutModalState}
                onRequestClose={() => setSignOutModalState(false)}
                
            >
                <View style={{ 
                    flex: 1, 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    backgroundColor: 'rgba(0,0,0,0.5)' 
                }}>
                    <View style={{
                        backgroundColor: 'white',
                        width: '90%',
                        padding: 20,
                        borderRadius: 10,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 5
                    }}>
                        <Text style={{
                            textAlign: 'center',
                            marginBottom: 20,
                            fontSize: 16
                        }}>
                            Are you sure you want to log out?
                        </Text>

                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>
                            <TouchableOpacity
                                style={{
                                    flex: 1,
                                    backgroundColor: '#f0f0f0',
                                    padding: 12,
                                    borderRadius: 5,
                                    marginRight: 5
                                }}
                                onPress={() => setSignOutModalState(false)}
                            >
                                <Text style={{ textAlign: 'center' }}>Cancel</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={{
                                    flex: 1,
                                    backgroundColor: '#670000',
                                    padding: 12,
                                    borderRadius: 5,
                                    marginLeft: 5
                                }}
                                onPress={handleSignOut}
                            >
                                <Text style={{ color: 'white', textAlign: 'center' }}>Log Out</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            <View style={{ width: "100%", flexDirection: 'row', justifyContent: 'flex-end', paddingVertical: 4 }}>
                <TouchableOpacity onPress={() => setSignOutModalState(true)}>
                    <Ionicons name="log-out-outline" size={30} color="#670000" />
                </TouchableOpacity>
            </View>
        </>
    )
}