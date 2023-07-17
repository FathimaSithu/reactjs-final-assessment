import React from "react";
import "./banner1.css";

function BannerPage() {
  return (
    <div className="bannerMain">
      <div className="bannerContent">
      
        <div className="bannerContentText">
          <h1>Chase Views In Breezy Shoes</h1>
          <p>The lightweight Tree Runner is ready for anything summer throws at you.</p>
        </div>
        <div className="bannerContentButton">
        
                    <button className="bannerContentButton1">shop women</button>
                    <button className="bannerContentButton2">shop men</button>
              
        </div>
      
      
      </div>
      <div className="bannerQuiz">
       <p>
<span>discover your perfect pair</span> try our style quiz to find the best pair for you . 
<a href="#"> take the style quiz
        </a>
        </p>
      </div>
    </div>
  );
}

export default BannerPage;
