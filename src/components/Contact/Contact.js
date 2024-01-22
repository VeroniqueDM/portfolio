function Contact() {
    return (
        <section class="contacts" id="contacts">
            <div class="contacts-wrapper">
                <h3>Contacts</h3>
                <div class="card-wrapper">
                    <p>
                        <span>veronika.dmiteva@gmail.com</span>
                        <svg
                            fill="#000000"
                            viewBox="0 0 30 30"
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                        >
                            <g id="SVGRepo_bgCarrier" stroke-width="0" />
                            <g
                                id="SVGRepo_tracerCarrier"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M30 6.692v18.587L22.747 16.213l-1.378 1.103 7.323 9.155H1.308l7.323 -9.155 -1.378 -1.103L0 25.278V6.692l14.999 13.007L30 6.692Zm-0.001 -3.16v0.822L15 17.36 0.001 4.354V3.531h29.998Z"
                                    fill-rule="evenodd"
                                />
                            </g>
                        </svg>
                    </p>

                    {/* <p>
                        veronika.dmiteva@gmail.com
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z" />
                        </svg>
                    </p> */}
                    <p>
                        {/* Or you can can find me on */}
                        Or contact me on
                        <a
                            href="https://www.linkedin.com/in/veronika-d-miteva"
                            target="_blank"
                            rel="nooper noreferrer"
                            style={
                                {
                                    // verticalAlign: "middle",
                                    // marginLeft: "88px",
                                }
                            }
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
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Contact;
