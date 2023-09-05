import React from 'react';
import ImageSlider from './ImageSlider';
import './App.css'
import img1 from './images/spiderman.webp';
import img2 from './images/cat.avif'
import img3 from './images/photo_2023-08-18_12-59-44.jpg'
import img4 from './images/wen0mechainsama-wenomechainsama.gif'

function App() {
  const images = [img1, img2, img3, img4];

  return (
    <div className="App">
      <header className="App-header">
        <h1
          style={{
            alignItems: 'center'
          }}
        >Мой слайдер картинок&#128513;</h1>
      </header>
      <main>
        <ImageSlider images={images} />
      </main>
    </div>
  );
}

export default App;