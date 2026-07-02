// PortfolioSection.js

function ProjectSection() {

  return (

    <div className="flex flex-col">

      <div className="mb-4">

        <h3 className="mb-2 text-2xl font-semibold text-primary-variant-light">Project Details</h3>

        <div className="w-10 h-1 mb-12 rounded bg-gradient-to-r from-yellow-400 to-yellow-600"></div>

      </div>

      <section id="project-details" className="p-8 shadow-2xl bg-background-card rounded-2xl">

        <div className="p-4 mb-8 rounded-lg shadow-lg bg-background-sidebar">

          <h3 className="mb-2 text-xl font-semibold text-text">LaptopStore - Website E-commerce</h3>

          <div className="relative h-0 mb-4 overflow-hidden rounded pb-[56.25%]">

            <video controls className="absolute top-0 left-0 object-cover w-full h-full">

              <source src="/videos/VideoDemoEcommer.mp4" type="video/mp4" />

              Your browser does not support the video tag.

            </video>

          </div>

          <p className="mb-2 text-lg font-semibold text-primary-variant"><strong>Personal Project</strong></p>

          <p className="text-text-light">

            <strong className="text-primary">Description:</strong> Built a full-stack laptop e-commerce platform with customer storefront, React admin dashboard, product/cart/order management, authentication and checkout flow. <br/>

            <strong className="text-primary">Highlights:</strong> Designed a Clean Architecture backend with MediatR, FluentValidation and Redis caching; implemented transactional outbox, RabbitMQ, inbox/idempotency handling and xUnit tests. <br/>

            <strong className="text-primary">Technologies:</strong> ASP.NET Core, EF Core, React, SQL Server, Redis, RabbitMQ, MediatR, xUnit. <br/>

            <strong className="text-primary"> Link:</strong> <a href="https://github.com/ducvuive/E-commerce_Laptop_" target="_blank" rel="noopener noreferrer" className="underline hover:text-text-muted">Source</a>

          </p>

        </div>

        <div className="p-4 mb-8 rounded-lg shadow-lg bg-background-sidebar">

          <h3 className="mb-2 text-xl font-semibold text-text">Chat4Fun - Website Chat Realtime</h3>

          <div className="relative h-0 mb-4 overflow-hidden rounded pb-[56.25%]">

            <video controls className="absolute top-0 left-0 object-cover w-full h-full">

              <source src="/videos/VideoDemoChatApp.mkv" type="video/mp4" />

              Your browser does not support the video tag.

            </video>

          </div>

          <p className="mb-2 text-lg font-semibold text-primary-variant"><strong>School Project (3 members)</strong></p>

          <p className="text-text-light">

            <strong className="text-primary">Description:</strong> Developed a real-time chat application with live messaging, image upload and user communication features.<br/>

            <strong className="text-primary">Responsibilities:</strong> Designed the database schema, implemented real-time chat features using SignalR and managed Azure deployment with CI/CD. <br/>

            <strong className="text-primary">Technologies:</strong> ASP.NET Core, Azure SQL Database, SignalR, CI/CD, Azure Deployment. <br/>

            <strong className="text-primary"> Link:</strong> <a href="https://dev.azure.com/19521844/ChatForFun" target="_blank" rel="noopener noreferrer" className="underline hover:text-text-muted">Source</a>

          </p>

        </div>

      </section>

    </div>

  );

}



export default ProjectSection;

