
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Clock } from 'lucide-react'

export default function LimitedOffer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 11,
    minutes: 37,
    seconds: 42
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev
        
        if (seconds > 0) {
          seconds -= 1
        } else {
          seconds = 59
          if (minutes > 0) {
            minutes -= 1
          } else {
            minutes = 59
            if (hours > 0) {
              hours -= 1
            } else {
              hours = 23
              if (days > 0) {
                days -= 1
              } else {
                clearInterval(timer)
                return prev
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds }
      })
    }, 1000)
    
    return () => clearInterval(timer)
  }, [])

  const formatTime = (value) => {
    return value.toString().padStart(2, '0')
  }

  return (
    <section className="bg-gray-900 text-white py-16 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6 inline-block bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
              Limited Time Offer
            </div>
            <h2 className="heading-lg mb-6">Exclusive Summer Collection</h2>
            <p className="text-gray-300 text-lg mb-8">
              Our special edition summer collection is here for a limited time. Enjoy 25% off on all items with free shipping worldwide.
            </p>
            
            <div className="mb-8">
              <p className="text-gray-300 mb-3 flex items-center">
                <Clock size={18} className="mr-2" /> Offer ends in:
              </p>
              <div className="flex space-x-4">
                <div className="bg-gray-800 px-4 py-3 rounded-lg text-center min-w-[70px]">
                  <div className="text-2xl font-bold">{formatTime(timeLeft.days)}</div>
                  <div className="text-xs text-gray-400 uppercase mt-1">Days</div>
                </div>
                <div className="bg-gray-800 px-4 py-3 rounded-lg text-center min-w-[70px]">
                  <div className="text-2xl font-bold">{formatTime(timeLeft.hours)}</div>
                  <div className="text-xs text-gray-400 uppercase mt-1">Hours</div>
                </div>
                <div className="bg-gray-800 px-4 py-3 rounded-lg text-center min-w-[70px]">
                  <div className="text-2xl font-bold">{formatTime(timeLeft.minutes)}</div>
                  <div className="text-xs text-gray-400 uppercase mt-1">Minutes</div>
                </div>
                <div className="bg-gray-800 px-4 py-3 rounded-lg text-center min-w-[70px]">
                  <div className="text-2xl font-bold">{formatTime(timeLeft.seconds)}</div>
                  <div className="text-xs text-gray-400 uppercase mt-1">Seconds</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#" className="btn-primary bg-primary-600 hover:bg-primary-700">
                Shop the Collection
              </Link>
              <p className="text-gray-400 text-sm flex items-center">
                Use code: <span className="ml-2 bg-gray-800 px-3 py-1 rounded font-mono text-white">SUMMER25</span>
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="/images/summer-collection.jpg" 
                alt="Summer Collection" 
                width={600} 
                height={600}
                className="w-full h-auto"
              />
              
              <div className="absolute top-4 right-4 bg-primary-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                25% OFF
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary-600 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary-600 rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
