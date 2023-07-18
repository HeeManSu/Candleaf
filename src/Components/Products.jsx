import React from 'react'
import candle1 from '../assets/candle1.png'
import candle2 from '../assets/candle2.png'
import candle3 from '../assets/candle3.png'
import candle4 from '../assets/candle4.png'
import candle5 from '../assets/candle5.png'
import candle6 from '../assets/candle6.png'
import candle7 from '../assets/candle7.png'
import candle8 from '../assets/candle8.png'



const Products = () => {
    return (
        <div className='xl:mt-[720px] mt-[640px] '>
            <div className='text-[#0B254B] -tracking-[0.9px] text-center text-[40px]'>Products</div>
            <div className='text-[18px] text-[#5E6E89] text-center leading-[26.6px] tracking-[0.1px]'>
                Order it for you or for your beloved ones 
            </div>
            <div className='flex max-w-[90%] sm:min-w-0  mx-auto justify-center xl:pt-[60px] pt-[40px] flex-wrap lg:gap-10 sm:gap-14 gap-8'>

                <Card image={candle1} name="Spiced Mint" />
                <Card image={candle2} name="Sweet Straweberry" />
                <Card image={candle3} name="Cool Blueberries" />
                <Card image={candle4} name="Juicy Lemon" />
                <Card image={candle5} name="Orange Delight" />
                <Card image={candle6} name="Fragrant Cinnamon" />
                <Card image={candle7} name="Summer Cherries" />
                <Card image={candle8} name="Clean Lavander" />
            </div>
          

        </div>
    )
}

export default Products


const Card = ({image, name}) => {
    return(
        <div className='sm:w-[250px] w-[320px] h-full shadow-custom'>
            <img className='sm:w-[250px] w-[320px] bg-[#F7F8FA] sm:h-[170px] h-[200px] bg-cover bg-no-repeat' src={image} alt="no-image" />
            <div className='sm:px-[20px] px-[24px]'>
                <div className='sm:text-[18px] text-[20px] pt-[10px] text-[#1D293F] -tracking-[0.9px] font-[500]'>{name}</div>
                <div className='text-[#56B280] pt-[1px] pb-[12px] text-right sm:text-[20px] text-[24px] font-[500]'>Rs. 499</div>
            </div>
          
        </div>
    )
}