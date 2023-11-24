import React, { useEffect, useRef, useState } from 'react';

function Navigation() {
//   const [isMenuActive, setIsMenuActive] = useState(false);
//   const navButtonsRef = useRef([]);
//   const navBackgroundRef = useRef(null);
//   const navRef = useRef(null);
//   const hamburgerMenuRef = useRef(null);

//   const aboutSectionRef = useRef(null);
//   const skillsSectionRef = useRef(null);
//   const projectsSectionRef = useRef(null);
//   const certificatesSectionRef = useRef(null);
//   const headerSectionRef = useRef(null);

//   useEffect(() => {
//     const navButtons = navButtonsRef.current;
//     const navBackground = navBackgroundRef.current;
//     const nav = navRef.current;
//     const hamburgerMenu = hamburgerMenuRef.current;

//     const aboutSection = aboutSectionRef.current;
//     const skillsSection = skillsSectionRef.current;
//     const projectsSection = projectsSectionRef.current;
//     const certificatesSection = certificatesSectionRef.current;
//     const headerSection = headerSectionRef.current;

//     const aboutLink = document.querySelector('.about-link');
//     const skillsLink = document.querySelector('.skills-link');
//     const projectsLink = document.querySelector('.projects-link');
//     const certificatesLink = document.querySelector('.certificates-link');
//     const contactsLink = document.querySelector('.contacts-link');
//     function getPosition(element) {
//         var yPosition = 0;

//         while (element) {
//             yPosition +=
//                 element.offsetTop - element.scrollTop + element.clientTop;
//             element = element.offsetParent;
//         }

//         return yPosition;
//     }
//     const scrollHandler = () => {
//         const y = window.scrollY;

//         if (y > 0) {
//             navBackground.classList.add('active');
//             navButtons.forEach((e) => e.classList.add('scroll'));
//         } else if (y == 0) {
//             navBackground.classList.remove('active');
//             navButtons.forEach((e) => e.classList.remove('scroll'));
//             navButtons.forEach((e) => e.classList.remove('acitve'));
//         }

//         let documentHeight = document.body.scrollHeight;
//         let currentScroll = window.scrollY + window.innerHeight;

//         if (y <= getPosition(headerSection)) {
//             navButtons.forEach((e) => e.classList.remove('active'));
//         } else if (
//             y >= getPosition(aboutSection) - 200 &&
//             y <= getPosition(skillsSection) - 150
//         ) {
//             navButtons.forEach((e) => e.classList.remove('active'));
//             aboutLink.classList.add('active');
//         } else if (
//             y >= getPosition(skillsSection) - 150 &&
//             y <= getPosition(projectsSection) - 100
//         ) {
//             navButtons.forEach((e) => e.classList.remove('active'));
//             skillsLink.classList.add('active');
//         } else if (
//             y >= getPosition(projectsSection) - 100 &&
//             y <= getPosition(certificatesSection) - 100
//         ) {
//             navButtons.forEach((e) => e.classList.remove('active'));
//             projectsLink.classList.add('active');
//         } else if (
//             y >= getPosition(certificatesSection) - 100 &&
//             !(currentScroll + 5 >= documentHeight)
//         ) {
//             navButtons.forEach((e) => e.classList.remove('active'));
//             certificatesLink.classList.add('active');
//         } else if (currentScroll + 5 >= documentHeight) {
//             navButtons.forEach((e) => e.classList.remove('active'));
//             contactsLink.classList.add('active');
//         }    };

//     const hamburgerMenuHandler = () => {
//       setIsMenuActive((prev) => !prev);
//     };

//     window.addEventListener('scroll', scrollHandler);
//     hamburgerMenu.addEventListener('click', hamburgerMenuHandler);

//     return () => {
//       window.removeEventListener('scroll', scrollHandler);
//     };
//   }, []);

//   return (
//     // Your JSX for the navigation component
//     // Make sure to add appropriate refs to the relevant elements
//     <></>
//   );
}

export default Navigation;
