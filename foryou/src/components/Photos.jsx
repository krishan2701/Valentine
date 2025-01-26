import React from 'react';
import './Photos.scss';
import image1 from '../assets/images/image1.jpeg';
import image2 from '../assets/images/image2.jpeg';
import image3 from '../assets/images/image3.jpeg';
import image4 from '../assets/images/image4.jpeg';
import image5 from '../assets/images/image5.jpeg';
import image6 from '../assets/images/image6.jpeg';
import image7 from '../assets/images/image7.jpeg';
import image8 from '../assets/images/image8.jpeg';
import image9 from '../assets/images/image9.jpeg';


const photos = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9
];

const Photos = () => {
  return (
    <div className="photos-container">
      {photos.map((photo, index) => (
        <img key={index} src={photo} alt={`Photo ${index + 1}`} />
      ))}
      <button className="back-button" onClick={() => window.history.back()}>Back</button>
    </div>
  );
};

export default Photos;
