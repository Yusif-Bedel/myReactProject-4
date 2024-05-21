import React from 'react'
import Header from '../../layout/site/Header/Header'
import { Outlet } from 'react-router'
import Footer from '../../layout/site/Footer/Footer'
import Hero from '../../components/HeroSec/Hero'

const SiteRoot = () => {
    return (
        <div>
            <Header/>
            <Hero/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default SiteRoot
