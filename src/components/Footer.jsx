import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

const FooterContainer = styled.footer`
  background-color: var(--dark);
  color: var(--light);
  padding: 3rem 0;
  margin-top: auto;
`

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`

const FooterLink = styled.a`
  color: var(--text-light);
  margin-bottom: 0.5rem;
  transition: var(--transition);
  
  &:hover {
    color: var(--primary);
  }
`

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #333;
  color: white;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--primary);
    transform: translateY(-3px);
  }
`

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid #444;
  color: var(--text-light);
`

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <FooterTitle>Nagarjun Rajendran</FooterTitle>
          <p>AIoT Professional with 15+ years of experience in embedded software, cloud architecture, and digital transformation.</p>
          <SocialIcons>
            <SocialIcon href="https://www.linkedin.com/in/nagarjunr/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </SocialIcon>
            <SocialIcon href="https://github.com/nagarjunr" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </SocialIcon>
            <SocialIcon href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </SocialIcon>
          </SocialIcons>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLink href="#about">About Me</FooterLink>
          <FooterLink href="#experience">Experience</FooterLink>
          <FooterLink href="#services">Services</FooterLink>
          <FooterLink href="#contact">Contact</FooterLink>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Contact Info</FooterTitle>
          <FooterLink href="mailto:contact@nagarjunr.com">contact@nagarjunr.com</FooterLink>
          <FooterLink href="tel:+1234567890">+1 (234) 567-890</FooterLink>
          <p>Greater Chicago Area</p>
        </FooterColumn>
      </FooterContent>
      
      <Copyright>
        © {currentYear} Nagarjun Rajendran. All rights reserved.
      </Copyright>
    </FooterContainer>
  )
}

export default Footer
