import * as React from 'react'

export default function AuthLayout ({
  children
}:{
  children: React.ReactNode
}) {
  return (
    <div className='flex h-full items-center'>
      {children}
    </div>
  )
}
