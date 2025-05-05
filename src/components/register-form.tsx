'use client'

import {useState} from 'react'
import {useRouter} from 'next/navigation'
import {useForm} from 'react-hook-form'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'

import {Button} from '@/components/ui/button'
import {Input} from '@/components/ui/input'
import {Label} from '@/components/ui/label'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import {FaGoogle, FaApple} from 'react-icons/fa' // Importation des icônes Google et Apple

const formSchema = z
  .object({
    name: z.string().min(1, 'Nom requis'),
    email: z.string().email('Email invalide'),
    password: z.string().min(6, 'Mot de passe trop court'),
    confirmPassword: z.string().min(6, 'Mot de passe trop court'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Les mots de passe ne correspondent pas',
    path: ['confirmPassword'],
  })

export function RegisterForm() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true)
    console.log('Inscription avec :', values)
    setTimeout(() => {
      setLoading(false)
      router.push('/login')
    }, 1000)
  }

  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Créer un compte</CardTitle>
        <CardDescription>Inscrivez-vous avec vos identifiants</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-6">
            {/* Options d'inscription via Apple et Google */}
            <div className="flex flex-col gap-4">
              <Button
                variant="outline"
                className="flex w-full items-center justify-center gap-2"
              >
                <FaApple className="text-xl" /> {/* Logo Apple */}
                S'inscrire avec Apple
              </Button>
              <Button
                variant="outline"
                className="flex w-full items-center justify-center gap-2"
              >
                <FaGoogle className="text-xl" /> {/* Logo Google */}
                S'inscrire avec Google
              </Button>
            </div>

            {/* Formulaire classique */}
            <FormField
              control={form.control}
              name="name"
              render={({field}) => (
                <FormItem>
                  <Label htmlFor="name">Nom</Label>
                  <FormControl>
                    <Input id="name" placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({field}) => (
                <FormItem>
                  <Label htmlFor="email">Email</Label>
                  <FormControl>
                    <Input
                      id="email"
                      type="email"
                      placeholder="email@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({field}) => (
                <FormItem>
                  <Label htmlFor="password">Mot de passe</Label>
                  <FormControl>
                    <Input id="password" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({field}) => (
                <FormItem>
                  <Label htmlFor="confirmPassword">
                    Confirmer le mot de passe
                  </Label>
                  <FormControl>
                    <Input id="confirmPassword" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Inscription...' : 'Créer un compte'}
            </Button>
            <div className="text-center text-sm">
              Déjà inscrit ?{' '}
              <a href="/login" className="underline underline-offset-4">
                Se connecter
              </a>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
