
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, ShoppingBag, Search, ChevronDown, User } from 'lucide-react'
import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'

const categories = [
  { name: 'New Arrivals', href: '#' },
  { name: 'Bestsellers', href: '#' },
  { name: 'Home & Living', href: '#' },
  { name: 'Fashion', href: '#' },
  { name: 'Accessories', href: '#' },
]

export default function Navigation() {
  const [isSticky, setIsSticky] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`w-full z-50 transition-all duration-300 ${isSticky ? 'fixed top-0 bg-white shadow-soft py-3' : 'absolute bg-transparent py-5'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="font-display text-2xl font-bold text-gray-900">PREMIUM</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {categories.map((category) => (
              <Link 
                key={category.name} 
                href={category.href}
                className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              <Search size={20} />
            </button>
            <Link href="#" className="text-gray-700 hover:text-primary-600 transition-colors">
              <User size={20} />
            </Link>
            <Link 
              href="#" 
              className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
            >
              <ShoppingBag size={20} />
              <span className="ml-1 text-xs font-medium bg-primary-600 text-white rounded-full h-5 w-5 flex items-center justify-center">0</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
                    <span className="sr-only">Open menu</span>
                    {open ? (
                      <X className="h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Menu className="h-6 w-6" aria-hidden="true" />
                    )}
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute right-0 z-10 mt-3 w-screen max-w-xs transform px-2 sm:px-0">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white p-6">
                          {categories.map((category) => (
                            <Link
                              key={category.name}
                              href={category.href}
                              className="flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-primary-500 focus-visible:ring-opacity-50"
                            >
                              <div className="ml-3">
                                <p className="text-sm font-medium text-gray-900">
                                  {category.name}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="bg-gray-50 p-4">
                          <div className="flex items-center space-x-4">
                            <Link href="#" className="text-gray-700 hover:text-primary-600 transition-colors">
                              <Search size={20} />
                            </Link>
                            <Link href="#" className="text-gray-700 hover:text-primary-600 transition-colors">
                              <User size={20} />
                            </Link>
                            <Link 
                              href="#" 
                              className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
                            >
                              <ShoppingBag size={20} />
                              <span className="ml-1 text-xs font-medium bg-primary-600 text-white rounded-full h-5 w-5 flex items-center justify-center">0</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </div>
        </div>

        {/* Search Bar */}
        <Transition
          show={isSearchOpen}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="mt-4 relative">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full p-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <button 
              onClick={() => setIsSearchOpen(false)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X size={16} />
            </button>
          </div>
        </Transition>
      </div>
    </header>
  )
}
