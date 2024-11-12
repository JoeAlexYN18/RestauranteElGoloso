import React from 'react';
import { Link } from 'react-router-dom';  
import { useNavigate } from 'react-router-dom';
import './Footer.css';
import logo from '../images/logo.png';

function Footer() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo(0, 0); 
  };

  return (
    <footer className="footer">
      <div className="footer-content">
      
        <div className="footer-section logo-section">
          <img 
            src={logo} 
            alt="Logo Goloso" 
            className="footer-logo" 
            onClick={handleLogoClick} 
          />
          <p className="footer-text">
            Goloso Restaurante: donde la buena comida se encuentra con la calidez del hogar.
          </p>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-section site-map">
          <h4>Mapa del Sitio</h4>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/nuestra-historia">Nuestra historia</Link></li>
            <li><Link to="/nuestra-carta">Nuestra carta</Link></li>
            <li><Link to="/te-brindamos">Te brindamos</Link></li>
            <li><Link to="/nuestras-casas">Nuestras casas</Link></li>
            <li><Link to="/galeria">Galería</Link></li>
            <li><Link to="/contactanos">Contáctanos</Link></li>
            <li><Link to="/reservaciones">Reservaciones</Link></li>
          </ul>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-section contact-section">
  <h4>LOCALES</h4>
  <div className="contact">
    <h5>Local La Victoria</h5>
    <p>Av. los Incas 145, La Victoria 14007. Chiclayo - Peru</p>
    <p>Teléfono: 956 789 654</p>
    <p>Email: <a href="mailto:lavictoria@elgoloso.pe">lavictoria@elgoloso.pe</a></p>
  </div>
  <div className="contact">
    <h5>Local Chiclayo</h5>
    <p>1427 Alfonso Ugarte, Chiclayo - Perú</p>
    <p>Teléfono: 01 348 7802</p>
    <p>Email: <a href="mailto:chiclayo@elgoloso.pe">chiclayo@elgoloso.pe</a></p>
  </div>
</div>

      </div>

      <div className="footer-bottom">
        <p className="footer-text">© 2024 Goloso Restaurante. Todos los derechos reservados.</p>
        <p className="footer-text">Síguenos en nuestras redes sociales:</p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd"/>
            </svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd"/>
            </svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z" clip-rule="evenodd"/>
            </svg>
          </a>
          <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path fill="currentColor" fill-rule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clip-rule="evenodd"/>
              <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.333-.089c-.278 0-.601.12-.874.363-.649.548-1.27.802-1.853 1.04-.451.174-.883.448-1.228.896-.37.491-.551 1.212-.453 1.831.067.457.46.977.91 1.428a6.605 6.605 0 0 0 2.655 1.225c.307.063.562.27.814.537 1.283 1.451 2.36 1.523 2.549 1.497a1.203 1.203 0 0 0 .694-.484c.034-.047.288-.406.28-.815-.013-.55-.279-1.682-.38-1.742ZM16 11.273c-.138-.06-.465-.103-.59-.14-.303-.16-.58-.227-.84-.377-.279-.17-.448-.338-.585-.485-.35-.418-.626-.807-.973-1.182-.451-.51-.749-.765-1.248-.713a1.091 1.091 0 0 0-.298-.027c-.07.231-.064.452.047.743.119.246.407.713.544.79.61-.363.723-.562 1.21-.91 1.215-.914 2.172-.525 2.306-.362-.316-.39-.58-.572-.618-.652Z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
