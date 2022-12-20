import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Banner2 from "./components/Banner2";
import Banner4 from "./components/Banner4";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import ShoppingBanner from "./components/ShoppingBanner";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function Home() {

 
  return (
    <div className="App">

          
          <Banner />
          <Banner2 />
          
          <Banner4 />
          

      

    </div>
  );
}

export default Home;
