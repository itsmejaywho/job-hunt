import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <div className='navbar-brand'>
          <img src={Logo} alt='hackAssist logo' className='navbar-logo' />
          <span className='navbar-name'>hackAssist</span>
        </div>

        <div className='navbar-links'>
          <a href='#'>Job Search</a>
          <a href='#' className='navbar-link-with-icon'>
            <span>Solutions</span>
          </a>
          <a href='#' className='navbar-link-with-icon'>
            <span>Companies</span>
          </a>
          <a href='#'>Community</a>
        </div>

        <Link to='/login' className='navbar-cta'>
          Get Started
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
