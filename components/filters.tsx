'use client'

import { useState } from 'react'
import clsx from 'clsx'

const links = [
  { id: 1, name: 'All', href: '/filters' },
  { id: 2, name: 'Next 13', href: '/next13' },
  { id: 3, name: 'Typescript', href: '/typescript' },
  { id: 4, name: 'Frontend', href: '/frontend' },
  { id: 5, name: 'Backend', href: '/backend' },
  { id: 6, name: 'Fullstack', href: '/fullstack' },
]

export default function Filters() {
  const [active, setActive] = useState('')

  const handleFilter = (linkName: string) => {
    setActive(linkName)
  }

  return (
    <ul className='text-white-800 body-text no-scrollbar flex w-full max-w-full gap-2 overflow-auto py-12 sm:max-w-2xl'>
      {links.map((link) => (
        <button
          key={link.id}
          onClick={() => handleFilter(link.name)}
          className={clsx(
            'whitespace-nowrap rounded-full px-8 py-3.5 capitalize',
            active === link.name ? 'gradient_blue-purple' : ''
          )}>
          {link.name}
        </button>
      ))}
    </ul>
  )
}
