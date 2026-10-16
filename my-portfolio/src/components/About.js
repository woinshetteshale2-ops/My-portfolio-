import React from 'react';

function About() {
  const skills = [
    { name: 'React', level: '60%' },
    { name: 'JavaScript', level: '80%' },
    { name: 'HTML / CSS', level: '90%' },
     { name: 'PHP', level: '80%' },
      { name: 'GRAPHICS', level: '80%' },
  ];

  return (
    <section id="about" style={{ padding: '60px 20px', backgroundColor: '#b1beca' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ color: '#1e1b4b', fontSize: '2.5rem', marginBottom: '20px' }}>About Me</h2>
        
       
        
        <p style={{ color: '#334155', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '40px' }}>
         Hello! I am Woinshet Teshale, a passionate Computer Science student and Web Developer. I love building responsive and interactive web applications using modern technologies like React.js.

My journey in programming involves creating practical projects—ranging from front-end web apps to logic-based systems and graphics. I am always eager to learn new skills and solve real-world problems through code.</p>

        <h3 style={{ color: '#1e1b4b', fontSize: '1.8rem', marginBottom: '20px' }}>Skills</h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {skills.map((skill, index) => (
            <div key={index}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontWeight: 'bold', color: '#1e1b4b' }}>
                <span>{skill.name}</span>
                <span>{skill.level}</span>
              </div>
              <div style={{ width: '100%', backgroundColor: '#e2e8f0', borderRadius: '10px', height: '10px', overflow: 'hidden' }}>
                <div style={{ width: skill.level, backgroundColor: '#db2777', height: '100%', borderRadius: '10px' }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;