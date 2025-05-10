'use server'

import {createUser} from '@/db'
import {signIn, signOut} from '@/lib/auth'
import {log} from 'console'
import {AuthError} from 'next-auth'
import {isRedirectError} from 'next/dist/client/components/redirect-error'
import {redirect} from 'next/navigation'

// import {signIn, signOut} from '@/lib/auth'
// import {AuthError} from 'next-auth'
// import {isRedirectError} from 'next/dist/client/components/redirect-error'
// import {redirect} from 'next/navigation'
// import {createUser} from '@/db'

/**
 * Action de login utilisant NextAuth
 *
 * TODO: Implémenter la fonction login
 * 1. Récupérer l'email et le mot de passe depuis le `FormData`
 * 2. Valider que les champs sont présents
 * 3. Appeler `signIn` de `NextAuth` avec les credentials
 * 4. Gérer la redirection vers `/dashboard` en cas de succès
 * 5. Gérer les erreurs d'authentification
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars

// TODO: Implémenter la fonction `login`
console.log('login appelé')
export async function login(formData: FormData) {
  const email = formData.get('email')
  const password = formData.get('password')
  if (!email || !password) {
    return {success: false, message: 'Email et mot de passe requis'}
  }

  try {
    await signIn('credentials', {email, password, redirect: false})
    redirect('/dashboard')
  } catch (error) {
    if (isRedirectError(error)) {
      throw error
    }
    //Gérer les erreurs d'authentification
    if (error instanceof AuthError) {
      return {
        success: false,
        message: 'Identifiants invalides',
      }
    }
  }
}

/**
 * Action d'inscription d'un nouvel utilisateur
 *
 * TODO: Implémenter la fonction `register`
 * 1. Récupérer les champs du formulaire (name, email, password, confirmPassword)
 * 2. Valider que tous les champs sont présents
 * 3. Vérifier que les mots de passe correspondent
 * 4. Créer l'utilisateur dans la base de données
 * 5. Connecter l'utilisateur avec `signIn`
 * 6. Rediriger vers `/dashboard`
 * 7. Gérer les erreurs
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function register(formData: FormData) {
  const name = formData.get('name')?.toString()
  const email = formData.get('email')?.toString()
  const password = formData.get('password')?.toString()
  const confirmPassword = formData.get('confirmPassword')?.toString()

  if (!name || !email || !password || !confirmPassword) {
    return {success: false, message: 'Tous les champs sont requis'}
  }

  if (password !== confirmPassword) {
    return {success: false, message: 'Les mots de passe doivent correspondre'}
  }

  try {
    const user = await createUser({name, email, password, role: 'user'})

    await signIn('credentials', {
      email: user.email,
      password,
      redirect: false,
    })

    redirect('/dashboard')
  } catch (error) {
    if (isRedirectError(error)) throw error

    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : 'Erreur lors de la création du compte',
    }
  }
}

/**
 * Action de déconnexion
 *
 * TODO: Implémenter la fonction `logout`
 * 1. Appeler `signOut` de `NextAuth`
 * 2. Gérer les erreurs si nécessaire
 */
export async function logout() {
  console.log('logout appelé')
  // TODO: Implémenter la fonction `logout`
  try {
    await signOut({redirect: false})
    redirect('/login')
  } catch (error) {
    return {success: false, message: 'Erreur lors de la déconnexion'}
  }
}
