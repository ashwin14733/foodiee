// import { icon, text } from '@fortawesome/fontawesome-svg-core'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import car from './images/cart.png' 


const Shop = ({cart, setCart}) => {
    const [productdetails, setProductdetails] = useState([
        {
            id: 301,
            product: 'Ice cream Shakes',
            category: 'Lunch',
            price: 150,
            count : 1,
            image: "https://rosepng.com/wp-content/uploads/2024/02/s11728_milk_shake_isolated_on_white_background_-stylize_200__1197b7a3-1e83-4109-984f-1534e960aa52_2-photoroom-png-photoroom_11zon.png"
        },
        {
            id: 302,
            product: 'Strawberry Milkshake',
            category: 'Mixed Dish',
            price: 250,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240628/ourmid/pngtree-cherry-strawberry-vanilla-smoothie-with-a-solid-png-image_12734226.png"
        },
        {
            id: 303,
            product: 'Salted Caramel-Pretzel',
            category: 'Mixed Dish',
            price: 250,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240719/ourmid/pngtree-peanut-butter-jelly-milkshake-png-image_13149801.png"
        },
        {
            id: 304,
            product: 'Peanut Butter & Jelly',
            category: 'Mixed Dish',
            price: 250,
            count : 1,
            image: "https://images.ctfassets.net/o19mhvm9a2cm/7cc9UG5Am7ZyI8cfBZRQ5C/dc6e46dae880e198e83571011c6aa829/Website_2023_April_LTO_Dessert_OCS.png"
        },
        {
            id: 305,
            product: "Copycat McDonald's Shamrock",
            category: 'Mixed Dish',
            price: 250,
            count : 1,
            image: "https://corporate.mcdonalds.com/content/dam/sites/corp/nfl/newsroom/menu-items-2023/NR_201909_3780_MediumShamrockShake_Glass_A1_2000x2000.png.coredownload.png"
        },
        {
            id: 306,
            product: "S'mores Milkshake",
            category: 'Mixed Dish',
            price: 280,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/previews/040/455/888/non_2x/ai-generated-s-mores-cocktail-topped-with-whipped-cream-crumbled-graham-crackers-free-png.png"
        },
        {
            id: 307,
            product: 'Oreo Cheesecake ',
            category: 'Mixed Dish',
            price: 250,
            count : 1,
            image: "https://wallpapers.com/images/hd/oreo-milkshake-png-rid6-s88eayfdfeki9mng.jpg"
        },
        {
            id: 308,
            product: 'Pebbles Milkshake',
            category: 'Mixed Dish',
            price: 280,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20250602/ourmid/pngtree-cereal-topped-milkshake-png-image_16452539.png"
        },
        {
            id: 309,
            product: 'Red Wine Milkshakes',
            category: 'Mixed Dish',
            price: 230,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240719/ourmid/pngtree-red-wine-milkshakes-png-image_13150017.png"
        },
        {
            id: 310,
            product: 'Strawberry Shortcake ',
            category: 'Mixed Dish',
            price: 200,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240703/ourmid/pngtree-strawberry-milkshake-splash-png-image_12973258.png"
        },
        {
            id: 311,
            product: 'Creamsicle Milkshake Shots',
            category: 'Mixed Dish',
            price: 350,
            count : 1,
            image: "https://img.pikbest.com/origin/10/49/86/712pIkbEsTyM6.png!sw800"
        },
        {
            id: 312,
            product: 'Banana Cream Pie Milkshake',
            category: 'Mixed Dish',
            price: 350,
            count : 1,
            image: "https://wallpapers.com/images/hd/banana-milkshake-png-3-rw4h89sfgp1hnrzu.jpg"
        },
        {
            id: 313,
            product: "Cap'n Crunch Milkshakes",
            category: 'Mixed Dish',
            price: 350,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240719/ourmid/pngtree-crunch-milkshakes-png-image_13150754.png"
        },
        {
            id: 314,
            product: 'Red Velvet Cheesecake Milkshake',
            category: 'Mixed Dish',
            price: 350,
            count : 1,
            image: "https://regrub.ca/beltline/wp-content/uploads/2023/09/Regrub_37.png"
        },
        {
            id: 315,
            product: 'Cookie Lovers Shakes',
            category: 'Mixed Dish',
            price: 350,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240902/ourmid/pngtree-chocolate-chip-cookie-milkshake-clipart-illustration-perfect-for-dessert-food-designs-png-image_13722933.png"
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