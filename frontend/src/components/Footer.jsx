import React from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm px-4'>

        <div>
            <Link to='/' className="text-3xl font-bold text-gray-700 items-center space-x-2 flex">
                <span className='text-gray-500'>skin</span><span className='text-gray-700'>Aura.</span>
            </Link>
            <p className='w-full md:w-2/3 text-gray-600'>
            Explore the best in skincare from your favorite brands, all in one place. Our curated selection brings you trusted products from top names, ensuring quality and effectiveness for every skin type. From hydrating moisturizers to targeted treatments, find everything you need to achieve your skincare goals. Discover exclusive deals and shop with confidence as you elevate your beauty routine. Start your journey to healthier, glowing skin today.
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1-212-456-7890</li>
                <li>contact@skinAura.com</li>
            </ul>
        </div>

      </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ skinAura.com - All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer
