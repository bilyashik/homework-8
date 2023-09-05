import React, { Component } from 'react';
import './App.css'

class ImageSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
    };
  }

  nextImage = () => {
    this.setState((prevState) => ({
      currentImageIndex: (prevState.currentImageIndex + 1) % this.props.images.length,
    }));
  };

  prevImage = () => {
    this.setState((prevState) => ({
      currentImageIndex:
        (prevState.currentImageIndex - 1 + this.props.images.length) % this.props.images.length,
    }));
  };

  render() {
    const { images } = this.props;
    const { currentImageIndex } = this.state;

    return (
      <div className="image-slider">
        <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
        <div className="button-container">
          <button onClick={this.prevImage}>⏪</button>
          <button onClick={this.nextImage}>⏩</button>
        </div>
      </div>
    );
  }
}

export default ImageSlider;