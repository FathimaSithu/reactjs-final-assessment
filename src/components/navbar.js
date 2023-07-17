import React, { useState, useEffect } from "react";
import "./navbar.css";

function Navbar() {
    // const [isNavbarFixed, setIsNavbarFixed] = useState(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const isFixed = window.scrollY > 0;
    //         setIsNavbarFixed(isFixed);
    //     };

    //     window.addEventListener("scroll", handleScroll);

    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, []);

    // const navbarClassName = isNavbarFixed ? "fixed-navbar" : "";

    return (
        <nav>
        {/* // <nav className={`navbar ${navbarClassName}`}> */}
            <div className="main">
                <nav className="nav">
                    <input type="checkbox" id="navcheck" />
                    <div className="navLinks">
                        <a href="#">MEN</a>
                        <a href="#">WOMEN</a>
                        <a href="#">KIDS</a>
                        <a href="#">SOCKS</a>
                        <a href="#">SALE</a>
                    </div>
                    <div className="navButton">
                        <label htmlFor="navcheck">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    </div>
                    <div className="logo">
                        <img
                            src={process.env.PUBLIC_URL + "images/allbirds-logo.png"}
                            alt="logo"
                            className="allbirdsImg"
                        />
                    </div>
                    <div className="navLinksRight">
                        <div className="navLinks">
                            <a href="#">SUSTAINABILITY</a>
                            <a href="#">RERUN</a>
                            <a href="#">STORES</a>
                            <div className="navIcons">
                                <img
                                    src={process.env.PUBLIC_URL + "images/magnifying-glass.png"}
                                    alt="search"
                                    className="search"
                                />
                                <img
                                    src={process.env.PUBLIC_URL + "images/profile.png"}
                                    alt="profile"
                                    className="profile"
                                />
                                <img
                                    src={process.env.PUBLIC_URL + "images/help.png"}
                                    alt="help"
                                    className="help"
                                />
                                <img
                                    src={process.env.PUBLIC_URL + "images/trolley.png"}
                                    alt="cart"
                                    className="cart"
                                />
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            </nav>
        // </nav>
    );
}

export default Navbar;
