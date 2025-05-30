import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faCloud, faMicrochip, faCogs, faServer, faLightbulb } from '@fortawesome/free-solid-svg-icons'

const ServicesContainer = styled.section`
  padding: 6rem 0;
  background-color: #f9f9f9;
`

const ServicesContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    left: 25%;
    bottom: -5px;
    width: 50%;
    height: 4px;
    background-color: var(--primary);
  }
`

const SectionDescription = styled.p`
  max-width: 700px;
  margin: 0 auto;
  font-size: 1.1rem;
  color: var(--text-light);
`

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`

const ServiceCard = styled(motion.div)`
  background-color: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: var(--transition);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background-color: var(--primary);
    transition: var(--transition);
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`

const ServiceIcon = styled.div`
  width: 60px;
  height: 60px;
  background-color: rgba(10, 102, 194, 0.1);
  color: var(--primary);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`

const ServiceTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: var(--text);
`

const ServiceDescription = styled.p`
  color: var(--text-light);
  margin-bottom: 1.5rem;
`

const LearnMore = styled.a`
  color: var(--primary);
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  transition: var(--transition);
  
  &:hover {
    text-decoration: underline;
  }
`

const Services = () => {
  const servicesData = [
    {
      icon: faCloud,
      title: "Cloud Architecture & Strategy",
      description: "Expert cloud architecture consulting for AWS and Azure. I design scalable, secure, and cost-effective cloud solutions tailored to your business needs."
    },
    {
      icon: faServer,
      title: "IoT Solution Development",
      description: "End-to-end IoT implementation from edge device integration to cloud connectivity, data analytics, and management dashboards."
    },
    {
      icon: faLaptopCode,
      title: "Software Development",
      description: "Custom software solutions for embedded systems, web applications, and cloud services using modern technologies and best practices."
    },
    {
      icon: faCogs,
      title: "Digital Transformation",
      description: "Strategic guidance on leveraging technology to transform business operations, enhance customer experiences, and create new value propositions."
    },
    {
      icon: faLightbulb,
      title: "Technology Consulting",
      description: "Expert advice on technology selection, implementation strategies, and roadmap development to help you achieve your business goals."
    },
    {
      icon: faMicrochip,
      title: "Embedded Systems Design",
      description: "Specialized expertise in designing and optimizing embedded systems for resource-constrained environments and real-time applications."
    }
  ]
  
  return (
    <ServicesContainer id="services">
      <ServicesContent>
        <SectionHeader>
          <SectionTitle>My Services</SectionTitle>
          <SectionDescription>
            I offer specialized services at the intersection of IoT, cloud, and AI technologies to help businesses innovate and transform.
          </SectionDescription>
        </SectionHeader>
        
        <ServicesGrid>
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceIcon>
                <FontAwesomeIcon icon={service.icon} />
              </ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <LearnMore href="#contact">
                Get Started →
              </LearnMore>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </ServicesContent>
    </ServicesContainer>
  )
}

export default Services
