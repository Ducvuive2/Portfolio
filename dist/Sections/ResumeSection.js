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
      draggable: true
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "mb-2 text-2xl font-semibold text-primary-variant-light"
  }, "Resume"), /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-1 mb-12 rounded bg-gradient-to-r from-yellow-400 to-yellow-600"
  })), /*#__PURE__*/React.createElement("section", {
    id: "resume",
    className: "p-8 shadow-2xl bg-background-card rounded-2xl"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative pb-4 pl-0 before:content-[''] before:absolute before:h-full before:top-4 before:bottom-0 before:w-0.5 before:bg-gray-600 before:left-7"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "flex items-center mb-6 text-2xl font-semibold text-primary-variant-light"
  }, /*#__PURE__*/React.createElement("i", {
    className: "p-4 mr-4 text-xl z-10 bg-gray-800 rounded fas fa-graduation-cap !text-primary text-[1.5rem] neumorphic-icon"
  }), " Education")), /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative pb-4 pl-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute z-10 w-3 h-3 ml-[-4px] border-4 rounded-full shadow-lg left-7 top-2 bg-primary-variant-light opacity-80 border-jet"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pb-4 pl-10"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "mb-2 text-xl font-semibold text-text"
  }, "University of Information Technology UIT-HCM"), /*#__PURE__*/React.createElement("p", {
    className: "mb-1 text-sm font-semibold text-primary-variant"
  }, "Sep 2019 - Dec 2023"), /*#__PURE__*/React.createElement("p", {
    className: "text-text"
  }, "B.Eng. in Information System"), /*#__PURE__*/React.createElement("p", {
    className: "text-text"
  }, "GPA: 8.02/10"))))), /*#__PURE__*/React.createElement("div", {
    className: "mb-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative pb-4 pl-0 before:content-[''] before:absolute before:h-full before:top-4 before:bottom-0 before:w-0.5 before:bg-gray-600 before:left-7"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "flex items-center mb-6 text-2xl font-semibold text-primary-variant-light"
  }, /*#__PURE__*/React.createElement("i", {
    className: "p-4 mr-4 text-xl z-10 bg-gray-800 rounded fas fa-briefcase text-[1.5rem] !text-primary neumorphic-icon"
  }), " Experience")), /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative pb-4 pl-8  before:content-[''] before:absolute before:h-full before:top-4 before:bottom-0 before:w-0.5 before:bg-gray-600 before:left-7"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute z-10 w-3 h-3  ml-[-4px] border-4 rounded-full shadow-lg left-7 top-2 bg-primary-variant-light opacity-80 border-jet"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pb-4 pl-10"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "mb-2 text-xl font-semibold text-text"
  }, "Full-stack Web Developer"), /*#__PURE__*/React.createElement("p", {
    className: "mb-1 text-base text-text-muted"
  }, "Spiraledge Vietnam, Ho Chi Minh, Vietnam"), /*#__PURE__*/React.createElement("p", {
    className: "mb-1 text-sm font-semibold text-primary-variant"
  }, "Feb 2023 - Present"), /*#__PURE__*/React.createElement("p", {
    className: "mb-4 text-sm text-gray-400"
  }, "Ho Chi Minh, Vietnam"), /*#__PURE__*/React.createElement("ul", {
    className: "pl-6 my-4"
  }, /*#__PURE__*/React.createElement("li", {
    className: "relative mb-2 text-text"
  }, "Developed and maintained multiple web application projects for SwimOutlet.com, ensuring compliance with coding standards and company processes."), /*#__PURE__*/React.createElement("li", {
    className: "relative mb-2 text-text"
  }, "Created console tools to automate data updates between internal systems and external platforms."), /*#__PURE__*/React.createElement("li", {
    className: "relative mb-2 text-text"
  }, "Collaborated with cross-functional teams and BA team to deliver high-quality solutions while ensuring process compliance.")), /*#__PURE__*/React.createElement("p", {
    className: "mt-2 text-sm italic text-gray-400"
  }, "Technologies: ASP.NET, MS SQL Server, Shopify Liquid, ReactJS, NodeJS, jQuery"))), /*#__PURE__*/React.createElement("div", {
    className: "relative pb-4 pl-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute z-10 w-3 h-3  ml-[-4px] border-4 rounded-full shadow-lg left-7 top-2 bg-primary-variant-light opacity-80 border-jet"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pb-4 pl-10"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "mb-2 text-xl font-semibold text-text"
  }, "Intern Backend Engineer"), /*#__PURE__*/React.createElement("p", {
    className: "mb-1 text-base text-text-muted"
  }, "NashTech Vietnam"), /*#__PURE__*/React.createElement("p", {
    className: "mb-1 text-sm font-semibold text-primary-variant"
  }, "Oct 2022 - Dec 2022"), /*#__PURE__*/React.createElement("p", {
    className: "mb-4 text-sm text-gray-400"
  }, "Ho Chi Minh, Vietnam"), /*#__PURE__*/React.createElement("ul", {
    className: "pl-6 my-4"
  }, /*#__PURE__*/React.createElement("li", {
    className: "relative mb-2 text-text"
  }, "Independently developed an e-commerce website, handling both front-end and back-end development along with database integration."), /*#__PURE__*/React.createElement("li", {
    className: "relative mb-2 text-text"
  }, "Contributed to the development of an asset management system, following detailed design specifications and process standards."), /*#__PURE__*/React.createElement("li", {
    className: "relative mb-2 text-text"
  }, "Gained practical experience with Azure DevOps, focusing on streamlined deployment and project management practices.")), /*#__PURE__*/React.createElement("p", {
    className: "mt-2 text-sm italic text-gray-400"
  }, "Technologies: ASP.NET, MS SQL Server, xUnit, ReactJS, Azure Basic"))))))));
}
export default ResumeSection;