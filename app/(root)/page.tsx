'use client'

import * as React from 'react'

export default function RootPage () {
  // Prevent Hydration conflicts
  const [mounted, setIsMounted] = React.useState(false)

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className='grid place-items-center'>
      Root Page
    </main>
  )
}
