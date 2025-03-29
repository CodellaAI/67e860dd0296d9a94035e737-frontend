
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    content: 'I\'ve been searching for high-quality home goods that don\'t break the bank, and I finally found them here. The ceramic vase I purchased is absolutely stunning and arrived in perfect condition.',
    author: 'Sarah Johnson',
    role: 'Interior Designer',
    avatar: '/images/avatar-1.jpg',
    rating: 5
  },
  {
    id: 2,
    content: 'The attention to detail on their products is remarkable. I ordered the handcrafted wooden bowl and was impressed by both the craftsmanship and the sustainable packaging. Will definitely be ordering again!',
    author: 'Michael Thompson',
    role: 'Sustainability Advocate',
    avatar: '/images/avatar-2.jpg',
    rating: 5
  },
  {
    id: 3,
    content: 'Customer service is top-notch. I had questions about my order and received a response within minutes. The products are beautiful and exactly as described. Highly recommend!',
    author: 'Emily Rodriguez',
    role: 'Loyal Customer',
    avatar: '/images/avatar-3.jpg',
    rating: 4
  },
  {
    id: 4,
    content: 'The premium linen throw pillows transformed my living room. The quality is exceptional, and they\'ve held up beautifully even with daily use. Worth every penny!',
    author: 'David Chen',
    role: 'Home Decor Enthusiast',
    avatar: '/images/avatar-4.jpg',
    rating: 5
  }
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[activeIndex]

  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Don't just take our word for it. Here's what our customers have to say about their experience.</p>
        </div>

        <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-soft">
          <div className="grid md:grid-cols-2">
            {/* Testimonial Image */}
            <div className="relative h-64 md:h-auto">
              <Image 
                src="/images/testimonial-lifestyle.jpg" 
                alt="Customer using our products" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
            </div>

            {/* Testimonial Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <Quote size={40} className="text-primary-200" />
              </div>

              <p className="text-lg text-gray-700 mb-6 italic">
                "{currentTestimonial.content}"
              </p>

              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 mr-2">
                  {Array(5).fill(0).map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-5 h-5 ${i < currentTestimonial.rating ? 'fill-current' : 'text-gray-300'}`} 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>

              <div className="flex items-center">
                <div className="mr-4">
                  <Image 
                    src={currentTestimonial.avatar} 
                    alt={currentTestimonial.author} 
                    width={48} 
                    height={48}
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{currentTestimonial.author}</h4>
                  <p className="text-sm text-gray-600">{currentTestimonial.role}</p>
                </div>
              </div>

              <div className="flex space-x-2 mt-8">
                <button 
                  onClick={handlePrev}
                  className="p-2 rounded-full border border-gray-300 text-gray-600 hover:bg-white hover:text-primary-600"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={handleNext}
                  className="p-2 rounded-full border border-gray-300 text-gray-600 hover:bg-white hover:text-primary-600"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => setActiveIndex(index)}
              className={`p-4 rounded-lg transition-all ${activeIndex === index ? 'bg-primary-50 border-2 border-primary-200' : 'bg-white border border-gray-100 hover:border-primary-100'}`}
            >
              <div className="flex items-center mb-2">
                <Image 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  width={32} 
                  height={32}
                  className="rounded-full mr-2"
                />
                <p className="font-medium text-sm text-left">{testimonial.author}</p>
              </div>
              <div className="flex text-yellow-400">
                {Array(5).fill(0).map((_, i) => (
                  <svg 
                    key={i} 
                    className={`w-3 h-3 ${i < testimonial.rating ? 'fill-current' : 'text-gray-300'}`} 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
