"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import AuthButton from './AuthButton'
const Navbar = () => {

    const [isopen, setisopen] = useState(false)

    const handleClick = () => {
        setisopen(!isopen)
    }
    return (
        <nav className='md:h-16 h-48 bg-purple-700 flex justify-between px-10 items-center flex-col text-white md:flex-row min-w-full'>
            <div className="logo font-bold text-2xl relative">
                <Link href="/">BitLinks</Link>
                    <button onClick={handleClick} className="md:hidden absolute left-48 bg-gray-900">
                <lord-icon
                    src="https://cdn.lordicon.com/vjgknpfx.json"
                    trigger="click"
                    style={{ width: "48px", height: "25px" }}
                ></lord-icon>
            </button>
            </div>
            
            <ul className={`flex justify-center my-5 items-center gap-1 md:gap-5 text-lg flex-col md:flex-row ${isopen ? "block" : "hidden"} md:flex`}>
                <Link href="/"><li>Home</li></Link>
                <Link href="/about"><li>About</li></Link>
                <Link href="/shorten"><li>Shorten</li></Link>
                <Link href="/contact"><li>Contact Us</li></Link>
                <li className='flex gap-4 justify-center items-center flex-col md:flex-row relative -right-32 -top-32 min-w-28 md:-right-0 md:-top-0'>
                    <Link href="/shorten"><button className='bg-purple-800 px-6 py-3 rounded-xl font-bold'>Try Now</button></Link>
                   <AuthButton className='bg-purple-800 px-6 py-3 rounded-xl font-bold '/>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
