'use client'

import Image from 'next/image'
import { useState } from 'react'

import { Input } from '@/components/ui/input'

export default function SearchForm() {
  const [search, setSearch] = useState<string>('')

  return (
    <form className='flex-center mx-auto mt-10 w-full sm:-mt-10 sm:px-5'>
      <label htmlFor='search' className='flex-center relative w-full max-w-3xl'>
        <Image
          src='/magnifying-glass.svg'
          alt='Search Icon'
          className='absolute left-8'
          width={32}
          height={32}
        />
        <Input
          className='base-regular h-fit border-0 bg-black-400 py-6 pl-20 pr-8 text-white-800 !ring-0 !ring-offset-0 placeholder:text-white-800 rounded-xl'
          type='text'
          placeholder='Search resources...'
          value={search}
          onChange={(event) => {
            setSearch(event.target.value)
          }}
        />
      </label>
    </form>
  )
}
