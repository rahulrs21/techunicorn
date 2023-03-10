import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "./basketSlice";
import Banner from "./components/Banner";
import Banner2 from "./components/Banner2";
import Banner4 from "./components/Banner4";
import CheckoutProduct from "./components/CheckoutProduct";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import ShoppingBanner from "./components/ShoppingBanner";


function Checkout() {

    const items  = useSelector(selectItems);

    const total = useSelector(selectTotal);
 
  return (
    <div className="">
        <div className="flex justify-around items-center mt-2">
            <h1 className="text-md md:text-3xl font-bold text-center my-5 ">{items.length == 0 ? 'Your Basket is Empty' : "Shopping Basket"}</h1>
            <p>Total Price : <b className="text-lg">{items.length == 0 ? '0' : total.toFixed(2)}</b></p>
        </div>
        <div className="flex flex-col justify-center items-center px-12 my-12 space-y-20">


            {items.map((item, i) => (
                <CheckoutProduct 
                    key={i}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    description = {item.description}
                    category = {item.category}
                    image={item.image}
                />
            ))}
        </div>
    </div>
  );
}

export default Checkout;
