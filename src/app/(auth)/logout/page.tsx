'use client'

import {useEffect} from 'react'
import {useRouter} from 'next/navigation'
import {Loader2} from 'lucide-react'
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card'

export default function LogoutPage() {
  const router = useRouter()

  useEffect(() => {
    // Simuler une action de déconnexion (token, session, etc.)
    const timeout = setTimeout(() => {
      router.push('/login')
    }, 1500)

    return () => clearTimeout(timeout)
  }, [router])

  return (
    <Card className="w-full max-w-sm text-center">
      <CardHeader>
        <CardTitle>Déconnexion en cours</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4">
        <Loader2 className="text-muted-foreground animate-spin" size={32} />
        <p className="text-muted-foreground text-sm">
          Vous allez être redirigé vers la page de connexion.
        </p>
      </CardContent>
    </Card>
  )
}
