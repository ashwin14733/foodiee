// import { icon, text } from '@fortawesome/fontawesome-svg-core'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import car from './images/cart.png' 

const Shop = ({cart, setCart}) => {
    const [productdetails, setProductdetails] = useState([
        {
            id: 101,
            product: 'Chicken Pizza',
            category: 'Mixed Dish',
            price: 150,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240729/ourmid/pngtree-irresistible-chicken-pizza-closeup-with-juicy-pieces-png-image_13274343.png"
        },
        {
            id: 102,
            product: 'Veg Pizza',
            category: 'Mixed Dish',
            price: 250,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/previews/046/861/103/non_2x/delicious-veggie-pizza-isolated-on-a-transparent-background-free-png.png"
        },
        {
            id: 103,
            product: 'Chicken Golden Delight',
            category: 'Mixed Dish',
            price: 250,
            count : 1,
            image: "https://assets.touch2success.com/static/ab3189f4548c2800ef1257418ce49b07/img/1743135270phpJVc5rY.png"
        },
        {
            id: 104,
            product: 'Non Veg Supreme',
            category: 'Mixed Dish',
            price: 250,
            count : 1,
            image: "https://seemattyrestaurant.com/wp-content/uploads/2024/03/fish_biriyani.png"
        },
        {
            id: 105,
            product: 'Peppy Paneer',
            category: 'Mixed Dish',
            price: 250,
            count : 1,
            image: "https://b.zmtcdn.com/data/dish_photos/c70/8ed3b93a011efce578898b88d8c7dc70.png"
        },
        {
            id: 106,
            product: 'Chicken Dominator',
            category: 'Mixed Dish',
            price: 280,
            count : 1,
            image: "https://b.zmtcdn.com/data/dish_photos/455/03c68ceb2c7c47b3dfaccc5aa3817455.png"
        },
        {
            id: 107,
            product: 'Pepper Barbecue & Onion',
            category: 'Mixed Dish',
            price: 250,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/thumbnails/058/026/483/small_2x/tasty-chicken-pizza-with-onions-and-cheese-png.png"
        },
        {
            id: 108,
            product: 'Chicken Pepperoni',
            category: 'Mixed Dish',
            price: 280,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/previews/059/589/756/non_2x/pizza-with-chicken-pepperoni-and-basil-food-photography-cut-out-transparent-png.png"
        },
        {
            id: 109,
            product: 'CHICKEN SAUSAGE',
            category: 'Mixed Dish',
            price: 230,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240729/ourmid/pngtree-closeup-of-a-chicken-pizza-with-mouthwatering-toppings-png-image_13274350.png"
        },
        {
            id: 110,
            product: 'Non Veg Supreme',
            category: 'Mixed Dish',
            price: 200,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240913/ourmid/pngtree-pizza-chicken-food-png-vector-material-png-image_12896221.png"
        },
        {
            id: 111,
            product: 'Indi Chicken Tikka',
            category: 'Mixed Dish',
            price: 350,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/previews/046/791/335/non_2x/bbq-chicken-pizza-free-png.png"
        },
        {
            id: 112,
            product: 'Keema Do Pyaza',
            category: 'Mixed Dish',
            price: 350,
            count : 1,
            image: "https://shalepizza.netlify.app/img/Pizza%20Menu%20Images/12.png"
        },
    ])

   const addtocart = (product)=>{
    setCart(cart =>{
        let cartitems = cart.find((item)=>item.id === product.id)
        return cartitems ? cart.map((item)=> item.id === product.id ? {...item, count : item.count +1} : item) : [...cart, {...product, count : 1}]
    })
   }

    return (
        <div>

            <div className="container mt-5 mb-5 pt-5 pb-5">
                <div className='row'>
                    {
                        productdetails.map((element, index) => 
                            <div key={element.id} className='col-lg-4 col-md-6 col-sm-12 mt-4 d-flex'>
                                <div className="card h-100 w-100 shadow-sm">
                                    <div className="card-body d-flex flex-column text-center">
                                        <div className="image-container mb-3">
                                            <img 
                                                src={element.image} 
                                                className="imagepng"
                                                alt={element.product}
                                                style={{
                                                    width: '180px',
                                                    height: 'auto',
                                                    objectFit: 'cover',
                                                    borderRadius: '8px'
                                                }}
                                            />
                                        </div>
                                        <h5 className="card-title mb-2">{element.product}</h5>
                                        <p className="card-text mb-2 text-muted"> Category : {element.category}</p>
                                        <p className="card-text mb-3 fs-5 fw-bold text-success"> Price : ₹{element.price}</p>
                                        {/* <button className="btn btn-warning mt-auto" onClick={() => setCart([...cart, element] , alert("Item added to Cart Successfully"))}>Add To Cart </button> */}

                                        <button className='btn btn-warning mt-auto' onClick={()=>{addtocart(element); Swal.fire({
                                            title : "Items Added to Cart Successfully",
                                            icon : "success",
                                            draggable : "true",
                                            color : "white",
                                            background : 'rgba(255, 255, 255, 0.1)',
                                            backdrop: 'rgba(0, 0, 0, 1)',
                                            text : "Enjoy Your Meal!!!!"

                                        })}}>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>



        <Link to= '/cart'><img src={car} alt="carticon" className='carticon' /></Link>
            
        </div>
    )
}

export default Shop