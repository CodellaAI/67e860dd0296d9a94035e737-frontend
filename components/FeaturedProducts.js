
'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, ShoppingCart, Heart } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Minimalist Ceramic Vase',
    price: 49.99,
    rating: 4.8,
    reviews: 124,
    image: '/images/product-1.jpg',
    badge: 'Bestseller'
  },
  {
    id: 2,
    name: 'Handcrafted Wooden Bowl',
    price: 39.99,
    rating: 4.7,
    reviews: 98,
    image: '/images/product-2.jpg',
    badge: 'New'
  },
  {
    id: 3,
    name: 'Premium Linen Throw Pillow',
    price: 29.99,
    rating: 4.9,
    reviews: 156,
    image: '/images/product-3.jpg'
  },
  {
    id: 4,
    name: 'Artisan Coffee Mug Set',
    price: 59.99,
    rating: 4.6,
    reviews: 87,
    image: '/images/product-4.jpg',
    badge: 'Limited'
  },
  {
    id: 5,
    name: 'Scandinavian Wall Clock',
    price: 79.99,
    rating: 4.8,
    reviews: 112,
    image: '/images/product-5.jpg'
  },
  {
    id: 6,
    name: 'Organic Cotton Throw Blanket',
    price: 89.99,
    rating: 4.9,
    reviews: 143,
    image: '/images/product-6.jpg',
    badge: 'Eco-friendly'
  }
]

export default function FeaturedProducts() {
  const carouselRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const scrollToIndex = (index) => {
    if (!carouselRef.current) return
    
    const newIndex = Math.max(0, Math.min(index, products.length - 1))
    setActiveIndex(newIndex)
    
    const scrollAmount = newIndex * (carouselRef.current.offsetWidth / 3)
    carouselRef.current.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
    })
  }

  const handleNext = () => {
    scrollToIndex(activeIndex + 1)
  }

  const handlePrev = () => {
    scrollToIndex(activeIndex - 1)
  }

  return (
    <section id="featured-products" className="bg-gray-50 section-padding">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div>
            <h2 className="heading-lg mb-2">Featured Products</h2>
            <p className="text-gray-600">Discover our most popular and trending items</p>
          </div>
          <div className="flex space-x-2 mt-4 md:mt-0">
            <button 
              onClick={handlePrev}
              disabled={activeIndex === 0}
              className="p-2 rounded-full border border-gray-300 text-gray-600 hover:bg-white hover:text-primary-600 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous products"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={handleNext}
              disabled={activeIndex >= products.length - 3}
              className="p-2 rounded-full border border-gray-300 text-gray-600 hover:bg-white hover:text-primary-600 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next products"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        
        <div className="relative">
          <div 
            ref={carouselRef}
            className="carousel-container flex overflow-x-auto scrollbar-hide gap-6 pb-4 snap-x"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((product) => (
              <div 
                key={product.id} 
                className="flex-none w-full sm:w-1/2 lg:w-1/3 snap-start"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-soft transition-all hover:shadow-medium group">
                  <div className="relative">
                    <div className="aspect-w-1 aspect-h-1 w-full">
                      <Image 
                        src={product.image} 
                        alt={product.name} 
                        width={400} 
                        height={400}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    
                    {product.badge && (
                      <span className="absolute top-4 left-4 bg-primary-600 text-white text-xs font-medium px-2 py-1 rounded">
                        {product.badge}
                      </span>
                    )}
                    
                    <button 
                      className="absolute top-4 right-4 p-2 rounded-full bg-white/80 text-gray-600 hover:text-primary-600 transition-colors"
                      aria-label="Add to wishlist"
                    >
                      <Heart size={18} />
                    </button>
                    
                    <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button className="bg-white text-primary-600 font-medium py-2 px-4 rounded-md flex items-center space-x-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        <ShoppingCart size={18} />
                        <span>Quick Add</span>
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400">
                        {Array(5).fill(0).map((_, i) => (
                          <svg 
                            key={i} 
                            className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`} 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-xs text-gray-500 ml-2">({product.reviews})</span>
                    </div>
                    
                    <h3 className="font-medium text-gray-900 mb-1">{product.name}</h3>
                    <p className="font-semibold text-primary-600">${product.price.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center mt-8">
          <button className="btn-primary">
            View All Products
          </button>
        </div>
      </div>
    </section>
  )
}
