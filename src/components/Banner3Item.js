import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Banner3Item({ id, title, description, category, image, price }) {
    

  return (
    <div className="flex justify-center flex-wrap  space-x-5 ">
        
      <div className="p-4 md:w-full sm:mb-0 mb-6 bg-white rounded-lg">
        
            <div className="relative ">
                <div className="absolute top-0 left-0 ">
                    <div className="bg-orange-500 p-2 rounded">
                        <p className="text-white">Sale</p> 
                    </div>
                </div>
            </div>


         <Link to={{ pathname: `/shop/${id}`, state: 'fakestore' }} >   
            <div className="rounded-lg h-64 overflow-hidden hover:cursor-pointer">
            <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src={image}
                height={200}
                width={200}
                objectFit="contain"
                
            />
            </div>
        </Link>
        

        <p className="text-gray-400 text-sm">{category}</p>
        <Link to={{ pathname: `/shop/${id}`, state: 'fakestore' }} >  
            <h2 className="text-xl font-medium title-font text-gray-900 mt-1">
                {title}
            </h2>
        </Link>

        <Link to={{ pathname: `/shop/${id}`, state: 'fakestore' }} >   
            <a className="text-orange-500 inline-flex items-center mt-3">
            <span className="hover:cursor-pointer">Learn More </span>
            <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
            >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
            </a>
        </Link>
        
      </div>
    </div>
  );
}

export default Banner3Item;
