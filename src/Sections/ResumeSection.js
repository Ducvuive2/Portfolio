// ResumeSection.js
function ResumeSection() {
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
                <h4 className="mb-2 text-xl font-semibold text-text">University of Information Technology</h4>
                <p className="mb-1 text-sm font-semibold text-primary-variant">Sep 2019 - April 2023</p>
                <p className="text-text">Bachelor's Degree in Information System</p>
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
            <div className="relative before:content-[''] before:absolute before:h-full before:top-4 before:bottom-0 before:w-0.5 before:bg-gray-600 before:left-7">
              <div className="relative pb-4 pl-8">
                <div className="absolute z-10 w-3 h-3 ml-[-4px] border-4 rounded-full shadow-lg left-7 top-2 bg-primary-variant-light opacity-80 border-jet"></div>
                <div className="pb-4 pl-10">
                <h4 className="mb-2 text-xl font-semibold text-text">Full-stack Software Engineer</h4>
                <p className="mb-1 text-base text-text-muted">Vinsmart Future, Ho Chi Minh, Viet Nam</p>
                <p className="mb-1 text-sm font-semibold text-primary-variant">Dec 2025 - Present</p>
                <p className="mb-2 text-sm text-gray-400">Project: Kiosk/QMS, Vinmec.com</p>
                <ul className="pl-6 my-4">
                  <li className="relative mb-2 text-text">Designed and optimized database schemas and APIs for queue management systems.</li>
                  <li className="relative mb-2 text-text">Implemented real-time queue updates and notification flows using SignalR.</li>
                  <li className="relative mb-2 text-text">Collaborated with DevOps teams for AWS/Docker deployments.</li>
                </ul>
                <p className="mt-2 text-sm italic text-gray-400">Technologies: ASP.NET, ReactJS, Next.js, TypeScript, Postgresql, SignalR, AWS, Docker</p>
                </div>
              </div>

              <div className="relative pb-4 pl-8">
                <div className="absolute z-10 w-3 h-3 ml-[-4px] border-4 rounded-full shadow-lg left-7 top-2 bg-primary-variant-light opacity-80 border-jet"></div>
                <div className="pb-4 pl-10">
                <h4 className="mb-2 text-xl font-semibold text-text">Full-stack Web Developer</h4>
                <p className="mb-1 text-base text-text-muted">International Financial Systems, Ho Chi Minh, Viet Nam</p>
                <p className="mb-1 text-sm font-semibold text-primary-variant">Apr 2025 - Nov 2025</p>
                <p className="mb-2 text-sm text-gray-400">Project: Banking System</p>
                <ul className="pl-6 my-4">
                  <li className="relative mb-2 text-text">Implemented and maintained banking features for web and mobile systems.</li>
                  <li className="relative mb-2 text-text">Investigated and resolved production issues by analyzing logs, tracing data flows and debugging backend services.</li>
                  <li className="relative mb-2 text-text">Improved application performance and response time for critical user operations.</li>
                </ul>
                <p className="mt-2 text-sm italic text-gray-400">Technologies: ASP.NET, MS SQL Server, .NET MAUI, SignalR, Redis</p>
                </div>
              </div>
            </div>

            <div className="relative pb-4 pl-8">
              <div className="absolute z-10 w-3 h-3 ml-[-4px] border-4 rounded-full shadow-lg left-7 top-2 bg-primary-variant-light opacity-80 border-jet"></div>
              <div className="pb-4 pl-10">
                <h4 className="mb-2 text-xl font-semibold text-text">Full-stack Developer</h4>
                <p className="mb-1 text-base text-text-muted">Spiraledge VietNam, Ho Chi Minh, Viet Nam</p>
                <p className="mb-1 text-sm font-semibold text-primary-variant">Feb 2023 - Apr 2025</p>
                <p className="mb-2 text-sm text-gray-400">Project: SwimOutlet</p>
                <ul className="pl-6 my-4">
                  <li className="relative mb-2 text-text">Developed and maintained multiple web application projects for SwimOutlet, ensuring compliance with coding standards and company processes.</li>
                  <li className="relative mb-2 text-text">Optimized performance by implementing code-splitting, lazy loading.</li>
                  <li className="relative mb-2 text-text">Automated data synchronization between internal systems and external platforms using custom-built console tools.</li>
                </ul>
                <p className="mt-2 text-sm italic text-gray-400">Technologies: ASP.NET, MS SQL Server, Shopify Liquid, ReactJS, NodeJS, Jquery</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="relative pb-4 pl-0 before:content-[''] before:absolute before:h-full before:top-4 before:bottom-0 before:w-0.5 before:bg-gray-600 before:left-7">
            <h3 className="flex items-center mb-6 text-2xl font-semibold text-primary-variant-light">
              <i className="p-4 mr-4 text-xl z-10 bg-gray-800 rounded fas fa-award text-[1.5rem] !text-primary neumorphic-icon"></i> Award & Certificate
            </h3>
          </div>

          <div className="relative">
            <div className="relative pb-4 pl-8">
              <div className="absolute z-10 w-3 h-3 ml-[-4px] border-4 rounded-full shadow-lg left-7 top-2 bg-primary-variant-light opacity-80 border-jet"></div>
              <div className="pb-4 pl-10">
                <ul className="pl-6 my-2 space-y-3 list-disc text-text">
                  <li>Academic Performance Scholarship - Faculty of Information System (Top 10) - Mar 2021.</li>
                  <li>TOEIC 4 Skills (LR 750 / SW 260).</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      </section>

    </div>
  );
}

export default ResumeSection;
