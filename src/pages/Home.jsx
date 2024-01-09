/* eslint-disable no-unused-vars */
import React from 'react'
import Introduction from '../components/Introduction'
import { ScrollProvider } from '../components/ScrollContext'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import BrandIdentity from '../components/BrandIdentity'


const Home = () => {
  return (
    <>
     <ScrollProvider>
     <Introduction/>
     <NavBar/>
     <HeroSection/>
     <BrandIdentity/>
     </ScrollProvider>
    
    </> 
     )
}

export default Home