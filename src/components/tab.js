import React, { useState } from "react";
import "./tab.css";

function Tabs() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tabId) => {
    console.log("Selected tab:", tabId);

    setActiveTab(tabId);
  };

  return (
    <div>
      <div className="tabs">
        <div
          className={`tab ${activeTab === "tab1" ? "active" : ""}`}
          id="tab1"
          onClick={() => handleTabClick("tab1")}
        >
          <label htmlFor="tab-content1">for everyday</label>
        </div>
        <div
          className={`tab ${activeTab === "tab2" ? "active" : ""}`}
          id="tab2"
          onClick={() => handleTabClick("tab2")}
        >
          <label htmlFor="tab-content2">for activity</label>
        </div>
        <div
          className={`tab ${activeTab === "tab3" ? "active" : ""}`}
          id="tab3"
          onClick={() => handleTabClick("tab3")}
        >
          <label htmlFor="tab-content3">for travel </label>
        </div>
      </div>

      <div className="tab-content">
        <div
          className={`tab-pane ${activeTab === "tab1" ? "active" : ""}`}
          id="tab-content1"
        >
          <div className="favTabContent">
            <div className="favTabTile">
              <div className="favTabTileImg">
                <img
                  src={process.env.PUBLIC_URL + "images/sneaker 1.png"}
                  alt="search"
                  className="tileImg"
                />
                <div className="buttonContainer">
                  <button className="TabTileImgBtn">shop men</button>
                  <button className="TabTileImgBtn">shop women</button>
                </div>
              </div>
              <div className="favTabTileTitle">
                <h4>tree runner</h4>
              </div>
              <div className="favTabTileDescr">
                <img
                  src={process.env.PUBLIC_URL + "images/Tree.png"}
                  alt="search"
                  className="tileTree"
                />
                <p>breezy , everyday sneaker</p>
              </div>
            </div>
            <div className="favTabTile">
              <div className="favTabTileImg">
                <img
                  src={process.env.PUBLIC_URL + "images/sneaker-2.png"}
                  alt="search"
                  className="tileImg"
                />
                <div className="buttonContainer">
                  <button className="TabTileImgBtn">shop now</button>
             
             
                </div>
              </div>
              <div className="favTabTileTitle">
                <h4>tree breezer point</h4>
              </div>
              <div className="favTabTileDescr">
                <img
                  src={process.env.PUBLIC_URL + "images/Tree.png"}
                  alt="search"
                  className="tileTree"
                />
                <p>comfy , all-day flat</p>
              </div>
            </div>
            <div className="favTabTile">
              <div className="favTabTileImg">
                <img
                  src={process.env.PUBLIC_URL + "images/lounger.png"}
                  alt="search"
                  className="tileImg"
                />
                <div className="buttonContainer">
                  <button className="TabTileImgBtn">shop men</button>
                  <button className="TabTileImgBtn">shop women</button>
                </div>
              </div>
              <div className="favTabTileTitle">
                <h4>Tree Lounger</h4>
              </div>
              <div className="favTabTileDescr">
                <img
                  src={process.env.PUBLIC_URL + "images/Tree.png"}
                  alt="search"
                  className="tileTree"
                />
                <p>Ultralight, Comfy Slip-on</p>
              </div>
            </div>
          </div>
          </div>
          <div
            className={`tab-pane ${activeTab === "tab2" ? "active" : ""}`}
            id="tab-content2"
          >
         <div className="favTabContent">
            <div className="favTabTile">
              <div className="favTabTileImg">
                <img
                  src={process.env.PUBLIC_URL + "images/dasher.png"}
                  alt="search"
                  className="tileImg"
                />
                <div className="buttonContainer">
                  <button className="TabTileImgBtn">shop men</button>
                  <button className="TabTileImgBtn">shop women</button>
                </div>
              </div>
              <div className="favTabTileTitle">
                <h4>tree dasher 2</h4>
              </div>
              <div className="favTabTileDescr">
                <img
                  src={process.env.PUBLIC_URL + "images/Tree.png"}
                  alt="search"
                  className="tileTree"
                />
                <p>comfy , breezy , everyday runs</p>
              </div>
            </div>
            <div className="favTabTile">
              <div className="favTabTileImg">
                <img
                  src={process.env.PUBLIC_URL + "images/flyer.png"}
                  alt="search"
                  className="tileImg"
                />
                <div className="buttonContainer">
                  <button className="TabTileImgBtn">shop men</button>
                  <button className="TabTileImgBtn">shop women</button>
                </div>
              </div>
              <div className="favTabTileTitle">
                <h4>tree flyer</h4>
              </div>
              <div className="favTabTileDescr">
                <img
                  src={process.env.PUBLIC_URL + "images/Tree.png"}
                  alt="search"
                  className="tileTree"
                />
                <p>light , bouncy , long distance runs</p>
              </div>
            </div>
            <div className="favTabTile">
              <div className="favTabTileImg">
                <img
                  src={process.env.PUBLIC_URL + "images/runner.png"}
                  alt="search"
                  className="tileImg"
                />
                <div className="buttonContainer">
                  <button className="TabTileImgBtn">shop men</button>
                  <button className="TabTileImgBtn">shop women</button>
                </div>
              </div>
              <div className="favTabTileTitle">
                <h4>trail runner SWT</h4>
              </div>
              <div className="favTabTileDescr">
                <img
                  src={process.env.PUBLIC_URL + "images/Tree.png"}
                  alt="search"
                  className="tileTree"
                />
                <p>durable , grippy , off road terrain</p>
              </div>
            </div>
          </div>
          </div>
          <div
            className={`tab-pane ${activeTab === "tab3" ? "active" : ""}`}
            id="tab-content3"
          >
         <div className="favTabContent">
            <div className="favTabTile">
              <div className="favTabTileImg">
                <img
                  src={process.env.PUBLIC_URL + "images/skipper.png"}
                  alt="search"
                  className="tileImg"
                />
                <div className="buttonContainer">
                  <button className="TabTileImgBtn">shop men</button>
                  <button className="TabTileImgBtn">shop women</button>
                </div>
              </div>
              <div className="favTabTileTitle">
                <h4>tree skipper</h4>
              </div>
              <div className="favTabTileDescr">
                <img
                  src={process.env.PUBLIC_URL + "images/Tree.png"}
                  alt="search"
                  className="tileTree"
                />
                <p>lightweight , classic style</p>
              </div>
            </div>
            <div className="favTabTile">
              <div className="favTabTileImg">
                <img
                  src={process.env.PUBLIC_URL + "images/teeshirt.png"}
                  alt="search"
                  className="tileImg"
                />
                <div className="buttonContainer">
                  <button className="TabTileImgBtn">shop men</button>
                  <button className="TabTileImgBtn">shop women</button>
                </div>
              </div>
              <div className="favTabTileTitle">
                <h4>all good cotton tee</h4>
              </div>
              <div className="favTabTileDescr">
                <img
                  src={process.env.PUBLIC_URL + "images/Tree.png"}
                  alt="search"
                  className="tileTree"
                />
                <p>everyday organic cotton t-shirt</p>
              </div>
            </div>
            <div className="favTabTile">
              <div className="favTabTileImg">
                <img
                  src={process.env.PUBLIC_URL + "images/piper.png"}
                  alt="search"
                  className="tileImg"
                />
                <div className="buttonContainer">
                  <button className="TabTileImgBtn">shop men</button>
                  <button className="TabTileImgBtn">shop women</button>
                </div>
              </div>
              <div className="favTabTileTitle">
                <h4>tree piper</h4>
              </div>
              <div className="favTabTileDescr">
                <img
                  src={process.env.PUBLIC_URL + "images/Tree.png"}
                  alt="search"
                  className="tileTree"
                />
                <p>breezy , casual classic</p>
              </div>
            </div>
          </div>
          </div>
        
      </div>
    </div>
  );
}
export default Tabs;
