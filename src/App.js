import React, { useState, useEffect } from 'react';
import './App.css';
import AboutSection from './Sections/AboutSection';
import ResumeSection from './Sections/ResumeSection';
import ProjectSection from './Sections/ProjectSection';
import ContactSection from './Sections/ContactSection';
import { initProject, updateCarousel } from './Portfolio';

function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [isChangingTab, setIsChangingTab] = useState(false);

  const handleTabClick = (tab) => {
    if (tab !== activeTab) {
      setIsChangingTab(true);
      setTimeout(() => {
        setActiveTab(tab);
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
    <div className="App">
      <div className="sidebar">
        <div className="profile-info">
          <img src="./images/profile.webp" alt="Profile" />
          <h2>Nguyen Vu Van Duc</h2>
          <p className="role">Software Engineer</p>
          <hr />
          <div className="contact-info">
            <div className="contact-item">
              <div className='icon-box'>
                <i className="fas fa-envelope"></i>
              </div>
              <div className='contact-text'>
                <label>Email</label>
                <span>duc20062001@gmail.com</span>
              </div>
            </div>
            <div className="contact-item">
              <div className='icon-box'>
                <i className="fas fa-phone"></i>
              </div>
              <div className='contact-text'>
                <label>Phone</label>
                <span>+84 766 790 335</span>
              </div>
            </div>
            <div className="contact-item">
              <div className='icon-box'>
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className='contact-text'>
                <label>Address</label>
                <span>Bui Dinh Tuy, Ho Chi Minh</span>
              </div>
            </div>
          </div>
          <div className="social-links">
            <a href="https://github.com/Ducvuive2" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.facebook.com/ducvuive2/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.linkedin.com/in/nvvduc/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="main-content">
        <nav className="tabs">
          <ul>
            <li onClick={() => handleTabClick('about')} className={activeTab === 'about' ? 'active' : ''}>About</li>
            <li onClick={() => handleTabClick('resume')} className={activeTab === 'resume' ? 'active' : ''}>Resume</li>
            <li onClick={() => handleTabClick('portfolio')} className={activeTab === 'portfolio' ? 'active' : ''}>Portfolio</li>
            <li onClick={() => handleTabClick('contact')} className={activeTab === 'contact' ? 'active' : ''}>Contact</li>
          </ul>
        </nav>
        <div className={`content ${isChangingTab ? 'zoom-out' : ''}`}>
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default App;