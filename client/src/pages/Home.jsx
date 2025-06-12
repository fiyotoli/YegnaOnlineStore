import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/hero'
import LatestCollection from '../components/LatestCollection'

import TestimonialCarousel from '../components/Testimonial'
import Faq from '../components/Faq'

import Newsletter from '../components/Newsletter'
import Service from '../components/Service'
import About from '../components/About'

function Home() {
  return (
    <div>
  
   <Hero/>
   <About/>
   <Service/>
   <LatestCollection/>
  
   <TestimonialCarousel/>
   <Faq/>
   <Newsletter/>
  
    </div>
  )
}

export default Home
