'use client'
const Page = () => {
  // 🐶 Détermine dans quel environnement s'exécute ce composant grâce à un log
  // 🤖 `console.log('Je suis un développeur FullStack Next')`
  console.log('Je suis un développeur FullStack Next')
  // 🐶 Vérifie dans la console du navigateur et dans la console du serveur (terminal)

  // 🐶 N'oublie pas de faire les exercices bonus
  return (
    <div onClick={() => alert('Hello')}>
      <div>
        <p>Je suis un développeur FullStack Next</p>
      </div>
    </div>
  )
}

export default Page
