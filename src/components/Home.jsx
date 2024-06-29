import React from 'react'
import Nav from './Nav'
import Products from './Products'

const Home = () => {
  return (
    <div className='flex w-full h-screen font-[Montserrat]'>
      <Nav/>
      <Products />
    </div>
  )
}

export default Home
