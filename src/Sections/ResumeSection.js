// ResumeSection.js
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ResumeSection() {
  const handleDownloadCV = () => {
    toast.info("You don't have permission to download CV. Please contact via email for more information.", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className="resume-container">
      <h3 className="header-section">Resume</h3>
      <section id="resume" className="section">
        
      <div className="resume-container">
        <div className="resume-section">
          <div className="resume-item resume-item-first">
            <h3 className="resume-section-title">
              <i className="fas fa-graduation-cap"></i> Education
            </h3>
          </div>
          
          <div className="timeline">
            <div className="resume-item">
              <div className="bullet-point"></div>
              <div className="resume-content">
                <h4>University of Information Technology UIT-HCM</h4>
                <p className="duration">Sep 2019 - Dec 2023</p>
                <p>B.Eng. in Information System</p>
                <p>GPA: 8.02/10</p>

              </div>
            </div>
          </div>
        </div>

        <div className="resume-section">
          <div className="resume-item resume-item-first">
            <h3 className="resume-section-title">
              <i className="fas fa-briefcase"></i> Experience
            </h3>
          </div>
          <div className="timeline">
            <div className="resume-item ">
              <div className="bullet-point"></div>
              <div className="resume-content">
                <h4>Full-stack Web Developer</h4>
                <p className="company-name">Spiraledge Vietnam, Ho Chi Minh, Vietnam</p>
                <p className="duration">Feb 2023 - Present</p>
                <p className="location">Ho Chi Minh, Vietnam</p>
                <ul className="responsibilities">
                  <li>Developed and maintained multiple web application projects for SwimOutlet.com, ensuring compliance with coding standards and company processes.</li>
                  <li>Created console tools to automate data updates between internal systems and external platforms.</li>
                  <li>Collaborated with cross-functional teams and BA team to deliver high-quality solutions while ensuring process compliance.</li>
                </ul>
                <p className="technologies">Technologies: ASP.NET, MS SQL Server, Shopify Liquid, ReactJS, NodeJS, jQuery</p>
              </div>
            </div>
            
            <div className="resume-item">
              <div className="bullet-point"></div>
              <div className="resume-content">
                <h4>Intern Backend Engineer</h4>
                <p className="company-name">NashTech Vietnam</p>
                <p className="duration">Oct 2022 - Dec 2022</p>
                <p className="location">Ho Chi Minh, Vietnam</p>
                <ul className="responsibilities">
                  <li>Independently developed an e-commerce website, handling both front-end and back-end development along with database integration.</li>
                  <li>Contributed to the development of an asset management system, following detailed design specifications and process standards.</li>
                  <li>Gained practical experience with Azure DevOps, focusing on streamlined deployment and project management practices.</li>
                </ul>
                <p className="technologies">Technologies: ASP.NET, MS SQL Server, xUnit, ReactJS, Azure Basic</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Download CV Button */}
      <div className="download-cv-container">
        <button 
          className="download-cv-button" 
          onClick={handleDownloadCV}
        >
          <i className="fas fa-download"></i> Download CV
        </button>
      </div>
        <ToastContainer />
      </section>
      
    </div>
  );
}

export default ResumeSection;