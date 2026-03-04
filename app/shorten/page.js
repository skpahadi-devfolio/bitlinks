"use client"
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { signIn, useSession } from 'next-auth/react'

const Shorten = () => {
  const { data: session, status } = useSession()


  const [url, seturl] = useState("")
  const [shorturl, setshorturl] = useState("")
  const [generated, setgenerated] = useState("")

  useEffect(() => {
    if (status === "unauthenticated") {
      signIn("github")
    }
  }, [status])

  if (status === "loading") {
    return <p className="text-center mt-10 font-bold text-4xl">Checking login...</p>
  }

  if (!session) {
    return null
  }

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shorturl": shorturl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
        seturl("")
        setshorturl("")
        console.log(result)
        alert(result.message)
      })
      .catch((error) => console.error(error));
  }
  return (
    <div className='mx-auto max-w-lg w-[90vw] bg-purple-300 md:my-16 my-6 flex flex-col gap-8 rounded-lg px-8'>
      <h1 className='text-2xl font-bold text-center'>Generate Your Short URLs</h1>
      <div className='flex flex-col justify-start items-center gap-5'>
        <input className='p-2 w-full bg-white rounded-lg focus:bg-purple-600' value={url} type="text" placeholder='Enter your URLs' onChange={(e) => { seturl(e.target.value) }} />
        <input className='p-2 w-full bg-white rounded-lg focus:bg-purple-600' value={shorturl} type="text" placeholder='Enter your preferred short URL text' onChange={(e) => { setshorturl(e.target.value) }} />
        <button onClick={generate} className='bg-purple-800 px-16 py-3 rounded-xl font-bold text-white my-5'>Generate</button>
      </div>

      {generated && <code>
        Your Links:- <Link target='_blank' href={generated}>{generated}</Link>
      </code>}
    </div>
  )
}

export default Shorten
