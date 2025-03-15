import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: "http://localhost:8080" // location of auth server
})
export const { signIn, signUp, useSession } = createAuthClient();