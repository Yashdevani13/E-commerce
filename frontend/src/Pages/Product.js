import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import ProductHD from '../Componets/ProductHD'
import ProductMD from '../Componets/ProductMD'
import ProductDescription from '../Componets/ProductDescription'


const Product = () => {

  const { all_products } = useContext(ShopContext)
  const { productId } = useParams()
  console.log("productId: ", productId);

  const product = all_products.find((e) => e._id === productId)
  if (!product) {
    return <div className='h1 pt-28'>Product not Found</div>
    // or redirect the user to a 404 page
  }
  return (
    <>
      <section className='max-padd-container py-20'>
        <div className='py-10'>
          <ProductHD product={product} />
          <ProductMD product={product} />
          <ProductDescription  />
        </div>
      </section>
    </>
  )
}

export default Product
