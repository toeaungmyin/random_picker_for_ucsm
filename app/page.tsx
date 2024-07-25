import { links } from '@/app/lib/utils'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className='w-full min-h-[82vh] flex justify-center items-center gap-2'>
      <div className="gird grid-cols-2">
        {
          links.map((link) => (
            <Link key={link.name} href={link.href} className='bg-blue-500 p-6 rounded m-2 text-xl font-semibold'>
              {link.name}
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default page