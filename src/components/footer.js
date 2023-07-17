import React from "react";
import "./footer.css";
function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footerInfo">
          <div className="footerHeading">
            <h3>Help</h3>
            <ul className="footerUl">
              <li className="footerList">
                {" "}
                <a className="link" href="#">
                  1-888-963-8944
                </a>
              </li>
              <li className="footerList">
                <a className="link" href="#">
                  1-814-251-9966 (Text)
                </a>
              </li>
              <li className="footerList">
                <a className="link" href="#">
                  help@allbirds.com
                </a>
              </li>
              <li className="footerList">
                <a className="link" href="#">
                  Returns/Exchanges
                </a>
              </li>
              <li className="footerList">
                <a className="link" href="#">
                  FAQ/Contact Us
                </a>
              </li>
              <li className="footerList">
                <a className="link" href="#">
                  Afterpay
                </a>
              </li>
            </ul>
          </div>
          <div className="footerHeading">
            <h3>Shop</h3>
            <ul className="footerUl">
              <li className="footerList">
                {" "}
                <a className="link" href="#">
                  Men's Shoes
                </a>
              </li>
              <li className="footerList">
                {" "}
                <a className="link" href="#">
                  Women's Shoes
                </a>
              </li>
              <li className="footerList">
                {" "}
                <a className="link" href="#">
                  Men's Apparel
                </a>
              </li>
              <li className="footerList">
                {" "}
                <a className="link" href="#">
                  Women's Apparel
                </a>
              </li>
              <li className="footerList">
                <a className="link" href="#">
                  Socks
                </a>
              </li>
              <li className="footerList">
                <a className="link" href="#">
                  Gift Cards
                </a>
              </li>
              <li className="footerList">
                <a className="link" href="#">
                  Refer a Friend
                </a>
              </li>
              <li className="footerList">
                <a className="link" href="#">
                  Download the Allbirds App
                </a>
              </li>
            </ul>
          </div>
          <div className="footerHeading">
            <h3>Company</h3>
            <ul className="footerUl">
              <li className="footerList">
                <a className="link" href="https://stores.allbirds.com">
                  Our Stores
                </a>
              </li>
              <li className="footerList">
                <a className="link" href="/pages/our-story">
                  Our Story
                </a>
              </li>
              <li className="footerList">
                <a className="link" href="/pages/our-materials-wool">
                  Our Materials
                </a>
              </li>
              <li className="footerList">
                <a className="link" href="/pages/sustainable-practices">
                  Sustainability
                </a>
              </li>
              <li className="footerList">
                <a className="link" href="https://ir.allbirds.com/">
                  Investors
                </a>
              </li>
              <li className="footerList">
                <a className="link" href="/pages/shoe-care">
                  Shoe Care
                </a>
              </li>
              <li className="footerList">
                <a className="link" href="/pages/partnerships">
                  Partnerships
                </a>
              </li>
              <li className="footerList">
                <a className="link" href="/pages/product-testing">
                  Product Testing
                </a>
              </li>
              <li className="footerList">
                <a className="link" href="/pages/affiliates">
                  Affiliates
                </a>
              </li>
              <li className="footerList">
              <a
                className="link"
                href="https://www.allbirds.com/pages/bulk-ordering"
              >
                Bulk Orders{" "}
              </a></li>
              <li className="footerList">
                <a className="link" href="/pages/careers">
                  Careers
                </a>
              </li>
              <li className="footerList">
                <a className="link" href="/pages/press">
                  Press
                </a>
              </li>
              <li className="footerList">
                {" "}
                <a className="link" href="#">
                  California Transparency Act
                </a>
              </li>
              <li className="footerList">
                <a className="link" href="/pages/community-offers">
                  Community Offers
                </a>
              </li>
            </ul>
          </div>
         
        </div>
        <div className="footerCnt">
          <div className="footerCntText">
            <h3> Follow the Flock</h3>
            <p>
              Exclusive offers, a heads up on new things, and sightings of
              Allbirds in the wild. Oh, we have cute sheep, too. #weareallbirds
            </p>
            
          <div className="footerIcons">
            <img
              src={process.env.PUBLIC_URL + "images/social-instagram.png"}
              alt="logo"
              className="logoImg"
            />
            <img
              src={process.env.PUBLIC_URL + "images/social-twitter-white.png"}
              alt="logo"
              className="logoImg"
            />
            <img
              src={process.env.PUBLIC_URL + "images/social-facebook.png"}
              alt="logo"
              className="logoImg"
            />
            <img
              src={process.env.PUBLIC_URL + "images/social-pinterest-white.png"}
              alt="logo"
              className="logoImg"
            />
          </div>
          </div>

          <div className="footerIcon">
          <img
              src={process.env.PUBLIC_URL + "https://cdn.allbirds.com/image/upload/f_auto,q_auto/cms/1X4EOQF1JJOjMbo48vDUzB/c249da5825f9ae39f1f53bdb90d65285/icon-b-corp.svg"}
              alt="logo"
              className="iconImg"
            />
          </div>
          <div className="footerFlags">
          <img
              src={process.env.PUBLIC_URL + "images/flag-us.png"}
              alt="USA"
              className="flagImg"
            />
            <img
              src={process.env.PUBLIC_URL + "images/flag-au.png"}
              alt="Australia"
              className="flagImg"
            />
            <img
              src={process.env.PUBLIC_URL + "images/flag-ca.png"}
              alt="Canada"
              className="flagImg"
            />
            <img
              src={process.env.PUBLIC_URL + "images/flag-cn.png"}
              alt="China"
              className="flagImg"
            />
            <img
              src={process.env.PUBLIC_URL + "images/flag-nz.png"}
              alt="Newzealand"
              className="flagImg"
            />
            <img
              src={process.env.PUBLIC_URL + "images/flag-uk.png"}
              alt="UK"
              className="flagImg"
            />
            <img
              src={process.env.PUBLIC_URL + "images/method-draw-image.png"}
              alt="UK"
              className="flagImg"
            />
            <img
              src={process.env.PUBLIC_URL + "images/Japan-Flag.png"}
              alt="japan"
              className="flagImg"
            />
            <img
              src={process.env.PUBLIC_URL + "images/South-Korea-Flag.png"}
              alt="korea"
              className="flagImg"
            />
          </div>
        </div>
        <div className="license">
        © 2022 Allbirds, Inc. All Rights Reserved. 
        <a className="footerLicenseLink" href="https://www.allbirds.com/pages/allbirds-terms-of-use" title="Terms">Terms</a>
        <a href="https://www.allbirds.com/pages/privacy-policy" title="Privacy">Privacy</a>
        & 
        <a href="https://www.allbirds.com/pages/accessibility" title="Accessibility">Accessibility</a>
        <br></br>
        <br/>
        <a id="ot-sdk-btn" className="ot-sdk-show-settings">Do Not Sell My Personal Information</a>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
