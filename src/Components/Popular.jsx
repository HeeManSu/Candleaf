import React from 'react'
import candle1 from '../assets/candle1.png'
import candle2 from '../assets/candle2.png'
import candle3 from '../assets/candle3.png'
import candle4 from '../assets/candle4.png'
import { Link } from 'react-router-dom'

const Popular = () => {
  return (
    <div className='pt-[50px]'>
      <div className='text-[#0B254B] text-center text-[40px] '>
        Popular
      </div>
      <div className='text-[#5E6E89] pt-[30px]] text-[18px] text-center'>
        Our top selling product that you may like
      </div>

      <div className='flex pt-[40px] justify-center gap-10 flex-wrap'>
        <Card image={candle1} name="Spiced Mint" />
        <Card image={candle2} name="Sweet Straweberry" />
        <Card image={candle3} name="Cool Blueberries" />
        <Card image={candle4} name="Juicy Lemon" />
      </div>
    </div>
  )
}

export default Popular


const Card = ({ image, name }) => {
  return (
    <Link to="/product">  <div className='sm:w-[250px] rounded-lg w-[320px] h-full shadow-custom'>
      <img className='sm:w-[250px] w-[320px] bg-[#F7F8FA] sm:h-[170px] h-[200px] bg-cover bg-no-repeat' src={image} alt="no-image" />
      <div className='sm:px-[20px] px-[24px]'>
        <div className='sm:text-[18px] text-[20px] pt-[10  px] text-[#1D293F] -tracking-[0.9px] font-[500]'>{name}</div>
        <div className='text-[#56B280] pt-[1px] pb-[12px] text-right sm:text-[20px] text-[24px] font-[500]'>Rs. 499</div>
      </div>

    </div></Link>
  )
}