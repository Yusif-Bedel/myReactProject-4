import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import MainContext from '../../../context/context'
import Hero from '../../../components/HeroSec/Hero'
import Section1 from '../../../components/Section1/Section1'
import Section2 from '../../../components/Section2/Section2'

const Home = () => {
    const {data,setData} = useContext(MainContext)
    return (
    <>
            <Helmet>
                <title>Home</title>
            </Helmet>

            <Section1/>
            <Section2/>
    </>
    )
}

export default Home
        