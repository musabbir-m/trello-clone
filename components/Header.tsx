import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header>
        
        <Image 
        src="https://links.papareact.com/c2cdd5" 
        alt="logo"
        width={200}
        height={70}
        className='w-44  pb-10 md:pb-0 object-contain'
        />
        {/* Serch box */}
        <div>
        <form action="">
            <MagnifyingGlassIcon className='h-6 w-6 text-gray-500'/>
            <input type="text" />
            <button hidden>Search</button>
        </form>
        </div>

        
    </header>
  )
}

export default Header
