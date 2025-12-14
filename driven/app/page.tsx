import React from 'react'
import Intro from './components/intro'
import Header from  './components/header'
import Services from './components/services'
import Timeline from './components/timeline'
import Awards from './components/awards'
import Footer from './components/footer'

const page = () => {
  return (
    <div>
      <Header />
      <Intro />
      <Timeline/>
      <Services />
      <Awards />
      <Footer />

    </div>
  )
}

export default page
