import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const ExperienceContainer = styled.section`
  padding: 6rem 0;
`

const ExperienceContent = styled.div`
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

const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2rem;
  }
`

const TabList = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #ddd;
  
  @media (min-width: 768px) {
    flex-direction: column;
    border-bottom: none;
    border-left: 1px solid #ddd;
    min-width: 200px;
    max-width: 200px;
    margin-bottom: 0;
  }
`

const Tab = styled.button`
  padding: 1rem 1.5rem;
  border: none;
  background-color: transparent;
  color: ${props => props.isActive ? 'var(--primary)' : 'var(--text)'};
  font-weight: ${props => props.isActive ? '600' : '400'};
  cursor: pointer;
  text-align: left;
  white-space: nowrap;
  position: relative;
  transition: var(--transition);
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: ${props => props.isActive ? 'var(--primary)' : 'transparent'};
    transition: var(--transition);
  }
  
  &:hover {
    color: var(--primary);
  }
  
  @media (min-width: 768px) {
    padding: 1rem;
    border-left: 2px solid ${props => props.isActive ? 'var(--primary)' : 'transparent'};
    
    &::after {
      display: none;
    }
  }
`

const TabPanel = styled(motion.div)`
  flex: 1;
  padding: 1rem;
`

const JobTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--text);
`

const CompanyInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`

const CompanyName = styled.span`
  color: var(--primary);
  font-weight: 600;
  margin-right: 1rem;
  
  @media (max-width: 768px) {
    margin-right: 0;
  }
`

const JobPeriod = styled.span`
  color: var(--text-light);
  display: flex;
  align-items: center;
  
  &::before {
    content: '';
    display: inline-block;
    width: 4px;
    height: 4px;
    background-color: var(--text-light);
    border-radius: 50%;
    margin: 0 0.5rem;
  }
  
  @media (max-width: 768px) {
    &::before {
      display: none;
    }
  }
`

const JobDescription = styled.ul`
  list-style-type: none;
  
  li {
    margin-bottom: 1rem;
    padding-left: 1.5rem;
    position: relative;
    
    &::before {
      content: '▹';
      position: absolute;
      left: 0;
      color: var(--primary);
    }
  }
`

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.5rem;
`

const SkillTag = styled.span`
  background-color: rgba(10, 102, 194, 0.1);
  color: var(--primary);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
`

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0)
  
  const jobs = [
    {
      company: 'Bosch Digital',
      title: 'Senior Architect',
      period: '2022 - Present',
      description: [
        'Leading AIoT initiatives for digital transformation projects across multiple industries.',
        'Consulting and architecting solutions for Automotive Logistics IoT Platform.',
        'Building DevSecOps platforms on AWS cloud and implementing overall architecture for logistics programs.',
        'Integrating Bosch IoT Suite with Automotive Platforms, including Electric Scooter Project.',
      ],
      skills: ['AWS', 'Cloud Architecture', 'IoT', 'DevSecOps', 'Digital Transformation']
    },
    {
      company: 'Bosch.IO',
      title: 'Technical Lead',
      period: '2019 - 2022',
      description: [
        'Led technical teams in implementing IoT logistics platform development.',
        'Developed AWS cloud infrastructure strategy and oversaw implementation.',
        'Provided solutions architectural expertise for complex technical challenges.',
        'Helped team members overcome challenges and delivered high-quality solutions.'
      ],
      skills: ['AWS', 'Cloud Infrastructure', 'IoT Platform', 'Team Leadership', 'Solution Architecture']
    },
    {
      company: 'Previous Roles',
      title: 'Embedded Software Engineer',
      period: '2010 - 2019',
      description: [
        'Developed real-time multi-threading video decoding algorithms.',
        'Implemented firmware for 3D printing technologies and stepper motor control.',
        'Enhanced communication protocols for embedded devices.',
        'Researched and developed event-based communication for ultra-low power asynchronous receivers.'
      ],
      skills: ['Embedded C/C++', 'Real-Time Systems', 'Firmware Development', 'Multi-threading', '3D Printing']
    }
  ]
  
  return (
    <ExperienceContainer id="experience">
      <ExperienceContent>
        <SectionHeader>
          <SectionTitle>My Experience</SectionTitle>
          <SectionDescription>
            With over 15 years in the industry, I've worked on a diverse range of projects from embedded systems to cloud architecture.
          </SectionDescription>
        </SectionHeader>
        
        <TabsContainer>
          <TabList>
            {jobs.map((job, index) => (
              <Tab 
                key={index}
                isActive={activeTab === index}
                onClick={() => setActiveTab(index)}
              >
                {job.company}
              </Tab>
            ))}
          </TabList>
          
          <TabPanel
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <JobTitle>{jobs[activeTab].title}</JobTitle>
            <CompanyInfo>
              <CompanyName>{jobs[activeTab].company}</CompanyName>
              <JobPeriod>{jobs[activeTab].period}</JobPeriod>
            </CompanyInfo>
            <JobDescription>
              {jobs[activeTab].description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </JobDescription>
            <SkillTags>
              {jobs[activeTab].skills.map((skill, index) => (
                <SkillTag key={index}>{skill}</SkillTag>
              ))}
            </SkillTags>
          </TabPanel>
        </TabsContainer>
      </ExperienceContent>
    </ExperienceContainer>
  )
}

export default Experience
