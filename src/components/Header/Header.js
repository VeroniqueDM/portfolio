// import React, { useState } from "react";

import { useState, useContext } from "react";
import DataContext from "../../DataContext";

function Header() {
    // const [isMenuActive, setMenuActive] = useState(false);

    // const toggleMenu = () => {
    //   setMenuActive(!isMenuActive);
    // };
    const { isMenuActive, handleMenuToggle, navBackgroundActive } =    useContext(DataContext);
    const hamburgerClass = `hamburger ${isMenuActive ? 'active' : ''}`;
    const navClass = `nav ${isMenuActive ? "active" : ""}`;

    return (
        <header>
            <section class="header-wrapper">
            <nav className={navClass}>
            {/* <nav> */}
                    {/* <div class="nav-background"></div> */}
                    <div className={`nav-background ${navBackgroundActive ? 'active' : ''}`}></div>

                    <ul>
                        <a class="about-link" href="#about">
                            <li>
                                <span>About</span>
                            </li>
                        </a>
                        <a class="skills-link" href="#skills">
                            <li>
                                <span>Skills</span>
                            </li>
                        </a>
                        <a class="projects-link" href="#projects">
                            <li>
                                <span>Portfolio</span>
                            </li>
                        </a>

                        <a class="certificates-link" href="#certificates">
                            <li>
                                <span>Certificates</span>
                            </li>
                        </a>
                  
                        <a class="contacts-link" href="#contacts">
                            <li>
                                <span>Contacts</span>
                            </li>
                        </a>
                    </ul>
                </nav>
                {/* <div class="hamburger"> */}
                <div className={hamburgerClass} onClick={handleMenuToggle}>
        <div></div>
        <div></div>
        <div></div>
      </div>
                <section class="img-section"></section>
            </section>
            <section class="personal-info">
                <div class="img-wrapper"></div>
                <div id="header"></div>
                <h1>Veronika Miteva</h1>
                <h2>Full-stack Developer</h2>
                <section class="contact-links-section">
                    <div class="link-wrapper">
                        <a
                            href="https://github.com/VeroniqueDM"
                            target="_blank"
                            rel="nooper noreferrer"
                        >
                            <svg
                                class="github"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 496 512"
                            >
                                {/* <!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                            </svg>
                        </a>
                    </div>
                    <div id="about"></div>

                    <div class="link-wrapper">
                        <a
                            href="https://www.linkedin.com/in/veronika-d-miteva"
                            target="_blank"
                            rel="nooper noreferrer"
                        >
                            <svg
                                class="linkedin"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                            >
                                {/* <!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                            </svg>
                        </a>
                    </div>
                </section>
            </section>
        </header>
    );
}

export default Header;
