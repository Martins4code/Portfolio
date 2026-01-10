import React from 'react'
import Header from '../components/header'
import Contactcard from '../components/contactcard'
import ContactSection from '../components/contactsection'
import FaqAndCtaSection from '../components/faq'
import ContactFooter from '../components/contactfooter'
import Imagescene from '../components/imagescene'

const Page = () => {
  return (
    <div>
        <Header/>
        <Contactcard/>
        <ContactSection/>
        <FaqAndCtaSection/>
        <Imagescene/>
        <ContactFooter/>
    </div>
  )
}

export default Page