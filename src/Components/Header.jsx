import React from 'react'

const Header = () => {
    return (
        <div className=''>
            <div className='background absolute xl:h-[780px] h-[700px] -top-[35px] -z-50 w-full'>

                <div className='flex h-full items-center pt-28 justify-center '>
                    <div className='md:w-[730px] sm:mx-0 mx-[20px] w-[365px] h-[371px]  sm:h-[349px] text-[40px] text-center header_filter'>
                        <p className='sm:pt-[33px]  pt-[24px] leading-[48px] md:px-0 px-[50px]'>   🌱 <br />
                            The nature candle</p>
                        <p className='text-[18px] md:px-0 px-[35px] font-sans pt-[8px] mx-auto max-w-[537px] leading-[22px] text-center'>
                            All handmade with natural soy wax, Candleaf is a companion for all your pleasure moments
                        </p>
                        <button className='text-[21px]  mt-[40px] bg-[#56B280] rounded-lg py-[8px] px-[44px] text-white font-normal text-center'>
                            Discover our collection
                        </button>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header