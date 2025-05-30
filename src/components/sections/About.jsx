import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCloud,
  faMicrochip,
  faServer,
  faCogs,
} from '@fortawesome/free-solid-svg-icons';

const AboutContainer = styled.section`
  padding: 6rem 0;
  background-color: #f9f9f9;
`;

const AboutContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutImageContainer = styled(motion.div)`
  position: relative;

  @media (max-width: 768px) {
    order: 1;
  }
`;

const AboutImage = styled.div`
  width: 100%;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);

  .about-placeholder {
    width: 100%;
    height: 300px;
    background: linear-gradient(135deg, #1e2852 0%, #2a3880 50%, #0a66c2 100%);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    text-align: center;
    padding: 2rem;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.03);
    }
  }
`;

const ExperienceBadge = styled.div`
  position: absolute;
  bottom: -20px;
  right: 20px;
  background-color: var(--primary);
  color: white;
  padding: 1rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  box-shadow: 0 10px 20px rgba(10, 102, 194, 0.3);

  h3 {
    font-size: 2.5rem;
    margin-bottom: 0;
  }

  p {
    font-size: 0.9rem;
    opacity: 0.9;
    text-align: center;
  }
`;

const AboutInfo = styled(motion.div)`
  @media (max-width: 768px) {
    order: 2;
    text-align: center;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 50%;
    height: 4px;
    background-color: var(--primary);
  }

  @media (max-width: 768px) {
    &::after {
      left: 25%;
      width: 50%;
    }
  }
`;

const AboutDescription = styled.p`
  margin-bottom: 2rem;
  font-size: 1.1rem;
  color: var(--text);
  line-height: 1.8;
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCard = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;

  @media (max-width: 768px) {
    text-align: left;
  }
`;

const SkillIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: rgba(10, 102, 194, 0.1);
  color: var(--primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
`;

const SkillInfo = styled.div`
  h3 {
    margin-bottom: 0.3rem;
    font-size: 1.2rem;
  }

  p {
    font-size: 0.9rem;
    color: var(--text-light);
  }
`;

const ResumeButton = styled.a`
  background-color: var(--primary);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: var(--transition);

  &:hover {
    background-color: var(--secondary);
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutContent>
        <AboutImageContainer
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <AboutImage>
            <div className="about-placeholder">
              Cloud & AIoT Professional with 15+ years of experience
            </div>
          </AboutImage>
          <ExperienceBadge>
            <h3>15+</h3>
            <p>Years Experience</p>
          </ExperienceBadge>
        </AboutImageContainer>

        <AboutInfo
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle>About Me</SectionTitle>
          <AboutDescription>
            I'm a seasoned AIoT professional with 15+ years of expertise
            bridging the worlds of hardware and software. My career spans from
            developing real-time embedded systems to architecting
            enterprise-scale cloud solutions that power the digital economy. I
            specialize in creating seamless AIoT ecosystems that connect
            physical devices to intelligent cloud platforms, enabling
            data-driven decision making and automation that transforms how
            businesses operate. My technical leadership has delivered measurable
            business outcomes across automotive, manufacturing, and logistics
            industries.
          </AboutDescription>

          <SkillsContainer>
            <SkillCard>
              <SkillIcon>
                <FontAwesomeIcon icon={faCloud} />
              </SkillIcon>
              <SkillInfo>
                <h3>Cloud Architecture</h3>
                <p>
                  AWS & Azure certified architect specializing in serverless
                  architectures, microservices, and resilient cloud-native
                  solutions that scale seamlessly with business needs
                </p>
              </SkillInfo>
            </SkillCard>

            <SkillCard>
              <SkillIcon>
                <FontAwesomeIcon icon={faMicrochip} />
              </SkillIcon>
              <SkillInfo>
                <h3>Embedded Systems</h3>
                <p>
                  Expert in resource-constrained real-time systems, firmware
                  optimization, and hardware-software integration for critical
                  applications in automotive and industrial domains
                </p>
              </SkillInfo>
            </SkillCard>

            <SkillCard>
              <SkillIcon>
                <FontAwesomeIcon icon={faServer} />
              </SkillIcon>
              <SkillInfo>
                <h3>IoT Solutions</h3>
                <p>
                  Architect of end-to-end IoT ecosystems from secure edge device
                  connectivity to robust cloud backends, with expertise in IoT
                  protocols, device management, and data pipelines
                </p>
              </SkillInfo>
            </SkillCard>

            <SkillCard>
              <SkillIcon>
                <FontAwesomeIcon icon={faCogs} />
              </SkillIcon>
              <SkillInfo>
                <h3>AI Integration</h3>
                <p>
                  Specialist in embedding machine learning models into IoT
                  workflows, creating intelligent systems that deliver
                  predictive maintenance, anomaly detection, and automated
                  decision-making
                </p>
              </SkillInfo>
            </SkillCard>
          </SkillsContainer>

          <ResumeButton href="#" target="_blank" rel="noopener noreferrer">
            Download Resume
          </ResumeButton>
        </AboutInfo>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
