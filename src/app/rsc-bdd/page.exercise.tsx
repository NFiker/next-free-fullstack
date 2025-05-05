// 🐶 Dans cet exercice, nous allons apprendre à utiliser la base de données dans un Server Component
// 🤖  Voici le code de base pour commencer

import {getUserByEmail} from '@/db'

//import {getUserByEmail} from '@/db'

const Page = async () => {
  // Ton code ici
  // 1. Appelle `getUserByEmail` avec l'email `user@gmail.com`
  const user = await getUserByEmail('user@gmail.com')
  // 2. Ajoute un `console.log` pour déboguer
  console.log(user)

  // 3. Affiche le nom de l'utilisateur dans le `JSX`
  return (
    <div>
      <p>Appel de la BDD</p>
      <p>user : {user?.name}</p>
    </div>
  )
}

export default Page
