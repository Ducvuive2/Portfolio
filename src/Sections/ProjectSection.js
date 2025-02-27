// PortfolioSection.js
function ProjectSection() {
  return (
    <div className="resume-container">
      <h3 className="header-section">Project Details</h3>
      <section id="project-details" className="section">
        <div className="project-info">
          <h3>Chat4Fun - Website Chat Realtime</h3>
          <div className="video-container">
            <video controls>
              <source src="/videos/VideoDemoChatApp.mkv" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="project-info-title"><strong>School Project (3 members)</strong></p>
          <p className="project-details">
            <strong className = "project-detail-item">Description:</strong> Developed a real-time chat application with features for live user chat, chat with AI, and image upload.<br/>
            <strong className = "project-detail-item">Responsibilities:</strong> Designed the data schema, developed chat and upload functionalities, managed project deployment. <br/>
            <strong className = "project-detail-item">Technologies:</strong> ASP.NET, Azure SQL Database, LINQ, SignalR. <br/>
            <strong className = "project-detail-item"> Link:</strong> <a href="https://dev.azure.com/19521844/ChatForFun" target="_blank" rel="noopener noreferrer">Source</a>
          </p>
        </div>
        <div className="project-info">
          <h3>LaptopStore - Website E-commerce</h3>
          <div className="video-container">
            <video controls>
              <source src="/videos/VideoDemoEcommer.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="project-info-title"><strong>Personal Project</strong></p>
          <p className="project-details">
            <strong className = "project-detail-item">Description:</strong> Built an e-commerce website for selling laptops along with an admin dashboard, focused on clean code and efficient design. <br/>
            <strong className = "project-detail-item">Technologies:</strong> ASP.NET Core, SQL Server, LINQ, xUnit. <br/>
            <strong className = "project-detail-item"> Link:</strong> <a href="https://github.com/ducvuive/E-commerce_Laptop_" target="_blank" rel="noopener noreferrer">Source</a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default ProjectSection;