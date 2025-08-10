
declare module "next-auth" {
    interface User {
        id?: number
        name?: string
        email?: string
    }

    interface Session {
        user: User
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id?: number
        name?: string
        email?: string
    }
}