import { SignOutButton } from '@/components/auth/SignOutButton'
import { useUser } from '@clerk/clerk-expo';
import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function add() {
  const { user } = useUser();
  console.log(user);
  return (
    <View>
      <SignOutButton/>
      <Text>{user?.primaryEmailAddress?.emailAddress}</Text>
      <Image source={{uri:user?.imageUrl}} width={400} height={400}></Image>
    </View>
  )
}
