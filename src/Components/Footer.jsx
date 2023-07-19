import React from 'react'
import footerLogo from '../assets/footer.svg'

const Footer = () => {
    return (
        <div className='sm:px-[100px] px-[35px] pb-[80px] bg-black mt-[90px]'>
            <div className='mt-[50px]'>
                <div className='bg-black h-[60px] w-full '>

                </div>
                <div
                    className='h-[2px] mt-[50px]  w-full bg-white'
                    style={{ margin: '0 auto' }}
                ></div>

                <div className='flex lg:justify-between flex-wrap'>
                    <div className=''>
                        <img className='w-[290px] relative right-11 h-[90px] pt-[10px]' height="100%" width="100%" src={footerLogo} alt="no-footerlogo" />
                        <div className='text-white text-[16px] sm:max-w-[235px]   leading-[23px]'>
                            Your natural candle made for your home and for your wellness.
                        </div>

                    </div>
                    <div className='lg:pl-0 sm:pl-[140px] pl-[2px]'>
                        <div className='text-white pt-[44px]'>
                            <div className='text-[#56B280] text-[16px] '>
                                Discovery
                            </div>

                            <div className='text-[16px] pt-[22px]'>
                                New season
                            </div>
                            <div className='text-[16px] pt-[22px]'>
                                Most searched
                            </div>
                            <div className='text-[16px] pt-[22px]'>
                                Most selled
                            </div>
                        </div>

                    </div>
                    <div className=' lg:pl-0 sm:pl-[23px] pl-[160px]'>
                        <div className='text-white pt-[44px]'>
                            <div className='text-[#56B280] text-[16px] '>
                                About
                            </div>

                            <div className='text-[16px] pt-[22px]'>
                               Help
                            </div>
                            <div className='text-[16px] pt-[22px]'>
                                Shipping
                            </div>
                            <div className='text-[16px] pt-[22px]'>
                                Affilate
                            </div>
                        </div>

                    </div>
                    <div className='lg:pl-0 sm:pl-[340px] pl-[5px]'>
                        <div className='text-white'>
                            <div className='text-[#56B280] text-[16px] pt-[44px] '>
                                Info
                            </div>

                            <div className='text-[16px] pt-[22px]'>
                                Contact us
                            </div>
                            <div className='text-[16px] pt-[22px]'>
                                Privacy Policies
                            </div>
                            <div className='text-[16px] pt-[22px]'>
                                Terms & Conditions
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div >
    )
}

export default Footer