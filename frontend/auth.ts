import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { AuthService } from "./services/auth.service";
import { signInSchema } from "./lib/validation";
import { ZodError } from "zod";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Credentials({
        
        credentials: {
            email: {},
            password: {}
        },

        authorize: async (credentials) => {
            try {
                let user = null;
                const {email, password} = await signInSchema.parseAsync(credentials)
    
                const authService = new AuthService()
                await authService.login({ email: email, password: password })
                .then(res => {
                    console.log(res.status)
                    if (res.status == 201)
                        user = res.data
                })
                
                if(!user) {
                    throw new Error("Email and password are wrong!")
                }
    
                return user

            } catch(error) {
                if (error instanceof ZodError) {
                    // Return `null` to indicate that the credentials are invalid
                    return null
                }
            }
        },
        
    })],
    session: {
        strategy: "jwt"
    },
    callbacks: {
        async jwt({token, user}) {
            if(user) {
                token.userId = user.id
                token.jwt = user.token
              }
              return token;
        },
        async session({session, token}) {
            if(token) {
                session.userId = token.userId,
                session.jwt = token.jwt
            }
        },
    },
    pages: {
        signIn: '/login'
    }
})