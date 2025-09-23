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
    <div className="flex flex-col">
      <div className="mb-4">
        <h3 className="mb-2 text-2xl font-semibold text-primary-variant-light">Resume</h3>
        <div className="w-10 h-1 mb-12 rounded bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
      </div>
      <section id="resume" className="p-8 shadow-2xl bg-background-card rounded-2xl">
        
      <div className="flex flex-col">
        <div className="mb-8">
          <div className="relative pb-4 pl-0 before:content-[''] before:absolute before:h-full before:top-4 before:bottom-0 before:w-0.5 before:bg-gray-600 before:left-7">
            <h3 className="flex items-center mb-6 text-2xl font-semibold text-primary-variant-light">
              <i className="p-4 mr-4 text-xl z-10 bg-gray-800 rounded fas fa-graduation-cap !text-primary text-[1.5rem] neumorphic-icon"></i> Education
            </h3>
          </div>
          
          <div className="relative">
            <div className="relative pb-4 pl-8">
              <div className="absolute z-10 w-3 h-3 ml-[-4px] border-4 rounded-full shadow-lg left-7 top-2 bg-primary-variant-light opacity-80 border-jet"></div>
              <div className="pb-4 pl-10">
                <h4 className="mb-2 text-xl font-semibold text-text">University of Information Technology UIT-HCM</h4>
                <p className="mb-1 text-sm font-semibold text-primary-variant">Sep 2019 - Dec 2023</p>
                <p className="text-text">B.Eng. in Information System</p>
                <p className="text-text">GPA: 8.02/10</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="relative pb-4 pl-0 before:content-[''] before:absolute before:h-full before:top-4 before:bottom-0 before:w-0.5 before:bg-gray-600 before:left-7">
            <h3 className="flex items-center mb-6 text-2xl font-semibold text-primary-variant-light">
              <i className="p-4 mr-4 text-xl z-10 bg-gray-800 rounded fas fa-briefcase text-[1.5rem] !text-primary neumorphic-icon"></i> Experience
            </h3>
          </div>
          <div className="relative">
            <div className="relative pb-4 pl-8  before:content-[''] before:absolute before:h-full before:top-4 before:bottom-0 before:w-0.5 before:bg-gray-600 before:left-7">
              <div className="absolute z-10 w-3 h-3  ml-[-4px] border-4 rounded-full shadow-lg left-7 top-2 bg-primary-variant-light opacity-80 border-jet"></div>
              <div className="pb-4 pl-10">
                <h4 className="mb-2 text-xl font-semibold text-text">Full-stack Web Developer</h4>
                <p className="mb-1 text-base text-text-muted">Spiraledge Vietnam, Ho Chi Minh, Vietnam</p>
                <p className="mb-1 text-sm font-semibold text-primary-variant">Feb 2023 - Present</p>
                <p className="mb-4 text-sm text-gray-400">Ho Chi Minh, Vietnam</p>
                <ul className="pl-6 my-4">
                  <li className="relative mb-2 text-text">Developed and maintained multiple web application projects for SwimOutlet.com, ensuring compliance with coding standards and company processes.</li>
                  <li className="relative mb-2 text-text">Created console tools to automate data updates between internal systems and external platforms.</li>
                  <li className="relative mb-2 text-text">Collaborated with cross-functional teams and BA team to deliver high-quality solutions while ensuring process compliance.</li>
                </ul>
                <p className="mt-2 text-sm italic text-gray-400">Technologies: ASP.NET, MS SQL Server, Shopify Liquid, ReactJS, NodeJS, jQuery</p>
              </div>
            </div>
            
            <div className="relative pb-4 pl-8">
              <div className="absolute z-10 w-3 h-3  ml-[-4px] border-4 rounded-full shadow-lg left-7 top-2 bg-primary-variant-light opacity-80 border-jet"></div>
              <div className="pb-4 pl-10">
                <h4 className="mb-2 text-xl font-semibold text-text">Intern Backend Engineer</h4>
                <p className="mb-1 text-base text-text-muted">NashTech Vietnam</p>
                <p className="mb-1 text-sm font-semibold text-primary-variant">Oct 2022 - Dec 2022</p>
                <p className="mb-4 text-sm text-gray-400">Ho Chi Minh, Vietnam</p>
                <ul className="pl-6 my-4">
                  <li className="relative mb-2 text-text">Independently developed an e-commerce website, handling both front-end and back-end development along with database integration.</li>
                  <li className="relative mb-2 text-text">Contributed to the development of an asset management system, following detailed design specifications and process standards.</li>
                  <li className="relative mb-2 text-text">Gained practical experience with Azure DevOps, focusing on streamlined deployment and project management practices.</li>
                </ul>
                <p className="mt-2 text-sm italic text-gray-400">Technologies: ASP.NET, MS SQL Server, xUnit, ReactJS, Azure Basic</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* <div className="flex justify-center mt-8">
        <button 
          className="flex items-center gap-2 px-6 py-3 text-base text-white transition-colors duration-300 bg-green-500 border-none rounded cursor-pointer hover:bg-green-600"
          onClick={handleDownloadCV}
        >
          <i className="fas fa-download"></i> Download CV
        </button>
      </div>
        <ToastContainer /> */}
      </section>
      
    </div>
  );
}

export default ResumeSection;