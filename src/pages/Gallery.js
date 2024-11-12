import CloseIcon from '@mui/icons-material/Close';
import React, {useState} from 'react';
import './GaleriaPage.css';
import Img1 from '../galleryPage/Img1.jpg'
import Img2 from '../galleryPage/Img2.jpg'
import Img3 from '../galleryPage/Img3.jpg'
import Img4 from '../galleryPage/Img4.jpg'
import Img5 from '../galleryPage/Img5.jpg'
import Img6 from '../galleryPage/Img6.jpg'
import Img7 from '../galleryPage/Img7.jpg'


const Gallery = () => {
  let data = [
    {
      id: 1,
      imgSrc: Img1,
    },
    {
      id: 2,
      imgSrc: Img6,
    },
    {
      id: 3,
      imgSrc: Img3,
    },
    {
      id: 4,
      imgSrc: Img2,
    },
    {
      id: 5,
      imgSrc: Img7,
    },
    {
      id: 6,
      imgSrc: Img4,
    },
    {
      id: 7,
      imgSrc: Img5,
    }
  ];

  const [model, setModel] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const openModel = (index) => {
    setCurrentIndex(index);
    setModel(true);
  };

  const closeModel = () => {
    setModel(false);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);  // Cicla al siguiente
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);  // Cicla al anterior
  };

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={data[currentIndex]?.imgSrc} alt="modal" />
        <div className="buttons">
          <button onClick={goToPrevious}>Anterior</button>
          <button onClick={goToNext}>Siguiente</button>
        </div>
        <CloseIcon onClick={closeModel} />
      </div>

      <div className="gallery">
        {data.map((item, index) => (
          <div className="pics" key={index} onClick={() => openModel(index)}>
            <img src={item.imgSrc} style={{ width: '100%' }} alt="thumbnail" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;