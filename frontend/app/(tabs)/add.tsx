import { SignOutButton } from '@/components/auth/SignOutButton'
import { useUser } from '@clerk/clerk-expo';
import { Image, Text, View } from 'react-native'

export default function add() {
  const { user } = useUser();
  return (
    <View>
      <SignOutButton />
      <Text>{user?.primaryEmailAddress?.emailAddress}</Text>
      <Image source={{ uri: user?.imageUrl }} width={400} height={400}></Image>
    </View>
  )
}
