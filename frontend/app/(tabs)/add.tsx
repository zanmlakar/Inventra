import { SignOutButton } from '@/components/auth/SignOutButton'
import ThemeWrapper from '@/components/ui/ThemeWrapper';
import { useUser } from '@clerk/clerk-expo';
import { Image, Text, View } from 'react-native'

export default function add() {
  const { user } = useUser();
  return (
    <ThemeWrapper>
      <SignOutButton />
      <Text>{user?.primaryEmailAddress?.emailAddress}</Text>
      <Image source={{ uri: user?.imageUrl }} width={400} height={400}></Image>
      </ThemeWrapper>
  )
}
