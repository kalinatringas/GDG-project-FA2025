import React from 'react'

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center p-4 mt-0 bg-gray-800 text-white">
      <h1 className="text-xl font-bold">TBNamed</h1>
      <div className="flex gap-6">
        {/* Does not need to be /home if this is the landing page */}
        <a href="/" className="hover:text-gray-300">Home</a>
        <a href="/profile" className="hover:text-gray-300">Profile</a>
      </div>
    </nav>
  )
}
