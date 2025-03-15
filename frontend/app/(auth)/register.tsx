import { View, Text, Button } from "react-native";
import { router } from "expo-router";

export default function Register() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Register Screen</Text>
      <Button
        title="Go to Login"
        onPress={() => router.push("/(auth)/login")}
      />
    </View>
  );
}