import '../styles/Body.css';

function Body() {
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

        <div className='hero-media-placeholder' aria-hidden='true' />
      </section>

      <section className='body-content' />
    </main>
  );
}

export default Body;
