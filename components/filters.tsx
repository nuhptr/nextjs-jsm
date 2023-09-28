'use client'

import clsx from 'clsx'
import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

import { formUrlQuery } from '@/sanity/utils'

const links = [
  { id: 1, name: 'All', href: '/filters' },
  { id: 2, name: 'Next 13', href: '/next13' },
  { id: 3, name: 'Typescript', href: '/typescript' },
  { id: 4, name: 'Frontend', href: '/frontend' },
  { id: 5, name: 'Backend', href: '/backend' },
  { id: 6, name: 'Fullstack', href: '/fullstack' },
]

export default function Filters() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const [active, setActive] = useState<string>('')

  const handleFilter = (linkName: string) => {
    let newUrl = ''

    if (active === linkName) {
      setActive('')
      newUrl = formUrlQuery({ params: searchParams.toString(), keysToRemove: ['category'] })
    } else {
      setActive(linkName)
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: 'category',
        value: linkName.toLowerCase(),
      })
    }

    router.push(newUrl, { scroll: false })
  }

  return (
    <ul className='text-white-800 body-text no-scrollbar flex justify-center w-full max-w-full gap-2 overflow-auto mt-8 sm:max-w-4xl'>
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
