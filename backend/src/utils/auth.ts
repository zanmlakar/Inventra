import { betterAuth } from "better-auth";
import { PrismaClient } from "@prisma/client";
import { prismaAdapter } from "better-auth/adapters/prisma";

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
    }
});