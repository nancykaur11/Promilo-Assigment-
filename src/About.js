import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <h1>About This Project</h1>
      
      <section className="folder-structure">
        <h2>Folder Structure Overview</h2>
        <p>Our project follows a modular architecture to ensure maintainability and scalability. Here's a brief overview:</p>
        <ul>
          <li><strong>src:</strong> The heart of our application where the source code resides.
            <ul>
              <li><strong>Component:</strong> Contains reusable components like <code>Navbar.js</code> which is the navigation bar across the application.</li>
              <li><strong>logo:</strong> Stores assets related to the visual branding of the application, like <code>logo.svg</code>.</li>
              <li>Root-level files like <code>App.js</code>, <code>App.css</code>, and <code>index.js</code> serve as the entry points for the application and global styles.</li>
              <li><strong>ProtectedRoute :</strong>This folder manages authentication and protected routes in a React web app, ensuring that only authenticated users can access certain routes, redirecting others to the login page.</li>
              <li><strong>ProductDetails: </strong> It fetches retail product categories from an API, displaying them as cards in a grid. It includes a search input to filter categories dynamically based on the user's input.</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="development-journey">
        <h2>Development Journey</h2>
        <p>Developing this application was a rewarding challenge. I faced difficulties particularly in ensuring protected routes and managing state across components. Implementing the <code>ProtectedRoute</code> component was a significant learning curve, allowing me  to securely manage access to certain parts of the application.</p>
      </section>

      <section className="starting-project">
        <h2>Starting the Project</h2>
        <ol>
          <li>Ensure you have <code>Node.js</code> and <code>npm</code> (Node Package Manager) installed.</li>
          <li>Clone the repository to your local machine.</li>
          <li>Navigate to the project directory in your terminal.</li>
          <li>Run <code>npm install</code> to install all the dependencies.</li>
          <li>Start the development server with <code>npm start</code>. This will launch the application in your default browser.</li>
        </ol>
        <p>Remember, the UI is crafted to be as attractive and user-friendly as possible. Should you encounter any issues, our development team is eager to assist.</p>
      </section>
    </div>
  );
};

export default About;
