import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${(props) => (props.scrolled ? 'white' : 'transparent')};
  box-shadow: ${(props) =>
    props.scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
  padding: 1rem 0;
  z-index: 1000;
  transition: var(--transition);

  // Ensure contrast against hero background
  @media (max-width: 768px) {
    background-color: ${(props) => (props.scrolled ? 'white' : 'transparent')};
  }
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${(props) => 'var(--primary)'};
  transition: var(--transition);
  text-shadow: none;

  span {
    color: var(--primary);
    text-shadow: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${(props) => (props.isOpen ? '0' : '-100%')};
    width: 70%;
    height: 100vh;
    background-color: white;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: var(--transition);
  }
`;

const NavLink = styled(Link)`
  margin: 0 1rem;
  color: var(--text);
  font-weight: 500;
  transition: var(--transition);
  text-shadow: none;

  &:hover {
    color: var(--primary);
    text-shadow: none;
  }

  @media (max-width: 768px) {
    margin: 1rem;
    color: var(--text);
    text-shadow: none;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--text);
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;
  padding: 5px;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  // Start with scrolled=true to ensure text is dark on initial page load
  const [scrolled, setScrolled] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Always keep scrolled as true to maintain dark text color
    setScrolled(true);

    const handleScroll = () => {
      // Only change background color opacity based on scroll
      // Text color will remain dark regardless of scroll position
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer scrolled={scrolled}>
      <HeaderContent>
        <Logo to="/" scrolled={scrolled}>
          Nagarjun<span> Rajendran</span>
        </Logo>

        <MobileMenuButton onClick={toggleMenu} scrolled={scrolled}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </MobileMenuButton>

        <Nav isOpen={isOpen}>
          <NavLink to="/" scrolled={scrolled} onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <NavLink
            to="/#about"
            scrolled={scrolled}
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/#experience"
            scrolled={scrolled}
            onClick={() => setIsOpen(false)}
          >
            Experience
          </NavLink>
          <NavLink
            to="/#services"
            scrolled={scrolled}
            onClick={() => setIsOpen(false)}
          >
            Services
          </NavLink>
          <NavLink
            to="/#contact"
            scrolled={scrolled}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
