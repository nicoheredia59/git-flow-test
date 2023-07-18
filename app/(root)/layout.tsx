import { Navbar } from '@/components/nav-bar'
import * as React from 'react'

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Navbar />
      <div>
        {children}
      </div>
    </div>
  )
}
