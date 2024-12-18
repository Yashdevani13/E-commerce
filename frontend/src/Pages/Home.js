import React, { useState } from 'react'
import Hero from '../Componets/Hero'
import Categories from '../Componets/Categories'
import ProductDisplay from '../Componets/ProductDisplay'
import GetApp from '../Componets/GetApp'
import Footer from '../Componets/Footer'


const Home = () => {
  const [category, setCategory] = useState('All')
  return (
    <>
      <Hero />
      <Categories category={category} setCategory={setCategory} />
      <ProductDisplay category={category}/>
      <GetApp />
      <Footer />
    </>
  )
}

export default Home

