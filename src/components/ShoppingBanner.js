import React, { useEffect, useState } from "react";
import Products from "./Products";
import { FaSearch, FaHeart, FaShoppingCart, FaUserAlt } from "react-icons/fa";

function ShoppingBanner(props) {
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

  const [search, setSearch] = useState("");
  const [click, setClick] = useState("");

  const [sorting, setSorting] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch(`https://fakestoreapi.com/products`)
                .then(res=>res.json())
                .then(json=>{
                  console.log(json)
                  const result = json.sort((a,b) => a.name.localeCompare(b.name))
                  setSorting(result)
                })
                .catch(e=> {
                  console.log("error", e);
                })
    }
    fetchData();

  }, sorting);

  const sortName = () => {
    console.log("Hi there")
  }

  //
  // const sorting = () => {
  //   dispatch
  // }

  return (
    <div className="grid grid-cols-3 gap-4 items-start mt-5">
      
      <div className="grid col-span-1 mx-4 justify-center content-center">
        <div className="relative top-5">
          <div className="bg-white p-2 border border-gray-500  ">
            <div className="flex justify-between mr-4 ">
              <input
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                id="filterInput"
                className="flex text-lg outline-none w-full bg-transparent"
                placeholder="Search what you need"
              />
              <FaSearch
                size={20}
                className="cursor-pointer hover:text-gray-400"
              />
            </div>
          </div>
        </div>

        <div className="relative mt-10 space-y-5 hidden md:hidden lg:block">
          <h2 className="text-xl md:text-3xl font-bold">Product Categories</h2>

          <form action="">
            <label htmlFor="sort"></label>
            <select name="sort" id="sort">
              <option value="#" >
                Select the price range
              </option>
              <option
                value="lowest"
                onClick={(e) => setSearch(e.target.value)}
              >
                Price Lowest
              </option>{" "}
              <br />
              <option
                value="highest"
                onClick={sortName}
              >
                Price Highest
              </option>{" "}
              <br />
            </select>
          </form>
        </div>


        <div className="relative top-24">
          <p>Categories</p>
        <div class="flex items-center mb-4 mt-5">
          <input
          checked
            id="default-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="default-checkbox"
            class="ml-2 text-sm font-medium text-gray-900"
          >
            all category
          </label>
        </div>

        <div class="flex items-center mb-4 mt-5">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="default-checkbox"
            class="ml-2 text-sm font-medium text-gray-900"
          >
            men's clothing
          </label>
        </div>
        <div class="flex items-center">
          <input
            id="checked-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="checked-checkbox"
            class="ml-2 text-sm font-medium text-gray-900"
          >
            jewellery
          </label>
        </div>

        <div class="flex items-center mt-4">
          <input
            id="checked-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="checked-checkbox"
            class="ml-2 text-sm font-medium text-gray-900"
          >
            Electronics
          </label>
        </div>
      </div>


        
        
    </div>

      <div className="max-w-7xl col-span-2  grid grid-rows-1 md:grid-cols-2 lg:grid-cols-3  mx-auto bg-gray-100">
        {fake
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.title.toLowerCase().includes(search);
          })
          .map(({ id, title, description, category, image, price }) => (
            <Products
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          ))}
      </div>
    </div>
  );
}

export default ShoppingBanner;
