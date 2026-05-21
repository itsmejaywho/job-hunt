import { useEffect, useState } from 'react';
import '../styles/Body.css';

const codeSnippet = `<div class="task-card">
  <h3>Post a Task</h3>
  <p>"Need React bug fixes..."</p>
  <button>Submit Request</button>
</div>

const freelancers = [
  "Frontend Developer",
  "Technical Writer",
  "DevOps Support"
];

freelancers.forEach((role) => {
  console.log("✔ " + role);
});`;

function Body() {
  const [typedCode, setTypedCode] = useState('');

  useEffect(() => {
    let index = 0;
    let timeoutId;

    const type = () => {
      setTypedCode(codeSnippet.slice(0, index));
      if (index <= codeSnippet.length) {
        index += 1;
        timeoutId = setTimeout(type, 22);
      } else {
        timeoutId = setTimeout(() => {
          index = 0;
          type();
        }, 1600);
      }
    };

    type();

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <main className='body-container'>
      <section className='hero-section'>
        <div className='hero-content'>
          <p className='hero-eyebrow'>HACKASSIST PLATFORM</p>
          <h1 className='hero-title'>
            hackAssist.
            <br />
            The modern freelance
            <br />
            IT task support.
          </h1>
          <p className='hero-description'>
            Connect with skilled freelancers for coding, debugging, technical documentation, and
            digital task support tailored for students, startups, and growing businesses.
          </p>
          <div className='hero-actions'>
            <button type='button' className='hero-primary-btn'>Explore Services</button>
            <button type='button' className='hero-secondary-btn'>See How It Works</button>
          </div>
        </div>

        <div className='hero-media-holder' aria-hidden='true'>
          <div className='hero-query-card hero-query-card-top'>
            <p className='hero-query-label'>Post a Task</p>
            <div className='hero-query-pill-row'>
              <span className='hero-query-pill' />
              <span className='hero-query-pill' />
              <span className='hero-query-pill' />
              <span className='hero-query-pill' />
            </div>
            <div className='hero-query-bar'>
              <button type='button' className='hero-query-btn hero-query-btn-light'>Task</button>
              <p className='hero-query-text'>"Need React bug fixes..."</p>
              <button type='button' className='hero-query-btn hero-query-btn-primary'>Submit Request</button>
            </div>
          </div>

          <div className='hero-query-card hero-query-card-bottom'>
            <pre className='hero-query-code'>{typedCode}<span className='hero-query-caret'>|</span></pre>
          </div>
        </div>
      </section>

      <section className='body-content' />
    </main>
  );
}

export default Body;
