// app/(auth)/register/page.tsx
import {GalleryVerticalEnd} from 'lucide-react'
import {RegisterForm} from '@/components/register-form'

export default function RegisterPage() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <a href="#" className="flex items-center gap-2 self-center font-medium">
        <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
          <GalleryVerticalEnd className="size-4" />
        </div>
        Acme Inc.
      </a>
      <RegisterForm />
    </div>
  )
}
