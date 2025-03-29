
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <div className="relative bg-gray-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-primary-50"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center pt-24 pb-16 md:pt-32 md:pb-24">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 lg:pr-12 mb-10 lg:mb-0 text-center lg:text-left">
            <h1 className="heading-xl mb-6 text-gray-900">
              <span className="block">Elevate Your</span>
              <span className="block text-primary-600">Everyday Living</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Discover our curated collection of premium products designed to bring elegance and functionality to your modern lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="#featured-products" className="btn-primary">
                Shop Now
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link href="#benefits" className="btn-secondary">
                Learn More
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-lg overflow-hidden shadow-medium">
              <div className="aspect-w-4 aspect-h-3 w-full">
                <Image 
                  src="/images/hero-product.jpg" 
                  alt="Premium lifestyle product" 
                  width={800} 
                  height={600}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              
              {/* Floating Product Badge */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg shadow-soft p-4 max-w-xs">
                <div className="flex items-start">
                  <div>
                    <p className="font-medium text-gray-900">Signature Collection</p>
                    <p className="text-sm text-gray-600 mt-1">Starting at $129</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
