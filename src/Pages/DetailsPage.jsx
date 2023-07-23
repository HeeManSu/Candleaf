import React from 'react'
import Navbar from '../Components/Navbar'
import { FiChevronDown } from "react-icons/fi";
import { MdKeyboardArrowRight } from "react-icons/md";
import Cart from "../assets/Cart.svg"


const About = () => {
  return (
    <div className=''>
      <div>
        <Navbar />
      </div>

      <div className=' py-[22px] bg-[#F2F2F2]'>

        <div className='px-[18px] flex justify-between items-center'>
          <div >
            <img src={Cart} alt="no-cart" />
            <div className='w-[12px] relative bottom-8 left-5 text-[8px] text-center text-white h-[12px] rounded-full bg-[#56b280]'>
              2
            </div>
          </div>
          <div className='text-[#56b280] items-center text-[20px] flex'>
            <div>
              See your order detials
            </div>
            <FiChevronDown className='h-[25px] w-[25px]' />
          </div>
          <div className='text-[#272727] text-[20px] '>
            Rs. 499
          </div>
        </div>
      </div>

      <div className='px-[18px] pt-[34px]'>
        <div className='flex gap-2'>
          <div className='flex items-center gap-1 text-[16px]'> <span className='text-[#56b280]'>Cart
          </span>  <MdKeyboardArrowRight className='text-[#56b280]' /></div>
          <div className='flex gap-1 items-center text-[#272727]'>Details <MdKeyboardArrowRight /></div>
          <div className='flex gap-1 items-center text-[#616161]'>Shipping <MdKeyboardArrowRight /></div>
          <div className='flex gap-1 items-center text-[#616161]'>Payment </div>
        </div>
      </div>

      <div className='flex items-center justify-between px-[18px] pt-[40px]'>
        <div className='text-[#272727] font font-medium text-[20px]'>
          Contact
        </div>

        <div className='text-[#616161] text-[14px]'>
          Do you have an account? <span className='text-[#56b280]'> Login
          </span>
        </div>
      </div>


      <div className='px-[18px] pt-[22px]'>
        <div className=' py-[7px] pl-[12px] rounded-lg  border border-[#56b280]'>
          <input className='' type="text" id="contact" name="contact" pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$|^[0-9]{10,}$" required placeholder='Email or  phone number' />
        </div>

        <div className='flex justify-start gap-[20px] items-center pt-[10px]'>

          <input className='w-[16px] h-[16px]' type="checkbox" />


          <div className='text-[16px] text-center'>
            Add me to newsletter for a 10% discount
          </div>
        </div>

        <div className='pt-[30px] '>
          <div className='text-[20px] text-[#272727] '>
            Shipping Address
          </div>

          <div className='mt-[22px]  rounded-lg border-[#898989] border pl-[10px] py-[7px]'>
            <input type="text" placeholder='Name' />
          </div>
          <div className='mt-[22px]  rounded-lg border-[#898989] border pl-[10px] py-[7px]'>
            <input type="text" placeholder='Second Name' />
          </div>
          <div className='mt-[22px]  rounded-lg border-[#898989] border pl-[10px] py-[7px]'>
            <input type="text" placeholder='Address and number' />
          </div>
          <div className='mt-[22px]  rounded-lg border-[#898989] border pl-[10px] py-[7px]'>
            <input type="text" placeholder='Shipping note (optional)' />
          </div>
          <div className='mt-[22px]  rounded-lg border-[#898989] border pl-[10px] py-[7px]'>
            <input type="text" placeholder='Postal Code' />
          </div>
          <div className='mt-[22px]  rounded-lg border-[#898989] border pl-[10px] py-[7px]'>
            <input type="text" placeholder='City' />
          </div>
          <div className='mt-[22px]  rounded-lg border-[#898989] border pl-[10px] py-[7px]'>
            <input type="text" placeholder='State' />
          </div>
          <div className='mt-[22px]  rounded-lg border-[#898989] border pl-[10px] py-[7px]'>
            <input type="text" placeholder='Country' />
          </div>

          <div className='flex justify-start gap-[20px] items-center pt-[20px]'>

            <input className='w-[16px] h-[16px]' type="checkbox" />


            <div className='text-[16px] text-center'>
              Save this address for faster checkout
            </div>
          </div>
        </div>
      </div>

      <div className='pt-[28px] px-[18px]' >
        <button className='text-white text-center text-[20px] bg-[#56b280] rounded-lg py-[8px] w-full'>
          Go to shipping
        </button>
      </div>

      <div className='pt-[28px] pb-[12px] px-[18px]' >
        <button className='underline text-center text-[20px] text-[#56b280]  py-[8px] w-full'>
          Back to cart
        </button>
      </div>
    </div>
  )
}

export default About