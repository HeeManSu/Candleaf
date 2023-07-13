import React from 'react'
import logo from "../assets/logo.svg"
import cart from '../assets/Cart.svg'
import account from '../assets/account.svg'
import arrow from '../assets/Arrow.svg'
import { FiChevronDown } from "react-icons/fi";

const Navbar = () => {
  return (
    <div>
      <div className='flex justify-around'>
        <div>
          <img src={logo} alt="no-logo" />
        </div>
        <div className='flex'>
          <div className='flex'>
            <div>Products</div>
            <FiChevronDown />
          </div>
          <div>About</div>
          <div>Contact Us</div>
        </div>
        <div className='flex'>
          <img src={account} alt="no-account" />
          <img src={cart} alt="no-cart" />
        </div>
      </div>
    </div>
  )
}

export default Navbar