import React from 'react'
import check from "../assets/check.svg"
import benefitImage from '../assets/benefitImage.png'


const Benefits = () => {
  return (
    <div className='xl:mt-[100px] mt-[70px] lg:flex-row flex-col 2xl:px-[190px] xl:px-[100px] md:px-[70px] px-[30px] xl:pt-[100px] pt-[70px] flex justify-between w-full xl:h-[90%] h-full bg-[#F7F8FA]'>
      <div className='lg:max-w-[50%] max-w-full mx-auto'>
        <div className='text-[#1D252C] xl:max-w-[68%] lg:max-w-[70%] max-w-[90%] font-[500] md:text-start text-center text-[40px] leading-[46px] '>
          Clean and fragrant soy wax
        </div>
        <div className='text-[#56B280] pt-[15px] leading-[22px] font-[500] text-[18px]'>
          Made for your home and for your wellness
        </div>

        <div className='pt-[25px] max-w-full w-full flex flex-col gap-[5px]'>
          <div className='flex'>
            <img className='sm:max-w-[16px] max-w-[5%] sm:static relative bottom-[10px]' src={check} height="100%" width="100%" alt="no-image" />
            <div className='text-black pl-[15px]'> <span className='tracking-[0.9px] font-[600]'>Eco-sustainable:
            </span> All recyclable materials, 0% CO2 emissions</div>
          </div>
          <div className='flex'>
            <img className='sm:max-w-[16px] max-w-[70px] sm:static relative bottom-[10px]' src={check} alt="no-image" />
            <div className='text-black pl-[15px]'> <span className='tracking-[0.9px] font-[600]'>Hyphoallergenic:
            </span>100% natural, human friendly ingredients </div>
          </div>
          <div className='flex'>
            <img className='sm:max-w-[16px] max-w-[5%] sm:static relative bottom-[10px]' src={check} alt="no-image" />
            <div className='text-black pl-[15px]'> <span className='tracking-[0.9px] font-[600]'>Handmade:
            </span> All candles are craftly made with love.</div>
          </div>
          <div className='flex'>
            <img className='sm:max-w-[16px] max-w-[20%] sm:static relative bottom-[10px]' src={check} alt="no-image" />
            <div className='text-black pl-[15px]'> <span className='tracking-[0.9px] font-[600]'>Long burning:
            </span> No more waste. Created for last long.</div>
          </div>
        </div>
        <div className='flex sm:justify-start justify-center'>
          <button className='bg-[#56B280] mt-[40px] text-[18px] text-white px-[40px] py-[7px] rounded-md'>Learn More</button>
        </div>


      </div>
      <div className='relative sm:overflow-clip xl:bottom-12 lg:bottom-7 xl:left-12 sm:left-5 '>
        <img className='sm:w-[90%] shadow-custom  sm:h-[90%] w-full h-full' width="90%" height="89%" src={benefitImage} alt="" />
      </div>
    </div>
  )
}

export default Benefits