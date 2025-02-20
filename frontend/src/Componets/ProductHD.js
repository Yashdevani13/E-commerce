import React from 'react'
import { TbArrowRight } from 'react-icons/tb';

const ProductHD = (props) => {

    const { product } = props;

    return (
        <>
            <div className='max-padd-container flex items-center flex-wrap gap-x-2 medium-16 py-4 capitalize bg-primary'>
                Home<TbArrowRight />{product.name}
            </div>
        </>
    )
}

export default ProductHD
