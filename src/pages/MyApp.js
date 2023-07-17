import React from "react";
import Header from "../components/header";
import Navbar from "../components/navbar";
import BannerPage from "../components/banner1";
import Favourites from "../components/favourites";
import Summer from "../components/summer";
import Newarrival from "../components/newarrivals";
import Flat from "../components/flats";
import Shopcollection from "../components/shopcollection";
import Updates from "../components/updates";
import Stories from "../components/stories";
import Signup from "../components/signup";
import Footer from "../components/footer";
function MyApp(){
    return(
<div className="main">
<Header/>
<Navbar/>
<BannerPage/>
<Favourites/>
<Summer/>
<Newarrival/>
<Flat/>
<Shopcollection/>
<Updates/>
<Stories/>
<Signup/>
<Footer/>
</div>
    );
}
export default MyApp;