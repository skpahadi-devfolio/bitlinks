"use client"
import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { signIn } from "next-auth/react"
import AuthButton from "@/components/AuthButton";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Home() {
  return (
    <main className="bg-purple-300">
      <section className="grid grid-cols-2 md:h-[50vh] h-[120vh]">
        <div className="flex flex-col gap-4 justify-center items-center">
        <p className={`text-2xl font-bold ${poppins.className}`}>The Best URL Shortener in the Market</p>
        <p className="md:px-28 text-left md:text-center">We are the most straightforward URL Shortener in the world. Most of the url Shorteners will track you or ask you to give your details for login. We understand your needs and hence we have created this URL Shortener.</p>
         <div className='flex mx-auto gap-4 justify-center items-center'>
                    <Link href="/shorten"><button className='bg-purple-800 px-6 py-3 w-32 rounded-xl font-bold text-white'>Try Now</button></Link>
                  <AuthButton className='bg-purple-800 px-6 py-3 rounded-xl font-bold text-white' />
                </div>
        <div className="flex flex-col md:flex-row justify-start relative">
         <Image className="mix-blend-darken" src={"/vector.jpg"} width={300} height={300} alt="An Image of Vector"/>
        </div>
        </div>

      </section>
    </main>
  );
}
