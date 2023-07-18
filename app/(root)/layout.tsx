import * as React from 'react'

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className=''>
      {children}
    </div>
  )
}
