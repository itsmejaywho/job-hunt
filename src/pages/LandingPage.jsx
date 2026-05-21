import Navbar from '../components/Navbar.jsx';
import Body from '../components/Body.jsx';
import Footer from '../components/Footer.jsx';

function LandingPage() {
  return (
    <div className='flex min-h-screen flex-col '>
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
}

export default LandingPage;

