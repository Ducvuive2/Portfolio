// AboutSection.js
function AboutSection() {
    return (
      <div className="flex flex-col">
        <div className="mb-4">
          <h3 className="mb-2 text-2xl font-semibold text-primary-variant-light">About me</h3>
          <div className="w-10 h-1 mb-12 rounded bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
        </div>
        <section id="about" className="p-8 shadow-2xl bg-background-card rounded-2xl">
            <h1 className="text-3xl font-bold text-center typing-effect sm:text-4xl text-primary-variant-light">Hello, I'm Nguyen Vu Van Duc 🙌</h1>
            <p className="fade-in-text text-text">
                Highly motivated Software Engineer with a strong foundation in .NET and front-end skill. Eager to contribute to a dynamic team, continuously learn new technologies, and leverage diverse experience - including working with Shopify - for delivering reliable software solutions.
            </p>
        </section>
        <div className="mt-6">
            <h3 className="mb-4 text-2xl font-semibold text-primary-variant-light">What I'm doing</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-2 bg-[#1a1a1a] rounded-2xl mb-8">
                <div className="flex items-center p-5 transition-transform border shadow-2xl bg-background-card rounded-xl border-background-hover hover:-translate-y-1">
                    <div className="flex items-center justify-center p-4 mr-4 rounded bg-background-lightDark">
                        <i className="text-xl fas fa-server text-primary-variant"></i>
                    </div>
                    <div>
                        <span className="block text-lg font-bold text-text">Backend Development</span>
                        <p>
                        Building robust server-side logic and efficient database solutions with ASP.NET, C#, and SQL Server to applications.
                        </p>
                    </div>
                </div>
                <div className="flex items-center p-5 transition-transform border shadow-2xl bg-background-card rounded-xl border-background-hover hover:-translate-y-1">
                    <div className="flex items-center justify-center p-4 mr-4 rounded bg-background-lightDark">
                        <i className="text-xl fas fa-desktop text-primary-variant"></i>
                    </div>
                    <div>
                        <span className="block text-lg font-bold text-text">Web Development</span>
                        <p>
                            Crafting responsive, user-friendly interfaces using HTML, CSS, and React.js for dynamic eCommerce platforms.
                        </p>
                    </div>
                </div>
                <div className="flex items-center p-5 transition-transform border shadow-2xl bg-background-card rounded-xl border-background-hover hover:-translate-y-1">
                    <div className="flex items-center justify-center p-4 mr-4 rounded bg-background-lightDark">
                        <i className="text-xl fas fa-cogs text-primary-variant"></i>
                    </div>
                    <div>
                        <span className="block text-lg font-bold text-text">API Integration & Automation</span>
                        <p>
                            Seamlessly integrating third-party APIs and automating data workflows.
                        </p>
                    </div>
                </div>
                <div className="flex items-center p-5 transition-transform border shadow-2xl bg-background-card rounded-xl border-background-hover hover:-translate-y-1">
                    <div className="flex items-center justify-center p-4 mr-4 rounded bg-background-lightDark">
                        <i className="text-xl fa-brands fa-shopify text-primary-variant"></i>
                    </div>
                    <div>
                        <span className="block text-lg font-bold text-text">Shopify App</span>
                        <p>
                            Enhancing Shopify stores using Liquid, Metafields, and Shopify API.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <h3 className="mb-4 text-2xl font-semibold text-primary-variant-light">My Skills</h3>
        <div className="relative mb-8">
            <section id="skill_area" className="p-5 skill-carousel bg-background-card rounded-2xl">
                <div className="skill-item">
                    <img src="./images/net.png" alt=".NET" />
                </div>
                <div className="skill-item">
                    <img src="./images/shopify.png" alt="Shopify" />
                </div>
                <div className="skill-item">
                    <img src="./images/sql.png" alt="SQL" />
                </div>
                <div className="skill-item">
                    <img src="./images/reactjs.png" alt="React.js" />
                </div>
                <div className="skill-item">
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