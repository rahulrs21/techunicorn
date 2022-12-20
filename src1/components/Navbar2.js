import React from 'react';
import { FaSearch, FaHeart, FaShoppingCart,FaUserAlt } from 'react-icons/fa'
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import { selectItems } from '../basketSlice';

function Navbar2() {

    const items = useSelector(selectItems)  
  return (
    <div className='items-center grid grid-cols-3 space-x-12 divide-x md:px-40 bg-gray-100 py-2'>
        <div className='space-x-3 px-5'>
            
            <span className='cursor-pointer hover:text-orange-800'><Link to="/shop">Shop</Link></span>
            <span className='cursor-pointer hidden md:inline-block hover:text-orange-800'>Promo</span>
            <span className='cursor-pointer hidden md:inline-block hover:text-orange-800'>About</span>
            <span className='cursor-pointer hover:text-orange-800'>Blog</span>
        </div>
        <div className='bg-white p-3 focus:border border-blue-300 hidden md:hidden lg:block'>
            <div className='flex justify-between '>
                <input type="text" className='flex text-lg outline-none w-full mx-2 bg-transparent' placeholder='Search what you need' /><FaSearch size={20} className='cursor-pointer hover:text-gray-400' />
            </div>
        </div>
        <div className='px-5'>
            <div className='flex justify-center space-x-8 p-3'>
                <span className='cursor-pointer hover:text-red-600'><FaHeart size={20} /></span>
                <Link to="/checkout">
                
                
                <div className='relative flex'>
                   
                        <span className='absolute bottom-3 left-4  h-6 w-6 bg-orange-400 text-center  items-center rounded-full'>
                            <span className='text-sm font-bold hover:cursor-pointer hover:bg-orange-600 hover:rounded-full hover:p-1'>{items.length}+</span>
                        </span>
                        <span className='cursor-pointer hover:text-red-600'><FaShoppingCart size={20} /></span>
                   
                </div>
                </Link>
                <span className='cursor-pointer hover:text-red-600'><FaUserAlt size={20} /></span>
            </div>
        </div>

    </div>
  )
}

export default Navbar2