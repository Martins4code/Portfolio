import React from 'react'
import Workprojects from '../components/workprojects'
import Workfooter from '../components/workfooter'
import Header from '../components/header'
import Workintro from '../components/workintro'


const Page = () => {
  return (
    <div>
        <Header/>
        <Workintro/>
        <Workprojects/>
        <Workfooter/>
    </div>
  )
}

export default Page