import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import './Portfolio.obfuscated.js';
import { initBackToTop } from './Portfolio';
function App() {
  useEffect(() => {
    initBackToTop();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#about"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-user"
  }), " About")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#education"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-graduation-cap"
  }), " Education")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#experience"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-briefcase"
  }), " Experience")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#projects"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-code"
  }), " Projects")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#contact"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-envelope"
  }), " Contact"))))), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    id: "about",
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "profile-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "profile-image"
  }, /*#__PURE__*/React.createElement("img", {
    src: "./images/profile.webp",
    alt: "Nguyen Vu Van Duc"
  }))), /*#__PURE__*/React.createElement("h1", {
    className: "typing-effect"
  }, "Hello, I'm Nguyen Vu Van Duc \uD83D\uDE4C"), /*#__PURE__*/React.createElement("p", {
    className: "fade-in-text"
  }, "Highly motivated Software Engineer with a strong foundation in .NET and front-end skill. Eager to contribute to a dynamic team, continuously learn new technologies, and leverage diverse experience - including working with Shopify - for delivering reliable software solutions.")), /*#__PURE__*/React.createElement("section", {
    id: "education",
    className: "section"
  }, /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-graduation-cap"
  }), " Education"), /*#__PURE__*/React.createElement("div", {
    className: "education-item"
  }, /*#__PURE__*/React.createElement("h3", null, "University of Information Technology UIT-HCM"), /*#__PURE__*/React.createElement("p", null, "B.Eng. in Information System - 09/2019 - 11/2023"), /*#__PURE__*/React.createElement("p", null, "GPA: 8.02/10"))), /*#__PURE__*/React.createElement("section", {
    id: "experience",
    className: "section"
  }, /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-briefcase"
  }), " Work Experience"), /*#__PURE__*/React.createElement("div", {
    className: "education-item"
  }, /*#__PURE__*/React.createElement("h3", null, "Fullstack Engineer at Spiraledge"), /*#__PURE__*/React.createElement("p", null, "02/2023 - Present"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Contributed to multiple web application projects for SwimOutlet.com"), /*#__PURE__*/React.createElement("li", null, "Developed and maintained features for both public website and internal employee applications"), /*#__PURE__*/React.createElement("li", null, "Developed console tools to automate data updates between internal systems and external platforms"), /*#__PURE__*/React.createElement("li", null, "Worked with Shopify's data structures, including Metafield, Metaobject and Liquid files"))), /*#__PURE__*/React.createElement("div", {
    className: "education-item"
  }, /*#__PURE__*/React.createElement("h3", null, "Intern Backend Engineer at NashTech"), /*#__PURE__*/React.createElement("p", null, "10/2022 - 12/2022"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Independently developed an e-commerce website"), /*#__PURE__*/React.createElement("li", null, "Gained experience in building both front-end and back-end components"), /*#__PURE__*/React.createElement("li", null, "Contributed to the development of an asset management system"), /*#__PURE__*/React.createElement("li", null, "Gained experience with Basic Azure DevOps and Unit Testing")))), /*#__PURE__*/React.createElement("section", {
    id: "projects",
    className: "section"
  }, /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-code-branch"
  }), " Projects"), /*#__PURE__*/React.createElement("div", {
    className: "project-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "project-card"
  }, /*#__PURE__*/React.createElement("h3", null, "Chat Realtime"), /*#__PURE__*/React.createElement("div", {
    className: "video-container"
  }, /*#__PURE__*/React.createElement("video", {
    controls: true
  }, /*#__PURE__*/React.createElement("source", {
    src: "/videos/VideoDemoChatApp.mkv",
    type: "video/mp4"
  }), "Your browser does not support the video tag.")), /*#__PURE__*/React.createElement("p", null, "A real-time chat application built with:"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Front-end: HTML, CSS, Bootstrap"), /*#__PURE__*/React.createElement("li", null, "Back-end: ASP.NET Core, LINQ, SignalR"), /*#__PURE__*/React.createElement("li", null, "Database: Azure SQL"), /*#__PURE__*/React.createElement("li", null, "Deployed with Azure Pipelines")), /*#__PURE__*/React.createElement("a", {
    href: "https://dev.azure.com/19521844/ChatForFun",
    className: "project-link"
  }, "View Project")), /*#__PURE__*/React.createElement("div", {
    className: "project-card"
  }, /*#__PURE__*/React.createElement("h3", null, "E-commerce Web"), /*#__PURE__*/React.createElement("div", {
    className: "video-container"
  }, /*#__PURE__*/React.createElement("video", {
    controls: true
  }, /*#__PURE__*/React.createElement("source", {
    src: "/videos/VideoDemoEcommer.mp4",
    type: "video/mp4"
  }), "Your browser does not support the video tag.")), /*#__PURE__*/React.createElement("p", null, "A e-commerce website built with:"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Front-end: ReactJS, HTML, CSS, Bootstrap"), /*#__PURE__*/React.createElement("li", null, "Back-end: ASP.NET Core, LINQ, xUnit"), /*#__PURE__*/React.createElement("li", null, "Database: SQL Server")), /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/ducvuive/E-commerce_Laptop_",
    className: "project-link"
  }, "View Project")))), /*#__PURE__*/React.createElement("section", {
    id: "contact",
    className: "section"
  }, /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-paper-plane"
  }), " Contact Me"), /*#__PURE__*/React.createElement("div", {
    className: "contact-info"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-envelope"
  }), " Email: ", /*#__PURE__*/React.createElement("a", {
    href: "mailto:duc20062001@gmail.com"
  }, "duc20062001@gmail.com")), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-phone"
  }), " Phone: 0766790335"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("i", {
    className: "fab fa-linkedin"
  }), " LinkedIn: ", /*#__PURE__*/React.createElement("a", {
    href: "https://www.linkedin.com/in/nvvduc/"
  }, "Nguyen Vu Van Duc"))))), /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement("div", {
    className: "footer-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-text"
  }, /*#__PURE__*/React.createElement("p", null, "Made with ", /*#__PURE__*/React.createElement("span", {
    className: "heart"
  }, "\u2764\uFE0F"), " by Nguyen Vu Van Duc"), /*#__PURE__*/React.createElement("p", {
    className: "footer-quote"
  }, "\"Code is like humor. When you have to explain it, it's bad.\" - Cory House")))), /*#__PURE__*/React.createElement("button", {
    id: "back-to-top",
    class: "back-to-top",
    title: "Back to Top"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-arrow-up"
  })));
}
export default App;