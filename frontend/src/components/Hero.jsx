import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-300 rounded-lg overflow-hidden shadow-lg">
      {/* Hero Left Side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center bg-[#f6f6f6] p-10 sm:p-12">
        <div className="text-[#414141] max-w-md">
          <p className="prata-regular text-2xl lg:text-3xl leading-snug sm:leading-relaxed mb-6">
            Discover, shop, and glow effortlessly!
          </p>
          <div className="flex items-center gap-4 mt-4 group cursor-pointer">
            <p className="font-semibold text-base lg:text-lg transition duration-300 group-hover:text-[#ff7f50]">
             Happy skin begins here
            </p>
          </div>
        </div>
      </div>
      {/* Hero Right Side */}
      <div className="w-full sm:w-1/2">
        <img
          className="w-full h-full object-cover"
          src={assets.hero_img}
          alt="Skincare Banner Image"
        />
      </div>
    </div>
  )
}

export default Hero
