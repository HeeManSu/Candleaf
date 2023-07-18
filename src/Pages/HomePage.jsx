import React from 'react'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import Products from '../Components/Products'
import Benefits from '../Components/Benefits'
import Testimonials from '../Components/Testimonials'
import Popular from '../Components/Popular'
import Footer from '../Components/Footer'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Products />
      <Benefits />
      <Testimonials />
      <Popular />
      <Footer />
    </div>
  )
}

export default HomePage