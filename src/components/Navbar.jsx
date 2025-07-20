"use client"

import { useState } from "react"
import { NavLink } from "react-router-dom"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navItems = [
    { name: "Home", id: "home", nav: "/" },
    { name: "Projects", id: "projects", nav: "/projects" },
    { name: "About", id: "about", nav: "/about" },
    { name: "Contact", id: "contact", nav: "/contact" },
  ]

  return (
    <nav className="bg-gray-800 shadow-lg opacity-80 backdrop:blur-[2px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-white text-2xl font-bold">React-Tools</span>
          </div>

          {/* Center - Navigation items */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.nav}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-none ${isActive
                    ? "bg-gray-700 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            
            </div>
          </div>

          {/* Login/Register */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-none">
                Login
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-none">
                Register
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="">
            <button
              className="bg-gray-700 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white md:hidden cursor-none"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-700">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.nav}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-none ${isActive
                    ? "bg-gray-700 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <div className="border-t border-gray-600 pt-4 pb-3">
              <div className="flex flex-col space-y-2">
                <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium text-left cursor-none">
                  Login
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-base font-medium text-left cursor-none">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </nav>
  )
}
