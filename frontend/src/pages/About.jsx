import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex bg-[#f4f0e9] flex-col justify-center gap-6 md:w-2/4 text-gray-600shadow-lg'>
              <div className="max-w-7xl mx-auto">
                <div className="px-5 mt-8 rounded-lg ">
                  <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
                    <p className="text-gray-700 leading-relaxed">
                      At <span className="font-bold">skinAura.</span>, we are passionate about offering a curated selection of the best skincare products from trusted brands around the world. Our goal is to provide you with a diverse range of options to meet all your skincare needs, no matter your skin type or preference.
                    </p>
                  </section>
                  <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                    <p className="text-gray-700 leading-relaxed">
                    We aim to bring together high-quality skincare products from different brands that prioritize natural ingredients, sustainability, and cruelty-free practices. Our mission is to be your go-to destination for reliable and effective skincare solutions.
                    </p>
                  </section>
                </div>
              </div>
          </div>
      </div>

      <div className='text-xl py-4 text-center'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col justify-center md:flex-row text-sm mb-20 gap-5 md:gap-10'>
        <div className='bg-[#f4f0e9] border px-6 md:px-10 py-8 sm:py-14 flex flex-col gap-5 rounded-lg shadow-sm'>
          <b>Curated Selection:</b>
          <p className='text-gray-600'>We bring you a carefully curated selection of skincare products from the best brands, ensuring quality and variety.</p>
        </div>
        <div className='bg-[#f4f0e9] border px-6 md:px-10 py-8 sm:py-14 flex flex-col gap-5 rounded-lg shadow-sm'>
          <b>Natural & Safe Ingredients:</b>
          <p className='text-gray-600'>Our brands prioritize natural and safe ingredients, offering products that are gentle and effective for all skin types.</p>
        </div>
        <div className='bg-[#f4f0e9] border px-6 md:px-10 py-8 sm:py-14 flex flex-col gap-5 rounded-lg shadow-sm'>
          <b>Sustainable Choices:</b>
          <p className='text-gray-600'>We support eco-friendly practices by partnering with brands that use sustainable packaging and environmentally conscious production methods.</p>
        </div>
        <div className='bg-[#f4f0e9] border px-6 md:px-10 py-8 sm:py-14 flex flex-col gap-5 rounded-lg shadow-sm'>
          <b>Expert Recommendations:</b>
          <p className='text-gray-600'>Our platform offers expert-backed advice, ensuring that you find products tailored to your specific skin concerns and needs.</p>
        </div>
      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About
