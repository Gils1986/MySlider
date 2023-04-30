import { useState } from "react";
import { firstArray } from "../array";

export function MySlider({
  images = firstArray,
  firstImage = 0,
  infiniteSlide = true,
}) {
  const [currentImage, setCurrentImage] = useState(firstImage);

  const toPrevImage = () => {
    if (currentImage > 0) {
      setCurrentImage((currentImage) => currentImage - 1);
    } else {
      if (infiniteSlide) {
        setCurrentImage(images.length - 1);
      } else {
        return;
      }
    }
  };

  const prevDisabled = () => {
    if (currentImage === 0 && !infiniteSlide) {
      return true;
    }
  };

  const toNextImage = () => {
    if (currentImage < images.length - 1) {
      setCurrentImage((currentImage) => currentImage + 1);
    } else {
      if (infiniteSlide) {
        setCurrentImage(0);
      }
    }
  };

  const nextDisabled = () => {
    if (currentImage === images.length - 1 && !infiniteSlide) {
      return true;
    }
  };

  return (
    <div className="mySlider">
      <div className="currentImage">
        <img className="innerImage" src={images[currentImage]} alt="" />{" "}
      </div>
      <div className="navigation">
        <button
          className="prevImg"
          onClick={toPrevImage}
          disabled={prevDisabled()}
        >
          <i className="bi bi-arrow-left"></i>
        </button>
        <button
          className="nextImg"
          onClick={toNextImage}
          disabled={nextDisabled()}
        >
          {" "}
          <i className="bi bi-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
