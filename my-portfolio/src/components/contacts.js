import React from 'react';

function Contact() {
  return (
    <section id="contact" style={{ padding: '80px 20px', backgroundColor: '#9291a8', color: '#fff', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#ffdc33' }}>Let's Connect</h2>
      <p style={{ marginBottom: '30px', color: '#e0e7ff' }}>
        I'm always interested in hearing about new opportunities and exciting projects.
      </p>

      {/* የስልክ እና የአድራሻ መረጃ */}
      <div style={{ marginBottom: '30px', fontSize: '1.1rem', lineHeight: '1.8' }}>
        <p style={{ margin: '5px 0' }}>📱 +251 936980691</p>
        <p style={{ margin: '5px 0' }}>📍 Ethiopia</p>
      </div>

      {/* የሊንክ በተኖች (GitHub, Telegram, Gmail) */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap', marginBottom: '50px' }}>
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            backgroundColor: '#374151',
            color: '#ffffff',
            padding: '12px 24px',
            borderRadius: '12px',
            textDecoration: 'none',
            fontWeight: 'bold',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          💻 GitHub
        </a>

        <a 
          href="https://t.me" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            backgroundColor: '#0ea5e9',
            color: '#ffffff',
            padding: '12px 24px',
            borderRadius: '12px',
            textDecoration: 'none',
            fontWeight: 'bold',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          ✈️ Telegram
        </a>

        {/* በቀጥታ ወደ Gmail ድረ-ገጽ የሚወስድ በተን */}
        <a 
          href="https://mail.google.com/mail/?view=cm&fs=1&to=woinshetteshale2@gmail.com" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            backgroundColor: '#f43f5e',
            color: '#ffffff',
            padding: '12px 24px',
            borderRadius: '12px',
            textDecoration: 'none',
            fontWeight: 'bold',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          ✉️ Email
        </a>
      </div>

      {/* Formspree የኮንታክት ፎርም */}
      <form 
        action="https://formspree.io/f/xqpeqpvy" 
        method="POST"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          maxWidth: '500px',
          margin: '0 auto',
          textAlign: 'left',
          backgroundColor: 'rgba(191, 183, 214, 0.05)',
          padding: '30px',
          borderRadius: '16px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
        }}
      >
        <div>
          <label style={{ display: 'block', marginBottom: '8px', color: '#fff', fontWeight: '500' }}>Name:</label>
          <input 
            type="text" 
            name="name" 
            required 
            placeholder="Your Name"
            style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #4b5563', backgroundColor: '#111827', color: '#fff', boxSizing: 'border-box' }} 
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '8px', color: '#fff', fontWeight: '500' }}>Email:</label>
          <input 
            type="email" 
            name="email" 
            required 
            placeholder="your.email@example.com"
            style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #4b5563', backgroundColor: '#111827', color: '#fff', boxSizing: 'border-box' }} 
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '8px', color: '#fff', fontWeight: '500' }}>Message:</label>
          <textarea 
            name="message" 
            rows="5" 
            required 
            placeholder="Write your message here..."
            style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #4b5563', backgroundColor: '#111827', color: '#fff', boxSizing: 'border-box' }}
          ></textarea>
        </div>

        <button 
          type="submit" 
          style={{
            backgroundColor: '#ffdc33',
            color: '#1e1b4b',
            padding: '14px',
            border: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
            fontSize: '1rem',
            cursor: 'pointer',
            marginTop: '10px'
          }}
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;