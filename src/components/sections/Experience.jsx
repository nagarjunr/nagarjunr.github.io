import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ExperienceContainer = styled.section`
  padding: 6rem 0;
`;

const ExperienceContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

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
`;

const SectionDescription = styled.p`
  max-width: 700px;
  margin: 0 auto;
  font-size: 1.1rem;
  color: var(--text-light);
`;

const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2rem;
  }
`;

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
`;

const Tab = styled.button`
  padding: 1rem 1.5rem;
  border: none;
  background-color: transparent;
  color: ${(props) => (props.isActive ? 'var(--primary)' : 'var(--text)')};
  font-weight: ${(props) => (props.isActive ? '600' : '400')};
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
    background-color: ${(props) =>
      props.isActive ? 'var(--primary)' : 'transparent'};
    transition: var(--transition);
  }

  &:hover {
    color: var(--primary);
  }

  @media (min-width: 768px) {
    padding: 1rem;
    border-left: 2px solid
      ${(props) => (props.isActive ? 'var(--primary)' : 'transparent')};

    &::after {
      display: none;
    }
  }
`;

const TabPanel = styled(motion.div)`
  flex: 1;
  padding: 1rem;
`;

const JobTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--text);
`;

const CompanyInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

const CompanyName = styled.span`
  color: var(--primary);
  font-weight: 600;
  margin-right: 1rem;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

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
`;

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
`;

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.5rem;
`;

const SkillTag = styled.span`
  background-color: rgba(10, 102, 194, 0.1);
  color: var(--primary);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
`;

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const jobs = [
    {
      company: 'Bosch Digital',
      title: 'Cloud & AIoT Solutions Manager',
      period: '2023 - Present',
      description: [
        'Spearheaded the design and implementation of an end-to-end AIoT platform that reduced operational costs by 35% for manufacturing clients.',
        'Led the architectural design of a secure, scalable automotive logistics platform processing 10M+ daily events with 99.99% uptime.',
        'Engineered a DevSecOps platform on AWS that accelerated deployment cycles by 60% while enhancing security compliance.',
        'Architected the integration between Bosch IoT Suite and Electric Scooter Platform, enabling real-time fleet management and predictive maintenance.',
        'Mentored 5 junior architects, creating a knowledge-sharing program that improved team skills and project delivery quality.',
      ],
      skills: [
        'Cloud Systems Architecture (AWS, Azure)',
        'AIoT System Architecture & Design',
        'Enterprise Integration Patterns',
        'Technical Mentorship',
        'Cloud Strategy',
        'Emergent Technologies (Quantum Computing. AI, Edge Computing)',
      ],
    },
    {
      company: 'Bosch.IO',
      title: 'Principal Architect & Technical Lead',
      period: '2017 - 2022',
      description: [
        'Designed and implemented a modular IoT logistics platform that reduced integration time for new clients by 70%.',
        'Architected a fault-tolerant AWS infrastructure supporting 500+ IoT gateways with automated failover and zero data loss.',
        'Developed a scalable data pipeline processing 5TB daily that reduced analytics processing time from hours to minutes.',
        'Created architecture patterns and technical playbooks that became company standards, improving solution consistency.',
        'Led a team of 12 developers through the successful delivery of 3 major enterprise IoT implementations.',
      ],
      skills: [
        'Distributed Systems Design',
        'IoT Platform Architecture',
        'Cloud-Native Solutions',
        'Technical Leadership',
        'Enterprise-Scale Data Processing',
      ],
    },
    {
      company: 'Previous Roles',
      title: 'Embedded Systems Specialist',
      period: '2011 - 2019',
      description: [
        'Optimized video decoding algorithms achieving 40% improvement in processing efficiency for resource-constrained devices.',
        'Developed precision firmware for industrial 3D printers that improved manufacturing accuracy by 0.02mm, meeting critical medical device requirements.',
        'Created a novel low-latency communication protocol that extended battery life of IoT sensors by up to 60%.',
        'Designed and implemented an event-driven architecture for ultra-low-power asynchronous systems used in environmental monitoring.',
        'Contributed to an open-source embedded framework used in more than 200 commercial products worldwide.',
      ],
      skills: [
        'Real-Time Operating Systems',
        'Embedded C/C++',
        'Firmware Optimization',
        'Hardware-Software Integration',
        'Communication Protocols',
      ],
    },
  ];

  return (
    <ExperienceContainer id="experience">
      <ExperienceContent>
        <SectionHeader>
          <SectionTitle>My Experience</SectionTitle>
          <SectionDescription>
            With over 15 years of industry expertise, I've successfully
            delivered transformative technology solutions across the entire
            stack—from low-level embedded systems to enterprise cloud
            architectures—creating measurable business value at every level.
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
  );
};

export default Experience;
