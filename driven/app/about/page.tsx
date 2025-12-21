import React from 'react'
import About from '../components/about'
import Header from '../components/header'
import Footer from '../components/footer'
import Awards from '../components/awards'
import Degrees from '../components/Degrees'
import Hobbies from '../components/hobbies'
import Projects from '../components/projects'
import Services from '../components/services'

const page = () => {
  return (
    <div>
        <Header />
        <About />
        <Degrees />
        <Awards />
        <Hobbies />
         <Projects />
          <Services />
        
        <Footer />

    </div>
  )
}

export default page