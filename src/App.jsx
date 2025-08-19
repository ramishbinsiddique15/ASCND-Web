import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './pages/Hero/Hero';
import Home from './pages/Home/Home';
import Contractor from './pages/Contractor/Contractor';
import HomeOwner from './pages/HomeOwner/HomeOwner';
import Business from './pages/Business/Business';
import About from './pages/About/About';
import Request from './pages/Request/Request';
import BusinessApply from './pages/BusinessApply/BusinessApply';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contractor" element={<Contractor />} />
        <Route path="/home-owner" element={<HomeOwner />} />
        <Route path="/business" element={<Business />} />
        <Route path="/about" element={<About />} />
        <Route path="/request-quote" element={<Request />} />
        <Route path="/business-apply" element={<BusinessApply />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
