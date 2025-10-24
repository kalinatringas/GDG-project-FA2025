import React from 'react'

export default function Trading() {
  return (
    <div>
      <h1 className="text-3xl mb-8 text-center">TRADING</h1>

      <div className="max-w-5xl mx-auto border rounded-lg p-6">
        <h2 className="text-2xl mb-6 text-center">TRADE</h2>

        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* Left Side - Current User */}
          <div className="border rounded-lg p-4">
            <h3 className="text-xl mb-4 text-center">User</h3>
            <div className="grid grid-cols-3 gap-4 mb-4">
              {/* Add Item slots */}
              <div className="aspect-square border rounded flex items-center justify-center">
                <span className="text-3xl ">+</span>
              </div>
            </div>
          </div>

          {/* Right Side - Trading Partner */}
          <div className="border rounded-lg p-4">
            <h3 className="text-xl mb-4 text-center">Trader</h3>
            <div className="grid grid-cols-3 gap-4 mb-4">
              {/* Add Item slots */}
              <div className="aspect-square border rounded flex items-center justify-center">
                <span className="text-3xl">+</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button className="flex-1 px-6 py-3 text-xl rounded">
            ACCEPT
          </button>
          <button className="flex-1 px-6 py-3 text-xl rounded">
            CANCEL
          </button>
        </div>
      </div>
    </div>
  )
}
