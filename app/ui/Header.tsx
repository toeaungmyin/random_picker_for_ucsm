'use client'
import { links } from '@/app/lib/utils'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const active = " text-white bg-gray-900"
const inActive = " text-gray-300 hover:bg-gray-700 hover:text-white"

function Header() {
    const pathname = usePathname();
    
    return (
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex items-center justify-center sm:items-stretch sm:justify-start gap-4">
                        <Link href={'/'} className="flex items-center gap-2">
                            <Image width={100} height={100} className="h-10 w-auto" src="/logo.png" alt="Your Company" />
                            <div className="text-xl font-bold">R-Tools</div>
                        </Link>
                        <div className="hidden sm:flex">
                            {links.map((link) => 
                            (
                                <Link key={link.name} href={link.href} className={clsx(
                                    'rounded-sm px-3 py-3 text-sm font-medium', pathname === link.href ? active : inActive
                                )}>
                                    Random Picker
                                </Link>
                                )
                            )}
                        </div>
                    </div>
                    {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5"></span>
                            <span className="sr-only">View notifications</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                            </svg>
                        </button>

                        <div className="relative ml-3">
                            <div>
                                <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                    <span className="absolute -inset-1.5"></span>
                                    <span className="sr-only">Open user menu</span>
                                    <Image className="h-8 w-8 rounded-full" src="" alt=""/>
                                </button>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            
            {/* <div className="sm:hidden" id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    <Link href="#" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Dashboard</Link>
                    <Link href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Random Picker</Link>
                    <Link href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</Link>
                    <Link href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</Link>
                </div>
            </div> */}
        </nav>
    )
}

export default Header