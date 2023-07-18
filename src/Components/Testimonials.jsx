import React from 'react'
import pic1 from '../assets/pic1.svg'
import pic2 from '../assets/pic2.svg'
import pic3 from '../assets/pic3.svg'
import stars1 from '../assets/stars1.svg'
import stars2 from '../assets/stars2.svg'
import stars3 from '../assets/stars3.svg'

const Testimonials = () => {
    return (
        <div className='bg_color pb-[40px] lg:px-[100px] px-[40px]'>
            <div className='text-[#0B254B] text-center pt-[50px] text-[40px]'>
                Testimonials
            </div>
            <div className='text-[18px] pt-[13px] text-center text-[#5E6E89]'>
                Some quotes from our happy customers
            </div>
            <div className='flex flex-wrap lg:gap-8 gap-2  justify-center pt-[20px]'>
                <Card pic={pic1} stars={stars1} name="Luisa" review="I love it! No more air fresheners" />
                <Card pic={pic2} stars={stars2} name="Edorado" review="Raccomended for everyone" />
                <Card pic={pic3} stars={stars3} name="Mart" review={"Looks very natural, the smell is awesome"} />
            </div>

        </div>
    )
}

export default Testimonials


const Card = ({ pic, stars, review, name }) => {
    return (
        <div className='w-[350px] rounded-md mb-[30px] py-[10px] px-[18px] shadow-custom2 bg-white  h-[295px]'>

            <div className='flex flex-col items-center'>
                <img className='mx-auto' src={pic} alt="no-pic" />
                <img className='mx-auto' src={stars} alt="no-stars" />
                <div className='text-center pt-[14px] text-[#1d293f] px-[25px] text-[22px] leading-[29px]'>{review} </div>
                <div className='text-center pt-[9px] text-[#7c8087] text-[16px] font-[Helvetica]'>{name}</div>
            </div>


        </div>
    )
}