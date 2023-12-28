import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AllCategoryLink = ({ image, text, url}) => {
  return (
    <div className='w-32'>
        <Link href={url} className='flex flex-col'>
            <Image src={image} className='border border-slate-400'/>
            <p className='text-xs'>{text}</p>
        </Link>
    </div>
  )
}

export default AllCategoryLink