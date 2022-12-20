import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from "./Home";
import Shop from "./Shop";
import Footer from "./components/Footer";
import SingleProduct from "./SingleProduct";
import Checkout from "./Checkout";


function App({}) {

  

  return (
    <div className="App">
      <Router>
          <Navbar />
          <Navbar2 />


          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/shop/:id" element={<SingleProduct />} />
              <Route path="/checkout" element={<Checkout />} />

          </Routes>

          <Footer />

      </Router>


      

    </div>
  );
}

export default App;
