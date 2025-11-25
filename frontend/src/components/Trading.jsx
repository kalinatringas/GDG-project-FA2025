import React, { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

export default function Trading() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const tradingUserId = searchParams.get('user')

  // State for listings
  const [otherUserListings, setOtherUserListings] = useState([])
  const [myListings, setMyListings] = useState([])
  const [otherUserName, setOtherUserName] = useState('XX')

  // Pagination state
  const [otherUserPage, setOtherUserPage] = useState(1)
  const [myPage, setMyPage] = useState(1)
  const itemsPerPage = 5

  // Filter state
  const [otherUserFilter, setOtherUserFilter] = useState('all')
  const [myFilter, setMyFilter] = useState('all')

  // Trade offer state
  const [requestItems, setRequestItems] = useState([])
  const [offerItems, setOfferItems] = useState([])
  const maxItemsPerSide = 4

  const handleBackClick = () => {
    navigate('/profile')
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="p-6 text-center" style={{ backgroundColor: '#F58A07' }}>
        <h1 className="text-3xl font-bold text-white mb-2">Bartering</h1>
        <h2 className="text-xl text-white">Trade With {otherUserName}</h2>
      </div>

      {/* Back Button */}
      <div className="max-w-6xl mx-auto p-4">
        <button
          onClick={handleBackClick}
          className="flex items-center gap-2 text-sm hover:underline"
        >
          <span>←</span>
          <span>Back to Trades List</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Left Column - Listings */}
          <div className="lg:col-span-2 space-y-6 pr-6 border-r" style={{ borderColor: '#F7F5FB' }}>

            {/* XX's Listings */}
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">XX's Listings</h3>
                <select className="border rounded px-2 py-1 text-sm">
                  <option>All Accessories</option>
                </select>
              </div>
              <div className="grid grid-cols-5 gap-3 mb-4">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square border-2 rounded border-gray-300 bg-white flex items-center justify-center cursor-pointer hover:border-orange-400 transition-all active:border-orange-400"
                    onMouseDown={(e) => e.currentTarget.style.borderColor = '#F58A07'}
                    onMouseUp={(e) => e.currentTarget.style.borderColor = ''}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = ''}
                  >
                    <div className="text-4xl text-gray-300">I</div>
                  </div>
                ))}
              </div>
              {/* Pages */}
              <div className="flex items-center justify-center gap-2">
                <button className="text-white px-2 py-1 rounded text-sm" style={{ backgroundColor: '#F58A07' }} onMouseUp={(e) => e.currentTarget.blur()}>←</button>
                <span className="text-sm">Page 5</span>
                <button className="text-white px-2 py-1 rounded text-sm" style={{ backgroundColor: '#F58A07' }} onMouseUp={(e) => e.currentTarget.blur()}>→</button>
              </div>
            </div>

            {/* Horizontal Divider */}
            <div className="border-t" style={{ borderColor: '#F7F5FB' }}></div>

            {/* My Listings */}
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">My Listings</h3>
                <select className="border rounded px-2 py-1 text-sm">
                  <option>All Accessories</option>
                </select>
              </div>
              <div className="grid grid-cols-5 gap-3 mb-4">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square border-2 rounded border-gray-300 bg-white flex items-center justify-center cursor-pointer hover:border-orange-400 transition-all active:border-orange-400"
                    onMouseDown={(e) => e.currentTarget.style.borderColor = '#F58A07'}
                    onMouseUp={(e) => e.currentTarget.style.borderColor = ''}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = ''}
                  >
                    <div className="text-4xl text-gray-300">I</div>
                  </div>
                ))}
              </div>
              {/* Pagination */}
              <div className="flex items-center justify-center gap-2">
                <button className="text-white px-2 py-1 rounded text-sm" style={{ backgroundColor: '#F58A07' }} onMouseUp={(e) => e.currentTarget.blur()}>←</button>
                <span className="text-sm">Page 1</span>
                <button className="text-white px-2 py-1 rounded text-sm" style={{ backgroundColor: '#F58A07' }} onMouseUp={(e) => e.currentTarget.blur()}>→</button>
              </div>
            </div>

          </div>

          {/* Right Column - Trade Offer */}
          <div className="space-y-4 pl-6">

            {/* Your Request */}
            <div className="p-4">
              <h3 className="text-sm font-semibold mb-3">Your Request</h3>
              <div className="space-y-2">
                <div className="rounded p-2 flex items-center justify-between gap-3" style={{ backgroundColor: '#F9AB55' }}>
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-8 h-8 bg-orange-300 rounded flex items-center justify-center text-sm flex-shrink-0">🖼️</div>
                    <span className="text-xs truncate">Random Item</span>
                  </div>
                  <button className="rounded-full w-6 h-6 flex items-center justify-center text-black flex-shrink-0" style={{ backgroundColor: '#F58A07' }} onMouseUp={(e) => e.currentTarget.blur()}>✕</button>
                </div>
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="bg-gray-200 rounded p-2 flex items-center justify-end">
                    <button className="bg-gray-400 rounded w-6 h-6 flex items-center justify-center text-black" onMouseUp={(e) => e.currentTarget.blur()}>+</button>
                  </div>
                ))}
              </div>
            </div>

            {/* Horizontal Divider */}
            <div className="border-t" style={{ borderColor: '#F7F5FB' }}></div>

            {/* Your Offer */}
            <div className="p-4">
              <h3 className="text-sm font-semibold mb-3">Your Offer</h3>
              <div className="space-y-2">
                <div className="rounded p-2 flex items-center justify-between gap-3" style={{ backgroundColor: '#F9AB55' }}>
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-8 h-8 bg-orange-300 rounded flex items-center justify-center text-sm flex-shrink-0">🖼️</div>
                    <span className="text-xs truncate">Random Item</span>
                  </div>
                  <button className="rounded-full w-6 h-6 flex items-center justify-center text-black flex-shrink-0" style={{ backgroundColor: '#F58A07' }} onMouseUp={(e) => e.currentTarget.blur()}>✕</button>
                </div>
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="bg-gray-200 rounded p-2 flex items-center justify-end">
                    <button className="bg-gray-400 rounded w-6 h-6 flex items-center justify-center text-black" onMouseUp={(e) => e.currentTarget.blur()}>+</button>
                  </div>
                ))}
              </div>
            </div>

            {/* Horizontal Divider */}
            <div className="border-t" style={{ borderColor: '#F7F5FB' }}></div>

            {/* Make Offer Button */}
            <button className="w-full text-white py-3 rounded font-semibold transition-colors" style={{ backgroundColor: '#084887' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#909CC2'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#084887'} onMouseUp={(e) => e.currentTarget.blur()}>
              Make Offer
            </button>

          </div>

        </div>
      </div>
    </div>
  )
}
