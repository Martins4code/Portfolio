import React from 'react'
import About from '../components/about'
import Header from '../components/header'
import AboutAwards from '../components/aboutawards'
import Degrees from '../components/Degrees'
import Hobbies from '../components/hobbies'
import Aboutprojects from '../components/aboutprojects'
import Aboutservices from '../components/aboutservices'
import Aboutfooter from '../components/aboutfooter'



const page = () => {
  return (
    <div>
        <Header />
        <About />
        <Degrees />
        <AboutAwards />
        <Hobbies />
        <Aboutprojects />
        <Aboutservices />
        <Aboutfooter />
        

    </div>
  )
}

export default page