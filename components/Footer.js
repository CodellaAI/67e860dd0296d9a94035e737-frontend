
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Youtube, MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-display text-2xl font-bold mb-6">PREMIUM</h3>
            <p className="text-gray-400 mb-6">
              Elevating everyday living with thoughtfully designed products that blend style, quality, and functionality.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Shop</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">New Arrivals</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Bestsellers</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Home & Living</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Kitchen</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Decor</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Gift Cards</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Sustainability</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Press</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Affiliates</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin size={20} className="text-primary-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">123 Design Street, Creative City, 10001</span>
              </li>
              <li className="flex">
                <Phone size={20} className="text-primary-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex">
                <Mail size={20} className="text-primary-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">support@premiumshop.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Premium Shop. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <img src="/images/payment-visa.svg" alt="Visa" className="h-6" />
            <img src="/images/payment-mastercard.svg" alt="Mastercard" className="h-6" />
            <img src="/images/payment-amex.svg" alt="American Express" className="h-6" />
            <img src="/images/payment-paypal.svg" alt="PayPal" className="h-6" />
            <img src="/images/payment-apple.svg" alt="Apple Pay" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  )
}
