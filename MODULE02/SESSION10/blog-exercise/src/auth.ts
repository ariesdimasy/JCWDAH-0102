
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import axios from "axios"

export const { handlers, signIn, signOut, auth } = NextAuth({
    pages: {
        signIn: "/myauth/login"
    },
    session: {
        strategy: "jwt",
        maxAge: 60 * 60 * 3
    },
    providers: [
        Credentials({
            credentials: {
                username: {},
                password: {},
            },
            async authorize(credentials) {

                alert(JSON.stringify(credentials))

                let user = null

                const response = await axios.post(
                    "https://jestinghole-us.backendless.app/api/users/login",
                    {
                        login: credentials.username,
                        password: credentials.password,
                    }
                )

                user = {
                    id: response.data[0].objectId,
                    name: response.data[0].name,
                    email: response.data[0].email,
                }


                if (!user) {
                    return null
                }

                return user
            }
        })
    ],
    callbacks: {
        async signIn() {
            return true
        },
        async session({ token, session }) {
            if (session.user) {
                console.log(session)

                session.user.id = token.sub as string
                session.user.name = token.name as string
            }

            return session
        }, async jwt({ token, user }) {
            if (user) {
                token.name = user.name
                token.id = Number(user.id)
                token.name = user.name
            }

            return token
        }
    }
})