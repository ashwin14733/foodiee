// import { icon, text } from '@fortawesome/fontawesome-svg-core'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import car from './images/cart.png' 

const Shop = ({cart, setCart}) => {
    const [productdetails, setProductdetails] = useState([
        {
            id: 301,
            product: 'Normal Paratha',
            category: 'Lunch & Dinner',
            price: 50,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/thumbnails/049/178/253/small_2x/aloo-paratha-on-transparent-background-png.png"
        },
        {
            id: 302,
            product: 'Paneer Paratha',
            category: 'Mixed Dish',
            price: 150,
            count : 1,
            image: "https://vadilalglobal.com/cdn/shop/files/MalaiPaneerParatha.png?v=1710916895&width=1946"
        },
        {
            id: 303,
            product: 'Gobi Paratha',
            category: 'Mixed Dish',
            price: 150,
            count : 1,
            image: "https://64.media.tumblr.com/07446f95e6f96f9aaa94be4db82217af/534253c094293b40-32/s1280x1920/c91774a5aa22dfda1c26840e9cbb54902a13a44e.pnj"
        },
        {
            id: 304,
            product: 'Aloo Paratha',
            category: 'Mixed Dish',
            price: 180,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20250301/ourmid/pngtree-a-plate-of-stuffed-parathas-with-yogurt-and-pickles-on-transparent-png-image_15682989.png"
        },
        {
            id: 305,
            product: 'Palak Paratha',
            category: 'Mixed Dish',
            price: 250,
            count : 1,
            image: "https://vadilalglobal.com/cdn/shop/files/SpinachParatha.png?v=1710917634&width=1445"
        },
        {
            id: 306,
            product: 'Methi Paratha',
            category: 'Mixed Dish',
            price: 280,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/previews/054/721/774/non_2x/gujarati-specialty-soft-methi-thepla-free-png.png"
        },
        {
            id: 307,
            product: 'Beetroot Paratha',
            category: 'Mixed Dish',
            price: 250,
            count : 1,
            image: "https://www.ethicaldelights.in/cdn/shop/files/8_791d83e2-a727-463a-bde7-5f87485d1594.png?v=1749205106"
        },
        {
            id: 308,
            product: 'Mix Veg Paratha',
            category: 'Mixed Dish',
            price: 180,
            count : 1,
            image: "https://crown-foods.com/wp-content/uploads/2023/05/mix-vegetable-pharata_11zon-1024x1024-1.png"
        },
        {
            id: 309,
            product: 'Egg Paratha',
            category: 'Mixed Dish',
            price: 30,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/previews/054/312/178/non_2x/a-golden-brown-paratha-served-alongside-a-sunny-side-up-egg-garnished-with-a-sprinkle-of-black-pepper-free-png.png"
        },
        {
            id: 310,
            product: 'Pizza Paratha',
            category: 'Mixed Dish',
            price: 100,
            count : 1,
            image: "https://framerusercontent.com/images/NNZq2cULL6eviZAp6PhoEhRXl94.png"
        },
        {
            id: 311,
            product: 'Poli Paratha ',
            category: 'Mixed Dish',
            price: 80,
            count : 1,
            image: "https://pakistanatlas.com/wp-content/uploads/2020/09/Pakistani-Food_0128_129-Basen-wali-roti.png"
        },
        {
            id: 312,
            product: 'Butter Naan Paratha',
            category: 'Mixed Dish',
            price: 100,
            count : 1,
            image: "https://img.pikbest.com/png-images/20241230/delicious-butter-naan-bread_11320792.png!bw700"
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