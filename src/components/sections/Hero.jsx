import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const HeroContainer = styled.section`
  min-height: 100vh;
  background: linear-gradient(135deg, #1E2852 0%, #2A3880 50%, #0A66C2 100%);
  color: white;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 0;
`

const HeroContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`

const HeroText = styled.div`
  @media (max-width: 768px) {
    order: 2;
  }
`

const SubHeading = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  opacity: 0.9;
`

const Heading = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  line-height: 1.2;
  
  span {
    color: #7CC6FE;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const Description = styled(motion.p)`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  max-width: 500px;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    margin: 0 auto 2rem auto;
  }
`

const HeroButtons = styled(motion.div)`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`

const PrimaryButton = styled.a`
  background-color: white;
  color: var(--primary);
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: var(--transition);
  
  &:hover {
    background-color: #E6E6E6;
    transform: translateY(-3px);
  }
`

const SecondaryButton = styled.a`
  background-color: transparent;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  font-weight: 600;
  border: 2px solid white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: var(--transition);
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-3px);
  }
`

const HeroImageContainer = styled(motion.div)`
  position: relative;
  
  @media (max-width: 768px) {
    order: 1;
    margin-top: 2rem;
  }
`

const HeroImage = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(
      transparent, 
      rgba(255, 255, 255, 0.4), 
      transparent 30%
    );
    animation: rotate 4s linear infinite;
  }
  
  @keyframes rotate {
    100% {
      transform: rotate(1turn);
    }
  }
`

const ImageContent = styled.div`
  position: relative;
  z-index: 1;
  width: calc(100% - 4px);
  height: calc(100% - 4px);
  background-color: #2A3880;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .profile-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.2rem;
    background: linear-gradient(135deg, #1E2852 0%, #2A3880 50%, #0A66C2 100%);
    border-radius: 12px;
    padding: 2rem;
    text-align: center;
  }
`

const SocialLinks = styled(motion.div)`
  position: absolute;
  left: 20px;
  bottom: 20px;
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    position: relative;
    left: auto;
    bottom: auto;
    justify-content: center;
    margin-top: 2rem;
  }
`

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  transition: var(--transition);
  
  &:hover {
    background-color: white;
    color: var(--primary);
    transform: translateY(-3px);
  }
`

const Hero = () => {
  return (
    <HeroContainer id="home">
      <HeroContent>
        <HeroText>
          <SubHeading
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hello, I'm
          </SubHeading>
          <Heading
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Nagarjun <span>Rajendran</span>
          </Heading>
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            AIoT Professional with 15+ years of experience in embedded software, cloud architecture, and digital transformation.
          </Description>
          <HeroButtons
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <PrimaryButton href="#contact">
              Hire Me <FontAwesomeIcon icon={faArrowRight} />
            </PrimaryButton>
            <SecondaryButton href="#experience">
              My Experience
            </SecondaryButton>
          </HeroButtons>
          
          <SocialLinks
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <SocialLink href="https://www.linkedin.com/in/nagarjunr/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </SocialLink>
            <SocialLink href="https://github.com/nagarjunr" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </SocialLink>
          </SocialLinks>
        </HeroText>
        
        <HeroImageContainer
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <HeroImage>
            <ImageContent>
              <div className="profile-placeholder">Nagarjun Rajendran<br/>AIoT Professional</div>
            </ImageContent>
          </HeroImage>
        </HeroImageContainer>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
