"use client"

import { useSession, signIn, signOut } from "next-auth/react"

export default function AuthButton() {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return (
      <button className="bg-gray-400 px-4 py-2 rounded-xl text-white">
        Loading...
      </button>
    )
  }

  if (session) {
    return (
      <div className="flex items-center gap-4">
        <p className="font-semibold text-purple-900">
          {session?.user?.name}
        </p>

        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="bg-purple-800 px-6 py-3 rounded-xl text-white font-bold transition"
        >
            SignOut
        </button>
      </div>
    )
  }

  return (
    <button
      onClick={() => signIn("github")}
      className="bg-purple-800 px-6 py-3 rounded-xl font-bold text-white transition"
    >
      GitHub
    </button>
  )
}