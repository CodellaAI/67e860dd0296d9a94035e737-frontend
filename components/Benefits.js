
import { Truck, RotateCcw, Award, Clock } from 'lucide-react'

const benefits = [
  {
    icon: Truck,
    title: 'Free Premium Shipping',
    description: 'On all orders over $50. Delivered in eco-friendly packaging.'
  },
  {
    icon: RotateCcw,
    title: 'Easy 30-Day Returns',
    description: 'Not satisfied? Return within 30 days for a full refund.'
  },
  {
    icon: Award,
    title: 'Quality Guarantee',
    description: 'Every product meets our rigorous standards for excellence.'
  },
  {
    icon: Clock,
    title: '24/7 Customer Support',
    description: 'Our team is always available to assist with any questions.'
  }
]

export default function Benefits() {
  return (
    <section id="benefits" className="bg-white section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Why Choose Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">We're committed to providing an exceptional shopping experience with benefits you'll love.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 rounded-lg border border-gray-100 bg-white shadow-soft transition-transform hover:translate-y-[-5px]"
            >
              <div className="bg-primary-50 p-3 rounded-full mb-4">
                <benefit.icon size={24} className="text-primary-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
