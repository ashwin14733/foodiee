// import { icon, text } from '@fortawesome/fontawesome-svg-core'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import car from './images/cart.png' 

const Shop = ({cart, setCart}) => {
    const [productdetails, setProductdetails] = useState([
        {
            id: 1,
            product: 'Chicken Briyani',
            category: 'Lunch',
            price: 150,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/previews/048/067/082/non_2x/biryani-dish-malabar-biryani-with-thalassery-chicken-isolated-illustration-on-a-transparent-background-png.png"
        },
        {
            id: 2,
            product: 'Mutton Briyani',
            category: 'Lunch',
            price: 350,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240731/ourmid/pngtree-traditional-indian-mutton-biryani-png-image_13300367.png"
        },
        {
            id: 3,
            product: 'Prawn Briyani',
            category: 'Lunch',
            price: 200,
            count : 1,
            image: "https://seemattyrestaurant.com/wp-content/uploads/2024/03/prawn-biriyani.png"
        },
        {
            id: 4,
            product: 'Fish Briyani',
            category: 'Lunch',
            price: 250,
            count : 1,
            image: "https://seemattyrestaurant.com/wp-content/uploads/2024/03/fish_biriyani.png"
        },
        {
            id: 5,
            product: 'Hydrabad Dum Briyani',
            category: 'Lunch',
            price: 250,
            count : 1,
            image: "https://rosepng.com/wp-content/uploads/2024/09/s11728_chicken_biryani_isolated_on_white_background_da1c56d4-0b9e-493f-bb41-c2277115512d_0-photoroom.png"
        },
        {
            id: 6,
            product: 'Malabar Briyani',
            category: 'Lunch',
            price: 280,
            count : 1,
            image: "https://haadibiryani.com/wp-content/uploads/2020/08/MuttonBiryani.png"
        },
        {
            id: 7,
            product: 'Dindigul Briyani',
            category: 'Lunch',
            price: 250,
            count : 1,
            image: "https://dindigulmannarbiriyani.in/images/din.png"
        },
        {
            id: 8,
            product: 'Ambur Briyani',
            category: 'Lunch',
            price: 280,
            count : 1,
            image: "https://flashbiriyani.in/wp-content/uploads/2023/12/pnghq.com-chicken-biryani-png-1355-download.png"
        },
        {
            id: 9,
            product: 'Quill Briyani',
            category: 'Lunch',
            price: 230,
            count : 1,
            image: "https://www.arusuvaibriyani.com/images/product1.png"
        },
        {
            id: 10,
            product: 'Calcutta Briyani',
            category: 'Lunch',
            price: 200,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/previews/048/067/107/non_2x/biryani-dish-desi-dum-biryani-with-mutton-basmati-rice-isolated-illustration-on-a-transparent-background-png.png"
        },
        {
            id: 11,
            product: 'Wedding Briyani',
            category: 'Lunch',
            price: 350,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/previews/048/067/102/non_2x/biryani-dish-a-plate-of-dum-biryani-isolated-illustration-on-a-transparent-background-png.png"
        },
        {
            id: 12,
            product: 'Mandi Briyani',
            category: 'Lunch',
            price: 350,
            count : 1,
            image: "https://img.pikbest.com/origin/09/20/08/20GpIkbEsTJFy.png!bw700"
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