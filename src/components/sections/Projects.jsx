import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ProjectsContainer = styled.section`
  padding: 6rem 0;
  background-color: #f9f9f9;
`;

const ProjectsContent = styled.div`
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: var(--transition);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  width: 100%;
  background: linear-gradient(135deg, #1e2852 0%, #2a3880 50%, #0a66c2 100%);
  position: relative;
  overflow: hidden;

  .project-placeholder {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.2rem;
    font-weight: 600;
    text-align: center;
    padding: 1rem;
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const ProjectCategory = styled.p`
  color: var(--primary);
  font-weight: 500;
  font-size: 0.875rem;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: var(--text-light);
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  color: var(--primary);
  font-weight: 600;
  gap: 0.5rem;
  transition: var(--transition);

  &:hover {
    gap: 0.8rem;
  }
`;

const ViewAllButton = styled(motion.a)`
  background-color: transparent;
  border: 2px solid var(--primary);
  color: var(--primary);
  font-weight: 600;
  padding: 0.75rem 2rem;
  border-radius: 5px;
  display: inline-block;
  margin: 3rem auto 0;
  transition: var(--transition);

  &:hover {
    background-color: var(--primary);
    color: white;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Projects = () => {
  const projectsData = [
    {
      title: 'Automotive IoT Analytics Platform',
      category: 'Cloud Architecture',
      description:
        'Designed and implemented a scalable IoT data processing platform handling 500M+ daily events from connected vehicles, enabling real-time analytics and predictive maintenance capabilities that reduced fleet downtime by 37%.',
      image: 'automotive-iot',
    },
    {
      title: 'Smart Factory Monitoring System',
      category: 'Industrial IoT',
      description:
        'Developed an end-to-end factory monitoring solution with edge computing capabilities, processing sensor data from 200+ manufacturing stations to optimize production workflows and reduce operational costs by 22%.',
      image: 'smart-factory',
    },
    {
      title: 'Healthcare Remote Monitoring Platform',
      category: 'AIoT Solution',
      description:
        'Architected a HIPAA-compliant remote patient monitoring system that integrates with medical IoT devices, using AI to analyze patient data and alert healthcare providers to potential health issues before they become critical.',
      image: 'healthcare-monitoring',
    },
  ];

  return (
    <ProjectsContainer id="projects">
      <ProjectsContent>
        <SectionHeader>
          <SectionTitle>Featured Projects</SectionTitle>
          <SectionDescription>
            Explore a selection of innovative solutions I've designed and
            delivered for clients across various industries, demonstrating my
            approach to solving complex technical challenges.
          </SectionDescription>
        </SectionHeader>

        <ProjectsGrid>
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectImage>
                <div className="project-placeholder">{project.image}</div>
              </ProjectImage>
              <ProjectContent>
                <ProjectCategory>{project.category}</ProjectCategory>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectLink href="#contact">
                  Case Study <FontAwesomeIcon icon={faArrowRight} />
                </ProjectLink>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>

        <ButtonContainer>
          <ViewAllButton
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Discuss Your Project
          </ViewAllButton>
        </ButtonContainer>
      </ProjectsContent>
    </ProjectsContainer>
  );
};

export default Projects;
