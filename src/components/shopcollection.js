
import React, { useState } from "react";
import "./shopcollection.css";

function Shopcollection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const carouselItems = [
    {
      imageUrl: process.env.PUBLIC_URL + "images/shop collec.png",
      title: "Summer Styles",
      description:
        "Breathable shoes are the difference between a long walk and a comfy one. Shop shoes made from eucalyptus fiber.",
    },
    {
      imageUrl: process.env.PUBLIC_URL + "images/sc2.png",
      title: "New Arrivals",
      description:
        "The latest styles and limited edition colors that you can only find here (while they last, that is).",
    },
    {
      imageUrl: process.env.PUBLIC_URL + "images/new-arrival-3.png",
      title: "Summer Travel Essentials",
      description:
        "Easygoing. Super packable. The only hard part will be figuring out where you’re taking them…",
    },
    {
      imageUrl: process.env.PUBLIC_URL + "images/new arrival 4.jpg",
      title: "Best Sellers",
      description:
        "We asked around, and it turns out these styles have a pretty devoted fanbase.",
    },
    {
      imageUrl: process.env.PUBLIC_URL + "images/new arrival 5.jpg",
      title: "Best Sellers",
      description:
        "We asked around, and it turns out these styles have a pretty devoted fanbase.",
    },
    {
      imageUrl: process.env.PUBLIC_URL + "images/new arrival 6.jpg",
      title: "The Running Shop",
      description:
        "Break a sweat, not the planet in our running shoes, trail shoes, and performance apparel — all made with a mix of sustainable materials.",
    },
    {
      imageUrl: process.env.PUBLIC_URL + "images/new arrival 7.jpg",
      title: "Best For Adventure",
      description:
        "The window for adventure is wide open. We’ve got things to help you hit the trails, pitch the tents, and road the trips.",
    },
  ];

  return (
    <div className="scMain">
         <div className="ScTitle">
        <h3>Shop The Collections</h3>
      </div>
      <div className="carousel">
        <div
          className="carousel-inner"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {carouselItems.map((item, index) => (
            <div className="carousel-item" key={index}>
              <div className="scTile">
                <div className="scTileImg">
                  <img src={item.imageUrl} alt="Img" className="scImg" />
                </div>
                <div className="scTileCnt">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control prev" onClick={handlePrevClick}>
          &lt;
        </button>
        <button className="carousel-control next" onClick={handleNextClick}>
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Shopcollection;

