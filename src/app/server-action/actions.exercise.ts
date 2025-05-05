// 👨‍✈️ Spécification : Nous allons créer une Server Action pour ajouter un nouvel utilisateur

// 🐶 Première étape : Ajoute la directive `use server` pour indiquer que c'est une Server Action
// 🤖 Ajoute : 'use server'
'use server'

// 🐶 Deuxième étape : Importe la fonction `createUser` depuis `@/db`
// 🤖 import { createUser } from '@/db'
import {createUser} from '@/db'

// 🐶 Troisième étape : Crée la fonction `addUser` qui prend name et email en paramètres
export async function addUser(name: string, email: string) {
  // 🐶 Vérifie que les valeurs sont présentes
  if (!name || !email) {
    return {error: 'Nom et email requis'}
  }

  try {
    // 🐶 Quatrième étape : Utilise `createUser` pour ajouter l'utilisateur
    // 🤖 Ajoute :
    // const user = await createUser({
    //   name,
    //   email,
    //   role: 'user'
    // })
    const user = await createUser({
      name,
      email,
      role: 'user',
    })

    return {success: true, user}
    // eslint-disable-next-line no-unreachable
  } catch (error) {
    return {error: 'Erreur lors de la création'}
  }
}
