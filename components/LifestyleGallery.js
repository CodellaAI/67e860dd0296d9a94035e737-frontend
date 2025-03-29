
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function LifestyleGallery() {
  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Living with Our Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">See how our products enhance real homes and lifestyles</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1 md:col-span-2 row-span-2 relative group rounded-lg overflow-hidden shadow-medium">
            <Image 
              src="/images/lifestyle-1.jpg" 
              alt="Modern living room with our products" 
              width={800} 
              height={600}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
              <h3 className="text-2xl font-semibold mb-2">Modern Living</h3>
              <p className="mb-4 max-w-md">Our minimalist collection perfectly complements contemporary spaces</p>
              <Link href="#" className="inline-flex items-center text-white font-medium hover:underline">
                Explore Collection <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>

          <div className="relative group rounded-lg overflow-hidden shadow-medium">
            <Image 
              src="/images/lifestyle-2.jpg" 
              alt="Cozy bedroom setting" 
              width={400} 
              height={300}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">Cozy Retreats</h3>
              <p className="mb-2">Create your perfect sanctuary</p>
            </div>
          </div>

          <div className="relative group rounded-lg overflow-hidden shadow-medium">
            <Image 
              src="/images/lifestyle-3.jpg" 
              alt="Dining area with our tableware" 
              width={400} 
              height={300}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">Dining Experiences</h3>
              <p className="mb-2">Elevate everyday meals</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="#" className="btn-secondary">
            View All Inspirations
          </Link>
        </div>
      </div>
    </section>
  )
}
