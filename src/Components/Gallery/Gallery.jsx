import  { useRef, useState, useEffect } from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { images } from '../../Constants/images.js';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const imagesArray = [images.banner, images.image12, images.gal2, images.gal3, images.gal4];

  const scroll = (direction) => {
    const { current } = scrollRef; 
    const scrollAmount = 2000;
    if (direction === 'left') {
      current.scrollLeft -= scrollAmount;
    } else {
      current.scrollLeft += scrollAmount;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesArray.length);
      scroll('right'); 
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentIndex === imagesArray.length - 1) {
      const { current } = scrollRef;
      current.scrollLeft = 0; // If it's the last image, scroll back to the first image
    }
  }, [currentIndex]);

  return (
    <div className="app__gallery">
      <div className="app__gallery-content"></div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {imagesArray.map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;