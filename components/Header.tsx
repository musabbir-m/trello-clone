"use client"
import { MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import React from 'react'
import Avatar from 'react-avatar';

const Header = () => {
  return (
    <header>
        <div className='flex flex-col md:flex-row gap-x-5 justify-between bg-gray-500/10 p-5 rounded-b-2xl'>

          {/* hidden div for gradient */}
                <div  className='absolute
                top-0 left-0 w-full
                bg-gradient-to-br
                from-pink-400
                to-[#0055D1]
                h-96
                rounded-md
                filter
                blur-3xl
                opacity-50
                -z-20
                '
                />
               
              
        <Image 
        src="https://links.papareact.com/c2cdd5" 
        alt="logo"
        width={200}
        height={70}
        className='w-44  pb-10 md:pb-0 object-contain'
        />
        {/* Serch box */}
        <div className='flex items-center justify-end  gap-x-3 flex-1'>
          <form action="" className="flex items-center space-x-5
          bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
              <MagnifyingGlassIcon className='h-6 w-6 text-gray-500'/>
              <input placeholder='search' type="text" className='flex-1 outline-none p-2' />
              <button type='submit' hidden>Search</button>
          </form>
          <Avatar round size='40' color='blue' name="Musabbir" />
        </div>
        </div>

        <div className='flex items-center justify-center px-5 py-2 md:py-5'>
          <p className=' p-5 flex items-center text-sm font-light
           pr-5 shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-[#0055D1]'>
            <UserCircleIcon className='inline-block h-10 w-10 text-[#0055D1]'/>
            GPT producing Summary of your day
          </p>
        </div>
        

        
    </header>
  )
}

export default Header
