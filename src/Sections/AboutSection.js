// AboutSection.js
function AboutSection() {
    return (
      <div className="resume-container">
        <div className="header-section"><h3>About me</h3></div>
        <section id="about" className="section">
            <h1 className="typing-effect">Hello, I'm Nguyen Vu Van Duc 🙌</h1>
            <p className="fade-in-text">
                Highly motivated Software Engineer with a strong foundation in .NET and front-end skill. Eager to contribute to a dynamic team, continuously learn new technologies, and leverage diverse experience - including working with Shopify - for delivering reliable software solutions.
            </p>
        </section>
        <div className="wrap-section">
            <h3>What I'm doing</h3>
            <div className="detail-section">
                <div className="detail-item">
                    <div className="detail-icon">
                        <i className="fas fa-server"></i>
                    </div>
                    <div className="detail-text">
                        <span>Backend Development</span>
                        <p>
                        Building robust server-side logic and efficient database solutions with ASP.NET, C#, and SQL Server to applications.
                        </p>
                    </div>
                </div>
                <div className="detail-item">
                    <div className="detail-icon">
                        <i className="fas fa-desktop"></i>
                    </div>
                    <div className="detail-text">
                        <span>Web Development</span>
                        <p>
                            Crafting responsive, user-friendly interfaces using HTML, CSS, and React.js for dynamic eCommerce platforms.
                        </p>
                    </div>
                </div>
                <div className="detail-item">
                    <div className="detail-icon">
                        <i className="fas fa-cogs"></i>
                    </div>
                    <div className="detail-text">
                        <span>API Integration & Automation</span>
                        <p>
                            Seamlessly integrating third-party APIs and automating data workflows.
                        </p>
                    </div>
                </div>
                <div className="detail-item">
                    <div className="detail-icon">
                        <i className="fa-brands fa-shopify"></i>
                    </div>
                    <div className="detail-text">
                        <span>Shopify App</span>
                        <p>
                            Enhancing Shopify stores using Liquid, Metafields, and Shopify API.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <h3>My Skills</h3>
        <div className="skills-container">
            <section id="skill_area" className="section skill-carousel">
                <div className="item skill-item">
                    <img src="./images/net.png" alt=".NET" />
                </div>
                <div className="item skill-item">
                    <img src="./images/shopify.png" alt="Shopify" />
                </div>
                <div className="item skill-item">
                    <img src="./images/sql.png" alt="SQL" />
                </div>
                <div className="item skill-item">
                    <img src="./images/reactjs.png" alt="React.js" />
                </div>
                <div className="item skill-item">
                    <img src="./images/postman.png" alt="Postman" />
                </div>
            </section>
            <div className="scroll-indicator-container">
                <div className="scroll-indicator-track">
                    <div className="scroll-indicator-progress"></div>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default AboutSection;