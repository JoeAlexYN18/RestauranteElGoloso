import React from 'react';
import './NuestraHistoriaPage.css';

function NuestraHistoriaPage() {
  return (
    <div className="nuestra-historia-container">
      <div className="imagenes-superior">
        <div>
          <img src="https://files.123inventatuweb.com/91/21/9121a47e-c03a-4ef3-b057-d8bcca85a907.jpg" alt="Imagen del restaurante 1" style={{ width: '500px', height: '500px' }} />
        </div>
        <div>
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhVbwxSh4sVwFz8itE7RzTmRvW4lsh4MBHyLz7Z36gtuOllhzZAJOc2k1n6QsTcQC6R0uj6uLTog-WYRtEkEk0uGUp_bbgCFN4nCuvIvlRdkUVaqAopNxIvbW5S3RsRDhgASNj1G-lLejc/w1200-h630-p-k-no-nu/Comiendosemadrid_el+goloso+entrada.JPG" alt="Imagen del restaurante 2" style={{ width: '1000px', height: '500px' }} />
        </div>
      </div>

      <h1 className="titulo-historia">Nuestros Inicios</h1>
      <hr className="titulo-historia-hr" />

      <div className="columnas-texto">
        <div className="columna-texto">
          <p>
            Los inicios de <strong>El Goloso</strong> se remontan a los años 90 en el distrito de Chiclayo. Un lugar lleno de oportunidades donde, en cada esquina,
            se respiraba el aroma de la comida casera y el sabor de la tradición. Nos instalamos en una pequeña esquina y rápidamente captamos la atención de
            aquellos que buscaban una experiencia auténtica de comida criolla.
          </p>
          <p>
            Gracias al esfuerzo familiar y a la dedicación, El Goloso fue creciendo, siempre buscando brindar el mejor servicio y sabor a nuestros comensales. Nos
            enorgullece saber que muchas familias nos han acompañado desde esos primeros días y que seguimos siendo parte de sus celebraciones y momentos especiales.
          </p>
        </div>
        
        <div className="columna-texto">
          <p>
            Hoy, con más de 20 años de experiencia, El Goloso es un lugar donde se encuentra tradición y calidad. Hemos logrado posicionarnos como uno de los
            restaurantes más queridos de Chiclayo y sus alrededores, siempre manteniendo nuestro compromiso con el sabor y la autenticidad.
          </p>
          <p>
            Cada platillo cuenta una historia, y cada ingrediente es escogido con cuidado para asegurar que nuestros comensales reciban solo lo mejor. Agradecemos
            a todos nuestros clientes por su apoyo incondicional, y prometemos seguir trabajando para brindarles la mejor experiencia gastronómica posible.
          </p>
        </div>
      </div>
    </div>
  );
}

export default NuestraHistoriaPage;
