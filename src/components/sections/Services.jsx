import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLaptopCode,
  faCloud,
  faMicrochip,
  faCogs,
  faServer,
  faLightbulb,
} from '@fortawesome/free-solid-svg-icons';

const ServicesContainer = styled.section`
  padding: 6rem 0;
  background-color: #f9f9f9;
`;

const ServicesContent = styled.div`
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

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
`;

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
`;

const ServiceTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: var(--text);
`;

const ServiceDescription = styled.p`
  color: var(--text-light);
  margin-bottom: 1.5rem;
`;

const LearnMore = styled.a`
  color: var(--primary);
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  transition: var(--transition);

  &:hover {
    text-decoration: underline;
  }
`;

const Services = () => {
  const servicesData = [
    {
      icon: faCloud,
      title: 'Enterprise Cloud Architecture',
      description:
        'Strategic cloud architecture consulting for AWS and Azure with proven expertise in designing resilient, scalable systems that reduce TCO by 30-40%. Specializing in serverless architectures, containerization, and multi-region high availability deployments.',
    },
    {
      icon: faServer,
      title: 'Intelligent IoT Solutions',
      description:
        'End-to-end IoT implementation from secure edge device integration to advanced cloud analytics. Create connected ecosystems that transform raw data into actionable business intelligence with real-time monitoring, predictive maintenance, and automated workflows.',
    },
    {
      icon: faLaptopCode,
      title: 'Custom Software Engineering',
      description:
        'Bespoke software development across the entire technology stack—from firmware and embedded applications to cloud-native services. Delivering high-performance, maintainable solutions with modern DevOps practices that accelerate your time-to-market.',
    },
    {
      icon: faCogs,
      title: 'AIoT-Driven Transformation',
      description:
        'Comprehensive digital transformation strategies that leverage the convergence of AI and IoT to revolutionize operations, create new revenue streams, and enhance customer experiences. Develop roadmaps that align technology initiatives with measurable business outcomes.',
    },
    {
      icon: faLightbulb,
      title: 'Technology Innovation Consulting',
      description:
        'Strategic technology advisory services to help businesses navigate complex technological landscapes. Identify emerging opportunities, develop proof-of-concepts, and create practical implementation strategies that drive innovation while managing technical debt.',
    },
    {
      icon: faMicrochip,
      title: 'Advanced Embedded Systems',
      description:
        'Cutting-edge embedded systems engineering for resource-constrained environments. Expertise in real-time operating systems, hardware-software integration, power optimization, and certification-ready development for regulated industries like automotive and medical devices.',
    },
  ];

  return (
    <ServicesContainer id="services">
      <ServicesContent>
        <SectionHeader>
          <SectionTitle>My Services</SectionTitle>
          <SectionDescription>
            I deliver high-value technology solutions at the convergence of IoT,
            cloud, and AI—helping forward-thinking organizations harness the
            power of connected intelligence to gain competitive advantage,
            optimize operations, and create new business models.
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
              <LearnMore href="#contact">Get Started →</LearnMore>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </ServicesContent>
    </ServicesContainer>
  );
};

export default Services;
