import React from 'react'
import candleX from "../assets/candleX.png"

import { LuCircle } from 'react-icons/lu';
import { BsPlus } from 'react-icons/bs';
import { BiMinus } from 'react-icons/bi';
import { IoIosArrowDown } from 'react-icons/io';
import { BsCart3 } from 'react-icons/bs';
import Footer from "../Components/Footer"
import { Link } from 'react-router-dom';


const ProductDesc = () => {
    return (
        <>
            <div className='2xl:px-[100px] xl:px-[80px] px-[20px] sm:pt-[60px] pt-[40px]'>

                <div className='text-[26px] pb-[10px] text-[#272727] sm:hidden block   -tracking-[0.5px]'>
                    Spiced Mint Candleaf®
                </div>
                <div className='flex lg:flex-row flex-col'>
                    <div className='2xl:w-[65%] xl:w-[95%] w-full'>
                        <div className=' flex justify-center '>
                            <img className='xl:w-[580px] lg:w-[500px] sm:w-[600px] rounded-lg bg-[#F7F8FA] xl:h-[450px]  lg:h-[350px] sm:h-[480px]' src={candleX} height="100%" width="100%" alt="no-candle" />
                        </div>
                        <div className='text-[20px] sm:block hidden leading-[28px] text-center xl:px-[40px] lg:px-[10px] sm:px-[80px]' >
                            All hand-made with natural soy wax, Candleaf is made for your pleasure moments.
                        </div>

                        <div className='text-green-500 sm:block hidden capitalize xl:pt-[20px] pt-[15px] text-center text-[20px]'>
                            🚚 FREE SHIPPING
                        </div>
                    </div>
                    <div className='w-full lg:pt-[0px] pt-[24px]  sm:pl-[20px] '>
                        <div className='text-[26px] sm:block hidden text-[#272727] -tracking-[0.5px]'>
                            Spiced Mint Candleaf®
                        </div>
                        <div className='flex sm:justify-between sm:flex-row flex-col sm:mt-[30px]'>
                            <div className='2xl:w-[200px] sm:px-0 px-[30px] justify-between sm:inline flex xl:w-[220px] sm:w-[230px]'>
                                <div className='text-[26px] mt-[10px] text-[#56B280] font-[600]'>
                                    Rs. 499
                                </div>
                                <div className='sm:pt-[35px] '>
                                    <div className='text-[18px] text-black '>
                                        Quantity
                                    </div>
                                    <div className='border-2 mt-[6px] border-[#56B280] gap-[8px] rounded-lg py-[5px] px-[8px] flex  items-center w-fit'>
                                        <BsPlus color='#56B280' />1<BiMinus color='#a7a7a7' />
                                    </div>
                                </div>
                            </div>
                            <div className='2xl:pl-[140px] pt-[15px] sm:pl-[90px] '>
                                <div className='text-[16px] gap-[25px] flex items-center'>
                                    <LuCircle color='#DBDBDB' /> One time purchase
                                </div>
                                <div className=' border-2 2xl:max-w-[79%]  lg:max-w-full sm:max-w-[94%] border-[#e6e6e6] rounded-lg xl:px-[12px] lg:px-[6px] px-[10px] py-[12px] mt-[30px]'>
                                    <div className='text-[16px] gap-4 items-center leading-[16px] flex'>
                                        <LuCircle color='#DBDBDB' width="16px" height="16px" fill='#87D6AC' />  Subscribe for everyday
                                        <div className='border-[#E7E7E7] text-[16px] items-center gap-2 flex px-[5px] rounded-md py-[5px] border-2'>
                                            4 weeks <IoIosArrowDown />
                                        </div>
                                    </div>
                                    <div className=' mt-[10px] text-[#656565]'>
                                        Subscribe now and get the 10% of discount on every recurring order.  The discount will be applied at checkout. <span className='text-[#56b280]'>See details
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-[30px] max flex justify-end  relative 2xl:right-28 lg:right-0 sm:right-7'> <Link to="/cart">


                            <button className='flex  justify-center sm:mx-0 mx-auto  items-center text-white bg-[#56b280] text-[20px] py-[10px] 2xl:px-[137px] xl:px-[120px] lg:px-[110px] md:px-[162px] px-[90px]  rounded-lg'> <BsCart3 className='relative right-3' /> <BsPlus /> Add to cart </button>         </Link>
                        </div>
                        <div className='mt-[40px] border-2 lg:mx-0 lg:ml-0 sm:ml-[35px] text-[#E6E6E6] 2xl:px-[14px] xl:px-[22px] lg:px-[18px] sm:px-[30px] px-[15px] py-[18px] rounded-lg 2xl:max-w-[68%] lg:max-w-full sm:max-w-[85%]'>
                            <div className='text-[#849a8e] text-[16px]'>
                                <span className='text-[#1D252C] text-[16px] font-[600] tracking-[1px]'>Wax:
                                </span> Top grade Soy wax that delivers a smoke less,  consistent burn
                            </div>
                            <div className='text-[#849a8e]  text-[16px] pt-[5px]'>
                                <span className='text-[#1D252C] text-[16px] font-[600] tracking-[1px]'>Fragrance:
                                </span>  Premium quality ingredients with natural essential oils
                            </div>
                            <div className='text-[#849a8e] flex-wrap text-[16px] flex sm:gap-3 gap-1 pt-[5px]'>
                                <div>
                                    <span className='text-[#1D252C] text-[16px] font-[600] tracking-[1px]'>
                                        Burning Time:
                                    </span>
                                    70-75 hours
                                </div>
                                <div>
                                    <span className='text-[#1D252C] text-[16px] font-[600] tracking-[1px]'>
                                        Dimension:
                                    </span>
                                    10cm x 5cm
                                </div>
                                <div>
                                    <span className='text-[#1D252C] text-[16px] font-[600] tracking-[1px]'>
                                        Weight:
                                    </span>
                                    400g
                                </div>
                            </div>
                        </div>

                        <div className='pt-[12px]'>
                            <div className='text-[20px] sm:hidden block  leading-[28px] text-center xl:px-[40px] lg:px-[10px] sm:px-[80px]' >
                                All hand-made with natural soy wax, Candleaf is made for your pleasure moments.
                            </div>

                            <div className='text-green-500 sm:hidden block   capitalize xl:pt-[20px] pt-[15px] text-center text-[20px]'>
                                🚚 FREE SHIPPING
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=''>
                <Footer />

            </div>
        </>
    )
}

export default ProductDesc