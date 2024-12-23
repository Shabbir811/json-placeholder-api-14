import Link from 'next/link'
import React from 'react'

function Header() {
    return (
        <div className='bg-purple-300 sticky top-0 border-b-2 border-blue-800 rounded-bl-lg rounded-br-lg '>
            <div className='wraper  h-12 flex items-center text-white justify-between'>
                <div className='font-bold text-lg leading-5'>
                    <h2 className='text-blue-600/65'>GHULAM</h2>
                    <h2 className='text-blue-900/65'>SHABBIR</h2>
                </div>

                <nav className='flex gap-5'>
                    <Link href={"/"}>Home</Link>
                    <Link href={"/"}>Contact</Link>
                    <Link href={"/"}>About</Link>
                </nav>

            </div>
        </div>
    )
}

export default Header
