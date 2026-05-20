import React, { useState, useEffect } from 'react';
import './App.css';
import AboutSection from './Sections/AboutSection';
import ResumeSection from './Sections/ResumeSection';
import ProjectSection from './Sections/ProjectSection';
import ContactSection from './Sections/ContactSection';
import { initProject, updateCarousel } from './Portfolio';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [isChangingTab, setIsChangingTab] = useState(false);

  const handleTabClick = (tab) => {
    if (tab !== activeTab) {
      setActiveTab(tab);
      setIsChangingTab(true);
      setTimeout(() => {
        setIsChangingTab(false);
        if (tab === 'about') {
          setTimeout(updateCarousel, 100);
        }
      }, 500);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <AboutSection />;
      case 'resume':
        return <ResumeSection />;
      case 'portfolio':
        return <ProjectSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <AboutSection />;
    }
  };

  useEffect(() => {
    initProject();
  }, []);

  return (
    <div className="flex justify-between w-2/3 mx-auto mt-15">
      <div className="sticky flex flex-col items-center w-1/3 mt-5 shadow-2xl bg-background-sidebar text-text rounded-2xl top-5 h-fit p-15">
        <div className="text-center">
          <a href="/images/Dylann.webp" target="_blank" rel="noopener noreferrer" title="Nguyen Vu Van Duc - Full-stack Software Engineer">
            <img 
              src="/images/profile.png" 
              alt="Profile" 
              className="w-37 h-37 mt-8 rounded-full mb-2.5 border-2 border-white shadow-lg transition-transform duration-300 object-cover cursor-pointer hover:scale-105 mx-auto block"
            />
          </a>
          <h2 className="mt-2.5 text-2xl font-semibold text-primary-variant-light">Nguyen Vu Van Duc</h2>
          <p className="bg-background-hover px-2.5 py-1.5 rounded text-sm mb-5 mt-2">Full-stack Software Engineer</p>
          <hr className="border-none h-0.5 bg-gray-600 w-11/12 mx-auto my-5" />
          <div className="mb-8 space-y-4">
            <div className="flex items-center p-4 mb-4 rounded-lg bg-background-content">
              <div className="flex items-center justify-center w-12 h-12 mr-4 bg-gray-800 rounded neumorphic-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="flex flex-col items-start">
                <label className="mb-1 text-xs uppercase text-text-muted">Email</label>
                <span 
                  onClick={() => window.location.href = 'mailto:duc20062001@gmail.com'} 
                  className="text-sm font-bold cursor-pointer text-text"
                >
                  duc20062001@gmail.com
                </span>
              </div>
            </div>
            <div className="flex items-center p-4 mb-4 rounded-lg bg-background-content">
              <div className="flex items-center justify-center w-12 h-12 mr-4 bg-gray-800 rounded neumorphic-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="flex flex-col items-start">
                <label className="mb-1 text-xs uppercase text-text-muted">Phone</label>
                <span className="text-sm font-bold text-text">+84 766 790 335</span>
              </div>
            </div>
            <div className="flex items-center p-4 mb-4 rounded-lg bg-background-content">
              <div className="flex items-center justify-center w-12 h-12 mr-4 bg-gray-800 rounded neumorphic-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="flex flex-col items-start">
                <label className="mb-1 text-xs uppercase text-text-muted">Address</label>
                <span className="text-sm font-bold text-text">Bui Dinh Tuy, Ho Chi Minh</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-4 mb-4">
            <a href="https://github.com/Ducvuive2" target="_blank" rel="noopener noreferrer" className="text-2xl transition-colors duration-300 text-text hover:text-secondary-light">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.facebook.com/ducvuive2/" target="_blank" rel="noopener noreferrer" className="text-2xl transition-colors duration-300 text-text hover:text-secondary-light">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.linkedin.com/in/nvvduc/" target="_blank" rel="noopener noreferrer" className="text-2xl transition-colors duration-300 text-text hover:text-secondary-light">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="w-2/3 p-5">
        <nav className="mb-5">
          <ul className="flex justify-around list-none p-2.5 bg-background-content rounded-lg">
            <li 
              onClick={() => handleTabClick('about')} 
              className={`cursor-pointer px-5 py-2.5 transition-all duration-300 ${activeTab === 'about' ? 'text-primary' : 'text-text'} text-base font-semibold rounded ${
                activeTab === 'about' ? 'bg-primary-variant rounded' : ''
              }`}
            >
              About
            </li>
            <li 
              onClick={() => handleTabClick('resume')} 
              className={`cursor-pointer px-5 py-2.5 transition-all duration-300 ${activeTab === 'resume' ? 'text-primary' : 'text-text'} text-base font-semibold rounded ${
                activeTab === 'resume' ? 'bg-primary-variant rounded' : ''
              }`}
            >
              Resume
            </li>
            <li 
              onClick={() => handleTabClick('portfolio')} 
              className={`cursor-pointer px-5 py-2.5 transition-all duration-300 ${activeTab === 'portfolio' ? 'text-primary' : 'text-text'} text-base font-semibold rounded ${
                activeTab === 'portfolio' ? 'bg-primary-variant rounded' : ''
              }`}
            >
              Portfolio
            </li>
            <li 
              onClick={() => handleTabClick('contact')} 
              className={`cursor-pointer px-5 py-2.5 transition-all duration-300 ${activeTab === 'contact' ? 'text-primary' : 'text-text'} text-base font-semibold rounded ${
                activeTab === 'contact' ? 'bg-primary-variant rounded' : ''
              }`}
            >
              Contact
            </li>
          </ul>
        </nav>
        <div className={`bg-background-content rounded-2xl shadow-2xl p-5 mt-5 ${isChangingTab ? 'animate-zoom-out' : ''}`}>
          {renderContent()}
        </div>
      </div>
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;