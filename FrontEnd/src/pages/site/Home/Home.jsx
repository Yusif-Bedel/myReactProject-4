import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import MainContext from '../../../context/context'
import Hero from '../../../components/HeroSec/Hero'
import Section1 from '../../../components/Section1/Section1'
import Section2 from '../../../components/Section2/Section2'
import Section3 from '../../../components/Section3/Section3'
import Section4 from '../../../components/Section4/Section4'

const Home = () => {
    const {data,setData} = useContext(MainContext)
    return (
    <>
            <Helmet>
                <title>Home</title>
            </Helmet>

            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
    </>
    )
}

export default Home
        