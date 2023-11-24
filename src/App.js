import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import "./styles.css";
import "./styles.scss";
import "./responsive.css";
import "./responsive.scss";
import Navigation from './components/Navigation/Navigation';
import React, { useState, useEffect, useRef  } from 'react';
import DataContext from "./DataContext";

function App() {
  const [isMenuActive, setMenuActive] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [navBackgroundActive, setNavBackgroundActive] = useState(false);
  const [navButtonsScroll, setNavButtonsScroll] = useState(false);
  const [navButtonsActive, setNavButtonsActive] = useState('');
  const headerSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const skillsSectionRef = useRef(null);
  const projectsSectionRef = useRef(null);
  const certificatesSectionRef = useRef(null);
  const getPosition = (element) => {
    let yPosition = 0;
  
    while (element) {
      yPosition += element.offsetTop - element.scrollTop + element.clientTop;
      element = element.offsetParent;
    }
  
    return yPosition;
  };
  useEffect(() => {
    const headerSection = headerSectionRef.current;
    const aboutSection = aboutSectionRef.current;
    const skillsSection = skillsSectionRef.current;
    const projectsSection = projectsSectionRef.current;
    const certificatesSection = certificatesSectionRef.current;
    // Add your scroll event handling logic here
    const handleScroll = () => {
      const y = window.scrollY;

      if (y > 0) {
        // Update state to add 'active' class to navBackground and 'scroll' class to navButtons
        // For example:
        setNavBackgroundActive(true);
        setNavButtonsScroll(true);
      } else if (y === 0) {
        // Update state to remove 'active' class from navBackground and 'scroll' class from navButtons
        // For example:
        setNavBackgroundActive(false);
        setNavButtonsScroll(false);
        setNavButtonsActive(false);
      }
    
      const documentHeight = document.body.scrollHeight;
      const currentScroll = window.scrollY + window.innerHeight;
    
      if (y <= getPosition(headerSection)) {
        // Update state to remove 'active' class from all navButtons
        // For example:
        setNavButtonsActive('');
      } else if (y >= getPosition(aboutSection) - 200 && y <= getPosition(skillsSection) - 150) {
        // Update state to add 'active' class to aboutLink and remove 'active' class from other navButtons
        // For example:
        setNavButtonsActive('about');
      } else if (y >= getPosition(skillsSection) - 150 && y <= getPosition(projectsSection) - 100) {
        // Update state to add 'active' class to skillsLink and remove 'active' class from other navButtons
        // For example:
        setNavButtonsActive('skills');
      } else if (y >= getPosition(projectsSection) - 100 && y <= getPosition(certificatesSection) - 100) {
        // Update state to add 'active' class to projectsLink and remove 'active' class from other navButtons
        // For example:
        setNavButtonsActive('projects');
      } else if (y >= getPosition(certificatesSection) - 100 && !(currentScroll + 5 >= documentHeight)) {
        // Update state to add 'active' class to certificatesLink and remove 'active' class from other navButtons
        // For example:
        setNavButtonsActive('certificates');
      } else if (currentScroll + 5 >= documentHeight) {
        // Update state to add 'active' class to contactsLink and remove 'active' class from other navButtons
        // For example:
        setNavButtonsActive('contacts');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  const handleMenuToggle = () => {
    setMenuActive(!isMenuActive);
  };
  return (
    <>
          <DataContext.Provider
                value={{
                  isMenuActive, setMenuActive, handleMenuToggle, navBackgroundActive
                }}
            >
    <Navigation/>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} /> */}
        </Route>
      </Routes>
      </DataContext.Provider>

    </>
  );
}

export default App;
