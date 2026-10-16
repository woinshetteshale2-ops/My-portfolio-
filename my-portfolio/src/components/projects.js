import React from 'react';

function Projects() {
  const githubProfileUrl = "https://github.com/woinshetteshale2-ops";

  const projectList = [

  
    {
      id: 1,
      title: 'House rental management system',
      description: 'a full stack website project developed using html, css, js and php.',
    },


    {
      id: 2,
      title: '3D Graphics & Cube Render',
      description: 'A 3D cube rotation and lighting model project developed using C++, OpenGL, and GLUT.',
    },
    {
      id: 3,
      title: 'Medical Expert System',
      description: 'A rule-based expert system built using Prolog to analyze patient symptoms and diagnose diseases.',
    },
    {
      id: 4,
      title: 'React Portfolio Website',
      description: 'A responsive portfolio website built using React.js and Formspree.',
    }



  ];

  return (
    <section id="projects" style={{ padding: '60px 20px', backgroundColor: '#bbb5b5' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ color: '#1e1b4b', marginBottom: '30px', fontSize: '2.5rem' }}>My Projects</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {projectList.map((project) => (
            <div 
              key={project.id} 
              style={{ 
                border: '1px solid #e2e8f0', 
                borderRadius: '12px', 
                padding: '20px', 
                textAlign: 'left',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <h3 style={{ color: '#334155', marginBottom: '10px', fontSize: '1.25rem' }}>{project.title}</h3>
                <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.5' }}>
                  {project.description}
                </p>
              </div>

              <div style={{ marginTop: '20px' }}>
                <a 
                  href={githubProfileUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    padding: '8px 16px',
                    backgroundColor: '#24292e',
                    color: '#ffffff',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    fontWeight: 'bold'
                  }}
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;