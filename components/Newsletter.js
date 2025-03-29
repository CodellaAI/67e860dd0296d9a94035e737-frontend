
'use client'

import { useState } from 'react'
import { Mail, CheckCircle2 } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isError, setIsError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!email || !email.includes('@')) {
      setIsError(true)
      return
    }
    
    // Simulate form submission
    setIsError(false)
    setIsSubmitted(true)
    setEmail('')
    
    // Reset after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  return (
    <section className="bg-gray-50 py-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-md mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter for exclusive offers, early access to new collections, and design inspiration.
          </p>
          
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-soft">
            {isSubmitted ? (
              <div className="flex flex-col items-center py-4">
                <CheckCircle2 size={48} className="text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Thank You for Subscribing!</h3>
                <p className="text-gray-600">
                  You'll be the first to know about our new arrivals and exclusive offers.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Mail size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      setIsError(false)
                    }}
                    placeholder="Your email address"
                    className={`w-full pl-10 pr-4 py-3 rounded-md border ${isError ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500`}
                    aria-label="Email address"
                  />
                  {isError && (
                    <p className="absolute text-sm text-red-500 mt-1">Please enter a valid email address</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="btn-primary whitespace-nowrap"
                >
                  Subscribe Now
                </button>
              </form>
            )}
            
            <p className="text-xs text-gray-500 mt-4">
              By subscribing, you agree to our Privacy Policy. We respect your privacy and will never share your information.
            </p>
          </div>
          
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <div className="flex items-center">
              <img src="/images/trust-badge-1.svg" alt="Secure Payment" className="h-12 w-auto" />
              <span className="ml-2 text-sm text-gray-600">Secure Payment</span>
            </div>
            <div className="flex items-center">
              <img src="/images/trust-badge-2.svg" alt="Verified Quality" className="h-12 w-auto" />
              <span className="ml-2 text-sm text-gray-600">Verified Quality</span>
            </div>
            <div className="flex items-center">
              <img src="/images/trust-badge-3.svg" alt="100% Authentic" className="h-12 w-auto" />
              <span className="ml-2 text-sm text-gray-600">100% Authentic</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
