// import { icon, text } from '@fortawesome/fontawesome-svg-core'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import car from './images/cart.png' 

const Shop = ({cart, setCart}) => {
    const [productdetails, setProductdetails] = useState([
        {
            id: 201,
            product: 'Egg Noodles',
            category: 'Lunch',
            price: 150,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/thumbnails/051/125/508/small_2x/delicious-fried-noodles-isolated-on-transparent-background-png.png"
        },
        {
            id: 202,
            product: 'Ramen Noodles',
            category: 'Mixed Dish',
            price: 250,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/previews/054/655/884/non_2x/delicious-bowl-of-japanese-ramen-noodles-free-png.png"
        },
        {
            id: 203,
            product: 'Hakka Noodles',
            category: 'Mixed Dish',
            price: 250,
            count : 1,
            image: "https://spicemantra.kz/wp-content/uploads/2024/10/veg-noodle.png"
        },
        {
            id: 204,
            product: 'Maggi',
            category: 'Mixed Dish',
            price: 250,
            count : 1,
            image: "https://rosepng.com/wp-content/uploads/2024/08/s11728_maggi_isolated_on_white_background_944358f0-3f5b-4c3f-8133-3488ec6f4110_2-photoroom.png   "
        },
        {
            id: 205,
            product: 'Chicken Noodles',
            category: 'Mixed Dish',
            price: 250,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20250321/ourmid/pngtree-delicious-asian-noodles-with-teriyaki-chicken-and-vegetables-in-black-bowl-png-image_15818154.png"
        },
        {
            id: 206,
            product: 'Prawn Noodles',
            category: 'Mixed Dish',
            price: 280,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20241219/ourmid/pngtree-3d-hot-shrimp-noodles-in-black-bowl-on-transparent-background-png-image_14800560.png"
        },
        {
            id: 207,
            product: 'Schezwan Noodles',
            category: 'Mixed Dish',
            price: 250,
            count : 1,
            image: "https://images.deliveryhero.io/image/talabat/MenuItems/23C54AAEAFB3EFB3A06E2027614B31DE"
        },
        {
            id: 208,
            product: 'Beef Noodles',
            category: 'Mixed Dish',
            price: 280,
            count : 1,
            image: "https://www.redefinemeat.com/wp-content/uploads/2024/07/COURSE_ADJUST4-3.png"
        },
        {
            id: 209,
            product: 'Paneer Crispy Noodles',
            category: 'Mixed Dish',
            price: 230,
            count : 1,
            image: "https://flatskitchen.com/upload_images/1734161110paneernoodles.png"
        },
        {
            id: 210,
            product: 'Jjajangmyeon',
            category: 'Mixed Dish',
            price: 200,
            count : 1,
            image: "https://omonihouse.uk/assets/images/07.png"
        },
        {
            id: 211,
            product: 'Manchurian noodles',
            category: 'Mixed Dish',
            price: 350,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240104/ourmid/pngtree-spicy-noodles-with-manchurian-png-image_11403000.png"
        },
        {
            id: 212,
            product: 'Veg Singapuri Noodles',
            category: 'Mixed Dish',
            price: 350,
            count : 1,
            image: "https://spicemantra.kz/wp-content/uploads/2024/10/vsn-700x550.png"
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