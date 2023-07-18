'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'

const MainNav = () => {
  const pathname = usePathname()

  const links = [
    {
      href: '/',
      label: 'Home',
      active: pathname === '/'
    },
    {
      href: '/services',
      label: 'About',
      active: pathname === '/services'
    },
    {
      href: '/about',
      label: 'Services',
      active: pathname === '/about'
    }
  ]

  return (
    <ul className='hidden items-center justify-center gap-x-4 md:inline-flex'>
      {
        links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                link.active ? 'text-slate-900 dark:text-white' : 'text-muted-foreground'
              )}
            >
              {link.label}
            </Link>
          </li>
        ))
      }
    </ul>
  )
}

export { MainNav }
