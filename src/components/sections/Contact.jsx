import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';

const ContactContainer = styled.section`
  padding: 6rem 0;
`;

const ContactContent = styled.div`
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

const ContactLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled(motion.div)`
  background-color: var(--primary);
  border-radius: 10px;
  padding: 2rem;
  color: white;
  height: fit-content;
`;

const ContactInfoTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

const ContactInfoList = styled.ul`
  list-style-type: none;
`;

const ContactInfoItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ContactIconContainer = styled.div`
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  flex-shrink: 0;
`;

const ContactInfoContent = styled.div`
  h4 {
    margin-bottom: 0.3rem;
    font-weight: 600;
  }

  p {
    opacity: 0.9;
    font-size: 0.9rem;
  }
`;

const ContactForm = styled(motion.form)`
  background-color: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: var(--text);
  }
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  font-family: inherit;
  transition: var(--transition);

  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(10, 102, 194, 0.1);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  font-family: inherit;
  resize: vertical;
  min-height: 150px;
  transition: var(--transition);

  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(10, 102, 194, 0.1);
  }
`;

const SubmitButton = styled.button`
  background-color: var(--primary);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    background-color: var(--secondary);
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`;

const FormMessage = styled.div`
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 5px;
  text-align: center;

  &.success {
    background-color: rgba(57, 181, 74, 0.1);
    color: var(--success);
    border: 1px solid var(--success);
  }

  &.error {
    background-color: rgba(220, 53, 69, 0.1);
    color: #dc3545;
    border: 1px solid #dc3545;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Add your EmailJS service ID, template ID, and public key
      // This is a placeholder, replace with your actual EmailJS details
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form.current,
        'YOUR_PUBLIC_KEY'
      );

      setStatus({
        submitted: true,
        success: true,
        message: 'Thank you! Your message has been sent successfully.',
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setStatus({
        submitted: true,
        success: false,
        message: 'Oops! Something went wrong. Please try again later.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContactContainer id="contact">
      <ContactContent>
        <SectionHeader>
          <SectionTitle>Let's Connect</SectionTitle>
          <SectionDescription>
            Whether you're seeking technology expertise in AIoT and cloud
            solutions, or would like to discuss career paths and international
            education opportunities, I'm open to connecting. While my primary
            expertise is in technology, I'm also happy to share insights from my
            own professional journey for those looking for guidance.
          </SectionDescription>
        </SectionHeader>

        <ContactLayout>
          <ContactInfo
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ContactInfoTitle>
              Let's discuss your technology needs
            </ContactInfoTitle>
            <ContactInfoList>
              <ContactInfoItem>
                <ContactIconContainer>
                  <FontAwesomeIcon icon={faEnvelope} />
                </ContactIconContainer>
                <ContactInfoContent>
                  <h4>Email</h4>
                  <p>contact@nagarjunr.com</p>
                </ContactInfoContent>
              </ContactInfoItem>

              <ContactInfoItem>
                <ContactIconContainer>
                  <FontAwesomeIcon icon={faPhone} />
                </ContactIconContainer>
                <ContactInfoContent>
                  <h4>Phone</h4>
                  <p>+1 (234) 567-890</p>
                </ContactInfoContent>
              </ContactInfoItem>

              <ContactInfoItem>
                <ContactIconContainer>
                  <FontAwesomeIcon icon={faLocationDot} />
                </ContactIconContainer>
                <ContactInfoContent>
                  <h4>Location</h4>
                  <p>Greater Chicago Area</p>
                </ContactInfoContent>
              </ContactInfoItem>
            </ContactInfoList>
          </ContactInfo>

          <ContactForm
            ref={form}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FormRow>
              <FormGroup>
                <label htmlFor="name">Your Name</label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="email">Your Email</label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
            </FormRow>

            <FormGroup>
              <label htmlFor="subject">Subject</label>
              <Input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <label htmlFor="message">Your Message</label>
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <SubmitButton type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </SubmitButton>

            {status.submitted && (
              <FormMessage className={status.success ? 'success' : 'error'}>
                {status.message}
              </FormMessage>
            )}
          </ContactForm>
        </ContactLayout>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact;
