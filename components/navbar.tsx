import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='flex-center fixed top-0 z-50 w-full border-b-2 border-black-200 py-7 text-white'>
      <div className='flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16'>
        <Link href='/'>
          <Image src='/jsm-logo.svg' alt='Tsm Logo LSM' width={55} height={40} priority />
        </Link>

        {/* Responsive Menu */}
        <Image
          src='/hamburger-menu.svg'
          alt='Hamburger Menu'
          width={30}
          height={30}
          priority
          className='block md:hidden'
        />

        <ul className='flex-center gap-x-3 max-md:hidden md:gap-x-10'>
          <li className='body-text text-gradient_blue-purple !font-bold'>
            <Link href='https://www.java5cript.com/' target='_blank'>
              Javascript Resource
            </Link>
          </li>
          <li className='body-text !font-normal'>
            <Link href='https://www.java5cript.com/' target='_blank'>
              Masterclass
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
