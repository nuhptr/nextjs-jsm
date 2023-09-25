import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='text-white-800 flex-between body-text w-full gap-y-10 border-t border-black-400 bg-black-100 px-16 py-12 max-md:flex-col'>
      <p className='max-md:text-center'>
        Copyright &copy; 2023 TS Mastery Pro | All Right Reserved
      </p>

      <div className='flex gap-x-9'>
        <Link href='/terms-of-use'>Terms & Conditions</Link>
        <Link href='/privacy-policy'>Privacy Policy</Link>
      </div>
    </footer>
  )
}
