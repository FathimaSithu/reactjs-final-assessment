
import React, { useState, useEffect } from "react";
import "./newarrivals.css";
import axios from "axios";

function Newarrival() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? currentIndex : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === products.length - 1 ? currentIndex : prevIndex + 1));
  };

  return (
    <div className="newarrivalMain">
      <div className="newarrivalTitle">
        <h3>new arrival</h3>
      </div>
      <div className="carousel">
        <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {products.map((product, index) => (
              <div className="carousel-item" key={index}>
              <div className="productTile">
                <div className="productImg">
                  <img src={product.image} alt={product.title}  className="productTileImg"/>
                </div>
                <div className="productName">{product.title}</div>
                {/* <div className="productDesc">{product.description}</div> */}
                <div className="productPrice">${product.price}</div>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control prev carouselBtnLt " onClick={handlePrevClick}>&lt;</button>
        <button className="carousel-control next carouselBtnRt" onClick={handleNextClick}>&gt;</button>
      </div>
    </div>
  );
}

export default Newarrival;

