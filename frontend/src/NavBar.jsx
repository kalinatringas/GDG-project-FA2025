// =====================================================
// 🚀 REACT NAVIGATION BAR - CODE-ALONG TEMPLATE (v2)
// =====================================================
// Objective: Build a responsive navbar with desktop + mobile menus
// Fill in each TODO during the walkthrough. Comments guide every step.

import React from "react";

//TODO #1: Import useState from React
import { useState } from 'react';

// (Optional) If using icons: import { Menu, X } from 'lucide-react';


function Navbar() {

  // =====================================================
  // 🧠 SECTION 1: STATE MANAGEMENT
  // =====================================================
  // TODO #2: Create state to track if mobile menu is open/closed
  // Hint: useState should start with 'false' (menu closed)
  const [isOpen, setisOpen] = useState(false);

  const [isFavorited, setisFavorited] = useState(false);


  // TODO #3: Create toggle function
  // This flips the menu open/close each time button is clicked
  const toggleMenu = () => {
    setisOpen(!isOpen);
  };


  const handleClick = () => {
    setisFavorited(true);
  };


  // =====================================================
  // 🔗 SECTION 2: NAVIGATION LINKS DATA
  // =====================================================
  // TODO #4: Make an array of navigation links (objects with 'name' and 'href')
  // Example: { name: 'Home', href: '/' }
  const navLinks = [
    { name: 'home', href: '/' },
    { name: 'profile', href: '/profile' },
    { name: 'trades', href: '/trade' },
    { name: 'explore', href: '/explore' },
  ];


  // =====================================================
  // 🧩 SECTION 3: STRUCTURE & LAYOUT
  // =====================================================
  return (
    // TODO #5: Replace <div> with proper semantic navigation tag
    <div className="bg-white shadow-md sticky top-0 z-50">
      
      {/* Outer container */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* ===================================================== */}
          {/* 🏷 SECTION 4: LOGO / BRAND */}
          {/* ===================================================== */}
          {/* TODO #6: Add your logo or brand name */}
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-bold text-blue-600">
              TBNamed
            </a>
          </div>

          {/* ===================================================== */}
          {/* 💻 SECTION 5: DESKTOP NAVIGATION */}
          {/* ===================================================== */}
          {/* TODO #7: Display navLinks as horizontal list */}
          {/* Visible only on medium+ screens */}
          {/* Hint: 'hidden md:flex' */}
          <div className="hidden md:flex">
            <div className="flex space-x-8">
              {/* TODO #8: Loop through navLinks with .map() */}
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-gray-700 hover:text-blue-600">
                  {link.name}
                </a>
              ))}
            </div>
          </div>


          {/* ===================================================== */}
          {/* 📱 SECTION 6: MOBILE MENU BUTTON */}
          {/* ===================================================== */}
          {/* TODO #9: Add hamburger icon button (visible on mobile only) */}
          {/* Hint: 'md:hidden' */}
          <div className="md:hidden">
            {/* TODO #10: Add button + onClick to toggle menu */}
            <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>


      {/* ===================================================== */}
      {/* 📂 SECTION 7: MOBILE MENU DROPDOWN */}
      {/* ===================================================== */}
      {/* TODO #11: Conditionally render dropdown when isOpen === true */}
      {/* Use && operator */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="block px-3 py-2 text-gray-700 hover:bg-gray-100">
              {link.name}
            </a>
          ))}
        </div>
      )}
    </div> 
  );
}

export default Navbar;


// =====================================================
// 🧠 INSTRUCTOR / REVIEW NOTES
// =====================================================
/*
SECTION 1: State
- Why use useState? → React's way to remember if menu is open.
- Why boolean? → Menu is either open (true) or closed (false).

SECTION 2: navLinks Array
- Use .map() for scalability. Add/remove links easily.
- Each item needs a unique 'key' for React to track efficiently.

SECTION 3: Semantic Structure
- Use <nav> tag for accessibility.
- Tailwind classes like 'max-w-7xl mx-auto' center your content.

SECTION 4: Responsive Logic
- 'hidden md:flex' → hidden by default, flex on medium screens and up.
- 'md:hidden' → opposite (visible on mobile only).
- 'sticky top-0' → navbar sticks to top on scroll.

SECTION 5: Interactivity
- Use conditional rendering for dropdown.
- Close menu automatically when clicking a link (optional challenge).

BONUS IDEAS:
1️⃣ Add active link highlighting with React Router's NavLink.
2️⃣ Add transition animation for dropdown (using CSS or Framer Motion).
3️⃣ Add dark mode toggle button.
4️⃣ Add accessibility attributes (aria-expanded, role="navigation").
5️⃣ Add dropdown submenus (advanced challenge).
*/






