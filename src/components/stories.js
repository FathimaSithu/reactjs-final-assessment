import React, {useState} from "react";
import './stories.css';
function Stories(){
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
      imageUrl: process.env.PUBLIC_URL + "images/stories 1.png",
      title: "Introducing M0.0NSHOT",
      description:
        "Learn more about the world’s first net zero carbon shoe, and how its landmark 0.0 kg CO₂e carbon footprint was achieved without relying on a single carbon offset.",
    },
    {
      imageUrl: process.env.PUBLIC_URL + "images/stories 2.png",
      title: "Allbirds ReRun™",
      description:
        "Introducing our resale marketplace where you can shop slightly imperfect and gently used products, extending their life and lowering our impact on the planet.",
    },
    {
      imageUrl: process.env.PUBLIC_URL + "images/stories 3.png",
      title: "2022 Flight Status Report",
      description:
        "Our version of a sustainability report is here, highlighting our progress across a variety of areas in 2022.",
    },
    {
      imageUrl: process.env.PUBLIC_URL + "images/stories 4.png",
      title: "Allbirds x Marshawn Lynch",
      description:
        "In episode two of “Schooled” Marshawn and his classmates learn that if we just listen to Mother Nature, she’ll give us everything we need.",
    },
    {
      imageUrl: process.env.PUBLIC_URL + "images/stories 5.png",
      title: "Giving Mother Nature a Seat at the Table",
      description:
        "We are prioritizing the planet, not just profits. Introducing the next generation business. ",
    },
    {
      imageUrl: process.env.PUBLIC_URL + "images/stories 6.png",
      title: "We're A Certified B Corp",
      description:
        "From the very beginning, the environment has been a stakeholder here. ",
    },
    
  ];
    return(

<div className="storiesMain">
<div className="storiesTitle">
        <h3>Stories</h3>
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
              <div className="storiesTile">
                <div className="storiesTileImg">
                  <img src={item.imageUrl} alt="Img" className="storiesImg" />
                </div>
                <div className="storiesTileCnt">
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
export default Stories;