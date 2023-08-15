import { useState } from "react"

import './App.css';

const images = [
  'tenis1.jpg',
  'tenis2.jpg',
  'tenis3.jpg'
]

function App() {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="App">
      <h1>Nike</h1>
      <hr />
      <h1>Tênis Nike Air</h1>
      <div className="image-container">
        <img src={`${selectedImage}`} alt="Imagem em destaque" className="featured-image" />
      </div>
      <div className="thumbnails">
        {images.map((image, index) => (
          <img
            key={index}
            src={`${image}`}
            alt={`Thumbnail ${index}`}
            className={`thumbnail ${selectedImage === image ? 'active' : ''}`}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
    </div>
  );
}

export default App
