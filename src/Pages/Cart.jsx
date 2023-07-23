import React from 'react'
import Navbar from "../Components/Navbar"
import candle1 from "../assets/candle1.png"
import candle2 from "../assets/candle2.png"
import { BsPlus } from 'react-icons/bs';
import { BiMinus } from 'react-icons/bi';
import Footer from "../Components/Footer"

const Cart = () => {
    return (

        <div>
            <div>
                <Navbar />
            </div>
            <div className='2xl:px-[190px] xl:px-[90px] lg:px-[60px] px-[30px]'>
                <div className='pt-[50px]'>
                    <div className='text-[26px] text-center text-[#272727]'>
                        Your cart items
                    </div>

                    <div className='text-[#56b280] text-center text-[18px] underline pt-[20px]'>
                        Back to shopping
                    </div>
                </div>
                <div className='md:block hidden px-[20px] pt-[80px]'>
                    <div className='flex flex-row'>
                        <div className='  basis-10/12'>
                            Product
                        </div>
                        <div className='basis-1/4'>
                            Price
                        </div>

                        <div className='basis-1/4'>
                            Quantity
                        </div>

                        <div className=''>
                            Total
                        </div>
                    </div>
                </div>
                <div className='h-[2px] md:block hidden  mt-[14px] w-full bg-[#E5E5E5]'>
                </div>

                <div className='md:block hidden'>
                    <SingleCart image={candle1} quantity="1" total="Rs. 499" />
                    <SingleCart image={candle2} quantity="2" total="Rs. 998" />

                </div>

                <div className='md:flex hidden justify-end pt-[30px]'>
                    <div className='flex gap-12'>
                        <div className='text-[20px] font-medium'>
                            Sub-total
                        </div>

                        <div className='text-[20px] font-medium'>
                            Rs. 1497
                        </div>

                        <div>
                            <button className='bg-[#56B280] rounded-lg px-[60px] py-[8px] text-white text-center text-[21px] '>Checkout</button>
                        </div>
                    </div>

                </div>
                <div className='text-[#9e9e9e] text-[16px] leading-[26px] md:flex  hidden pt-[4px] xl:pr-[22%] lg:pr-[29%] pr-[33%] justify-end'>
                    Tax and shipping cost will be calculated later
                </div>
            </div>

            <div className='px-[20px] pt-[25px] md:hidden block'>
                <div className='flex justify-between'>
                    <div className='text-[#272727]text-[16px] '>
                        Product
                    </div>

                    <div className='text-[#272727]text-[16px] '>
                        Price
                    </div>
                </div>

                <div className='h-[2px]  mt-[14px] w-full bg-[#E5E5E5]'>
                </div>

                <div>
                    <SingleCart2 image={candle1} quantity="1" price="Rs. 499" />
                    <SingleCart2 image={candle1} quantity="2" price="Rs. 998" />
                </div>


                <div className='pt-[40px]'>
                    <div className='flex justify-around'>
                        <div className='text-[20px] font-medium'>
                            Sub-total
                        </div>

                        <div className='text-[20px] font-medium'>
                           Rs.1597 /-
                        </div>
                    </div>

                    <div className='text-[#9e9e9e] text-[16px] text-center pt-[10px]'>
                        Tax and shipping cost will be calculated later
                    </div>


                    <div className='pt-[28px]' >
                        <button className='text-white text-center text-[20px] bg-[#56b280] rounded-lg py-[8px] w-full'>
                            Checkout
                        </button>

                    </div>
                </div>


            </div>

            <div>
                <Footer />
            </div>

        </div>


    )
}

export default Cart


const SingleCart2 = ({image, price, quantity}) => {
    return (
        <div>
            <div className='pt-[12px] flex justify-between'>
                <div className='flex '>
                    <div className=''>
                        <img className='bg-[#F7F8FA] h-[80px] w-[110px]  ' src={image} alt="" />
                    </div>
                    <div className=' pl-[12px] max-w-[140px]'>
                        <div className='text-[#272727] text-[18px]'>
                            Spiced Mint Candleaf®
                        </div>

                        <div className='text-[18px] pt-[12px] underline text-[#56b280]'>
                            Remove
                        </div>
                    </div>
                </div>

                <div className=''>
                    <div className='text-[#272727]'>
                        {price}
                    </div>


                    <div className='pt-6'>

                        <div className='border-2 mt-[6px]  border-[#56B280] gap-[8px] rounded-lg py-[5px] px-[8px] flex  items-center w-fit'>
                            <BsPlus color='#56B280' />{quantity}<BiMinus color='#a7a7a7' />
                        </div>
                    </div>

                </div>


            </div>

            <div className='h-[2px] md:hidden block  mt-[14px] w-full bg-[#E5E5E5]'>
            </div>
        </div>
    )
}


const SingleCart = ({ image, quantity, total }) => {
    return (

        <>

            <div className='flex pb-[10px] xl:pt-[30px] pt-[15px]'>



                <div className='flex 2xl:basis-[41%] xl:basis-[43%] lg:basis-[52%] basis-[49%] '>
                    <div className=''>
                        <img className='bg-[#F7F8FA] h-[80px] w-[110px] lg:h-[120px] lg:w-[180px] ' src={image} alt="" />
                    </div>
                    <div className='xl:pl-[30px] lg:pl-[24px] pl-[12px]'>
                        <div className='text-[#272727] xl:text-[23px] lg:text-[19px] text-[18px]'>
                            Spiced Mint Candleaf®
                        </div>

                        <div className='text-[18px] pt-[12px] underline text-[#56b280]'>
                            Remove
                        </div>
                    </div>
                </div>


                <div className='flex basis-[62%] 2xl:pl-[220px] xl:pl-[215px] lg:pl-[126px]  pl-[100px] items-center'>
                    {/* <div className='text-[#272727] xl:pl-[16vw] pl-[12vw]'> */}
                    <div className='text-[#272727] xl:basis-[46%] lg:basis-[44%] basis-[40%]'>
                        Rs. 499
                    </div>

                    {/* <div className='xl:pl-[9vw] pl-[9vw]'> */}
                    <div className='basis-[40%]'>

                        <div className='border-2 mt-[6px]  border-[#56B280] gap-[8px] rounded-lg py-[5px] px-[8px] flex  items-center w-fit'>
                            <BsPlus color='#56B280' />{quantity}<BiMinus color='#a7a7a7' />
                        </div>
                    </div>
                    {/* <div className='xl:pl-[7vw] pl-[7.4vw]'> */}
                    <div className=''>
                        {total}
                    </div>
                </div>


            </div>

            <div className='h-[2px]  mt-[9px] w-full bg-[#E5E5E5]'>
            </div>


        </>
    )
}


