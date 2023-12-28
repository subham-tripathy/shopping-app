'use client'
import Link from 'next/link'
import React, { useState } from 'react'

import MagnifyingGlassIcon from '@heroicons/react/24/outline/MagnifyingGlassIcon'
import Bars3Icon from '@heroicons/react/24/solid/Bars3Icon'
import XMarkIcon from '@heroicons/react/24/solid/XMarkIcon'



const NavBar = () => {
const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className='relative flex justify-between items-center px-4 lg:px-14 pt-2 pb-12 md: shadow-md shadow-slate-400 md:shadow-lg bg-white'>
        <Link href={'/'} className='text-xl md:text-3xl xl:text-4xl font-bold'>Shopping App</Link>
        <div className=' bg-white
            absolute top-12 left-1 right-1 border border-black rounded-md h-10  flex items-center
            md:top-0 md:left-auto md:right-auto md:relative md:w-[40%]'>
            <MagnifyingGlassIcon className='relative p-2  h-full cursor-pointer'/>
            <input type="search" name="searchProducts" id="searchProducts" className='border-l border-black outline-none pl-3 mr-3 h-full w-full' placeholder='Search Products'/>
        </div>

        {/* FOR MOBILES */}
        <div className='lg:hidden'>
            {
                menuOpen?(
                    <XMarkIcon className='h-10 z-10' onClick={()=>setMenuOpen(false)}/>
                ):(
                    <Bars3Icon className='h-10' onClick={()=>setMenuOpen(true)}/>
                )
            }
        </div>
        {
            menuOpen?(
                <div className='text-base md:text-2xl absolute bg-slate-600 flex text-center flex-col left-0 right-0 top-14 py-20 -z-0 lg:hidden text-white space-y-5'>
                    <Link href={'/login'}>Login</Link>
                    <Link href={'/cart'}>Cart</Link>
                    <Link href={'/'}>Become a Seller</Link>
                </div>
            ):(null)
        }


        {/* FOR DESKTOPS */}
        <div className='text-xl hidden lg:block lg:space-x-7'>
            <Link href={'/login'} className='px-4 py-2 rounded-xl hover:bg-cyan-300'>Login</Link>
            <Link href={'/cart'} className='px-4 py-2 rounded-xl hover:bg-cyan-300'>Cart</Link>
            <Link href={'/'} className='px-4 py-2 rounded-xl hover:bg-cyan-300'>Become a Seller</Link>
        </div>
    </div>
  )
}

export default NavBar