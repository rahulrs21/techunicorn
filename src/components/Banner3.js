import React, { useEffect, useState } from "react";
import Banner3Item from "./Banner3Item";

function Banner3() {
  const [limit, setLimit] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch(`https://fakestoreapi.com/products?limit=5`)
        .then((res) => res.json())
        .then((json) => {
          console.log(json);

          setLimit(json);
        })
        .catch((e) => {
          console.log("error", e);
        });
    };
    fetchData();
  }, limit);

  return (
    <section className="text-gray-600 bg-gray-100 body-font">
        <div className="container px-5 py-16 mx-auto max-w-7xl">
            <div className="flex flex-col">
                <div className="flex flex-wrap sm:flex-row flex-col py-6 justify-center text-center">
                    <h1 className=" text-gray-900 font-medium title-font text-2xl mb-2 pb-5 sm:mb-0">
                        Sale of the Day!
                    </h1>
                </div>
            </div>



            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 mx-3 my-5">
            
            {limit.map(({ id, title, description, category, image, price }) => (
            <Banner3Item
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
    </section>
  );
}

export default Banner3;