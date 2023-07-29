import React, { useState } from 'react'
import logo from "../assets/logo.svg"
import cart from '../assets/Cart.svg'
import account from '../assets/account.svg'
import { FiChevronDown } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";


const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  return (

    <div>


    <nav className='py-6 w-full z-50 bg-white '>
      <div className=' sm:block hidden'>
        <div className='flex justify-around items-center'>
          <div>
            <img className='h-[34px] w-[126px]' src={logo} alt="no-logo" />
          </div>
          <div className='flex items-center lg:gap-12 gap-8'>
            <div className='flex gap-1 items-center'>
              <div className='text1'>Products</div>
              <FiChevronDown className='h-[20px] w-[20px] relative top-[1px]' />
            </div>
            <div className='text1'>About</div>
            <div className='text1'>Contact us</div>
          </div>
          <div className='flex items-center gap-5'>
            <img className='h-[26px] w-[26px]' src={account} alt="no-account" />
            <img className='h-[26px] w-[26px]' src={cart} alt="no-cart" />
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
          <img className='h-[30px] w-[120px]' src={logo} alt="no-logo" />
          <img className='h-[25px] w-[25px]' src={cart} alt="no-cart" />
        </div>

        <div className={`${toggle ? "right-0" : "hidden right-[-100%]"} bg-[#a14b4b] top-0 -z-50 right-0 w-[100%]   absolute h-[100vh] `}>

        </div>

      </div>
    </nav>

    </div>

  )
}

export default Navbar