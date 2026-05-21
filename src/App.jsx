import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/landingpage' element={<LandingPage />} />
        <Route path='*' element={<Navigate to='/landingpage' replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

