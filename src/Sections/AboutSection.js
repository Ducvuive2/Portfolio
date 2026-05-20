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
                Full-stack Software Engineer with experience in banking, healthcare and e-commerce systems using ASP.NET and modern frontend technologies. Skilled in building scalable web applications, real-time systems and cloud-based deployments with AWS and Docker.
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
                        Building scalable APIs and server-side logic with ASP.NET Core, NodeJS, SignalR, PostgreSQL and Redis.
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
                            Crafting responsive interfaces with ReactJS, Next.js, TypeScript, Angular and Tailwind CSS.
                        </p>
                    </div>
                </div>
                <div className="flex items-center p-5 transition-transform border shadow-2xl bg-background-card rounded-xl border-background-hover hover:-translate-y-1">
                    <div className="flex items-center justify-center p-4 mr-4 rounded bg-background-lightDark">
                        <i className="text-xl fas fa-cogs text-primary-variant"></i>
                    </div>
                    <div>
                        <span className="block text-lg font-bold text-text">Real-time Systems</span>
                        <p>
                            Implementing real-time updates and notification flows using SignalR for queue management and live applications.
                        </p>
                    </div>
                </div>
                <div className="flex items-center p-5 transition-transform border shadow-2xl bg-background-card rounded-xl border-background-hover hover:-translate-y-1">
                    <div className="flex items-center justify-center p-4 mr-4 rounded bg-background-lightDark">
                        <i className="text-xl fas fa-cloud text-primary-variant"></i>
                    </div>
                    <div>
                        <span className="block text-lg font-bold text-text">Cloud & DevOps</span>
                        <p>
                            Deploying and maintaining applications on AWS with Docker, collaborating with DevOps teams for production releases.
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
                    <img src="./images/reactjs.png" alt="React.js" />
                </div>
                <div className="skill-item">
                    <img src="./images/aws.png" alt="AWS" />
                </div>
                <div className="skill-item">
                    <img src="./images/sql.png" alt="SQL" />
                </div>
                <div className="skill-item">
                    <img src="./images/signalR.png" alt="SignalR" />
                </div>
                <div className="skill-item">
                    <img src="./images/nodejs.png" alt="Node.js" />
                </div>
                <div className="skill-item">
                    <img src="./images/nextjs.png" alt="Next.js" />
                </div>
                <div className="skill-item">
                    <img src="./images/ts.png" alt="TypeScript" />
                </div>
                <div className="skill-item">
                    <img src="./images/postgreSQL.png" alt="PostgreSQL" />
                </div>
                <div className="skill-item">
                    <img src="./images/redis.png" alt="Redis" />
                </div>
                <div className="skill-item">
                    <img src="./images/maui.png" alt=".NET MAUI" />
                </div>
                <div className="skill-item">
                    <img src="./images/postman.png" alt="Postman" />
                </div>
            </section>
            <div className="scroll-indicator-container">
                <div className="scroll-indicator-track">
                    <div className="scroll-indicator-thumb" aria-hidden="true"></div>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="p-4 rounded-xl bg-background-card">
                <p className="mb-1 text-sm font-semibold text-primary-variant">Front-end</p>
                <p className="text-text">ReactJS, Next.js, TypeScript, Angular, Tailwind CSS, JQuery, Shopify Liquid</p>
            </div>
            <div className="p-4 rounded-xl bg-background-card">
                <p className="mb-1 text-sm font-semibold text-primary-variant">Back-end</p>
                <p className="text-text">ASP.NET Core, NodeJS, SignalR</p>
            </div>
            <div className="p-4 rounded-xl bg-background-card">
                <p className="mb-1 text-sm font-semibold text-primary-variant">Mobile</p>
                <p className="text-text">.NET MAUI</p>
            </div>
            <div className="p-4 rounded-xl bg-background-card">
                <p className="mb-1 text-sm font-semibold text-primary-variant">Cloud & DevOps</p>
                <p className="text-text">Docker, AWS, Azure</p>
            </div>
            <div className="p-4 rounded-xl bg-background-card md:col-span-2">
                <p className="mb-1 text-sm font-semibold text-primary-variant">Database</p>
                <p className="text-text">MS SQL Server, PostgreSQL, MySQL, Redis</p>
            </div>
        </div>
      </div>
    );
  }
  
  export default AboutSection;