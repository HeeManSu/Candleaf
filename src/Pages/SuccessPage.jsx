import React from 'react'
import Navbar from '../Components/Navbar'
import { MdKeyboardArrowRight } from "react-icons/md";
import CheckCircle from "../assets/CheckCircle.svg"
import greencart from "../assets/greencart.svg"
import candle1 from "../assets/candle1.png"
const SuccessPage = () => {
    return (

        <>
            <div className=' '>
                <Navbar />
            </div>
            <div className='flex'>



                <div className='lg:max-w-[50%] max-w-full'>


                    <div className=''>


                        <div className='lg:hidden block py-[22px] bg-[#F2F2F2]'>
                            <div className='px-[18px] md:px-[40px] flex justify-between items-center'>
                                <div >
                                    <img src={greencart} alt="no-cart" />

                                </div>
                                <div className='text-[#56b280] items-center text-[20px] flex'>
                                    <div className='capitalize'>
                                        ORDER PAID
                                    </div>

                                </div>
                                <div className='text-[#272727] text-[20px] '>
                                    Rs. 499
                                </div>
                            </div>
                        </div>
                        <div className='px-[18px]   pt-[34px]'>
                            <div className='flex gap-2'>
                                <div className='flex items-center gap-1 text-[16px]'> <span className='text-[#56b280]'>Cart
                                </span>  <MdKeyboardArrowRight className='text-[#56b280]' /></div>
                                <div className='flex gap-1 items-center text-[#56b280] '>Details <MdKeyboardArrowRight /></div>
                                <div className='flex gap-1 items-center text-[#56b280]'>Shipping <MdKeyboardArrowRight /></div>
                                <div className='flex gap-1 items-center text-[#56b280]'>Payment </div>
                            </div>
                        </div>
                        <div className='mx-[18px]  mt-[45px]'>

                            <img className='mx-auto' src={CheckCircle} alt="no_image" />

                            <div className='pt-[15px] text-[#272727] text-center text-[26px] leading-[56px]'>
                                Payment Confirmed
                            </div>

                            <div className='text-center text-[#56b280] text-[16px]'>
                                ORDER #2039
                            </div>

                            <div className='text-[#818181] sm:px-[100px] md:[100px] lg:px-[20px] xl:px-[60px]  pt-[17px] text-[16px] leading-[20px] '>
                                Thank you Joe for buying Candleaf. The nature is grateful to you. Now that your order is confirmed it will be ready to ship in 2 days. Please check your inbox in the future for your order updates.
                            </div>

                            <div className='pt-[28px] sm:max-w-[50%] sm:mx-auto sm:mt-[40px] mt-[60px] px-[18px]' >
                                <button className='text-white text-center text-[20px] bg-[#56b280] rounded-lg py-[8px] w-full'>
                                    Back to shopping
                                </button>
                            </div>
                            <div className='pt-[28px] pb-[12px] px-[18px]' >
                                <button className='underline text-center text-[20px] text-[#56b280]  py-[8px] w-full'>
                                    Save payment receipt
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='lg:block hidden h-[100vh] bg-[#F2F2F2] xl:px-[80px] pt-[80px] w-[50%]'>

                    <div className='flex justify-center xl:gap-16 gap-10'>
                        <img className='bg-[#F7F8FA] h-[120px] w-[180px]  ' src={candle1} alt="" />

                        <div>
                            <div className='text-[#272727] text-[20px] leading-[30px]'>
                                Spiced Mint Candleaf®
                            </div>
                            <div className='text-[#56b280] leading-[56px] text-[19px]'>
                                Rs.499
                            </div>
                        </div>
                    </div>


                    <div className='h-[2px]   xl:mt-[90px] mt-[50px] w-[80%] mx-auto bg-gray-300'>
                    </div>

                    <div className='flex pt-[20px]  px-[80px] items-center justify-between'>
                        <div className='text-[#616161] text-[16px] leading-[25px]'>
                            Subtotal
                        </div>

                        <div className='text-[#272727] text-[16px] leading-[25px] '>
                            Rs. 499
                        </div>
                    </div>
                    <div className='flex pt-[20px]  px-[80px] items-center justify-between'>
                        <div className='text-[#616161] text-[16px] leading-[25px]'>
                            Shipping
                        </div>

                        <div className='text-[#272727] text-[16px] leading-[25px] '>
                            Free Shipping
                        </div>
                    </div>

                    <div className='h-[1.8px]   mt-[30px] w-[80%] mx-auto bg-gray-300'>
                    </div>
                    <div className='flex pt-[20px]  px-[80px] items-center justify-between'>
                        <div className='text-[#56b280] text-[16px] leading-[25px]'>
                            Paid
                        </div>

                        <div className='text-[#56b280] text-[16px] leading-[25px] '>
                            Rs. 499
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SuccessPage