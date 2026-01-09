import React from 'react'
import About from '../components/about'
import Header from '../components/header'
import Footer from '../components/footer'
import AboutAwards from '../components/aboutawards'
import Degrees from '../components/Degrees'
import Hobbies from '../components/hobbies'
import Services from '../components/services'
import Aboutprojects from '../components/aboutprojects'

const page = () => {
  return (
    <div>
        <Header />
        <About />
        <Degrees />
        <AboutAwards />
        <Hobbies />
        <Aboutprojects />
          <Services />
        
        <Footer />

    </div>
  )
}

export default page