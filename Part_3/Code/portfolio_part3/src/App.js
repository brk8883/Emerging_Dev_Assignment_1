import React from "react";
import "./App.css";
import projThumb1 from './images/proj_thumb1.jpg';
import projThumb2 from './images/proj_thumb2.jpg';
import projThumb3 from './images/proj_thumb3.jpg';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

const Header = () => <header className="header">Raj Kumar Bhandari</header>;

const About = () => (
  <section className="section about">
    <h2>About Me</h2>
    <p>
      I am Raj Kumar Bhandari, a passionate full-stack developer specializing in
      building modern and efficient web applications. With expertise in several
      programming languages, frameworks, and tools, I aim to deliver solutions
      that make an impact.
    </p>
  </section>
);

const Skills = () => {
  const skillList = [
    "Programming Languages: C#, JavaScript, TypeScript, SQL",
    "Frameworks and Libraries: .NET, Angular, React",
    "Database Management: SQL Server, MySQL, Toad Data Point",
    "ETL Tools: Cognos, SSIS (SQL Server Integration Services)",
    "Reporting and Visualization: Tableau, QlikSense, Power BI",
    "Web Development: HTML5, CSS3, RESTful APIs",
  ];

  return (
    <section className="section skills">
      <h2>IT Skills</h2>
      <div className="skills-container">
        {skillList.map((skill, index) => (
          <div key={index} className="skill">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

const Projects = () => {
  const projectList = [
    {
      title: "A web app built with React and Node.js",
      img: projThumb1,
    },
    {
      title: "An e-commerce platform using Angular and .NET",
      img: projThumb2,
    },
    {
      title: "A dynamic portfolio site built with React",
      img: projThumb3,
    },
  ];

  return (
    <section className="section projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projectList.map((project, index) => (
          <div key={index} className="project">
            <img src={project.img} alt={project.title} />
            <div className="project-title">{project.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => (
  <section className="section contact">
    <h2>Contact Me</h2>
    <form>
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" rows="5" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </section>
);

export default App;
