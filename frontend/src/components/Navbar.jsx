import React from 'react'

export default function Navbar() {
return (
    <nav className="flex justify-between items-center p-4 mt-0 bg-gray-800">
        <h1 className="text-xl font-bold">TBNamed</h1>
        <div className="flex gap-6">
            <a href="/home" className="hover:text-gray-300">Home</a>
            <a href="/profile" className="hover:text-gray-300">Profile</a>
            <a href="/trading" className="hover:text-gray-300">Trading</a>
        </div>
    </nav>
 )
}
