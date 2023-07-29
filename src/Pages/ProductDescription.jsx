import React from 'react'
import Navbar from '../Components/Navbar'
import ProductDesc from '../Components/ProductDesc'

const ProductDescription = () => {
    return (
        <div className=''>
            <Navbar />
            <div className=' lg:mt-[32px] mt-[40px]'>
                <ProductDesc />
            </div>
         
        </div>
    )
}

export default ProductDescription