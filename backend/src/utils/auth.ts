import { betterAuth } from "better-auth";
import { PrismaClient } from "@prisma/client";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { expo } from "@better-auth/expo/*";

const prisma = new PrismaClient();
const githubId:string = process.env.GITHUB_CLIENT_ID as string
const githubSecret:string = process.env.GITHUB_CLIENT_SECRET as string
export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "sqlite", 
    }),
    emailAndPassword:{
        enabled:true
    },
    socialProviders:{
        github:{
            clientId:githubId,
            clientSecret:githubSecret
        }
    },
    plugins: [
        expo()
    ],
    trustedOrigins: [
        "myapp://",                // App's custom scheme
        "https://yourdomain.com",   // Production URL for your app
        "http://localhost:8082",     // Local development environment URL
        "http://localhost:8081",     // Local development environment URL
        "http://localhost:8083"     // Local development environment URL
    ]
});