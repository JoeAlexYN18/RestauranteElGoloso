import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


import HomePage from './pages/HomePage';
import TeBrindamosPage from './pages/TeBrindamosPage';
import NuestrasCasasPage from './pages/NuestrasCasasPage';
import GaleriaPage from './pages/GaleriaPage';
import NuestraHistoriaPage from './pages/NuestraHistoriaPage';
import ContactanosPage from './pages/ContactanosPage';
import ReservacionesPage from './pages/ReservacionesPage';
import NuestraCartaPage from './pages/NuestraCartaPage';

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
       
        <Navbar />

        
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/te-brindamos" element={<TeBrindamosPage />} />
            <Route path="/nuestras-casas" element={<NuestrasCasasPage />} />
            <Route path="/galeria" element={<GaleriaPage />} />
            <Route path="/nuestra-historia" element={<NuestraHistoriaPage />} />
            <Route path="/contactanos" element={<ContactanosPage />} />
            <Route path="/reservaciones" element={<ReservacionesPage />} />
            <Route path="/nuestra-carta" element={<NuestraCartaPage />} /> 
          </Routes>
        </div>

        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
