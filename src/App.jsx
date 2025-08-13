import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './pages/Hero/Hero';
import Home from './pages/Home/Home';
import Contractor from './pages/Contractor/Contractor';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contractor" element={<Contractor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
