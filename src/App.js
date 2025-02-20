import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import './Portfolio.obfuscated.js';
import { initBackToTop } from './Portfolio';

function App() {
  useEffect(() => {
    initBackToTop();
  }, []);

  return (
    <div className="App">
            <header>
                <nav>
                    <ul>
                        <li><a href="#about"><i className="fas fa-user"></i> About</a></li>
                        <li><a href="#education"><i className="fas fa-graduation-cap"></i> Education</a></li>
                        <li><a href="#experience"><i className="fas fa-briefcase"></i> Experience</a></li>
                        <li><a href="#projects"><i className="fas fa-code"></i> Projects</a></li>
                        <li><a href="#contact"><i className="fas fa-envelope"></i> Contact</a></li>
                    </ul>
                </nav>
            </header>

            <main>
                <section id="about" className="section">
                    <div className="profile-container">
                        <div className="profile-image">
                            <img src="./images/profile.webp" alt="Nguyen Vu Van Duc" />
                        </div>
                    </div>
                    <h1 className="typing-effect">Hello, I'm Nguyen Vu Van Duc 🙌</h1>
                    <p className="fade-in-text">Highly motivated Software Engineer with a strong foundation in .NET and front-end skill. Eager to contribute to a dynamic team, continuously learn new technologies, and leverage diverse experience - including working with Shopify - for delivering reliable software solutions.</p>
                </section>

                <section id="education" className="section">
                    <h2><i className="fas fa-graduation-cap"></i> Education</h2>
                    <div className="education-item">
                        <h3>University of Information Technology UIT-HCM</h3>
                        <p>B.Eng. in Information System - 09/2019 - 11/2023</p>
                        <p>GPA: 8.02/10</p>
                    </div>
                </section>

                <section id="experience" className="section">
                    <h2><i className="fas fa-briefcase"></i> Work Experience</h2>
                    <div className="education-item">
                        <h3>Fullstack Engineer at Spiraledge</h3>
                        <p>02/2023 - Present</p>
                        <ul>
                            <li>Contributed to multiple web application projects for SwimOutlet.com</li>
                            <li>Developed and maintained features for both public website and internal employee applications</li>
                            <li>Developed console tools to automate data updates between internal systems and external platforms</li>
                            <li>Worked with Shopify's data structures, including Metafield, Metaobject and Liquid files</li>
                        </ul>
                    </div>
                    <div className="education-item">
                        <h3>Intern Backend Engineer at NashTech</h3>
                        <p>10/2022 - 12/2022</p>
                        <ul>
                            <li>Independently developed an e-commerce website</li>
                            <li>Gained experience in building both front-end and back-end components</li>
                            <li>Contributed to the development of an asset management system</li>
                            <li>Gained experience with Basic Azure DevOps and Unit Testing</li>
                        </ul>
                    </div>
                </section>

                <section id="projects" className="section">
                    <h2><i className="fas fa-code-branch"></i> Projects</h2>
                    <div className="project-grid">
                        <div className="project-card">
                            <h3>Chat Realtime</h3>
                            <div className="video-container">
                                <video controls>
                                    <source src="/videos/VideoDemoChatApp.mkv" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <p>A real-time chat application built with:</p>
                            <ul>
                                <li>Front-end: HTML, CSS, Bootstrap</li>
                                <li>Back-end: ASP.NET Core, LINQ, SignalR</li>
                                <li>Database: Azure SQL</li>
                                <li>Deployed with Azure Pipelines</li>
                            </ul>
                            <a href="https://dev.azure.com/19521844/ChatForFun" className="project-link">View Project</a>
                        </div>
                        <div className="project-card">
                            <h3>E-commerce Web</h3>
                            <div className="video-container">
                                <video controls>
                                    <source src="/videos/VideoDemoEcommer.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <p>A e-commerce website built with:</p>
                            <ul>
                                <li>Front-end: ReactJS, HTML, CSS, Bootstrap</li>
                                <li>Back-end: ASP.NET Core, LINQ, xUnit</li>
                                <li>Database: SQL Server</li>
                            </ul>
                            <a href="https://github.com/ducvuive/E-commerce_Laptop_" className="project-link">View Project</a>
                        </div>
                    </div>
                </section>

                <section id="contact" className="section">
                    <h2><i className="fas fa-paper-plane"></i> Contact Me</h2>
                    <div className="contact-info">
                        <p><i className="fas fa-envelope"></i> Email: <a href="mailto:duc20062001@gmail.com">duc20062001@gmail.com</a></p>
                        <p><i className="fas fa-phone"></i> Phone: 0766790335</p>
                        <p><i className="fab fa-linkedin"></i> LinkedIn: <a href="https://www.linkedin.com/in/nvvduc/">Nguyen Vu Van Duc</a></p>
                    </div>
                </section>
            </main>

            <footer>
                <div className="footer-content">
                    <div className="footer-text">
                        <p>Made with <span className="heart">❤️</span> by Nguyen Vu Van Duc</p>
                        <p className="footer-quote">"Code is like humor. When you have to explain it, it's bad." - Cory House</p>
                    </div>
                </div>
            </footer>

            <button id="back-to-top" class="back-to-top" title="Back to Top">
                <i className="fas fa-arrow-up"></i>
            </button>
    </div>
  );
}
export default App;
