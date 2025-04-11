import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown } from 'lucide-react';

function App() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, and payment integration.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Task Management System",
      description: "A collaborative task management system with real-time updates, team collaboration features, and analytics dashboard.",
      tech: ["React", "Firebase", "Material-UI", "Chart.js"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "AI Image Generator",
      description: "An AI-powered image generation tool that creates unique artwork based on text descriptions using machine learning models.",
      tech: ["Python", "TensorFlow", "React", "AWS"],
      image: "https://images.unsplash.com/photo-1675271591211-126ad94e4c77?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center relative px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Jayesh Deshmukh
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Full Stack Developer & Software Engineer
          </p>
          <div className="flex gap-6 justify-center mb-12">
            <a href="https://github.com/jayesh" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-gray-900 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/jayesh" target="_blank" rel="noopener noreferrer"
               className="text-gray-600 hover:text-gray-900 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:jayesh@example.com"
               className="text-gray-600 hover:text-gray-900 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <button 
          onClick={scrollToProjects}
          className="absolute bottom-10 animate-bounce"
          aria-label="Scroll to projects"
        >
          <ChevronDown size={32} className="text-gray-600" />
        </button>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About Me</h2>
          <p className="text-lg text-gray-600 mb-6">
            I'm a passionate Full Stack Developer with 5+ years of experience in building web applications.
            I specialize in React, Node.js, and cloud technologies, with a strong focus on creating
            scalable and user-friendly solutions.
          </p>
          <p className="text-lg text-gray-600">
            When I'm not coding, you can find me contributing to open-source projects, writing technical
            blogs, or exploring new technologies. I believe in continuous learning and sharing knowledge
            with the developer community.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                    <ExternalLink size={16} className="inline-block ml-2" />
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Let's Connect</h2>
          <p className="text-lg text-gray-600 mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <a 
            href="mailto:jayesh@example.com"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <Mail size={20} />
            Get in Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Jayesh Deshmukh. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;