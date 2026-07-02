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
  const handleTabClick = tab => {
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
        return /*#__PURE__*/React.createElement(AboutSection, null);
      case 'resume':
        return /*#__PURE__*/React.createElement(ResumeSection, null);
      case 'portfolio':
        return /*#__PURE__*/React.createElement(ProjectSection, null);
      case 'contact':
        return /*#__PURE__*/React.createElement(ContactSection, null);
      default:
        return /*#__PURE__*/React.createElement(AboutSection, null);
    }
  };
  useEffect(() => {
    initProject();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between w-2/3 mx-auto mt-15"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sticky flex flex-col items-center w-1/3 mt-5 shadow-2xl bg-background-sidebar text-text rounded-2xl top-5 h-fit p-15"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/images/Dylann.webp",
    target: "_blank",
    rel: "noopener noreferrer",
    title: "Nguyen Vu Van Duc - Full-stack .NET Engineer"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/images/profile.png",
    alt: "Profile",
    className: "w-37 h-37 mt-8 rounded-full mb-2.5 border-2 border-white shadow-lg transition-transform duration-300 object-cover cursor-pointer hover:scale-105 mx-auto block"
  })), /*#__PURE__*/React.createElement("h2", {
    className: "mt-2.5 text-2xl font-semibold text-primary-variant-light"
  }, "Nguyen Vu Van Duc"), /*#__PURE__*/React.createElement("p", {
    className: "bg-background-hover px-2.5 py-1.5 rounded text-sm mb-5 mt-2"
  }, "Full-stack .NET Engineer"), /*#__PURE__*/React.createElement("hr", {
    className: "border-none h-0.5 bg-gray-600 w-11/12 mx-auto my-5"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mb-8 space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center p-4 mb-4 rounded-lg bg-background-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-center w-12 h-12 mr-4 bg-gray-800 rounded neumorphic-icon"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-envelope"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-start"
  }, /*#__PURE__*/React.createElement("label", {
    className: "mb-1 text-xs uppercase text-text-muted"
  }, "Email"), /*#__PURE__*/React.createElement("span", {
    onClick: () => window.location.href = 'mailto:duc20062001@gmail.com',
    className: "text-sm font-bold cursor-pointer text-text"
  }, "duc20062001@gmail.com"))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center p-4 mb-4 rounded-lg bg-background-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-center w-12 h-12 mr-4 bg-gray-800 rounded neumorphic-icon"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-globe"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-start"
  }, /*#__PURE__*/React.createElement("label", {
    className: "mb-1 text-xs uppercase text-text-muted"
  }, "Website"), /*#__PURE__*/React.createElement("a", {
    href: "https://dylanapp.io.vn/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "text-sm font-bold cursor-pointer text-text"
  }, "dylanapp.io.vn"))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center p-4 mb-4 rounded-lg bg-background-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-center w-12 h-12 mr-4 bg-gray-800 rounded neumorphic-icon"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-phone"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-start"
  }, /*#__PURE__*/React.createElement("label", {
    className: "mb-1 text-xs uppercase text-text-muted"
  }, "Phone"), /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-bold text-text"
  }, "+84 766 790 335"))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center p-4 mb-4 rounded-lg bg-background-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-center w-12 h-12 mr-4 bg-gray-800 rounded neumorphic-icon"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-map-marker-alt"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-start"
  }, /*#__PURE__*/React.createElement("label", {
    className: "mb-1 text-xs uppercase text-text-muted"
  }, "Address"), /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-bold text-text"
  }, "Bui Dinh Tuy, Ho Chi Minh")))), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center gap-4 mb-4"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/Ducvuive2",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "text-2xl transition-colors duration-300 text-text hover:text-secondary-light"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fab fa-github"
  })), /*#__PURE__*/React.createElement("a", {
    href: "https://www.facebook.com/ducvuive2/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "text-2xl transition-colors duration-300 text-text hover:text-secondary-light"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fab fa-facebook"
  })), /*#__PURE__*/React.createElement("a", {
    href: "https://www.linkedin.com/in/nvvduc/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "text-2xl transition-colors duration-300 text-text hover:text-secondary-light"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fab fa-linkedin"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "w-2/3 p-5"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "mb-5"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "flex justify-around list-none p-2.5 bg-background-content rounded-lg"
  }, /*#__PURE__*/React.createElement("li", {
    onClick: () => handleTabClick('about'),
    className: `cursor-pointer px-5 py-2.5 transition-all duration-300 ${activeTab === 'about' ? 'text-primary' : 'text-text'} text-base font-semibold rounded ${activeTab === 'about' ? 'bg-primary-variant rounded' : ''}`
  }, "About"), /*#__PURE__*/React.createElement("li", {
    onClick: () => handleTabClick('resume'),
    className: `cursor-pointer px-5 py-2.5 transition-all duration-300 ${activeTab === 'resume' ? 'text-primary' : 'text-text'} text-base font-semibold rounded ${activeTab === 'resume' ? 'bg-primary-variant rounded' : ''}`
  }, "Resume"), /*#__PURE__*/React.createElement("li", {
    onClick: () => handleTabClick('portfolio'),
    className: `cursor-pointer px-5 py-2.5 transition-all duration-300 ${activeTab === 'portfolio' ? 'text-primary' : 'text-text'} text-base font-semibold rounded ${activeTab === 'portfolio' ? 'bg-primary-variant rounded' : ''}`
  }, "Portfolio"), /*#__PURE__*/React.createElement("li", {
    onClick: () => handleTabClick('contact'),
    className: `cursor-pointer px-5 py-2.5 transition-all duration-300 ${activeTab === 'contact' ? 'text-primary' : 'text-text'} text-base font-semibold rounded ${activeTab === 'contact' ? 'bg-primary-variant rounded' : ''}`
  }, "Contact"))), /*#__PURE__*/React.createElement("div", {
    className: `bg-background-content rounded-2xl shadow-2xl p-5 mt-5 ${isChangingTab ? 'animate-zoom-out' : ''}`
  }, renderContent())), /*#__PURE__*/React.createElement(Analytics, null), /*#__PURE__*/React.createElement(SpeedInsights, null));
}
export default App;