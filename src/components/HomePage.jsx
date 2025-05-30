import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Services from './sections/Services'
import Contact from './sections/Contact'

const Main = styled.main`
  margin-top: 70px;
`

const HomePage = () => {
  return (
    <Main>
      <Hero />
      <About />
      <Experience />
      <Services />
      <Contact />
    </Main>
  )
}

export default HomePage
