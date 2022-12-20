import React, { useEffect, useState } from 'react'
import { FaStar } from  'react-icons/fa'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { addToBasket } from '../basketSlice';
function Products({ id, title, description, category, image, price }) {

  const [fake, setFake] = useState([]);
  // console.log(fake);

  // Once the webiste is loaded, my data should display for me in landing page.
  useEffect(() => {
    fakestore(); // whenever I loaded this website , I want to show this data.
  }, []);

  const fakestore = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    // console.log(response);
    const jsonData = await response.json(); // convert JSONData into object
    // console.log(jsonData);

    setFake(jsonData);
  };
  fakestore();

  const dispatch = useDispatch();
  const [cart, setCart] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCart(false)
    }, 2000)
  }, [cart])


  const addItemToBasket = () => {
    const product = {
      id, 
      title,
      price,
      description,
      category,
      image
      
    };

    // sending the product  as an action to the REDUX STORE 
    dispatch(addToBasket(product))     // pushing product to addToBasket which is defined in 'basketSlice redux store'

    console.log("Product TITLE = ",title )

    setCart(true)
  }

  return (
    
    <div className=''>
      <div className="relative flex flex-col m-5 bg-white z-30 p-5 hover:cursor-pointer rounded">
        <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>
        <Link to={{ pathname: `/shop/${id}`, state: 'fakestore' }} ><img src={image} alt="" height={200} width={200} objectFit="contain" /></Link>
        <Link to={{ pathname: `/shop/${id}`, state: 'fakestore' }} ><h4>{title}</h4></Link>

        <div className="flex">
            <FaStar className="h-5 text-yellow-500" />
            <FaStar className="h-5 text-yellow-500" />
            <FaStar className="h-5 text-yellow-500" />
            <FaStar className="h-5 text-yellow-500" />
            <FaStar className="h-5 text-yellow-500" />
        </div>

        <Link to={{ pathname: `/shop/${id}`, state: 'fakestore' }} > <p className="text-xs my-2 line-clamp-2">{description.slice(0, 70)} ...</p></Link>
        <Link to={{ pathname: `/shop/${id}`, state: 'fakestore' }} ><p className="text-xs my-2 line-clamp-2">$ {price}</p></Link>

        <button onClick={addItemToBasket} className={cart ? `mt-auto button_added_to_cart` : `mt-auto add_to_cart_button`}>{cart ? `Added to cart successfully` : `Add to Cart`}</button>
        {/* <button  className='mt-4 add_to_cart_button'>Add to Cart</button> */}

      </div>
    </div>
  )
}

export default Products
