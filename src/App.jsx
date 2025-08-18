import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './pages/Hero/Hero';
import Home from './pages/Home/Home';
import Contractor from './pages/Contractor/Contractor';
import HomeOwner from './pages/HomeOwner/HomeOwner';
import Business from './pages/Business/Business';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contractor" element={<Contractor />} />
        <Route path="/home-owner" element={<HomeOwner />} />
        <Route path="/business" element={<Business />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
