import { useClerk } from '@clerk/clerk-expo'
import { Text, TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'
export const SignOutButton = () => {
    const router = useRouter();

  const { signOut } = useClerk();

  const handleSignOut = async () => {
    try {
      await signOut()
      // Redirect to your desired page
      router.replace('/(auth)/login');
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2))
    }
  }

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={handleSignOut}>
      <Text>Sign out</Text>
    </TouchableOpacity>
  )
}