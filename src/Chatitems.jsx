// import { icon, text } from '@fortawesome/fontawesome-svg-core'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import car from './images/cart.png' 

const Shop = ({cart, setCart}) => {
    const [productdetails, setProductdetails] = useState([
        {
            id: 401,
            product: 'Pani Puri',
            category: 'Chat',
            price: 20,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/previews/052/935/114/non_2x/delicious-pani-puri-clipart-free-png.png"
        },
        {
            id: 402,
            product: 'Aloo Potato Chat',
            category: 'Mixed Dish',
            price: 30,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20250513/ourmid/pngtree-aloo-tikki-topped-with-chutney-and-sev-png-image_16241245.png"
        },
        {
            id: 403,
            product: 'Corn Chat',
            category: 'Mixed Dish',
            price: 50,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240515/ourmid/pngtree-lip-smacking-chana-chaat-bowl-recipe-tasty-vegan-ideas-isolated-with-png-image_12470986.png"
        },
        {
            id: 404,
            product: 'Bhel Puri',
            category: 'Mixed Dish',
            price: 45,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/previews/051/043/736/non_2x/a-plate-of-colorful-indian-bhel-puri-or-pani-puri-with-vegetables-and-lime-on-a-transparent-background-perfect-for-product-banners-and-food-posts-free-png.png"
        },
        {
            id: 405,
            product: 'Vada Pav',
            category: 'Mixed Dish',
            price: 80,
            count : 1,
            image: "https://rosepng.com/wp-content/uploads/2024/09/s11728_vada_pav_isolated_on_white_background_6f846ef3-3cbb-43c1-bf28-00b29b6d40cb_1-photoroom.png"
        },
        {
            id: 406,
            product: 'Masala Puri',
            category: 'Mixed Dish',
            price: 45,
            count : 1,
            image: "https://www.kdmithaiwala.com/wp-content/uploads/2018/07/bhel-puri.png"
        },
        {
            id: 407,
            product: 'Samosa',
            category: 'Mixed Dish',
            price: 15,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240624/ourmid/pngtree-best-food-samosa-png-image_12840486.png"
        },
        {
            id: 408,
            product: 'Dahi Puri',
            category: 'Mixed Dish',
            price: 40,
            count : 1,
            image: "https://delhichaatpuri.com/wp-content/uploads/2024/10/81Na6DgwOL-removebg-preview.png"
        },
        {
            id: 409,
            product: 'Pav Bhaji',
            category: 'Mixed Dish',
            price: 85,
            count : 1,
            image: "https://rosepng.com/wp-content/uploads/2024/12/s11728_pav_bhaji_isolated_on_white_background_-stylize_200_b2e7d41e-b988-4514-8e72-48c4ad8fca6d_2-photoroom.png"
        },
        {
            id: 410,
            product: 'Aloo Bonda',
            category: 'Mixed Dish',
            price: 15,
            count : 1,
            image: "https://mysorecafe.com.au/wp-content/uploads/2022/07/Aloo-Bonda.png"
        },
        {
            id: 411,
            product: 'Masala Pav',
            category: 'Mixed Dish',
            price: 100,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20250301/ourmid/pngtree-spicy-indian-pav-bhaji-with-buttered-bun-and-side-garnish-on-png-image_15686603.png"
        },
        {
            id: 412,
            product: 'Channa Masala',
            category: 'Mixed Dish',
            price: 95,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/previews/039/107/086/non_2x/ai-generated-chana-chat-isolated-on-background-free-png.png"
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