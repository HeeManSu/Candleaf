import React, { useState } from 'react'
import logo from "../assets/logo.svg"
import cart from '../assets/Cart.svg'
import account from '../assets/account.svg'
import { FiChevronDown } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  return (

    <div>


      <nav className='py-6 w-full fixed top-0 z-50 bg-white '>
        <div className=' sm:block hidden'>
          <div className='flex justify-around items-center'>
            <div>
              <Link to="/">   <img className='h-[34px] cursor-pointer w-[126px]' src={logo} alt="no-logo" /></Link>
            </div>
            <div className='flex items-center lg:gap-12 gap-8'>
              <div className='flex gap-1 group items-center'>
                <button className='text1 flex items-center gap-1'>
                  <a href="#products">  Products
                  </a>

                </button>
              </div>
              <button className='text1'>About</button>
              <button className='text1'>Contact us</button>
            </div>
            <div className='flex items-center gap-5'>
              <img className='h-[26px] w-[26px]' src={account} alt="no-account" />
              <Link to="/cart"> <img className='h-[26px] w-[26px]' src={cart} alt="no-cart" /></Link>
            </div>
          </div>
        </div>

        {/* Responsive */}
        <div className='sm:hidden'>
          <div className='flex justify-around'>
            {toggle ? (
              <FiX
                onClick={() => setToggle(!toggle)}
                className='h-[28px] w-[28px]' />
            ) : (
              <FiMenu
                onClick={() => setToggle(!toggle)}
                className='h-[28px] w-[28px]' />
            )}
            <Link to="/">  <img className='h-[30px] w-[120px]' src={logo} alt="no-logo" /></Link>
            <Link to="/cart"> <img className='h-[25px] w-[25px]' src={cart} alt="no-cart" /></Link>
          </div>

          <div className={`${toggle ? "right-0" : "hidden right-[-100%]"} bg-white top-0 -z-50 right-0 w-[100%]   absolute h-[100vh] `}>

            <div>

              <div className='h-[1px]   mt-16 w-full bg-[#E5E5E5]' />

              <div className='px-6 pt-6 '>
                <button className='rounded-lg border-2 w-full text-start text-[18px] px-3 py-2 border-gray-300'>

                  <a href="#products">  Products
                  </a>



                </button>
                <div className='rounded-lg mt-[20px] border-2 text-[18px] px-3 py-2 border-gray-300'>
                  About
                </div>

                <div className='rounded-lg mt-[20px] border-2 text-[18px] px-3 py-2 border-gray-300'>
                  Contact Us
                </div>

                <div className='rounded-lg mt-[20px] border-2 text-[18px] px-3 py-2 border-gray-300'>
                  Profile
                </div>
              </div>

            </div>
          </div>

        </div>
      </nav>

    </div>

  )
}

export default Navbar