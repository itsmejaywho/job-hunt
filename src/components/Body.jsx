import { useCallback, useEffect, useState, useRef } from 'react';
import '../styles/Body.css';

const codeSnippet = `<div class="task-card">
  <h3>Post a Task</h3>
  <p>"Need React bug fixes..."</p>
  <button>Submit Request</button>
</div>

const freelancers = [
  "Frontend Developer",
  "Backend",
  "UI/UX Designer"
];

freelancers.forEach((role) => {
  console.log("✔ " + role);
});`;

const deployCards = [
  {
    title: 'Coding Support',
    subtitle: 'Frontend & Backend Development',
    text: 'Get help with React, Node.js, APIs, databases, and full-stack development.',
    cta: 'Explore Developers'
  },
  {
    title: 'Debugging & Fixes',
    subtitle: 'Bug Fixing & Technical Support',
    text: 'Resolve errors, deployment issues, performance bottlenecks, and broken features faster.',
    cta: 'Get Help'
  },
  {
    title: 'Documentation & Digital Tasks',
    subtitle: 'Technical Writing & Task Assistance',
    text: 'API docs, project setup guides, research, testing, and digital workflow support.',
    cta: 'View Services'
  },
  {
    title: 'Custom Software Development',
    subtitle: 'Build Tailored Products',
    text: 'Create fast, modern, and scalable digital products tailored to your business needs.',
    cta: 'Start a Project'
  },
  {
    title: 'Deployment & Maintenance',
    subtitle: 'Hosting, Monitoring, Support',
    text: 'Keep your applications running smoothly with hosting, monitoring, updates, and ongoing support.',
    cta: 'Learn More'
  }
];

function Body() {
  const [typedCode, setTypedCode] = useState('');
  const [activePage, setActivePage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const cardsContainerRef = useRef(null);

  const getScrollStep = (container) => {
    const firstCard = container.querySelector('.deploy-card');
    if (!firstCard) {
      return 0;
    }

    const cardWidth = firstCard.getBoundingClientRect().width;
    const style = getComputedStyle(container);
    const gapValue = parseFloat(style.columnGap || style.gap || '0');
    const gap = Number.isNaN(gapValue) ? 0 : gapValue;

    return cardWidth + gap;
  };

  const updatePagination = useCallback(() => {
    const container = cardsContainerRef.current;
    if (!container) {
      return;
    }

    const step = getScrollStep(container);
    if (!step) {
      return;
    }

    const nextCardsPerPage = Math.max(1, Math.floor(container.clientWidth / step));
    const nextPageCount = Math.max(1, Math.ceil(deployCards.length / nextCardsPerPage));
    const rawPage = Math.round(container.scrollLeft / (step * nextCardsPerPage));
    const nextPage = Math.max(0, Math.min(rawPage, nextPageCount - 1));
    setCardsPerPage(nextCardsPerPage);
    setActivePage(nextPage);
  }, []);

  const handleScroll = (direction) => {
    if (cardsContainerRef.current) {
      const container = cardsContainerRef.current;
      const scrollAmount = getScrollStep(container) || 400;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      const edgeThreshold = 4;
      const lastPage = Math.max(0, Math.ceil(deployCards.length / cardsPerPage) - 1);
      
      if (direction === 'left') {
        // If at the start, loop to the end
        if (container.scrollLeft <= edgeThreshold) {
          container.scrollTo({ left: Math.max(0, maxScrollLeft), behavior: 'smooth' });
          setActivePage(lastPage);
        } else {
          container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
      } else {
        // If at the end, loop to the start
        if (container.scrollLeft >= maxScrollLeft - edgeThreshold) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
          setActivePage(0);
        } else {
          container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }
  };

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

  useEffect(() => {
    updatePagination();
    window.addEventListener('resize', updatePagination);
    return () => window.removeEventListener('resize', updatePagination);
  }, [updatePagination]);

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

      <section className='deploy-section'>
        <div className='deploy-copy'>
          <h2 className='deploy-title'>Deploy Your Way</h2>
          <p className='deploy-description'>
            On-premises, on any cloud, or hybrid, hackAssist gives you freedom to run anywhere.
          </p>
          <a href='#' className='deploy-link'>Product Documentation</a>
          <div className='deploy-dots' aria-hidden='true'>
            {Array.from({ length: Math.max(1, Math.ceil(deployCards.length / cardsPerPage)) }).map((_, index) => (
              <span
                key={`deploy-dot-${index}`}
                className={`deploy-dot${index === activePage ? ' deploy-dot-active' : ''}`}
              />
            ))}
          </div>
        </div>

        <div className='deploy-cards-wrap'>
          <button type='button' className='deploy-nav deploy-nav-left' aria-label='Previous card' onClick={() => handleScroll('left')}>‹</button>
          <div className='deploy-cards' ref={cardsContainerRef} onScroll={updatePagination}>
            {deployCards.map((card) => (
              <article key={card.title} className='deploy-card'>
                <div className='deploy-card-media' />
                <h3 className='deploy-card-title'>{card.title}</h3>
                <p className='deploy-card-subtitle'>{card.subtitle}</p>
                <p className='deploy-card-text'>
                  {card.text}
                </p>
                <a href='#' className='deploy-card-link'>{card.cta}</a>
              </article>
            ))}
          </div>
          <button type='button' className='deploy-nav deploy-nav-right' aria-label='Next card' onClick={() => handleScroll('right')}>›</button>
        </div>
      </section>
    </main>
  );
}

export default Body;

