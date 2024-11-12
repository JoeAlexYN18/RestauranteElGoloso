import React, { useState } from 'react';
import './NuestraCartaPage.css';

import aji_gallina from '../images/aji_gallina.jpg';
import arroz_pollo from '../images/arroz_pollo.jpg';
import ceviche from '../images/ceviche.jpg';
import ceviche_conchas_negras from '../images/ceviche_conchas_negras.jpg';
import ceviche_mixto from '../images/ceviche_mixto.jpg';
import ceviche_pota from '../images/ceviche_pota.jpg';
import ensalada_Cesar from '../images/ensalada_cesar.jpg';
import ensalada_cobb from '../images/ensalada_cobb.jpg';
import ensalada_griega from '../images/ensalada_griega.jpg';
import ensalada_mixta from '../images/ensalada_mixta.jpg';
import humita from '../images/humita.jpg';
import ocopa from '../images/ocopa.jpg';
import tequenos from '../images/tequenos.jpg';
import aguadito from '../images/aguadito.jpg'; 
import lomo_saltado from '../images/lomo_saltado.jpg';
import pescado_frito from '../images/pescado_frito.jpg';

function NuestraCartaPage() {
  const [modalImage, setModalImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setModalImage(imageSrc);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="nuestra-carta-page">
      <header className="carta-header">
        <h1>Nuestra Carta</h1>
        <p>Explora los platos más deliciosos que tenemos para ti. ¡Buen provecho!</p>
      </header>

     
      <section className="menu-section">
        <h2>Entradas</h2>
        <div className="menu-items-container">
          <div className="menu-item" onClick={() => handleImageClick(humita)}>
            <img src={humita} alt="Humita" className="menu-image" />
            <div className="menu-info">
              <h3>Humita</h3>
              <p>Tradicional pastel de maíz tierno.</p>
              <span className="price"></span>
            </div>
          </div>
          <div className="menu-item" onClick={() => handleImageClick(tequenos)}>
            <img src={tequenos} alt="Tequeños" className="menu-image" />
            <div className="menu-info">
              <h3>Tequeños</h3>
              <p>Crujientes bocados rellenos de queso.</p>
              <span className="price"></span>
            </div>
          </div>
          <div className="menu-item" onClick={() => handleImageClick(ocopa)}>
            <img src={ocopa} alt="Ocopa" className="menu-image" />
            <div className="menu-info">
              <h3>Ocopa</h3>
              <p>Papas servidas con salsa de huacatay.</p>
              <span className="price"></span>
            </div>
          </div>
          <div className="menu-item" onClick={() => handleImageClick(aguadito)}>
            <img src={aguadito} alt="Aguadito" className="menu-image" />
            <div className="menu-info">
              <h3>Aguadito</h3>
              <p>Sopa de pollo con arroz y hierbas aromáticas.</p>
              <span className="price"></span>
            </div>
          </div>
        </div>
      </section>

      
      <section className="menu-section">
        <h2>Ceviches</h2>
        <div className="menu-items-container">
          <div className="menu-item" onClick={() => handleImageClick(ceviche)}>
            <img src={ceviche} alt="Ceviche Clásico" className="menu-image" />
            <div className="menu-info">
              <h3>Ceviche Clásico</h3>
              <p>Ceviche fresco preparado con los mejores ingredientes.</p>
              <span className="price">12.00 PEN</span>
            </div>
          </div>
          <div className="menu-item" onClick={() => handleImageClick(ceviche_conchas_negras)}>
            <img src={ceviche_conchas_negras} alt="Ceviche de Conchas Negras" className="menu-image" />
            <div className="menu-info">
              <h3>Ceviche de Conchas Negras</h3>
              <p>Exquisito ceviche de conchas negras al estilo tradicional.</p>
              <span className="price">20.00 PEN</span>
            </div>
          </div>
          <div className="menu-item" onClick={() => handleImageClick(ceviche_mixto)}>
            <img src={ceviche_mixto} alt="Ceviche Mixto" className="menu-image" />
            <div className="menu-info">
              <h3>Ceviche Mixto</h3>
              <p>Combinación de mariscos frescos.</p>
              <span className="price">20.00 PEN</span>
            </div>
          </div>
          <div className="menu-item" onClick={() => handleImageClick(ceviche_pota)}>
            <img src={ceviche_pota} alt="Ceviche de Pota" className="menu-image" />
            <div className="menu-info">
              <h3>Ceviche de Pota</h3>
              <p>Ceviche hecho con pota fresca.</p>
              <span className="price">15.00 PEN</span>
            </div>
          </div>
        </div>
      </section>

      
      <section className="menu-section">
        <h2>Ensaladas</h2>
        <div className="menu-items-container">
          <div className="menu-item" onClick={() => handleImageClick(ensalada_Cesar)}>
            <img src={ensalada_Cesar} alt="Ensalada César" className="menu-image" />
            <div className="menu-info">
              <h3>Ensalada César</h3>
              <p>Lechuga, pollo, aderezo y crutones.</p>
              <span className="price">10.00 PEN</span>
            </div>
          </div>
          <div className="menu-item" onClick={() => handleImageClick(ensalada_cobb)}>
            <img src={ensalada_cobb} alt="Ensalada Cobb" className="menu-image" />
            <div className="menu-info">
              <h3>Ensalada Cobb</h3>
              <p>Lechuga, aguacate, pollo, bacon, huevo y aderezo.</p>
              <span className="price">9.00 PEN</span>
            </div>
          </div>
          <div className="menu-item" onClick={() => handleImageClick(ensalada_griega)}>
            <img src={ensalada_griega} alt="Ensalada Griega" className="menu-image" />
            <div className="menu-info">
              <h3>Ensalada Griega</h3>
              <p>Tomates, pepino, queso feta, aceitunas.</p>
              <span className="price">7.50 PEN</span>
            </div>
          </div>
          <div className="menu-item" onClick={() => handleImageClick(ensalada_mixta)}>
            <img src={ensalada_mixta} alt="Ensalada Mixta" className="menu-image" />
            <div className="menu-info">
              <h3>Ensalada Mixta</h3>
              <p>Mezcla de verduras frescas.</p>
              <span className="price">6.00 PEN</span>
            </div>
          </div>
        </div>
      </section>

     
      <section className="menu-section">
        <h2>Platos a la Carta</h2>
        <div className="menu-items-container">
          <div className="menu-item" onClick={() => handleImageClick(aji_gallina)}>
            <img src={aji_gallina} alt="Ají de Gallina" className="menu-image" />
            <div className="menu-info">
              <h3>Ají de Gallina</h3>
              <p>Cremoso ají de gallina servido con arroz y aceitunas.</p>
              <span className="price">13.00 PEN</span>
            </div>
          </div>
          <div className="menu-item" onClick={() => handleImageClick(arroz_pollo)}>
            <img src={arroz_pollo} alt="Arroz con Pollo" className="menu-image" />
            <div className="menu-info">
              <h3>Arroz con Pollo</h3>
              <p>Arroz amarillo con pollo sazonado.</p>
              <span className="price">12.00 PEN</span>
            </div>
          </div>
          <div className="menu-item" onClick={() => handleImageClick(lomo_saltado)}>
            <img src={lomo_saltado} alt="Lomo Saltado" className="menu-image" />
            <div className="menu-info">
              <h3>Lomo Saltado</h3>
              <p>Delicioso plato con carne, papas fritas y arroz.</p>
              <span className="price">18.00 PEN</span>
            </div>
          </div>
          <div className="menu-item" onClick={() => handleImageClick(pescado_frito)}>
            <img src={pescado_frito} alt="Pescado Frito" className="menu-image" />
            <div className="menu-info">
              <h3>Pescado Frito</h3>
              <p>Pescado frito acompañado de yuca.</p>
              <span className="price">16.00 PEN</span>
            </div>
          </div>
        </div>
      </section>


      {modalImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <img src={modalImage} alt="Plato seleccionado" className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );
}

export default NuestraCartaPage;
