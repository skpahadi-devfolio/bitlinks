"use client"
import React from 'react'
import { useState } from 'react'

const about = () => {

    const [num, setnum] = useState([
         "⚡ Fast and instant link generation",
    "🔒 Secure redirection",
    "📱 Mobile-friendly design",
    "🎯 Simple and user-friendly interface"
    ])

    const [nums, setnums] = useState([ "Convert long URLs into short, manageable links",

                    "Provide quick redirection to the original website",

                    "Ensure secure and reliable link handling",

                    "Improve link sharing experience across platforms"
    ])
    return (
        <div className='flex justify-center items-center flex-col my-16 gap-10 cursor-pointer'>
            <div className="heading bg-purple-400 hover:scale-x-110 hover:transition-all hover:duration-700 hover:ease-in-out rounded-xl w-[85vw] md:w-[60vw] p-6 shadow-2xl shadow-slate-700">
                <p className='font-bold underline text-2xl'>About Us</p>
                <p>Welcome to our URL Shortener - a simple, fast, and reliable tool designed to transform long and complex web links into short, easy-to-share URLs.

                    In today's digital world, long URLs can look messy and are difficult to share across social media platforms, emails, or messages. Our URL Shortener solves this problem by generating compact links that are clean, professional, and convenient to use.</p>
            </div>

            <div className="what bg-purple-400  hover:scale-x-110 hover:transition-all hover:duration-700 hover:ease-in-out rounded-xl w-[85vw] md:w-[60vw] p-6 shadow-2xl shadow-slate-700">
                <p className='font-bold text-2xl underline'>What We Do </p>

                {nums.map((item, index)=>{
                    return <p key={index}>{index+1}.{item}</p>
                })}
            </div>

            <div className="why bg-purple-400  hover:scale-x-110 hover:transition-all hover:duration-700 hover:ease-in-out rounded-xl w-[85vw] md:w-[60vw] p-6 shadow-2xl shadow-slate-700">
                <p className='font-bold text-2xl underline'>Why Choose Us? </p>

                {num.map((item,index) => {
                    return <p key={index}>{index+1}.{item}</p>
                })}
            </div>

            <div className="conclusion bg-purple-400  hover:scale-x-110 hover:transition-all hover:duration-700 hover:ease-in-out rounded-xl w-[95vw] md:w-[60vw] p-6 shadow-2xl shadow-slate-700">
                <p className='font-bold text-2xl underline'>Main Goal</p>
                <p>Our mission is to make link sharing smarter, faster, and more efficient. We aim to provide a seamless experience for individuals, developers, businesses, and content creators who want clean and professional links.

                    Whether you're sharing links on social media, embedding them in presentations, or sending them via email, our URL Shortener ensures your links are optimized and easy to manage.</p>
            </div>
        </div>
    )
}

export default about
