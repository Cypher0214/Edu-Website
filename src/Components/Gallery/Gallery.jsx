import {useRef} from 'react';
import {  BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

// import { SubHeading } from '../../components';
import { images } from '../../Constants/images.js'
import './Gallery.css';

const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 1600;
    } else {
      current.scrollLeft += 1600;
    }
  };
  return (
    <div className="app__gallery">
      <div className="app__gallery-content">
        {/* <SubHeading title="Instagram" /> */}
        {/* <h1 className="headtext__cormorant">Photo Gallery</h1> */}
        {/* <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p> */}
        {/* <button type="button" className="custom__button">View More</button> */}
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[ images.image12, images.gal2, images.gal3, images.gal4].map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
              {/* <BsInstagram className="gallery__image-icon" /> */}
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
