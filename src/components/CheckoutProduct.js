import React from 'react'

function CheckoutProduct({id, title, price, description, category, image}) {
  return (
    <div className='max-w-7xl place-items-center'>
        <div className="grid grid-cols-3 items-center justify-center p-5 max-w-screen-2xl mx-auto ">
            <img src={image} alt="" height={200} width={200} objectFit="contain" />
            <div className='p-5'>
                <h1 className='text-xl font-bold text-left my-3'>{title}</h1>
                <p>{description}</p>
                <p>$ {price}</p>

            </div>
            <div className='flex flex-col my-5' >
                <button
                  className="add_to_cart_button  mt-5"
                >
                  Buy Now
                </button>

                <button
                  className="button_added_to_cart mt-5"
                >
                  Add to wishlist
                </button>
            </div>
        </div>
    </div>
  )
}

export default CheckoutProduct
