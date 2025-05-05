import {ReactNode} from 'react'

export default function AuthLayout({children}: {children: ReactNode}) {
  return (
    <div className="bg-muted flex min-h-screen flex-col items-center justify-center p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">{children}</div>
    </div>
  )
}
