import { createAuthClient } from "better-auth/react";
import { expoClient } from "@better-auth/expo/client";
import * as SecureStore from "expo-secure-store";

// Create the authClient instance
export const authClient = createAuthClient({
  baseURL: "http://localhost:8080", // location of the auth server
  plugins: [
    expoClient({
      scheme: "myapp", // your deep link scheme
      storagePrefix: "myapp", // prefix for secure storage keys
      storage: SecureStore, // use SecureStore for storage
    })
  ]
});

// Destructure the authentication methods from the created auth client
export const { signIn, signUp, useSession } = authClient;
