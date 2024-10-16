import React from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
        <Link to='/' className="text-3xl font-bold text-gray-700 items-center space-x-2 flex">
                <span className='text-gray-500'>skin</span><span className='text-gray-700'>Aura. </span><span className='text-sm text-gray-700'>admin </span>
            </Link>
        <button onClick={()=>setToken('')} className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar