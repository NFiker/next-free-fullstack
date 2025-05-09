import CredentialsProvider from 'next-auth/providers/credentials'
import type {NextAuthConfig} from 'next-auth'
import {getUserByEmail} from '@/db'
//import {getUserByEmail} from '@/db'

export const authConfig: NextAuthConfig = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {label: 'Email', type: 'email'},
        password: {label: 'Mot de passe', type: 'password'},
      },
      /**
       * TODO: Implémenter la fonction authorize
       *
       * Cette fonction est appelée par NextAuth pour vérifier les identifiants
       *
       * Étapes à suivre :
       * 1. Vérifier que les credentials (email et password) sont présents
       * 2. Récupérer l'utilisateur depuis la base de données avec getUserByEmail
       * 3. Vérifier que l'utilisateur existe
       * 4. Comparer le mot de passe fourni avec celui de l'utilisateur
       * 5. Retourner l'utilisateur si tout est correct, null sinon
       *
       * Note: Dans un environnement de production, vous devriez utiliser une comparaison sécurisée des mots de passe
       */
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      async authorize(credentials) {
        // TODO: Implémenter la fonction authorize
        if (!credentials?.email || !credentials?.password) {
          return null
        }
        const user = await getUserByEmail(credentials.email as string)

        if (!user) return null
        if (user.password !== credentials.password)
          // use bcrypt salt etc for real security
          return null
        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        }
      },
    }),
  ],
  callbacks: {
    async jwt({token, user}) {
      if (user) {
        token.id = user.id
        token.role = user.role
      }
      return token
    },
    async session({session, token}) {
      if (token && session.user) {
        session.user.id = token.id as string
        session.user.role = token.role as string
      }
      return session
    },
  },
  pages: {
    signIn: '/login',
    error: '/error',
  },
}
