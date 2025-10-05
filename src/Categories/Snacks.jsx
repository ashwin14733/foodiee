// import { icon, text } from '@fortawesome/fontawesome-svg-core'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
// import car from './images/cart.png' 
import car from '../images/cart.png'
import Navbar from '../Navbar'
import Snacksslider from './Snacksslider'
import Anothernav from '../Anothernav'



const Shop = ({cart, setCart}) => {


    const [productdetails, setProductdetails] = useState([
        {
            id: 219,
            product: 'Pani Puri',
            category: 'Chat',
            price: 20,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/previews/052/935/114/non_2x/delicious-pani-puri-clipart-free-png.png"
        },
        {
            id: 220,
            product: 'Aloo Potato Chat',
            category: 'Mixed Dish',
            price: 30,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20250513/ourmid/pngtree-aloo-tikki-topped-with-chutney-and-sev-png-image_16241245.png"
        },
        {
            id: 221,
            product: 'Corn Chat',
            category: 'Mixed Dish',
            price: 50,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240515/ourmid/pngtree-lip-smacking-chana-chaat-bowl-recipe-tasty-vegan-ideas-isolated-with-png-image_12470986.png"
        },
        {
            id: 222,
            product: 'Bhel Puri',
            category: 'Mixed Dish',
            price: 45,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/previews/051/043/736/non_2x/a-plate-of-colorful-indian-bhel-puri-or-pani-puri-with-vegetables-and-lime-on-a-transparent-background-perfect-for-product-banners-and-food-posts-free-png.png"
        },
        {
            id: 223,
            product: 'Vada Pav',
            category: 'Mixed Dish',
            price: 80,
            count : 1,
            image: "https://rosepng.com/wp-content/uploads/2024/09/s11728_vada_pav_isolated_on_white_background_6f846ef3-3cbb-43c1-bf28-00b29b6d40cb_1-photoroom.png"
        },
        {
            id: 224,
            product: 'Masala Puri',
            category: 'Mixed Dish',
            price: 45,
            count : 1,
            image: "https://www.kdmithaiwala.com/wp-content/uploads/2018/07/bhel-puri.png"
        },
        {
            id: 225,
            product: 'Samosa',
            category: 'Mixed Dish',
            price: 15,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240624/ourmid/pngtree-best-food-samosa-png-image_12840486.png"
        },
        {
            id: 226,
            product: 'Dahi Puri',
            category: 'Mixed Dish',
            price: 40,
            count : 1,
            image: "https://delhichaatpuri.com/wp-content/uploads/2024/10/81Na6DgwOL-removebg-preview.png"
        },
        {
            id: 227,
            product: 'Pav Bhaji',
            category: 'Mixed Dish',
            price: 85,
            count : 1,
            image: "https://rosepng.com/wp-content/uploads/2024/12/s11728_pav_bhaji_isolated_on_white_background_-stylize_200_b2e7d41e-b988-4514-8e72-48c4ad8fca6d_2-photoroom.png"
        },
        {
            id: 228,
            product: 'Aloo Bonda',
            category: 'Mixed Dish',
            price: 15,
            count : 1,
            image: "https://mysorecafe.com.au/wp-content/uploads/2022/07/Aloo-Bonda.png"
        },
        {
            id: 229,
            product: 'Masala Pav',
            category: 'Mixed Dish',
            price: 100,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20250301/ourmid/pngtree-spicy-indian-pav-bhaji-with-buttered-bun-and-side-garnish-on-png-image_15686603.png"
        },
        {
            id: 230,
            product: 'Channa Masala',
            category: 'Mixed Dish',
            price: 95,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/previews/039/107/086/non_2x/ai-generated-chana-chat-isolated-on-background-free-png.png"
        },
         {
            id: 231,
            product: 'Sev Puri',
            category: 'Mixed Dish',
            price: 35,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240322/ourmid/pngtree-spicy-chaat-item-sev-puri-on-plate-transparent-background-png-image_12198710.png"
        }, {
            id: 232,
            product: 'Papdi Chaat',
            category: 'Mixed Dish',
            price: 95,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20250706/ourmid/pngtree-delicious-indian-chaat-dish-in-white-bowl-png-image_16696577.webp"
        }, {
            id: 233,
            product: 'Raj Kachori',
            category: 'Mixed Dish',
            price: 95,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/previews/054/054/484/non_2x/a-beautifully-styled-raj-kachori-with-vibrant-garnishes-and-fresh-spices-isolated-on-transparent-background-free-png.png"
        }, {
            id: 234,
            product: 'Dahi Bhalla',
            category: 'Mixed Dish',
            price: 95,
            count : 1,
            image: "https://pakistanatlas.com/wp-content/uploads/2020/09/Pakistani-Food_0104_105-dahi-bhaly.png"
        }, {
            id: 235,
            product: 'Pasta Chaat',
            category: 'Mixed Dish',
            price: 95,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240509/ourmid/pngtree-creamy-chaat-png-image_12431358.png"
        }, {
            id: 236,
            product: 'Mumbai Bhel',
            category: 'Mixed Dish',
            price: 95,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20250512/ourmid/pngtree-bhel-puri-with-chopped-tomatoes-onions-and-fried-noodles-png-image_16221150.png"
        }, {
            id: 237,
            product: 'Delhi Chaat',
            category: 'Mixed Dish',
            price: 95,
            count : 1,
            image: "https://tanuskitchen.co.uk/wp-content/uploads/2024/06/delhi_chaat_img1.png"
        },
    ])

    
    const location = useLocation();
    const [searchitems, setSearchitems] = useState('');
    const [countdown, setCountdown] = useState([]);
    

    useEffect(()=>{
        setSearchitems(location.state?.searchitems || '')

    },[location.state])

    const filteredproducts = productdetails.filter((items) =>
        items.product.toLowerCase().includes(searchitems.toLowerCase())
    )
    console.log(searchitems);
    




   
   const addtocart = (product)=>{
    setCart(cart =>{
        let cartitems = cart.find((item)=>item.id === product.id)
        return cartitems ? cart.map((item)=> item.id === product.id ? {...item, count : item.count +1} : item) : [...cart, {...product, count : 1}]
    })
   }

   
   const particularproduct = (element,numbers) =>{
    const uniquedata = countdown.filter((object,index,arr)=> index == arr.findIndex((ddd)=>  ddd.id === object.id))
    console.log("uniquedata",uniquedata);
    const findingpostion =  uniquedata.indexOf(element);
    uniquedata[findingpostion].count = uniquedata[findingpostion].count + numbers 
    setCart([...uniquedata])
    
    
    
}

    return (
        <div>
            
        {/* <Navbar></Navbar> */}
        <Anothernav></Anothernav>
        <Snacksslider></Snacksslider>
        

            <div className="cardsection">
                      <div className="card1 ">
                        <Link to = '/shop'><img src="https://rosepng.com/wp-content/uploads/2024/09/s11728_chicken_biryani_isolated_on_white_background_da1c56d4-0b9e-493f-bb41-c2277115512d_0-photoroom.png" alt="Briyani" width={"150px"} /></Link>
                        <p>Briyani</p>
                      </div>
                       <div className="card1">
                        <Link to= "/pizza"><img src="https://png.pngtree.com/png-vector/20241211/ourmid/pngtree-authentic-italian-pizza-with-cheese-and-fresh-vegetable-toppings-png-image_14714611.png" alt="Pizza"  width={"170px"}/></Link>
                        <p>Pizza</p>
                      </div>
                       <div className="card1">
                        <Link to='/noodles'><img src="https://rosepng.com/wp-content/uploads/2024/10/s11728_chowmein_isolated_on_white_background_-stylize_200_6963855d-6af2-47ef-9b61-c1e27057be3a_3-photoroom.png" alt="Noodles"  width={"140px"} /></Link>
                        <p>Noodles</p>
                      </div>
                       <div className="card1">
                        <Link to = '/paratha'><img src="https://png.pngtree.com/png-vector/20250301/ourmid/pngtree-a-plate-of-stuffed-parathas-with-yogurt-and-pickles-on-transparent-png-image_15682989.png" alt="Paratha"  width={"180px"}/></Link>
                        <p>Paratha</p>
                      </div>
                       <div className="card1">
                        <Link to = '/shakes'><img src="https://static.vecteezy.com/system/resources/previews/029/107/695/non_2x/chocolate-milkshake-with-toppings-on-a-transparent-background-ai-generative-free-png.png" alt="Shakes"  width={"150px"}/></Link>
                        <p>Shakes</p>
                      </div>
                       <div className="card1">
                        <Link to={'/chatitems'}><img src="https://static.vecteezy.com/system/resources/previews/052/935/114/non_2x/delicious-pani-puri-clipart-free-png.png" alt="Chat items"  width={"150px"}/></Link>
                        <p>Chat Items</p>
                      </div>
                    </div>
            {/* <h1 className='text-danger mt-5 pt-5'>Breakfast Items:</h1> */}


            <div className="container mt-5 mb-5 pb-5">
                <div className='row'>
                    {
                        // productdetails.map((element, index) => 
                            filteredproducts.map((element,index)=>
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
                                        <div className="quantity">
                                            <button className='plusbtn' onClick={()=>{setCountdown([...countdown,element]);particularproduct(element,-1)}}>-</button>
                                            <span style={{color:"white"}}>{element.count}</span>
                                            <button className='plusbtn' onClick={()=>{setCountdown([...countdown,element]);particularproduct(element,1)}}>+</button>
                                        </div>
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



<Link to= '/cart'><img src={car} alt="carticon" className='carticon' />
        <h3 className='cartcountbtn'>{cart.length}</h3></Link>            
        </div>
    )
}

export default Shop