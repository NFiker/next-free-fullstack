// 👨‍✈️ Spécification : Nous allons créer un formulaire qui utilise une Server Action pour créer un utilisateur
// 🐶 Ajoute `use client` car nous utilisons des événements du navigateur
// 🤖 Ajoute : 'use client'
'use client'

import {Button} from '@/components/ui/button'
import {Input} from '@/components/ui/input'
import {Label} from '@/components/ui/label'
import {useState} from 'react'
import {addUser} from './actions.exercise'
<<<<<<< HEAD
import {log} from 'console'
=======
>>>>>>> 1ea44fae1858dad54e663ec585ddf44013a78d56

// 🐶  Importe la `Server Action` et `useState`
// 🤖 Ajoute :
// import { addUser } from './actions'
// import { useState } from 'react'

export default function Page() {
  // 🐶 Crée les états pour le formulaire
  // 🤖 Ajoute :
  // const [message, setMessage] = useState<string>('')
  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('user@gmail.com')
  const [message, setMessage] = useState<string>('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  // 🐶 Cinquième étape : Crée la fonction de soumission du formulaire
  // 🤖 Ajoute la fonction `handleSubmit` qui appelle `addUser`

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const result = await addUser(name, email)
    if (result.error) {
      setMessage(result.error)
    } else {
      setMessage('utilisateur crée')
      setEmail('')
      setName('')
    }
  }

  // const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setEmail(e.target.value)
  // }
  // const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setName(e.target.value)
  // }

  return (
    <div className="p-8">
      <h1 className="mb-4 text-2xl font-bold">Créer un utilisateur</h1>

      {/* 🐶 Sixième étape : Crée le formulaire avec les composants `shadcn/ui` */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>

        <div>
          <Label htmlFor="name">Nom</Label>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nom"
          />
        </div>

        <Button type="submit">Creation d&apos;un user</Button>

        {/* 🐶 Septième étape : Affiche le message de retour */}
        {/* 🤖 Ajoute le paragraphe qui affiche le message avec la couleur appropriée */}
        {message && (
          <p
            className={`text-2xl font-bold ${message.includes('requis') ? 'text-red-700' : 'text-green-700'}`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  )
}
