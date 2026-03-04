"use client"
import React, { useState } from 'react'

const contact = () => {

    const [loading, setloading] = useState(false)
    const [contactus, setcontactus] = useState([
        " Resolve technical issues or bugs",
        "Assist with platform-related queries",
        "Receive feature suggestions and improvements",
        "Discuss business or collaboration opportunities"
    ])
    const [contact, setcontact] = useState({ name: "", email: "", message: "" })
    const handleChange = (e) => {
        setcontact({ ...contact, [e.target.name]: e.target.value })
    }

    const handleClick = async(e) => {
        if (contact.name === "" || contact.email === "" || contact.message === "") {
            alert("message: please filled empty")
        }
        else {
            // alert("message: Message submit successfully")
            // setcontact({name: "", email: "", message: ""})
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const raw = JSON.stringify(contact);

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow"
            };

           try {
               setloading(true)
            let res = await fetch("http://localhost:3000/api/contact", requestOptions)
           let result = await res.json()
           console.log(result);
           alert("form submit successfully!")
           setcontact({ name: "", email: "", message: "" })
           setTimeout(() => {
               setloading(false)  
           }, 2000);
           } catch (error) {
            alert("form not filled successfully!");
            setloading(false)
           }
        }
    }
    return (
        <div className='flex justify-center items-center flex-col my-10 gap-3'>
            <p className='text-3xl font-bold py-2'>Welcome to Contact Page</p>
            <p className='text-xl font-semibold'>You can contact to us for any query</p>

            <div className="content cursor-pointer flex justify-center items-center flex-col gap-10">
                <div className="first  bg-purple-400 w-[90vw] md:max-w-[45vw] mx-auto hover:rotate-y-60 hover:transition-all hover:duration-700 hover:ease-in-out p-8 rounded-xl px-4">
                    <p className='text-2xl font-bold underline'>How Contact to us</p>
                    <p>
                        We value clear communication and user satisfaction. If you have any questions, feedback, technical concerns, or collaboration inquiries regarding our URL Shortener platform, we encourage you to get in touch with us.

                        Our Contact page is designed to provide a seamless and responsive communication experience. Users can submit their queries through a secure and validated contact form, ensuring accurate and structured message delivery.</p>
                </div>

                <div className="second  bg-purple-400 w-[90vw] md:max-w-[45vw] mx-auto hover:rotate-y-60 hover:transition-all hover:duration-700 hover:ease-in-out p-8 rounded-xl">
                    <p className='text-2xl font-bold underline'>How We Can Help</p>
                    {contactus.map((item,index)=>{
                        return <p key={index}>{index+1}.{item}</p>
                    })}
                </div>

                <div className="third  bg-purple-400 w-[90vw] md:max-w-[45vw] mx-auto hover:rotate-y-60 hover:transition-all hover:duration-700 hover:ease-in-out p-8 rounded-xl px-5">
                    <p>➤Every submission is handled with attention and professionalism. We aim to respond to all inquiries within 24-48 hours.</p>

                    <p>➤Your feedback plays a crucial role in helping us enhance the performance, usability, and security of our platform.</p>

                    <p>➤We appreciate your time and look forward to assisting you.</p>
                </div>
            </div>

             {loading && (<div className='bg-slate-800 h-20 w-56 rounded-full animate-pulse flex flex-col items-center justify-center text-white font-bold '>
                <p>Please Wait....</p>
                <p>Loading Message </p></div>)}
            <div className="mx-auto flex flex-col justify-center items-center my-10 gap-5 bg-pink-300 w-[95vw] md:w-[30vw] md:h-[60vh] max-h-[90vh] rounded-xl shadow-2xl transition-all duration-700 ease-in-out shadow-gray-800">
                <input onChange={handleChange} name='name' value={contact.name} className='bg-white md:w-[25vw] w-[85vw] rounded-lg p-3 focus:scale-105 transition-all duration-700 ease-in-out mt-7' type="text" placeholder='Enter your name' />
                <input onChange={handleChange} name='email' value={contact.email} className='bg-white md:w-[25vw] w-[85vw] rounded-lg p-3 focus:scale-105 transition-all ease-in-out duration-700' type="text" placeholder='Enter your email' />
                <textarea onChange={handleChange} value={contact.message} className='bg-white md:w-[25vw] w-[85vw] rounded-lg p-5 focus:scale-105 transition-all ease-in-out duration-700' name="message" type="message" placeholder='Enter your Message'></textarea>
                <button onClick={handleClick} disabled={loading}  className='w-[85vw] transition-all ease-in-out duration-700 focus:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed mb-7 md:w-[25vw] bg-blue-900 p-3 rounded-lg' type="submit"> {loading ? "Sending..." : "Send Message"}</button>
            </div>
        </div>
    )
}

export default contact
