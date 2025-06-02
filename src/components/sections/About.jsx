import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCloud,
  faMicrochip,
  faServer,
  faCogs,
  faUserGraduate,
  faGlobeAmericas,
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
              Technology Expert with Global Experience & Mentorship Passion
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
            My 15+ year journey in technology has given me extensive expertise
            in AIoT solutions and cloud architectures. Along this path, I've
            developed a passion for helping others succeed in their careers.
            While my primary strength is in technical innovation, I'm also open
            to offering career mentorship and guidance for international
            education opportunities based on my own experiences living and
            working across borders. I aim to combine solving complex technical
            challenges with helping others navigate their professional journeys
            in the global technology landscape.
          </AboutDescription>

          <SkillsContainer>
            <SkillCard>
              <SkillIcon>
                <FontAwesomeIcon icon={faUserGraduate} />
              </SkillIcon>
              <SkillInfo>
                <h3>Career Mentorship</h3>
                <p>
                  Open to providing personalized guidance to professionals
                  seeking advice on career transitions, skill development, and
                  interview preparation based on my own journey in the tech
                  industry and lessons learned along the way
                </p>
              </SkillInfo>
            </SkillCard>

            <SkillCard>
              <SkillIcon>
                <FontAwesomeIcon icon={faGlobeAmericas} />
              </SkillIcon>
              <SkillInfo>
                <h3>International Education</h3>
                <p>
                  Willing to share insights with students and professionals
                  interested in international opportunities, drawing from my
                  personal experiences with university selection, admissions
                  processes, and cultural adaptation in global settings
                </p>
              </SkillInfo>
            </SkillCard>

            <SkillCard>
              <SkillIcon>
                <FontAwesomeIcon icon={faCloud} />
              </SkillIcon>
              <SkillInfo>
                <h3>Cloud Architecture</h3>
                <p>
                  AWS & Azure certified architect with extensive experience
                  creating resilient cloud-native solutions that scale with
                  business needs, leveraging best practices in serverless
                  computing, microservices, and distributed systems
                </p>
              </SkillInfo>
            </SkillCard>

            <SkillCard>
              <SkillIcon>
                <FontAwesomeIcon icon={faCogs} />
              </SkillIcon>
              <SkillInfo>
                <h3>AIoT Solutions</h3>
                <p>
                  Architect of intelligent systems that connect physical devices
                  to cloud platforms, creating innovative solutions that
                  transform raw data into actionable insights through seamless
                  integration of IoT devices and AI/ML technologies
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
