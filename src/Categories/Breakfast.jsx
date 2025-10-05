// import { icon, text } from '@fortawesome/fontawesome-svg-core'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
// import car from './images/cart.png' 
import car from '../images/cart.png'
import Navbar from '../Navbar'
import Breakfastslider from '../Categories/Breakfastslider'
import Anothernav from '../Anothernav'


const Shop = ({cart, setCart}) => {


    const [productdetails, setProductdetails] = useState([
        {
            id: 75,
            product: 'Idly',
            category: 'Breakfast',
            price: 10,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/thumbnails/051/151/368/small_2x/indian-food-with-sauce-on-a-plate-png.png"
        },
        {
            id: 76,
            product: 'Dosa',
            category: 'Breakfast',
            price: 40 ,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240131/ourmid/pngtree-masala-dosa-indian-traditional-food-with-sambhar-png-image_11521730.png"
        },
        {
            id: 77,
            product: 'Pongal',
            category: 'Breakfast',
            price: 60,
            count : 1,
            image: "https://stagmo.in/cdn/shop/files/Bowl_6c59cdf5-4839-42a0-959d-adf57adc665d.png?v=1709039307&width=1445"
        },
        {
            id: 78,
            product: 'Vadai',
            category: 'Breakfast',
            price: 10,
            count : 1,
            image: "https://madrascafewi.com/wp-content/uploads/2023/04/medhu-vada.png"
        },
        {
            id: 79,
            product: 'Khichdi',
            category: 'Breakfast',
            price: 50,
            count : 1,
            image: "https://t4.ftcdn.net/jpg/13/54/32/19/360_F_1354321948_GBreVUvr0gjmy4oInWzyTaNewK6KkmdU.png"
        },
        {
            id: 80,
            product: 'Mini Idly',
            category: 'Lunch',
            price: 80,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240720/ourmid/pngtree-idly-sambar-with-chutney-png-image_12996627.png"
        },
        {
            id: 81,
            product: 'Quinoa Idli',
            category: 'Breakfast',
            price: 35,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20241219/ourmid/pngtree-traditional-rice-cakes-on-a-banana-leaf-png-image_14806204.png"
        },
        {
            id: 82,
            product: 'Uttapam',
            category: 'Breakfast',
            price: 90,
            count : 1,
            image: "https://purohitcafe.com/wp-content/uploads/2024/06/uttapam-mix_product.webp"
        },
        {
            id: 83,
            product: 'Ragi Rotti',
            category: 'Breakfast',
            price: 50,
            count : 1,
            image: "https://www.soulfull.co.in/cdn/shop/files/m-ragi.png?v=10733598354469900039"
        },
        {
            id: 84,
            product: 'Upma ',
            category: 'Breakfast',
            price: 50,
            count : 1,
            image: "https://indiashopping.io/cdn/shop/files/jain_rava_upma_0bb043d2-ea6c-4b63-ac96-173f66d5ef35.webp?v=1749116514"
        },
        {
            id: 85,
            product: 'Poha',
            category: 'Breakfast',
            price: 60,
            count : 1,
            image: "https://rosepng.com/wp-content/uploads/2024/10/s11728_poha_isolated_on_white_background_-stylize_200_11fb9616-12c5-47bb-a0ec-3f71aa0a8ea2_2-photoroom.png"
        },
        {
            id: 86,
            product: 'Masala Paniyaram',
            category: 'Breakfast',
            price: 70,
            count : 1,
            image: "https://mysorecafe.com.au/wp-content/uploads/2022/07/Urad-Daal-Vada-450x450.png"
        },
        {
            id: 87,
            product: 'Chocolate Pancake',
            category: 'Breakfast',
            price: 70,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20241105/ourmid/pngtree-a-3d-render-of-stack-chocolate-pancakes-with-fresh-berries-png-image_14283810.png"
        },
        {
            id: 88,
            product: 'Medu Vada',
            category: 'Breakfast',
            price: 10,
            count : 1,
            image: "https://madrascafewi.com/wp-content/uploads/2023/04/medhu-vada.png"
        },
        {
            id: 89,
            product: 'Banana Bread',
            category: 'Breakfast',
            price: 30,
            count : 1,
            image: "https://coffeelab.gr/wp-content/uploads/2023/04/BANANA_BREAD.png"
        },
        {
            id: 90,
            product: 'Moong Dal Idly',
            category: 'Breakfast',
            price: 30,
            count : 1,
            image: "https://www.intuiwell.com/wp-content/uploads/2025/03/moong-dal-idli-.png"
        },{
            id: 91,
            product: 'Rava Dosa',
            category: 'Breakfast',
            price: 50,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/thumbnails/058/323/703/small_2x/dosa-on-wooden-plate-isolated-on-transparent-background-png.png"
        },{
            id: 92,
            product: 'Rava Idly',
            category: 'Breakfast',
            price: 30,
            count : 1,
            image: "https://rosepng.com/wp-content/uploads/2024/09/s11728_idli_isolated_on_white_background_2f343d50-c08c-4680-9957-d16564a88d63_3-photoroom.png"
        },{
            id: 93,
            product: 'Masala Oats',
            category: 'Breakfast',
            price: 50,
            count : 1,
            image: "https://media.istockphoto.com/id/1191001663/photo/vegetable-masala-oats-khichadi-served-in-a-bowl-selective-focus.jpg?s=612x612&w=0&k=20&c=sQDo0cyC34Bqvw_16wpjlvyeMyt5DnLdY3qGuFHC2NI="
        },{
            id: 94,
            product: 'Ragi Porridge',
            category: 'Breakfast',
            price: 40,
            count : 1,
            image: "https://twobrothersindiashop.com/cdn/shop/articles/ragi-for-babies.png?v=1701440217&width=1024"
        },{
            id: 95,
            product: 'Pearl Millet Porridge',
            category: 'Breakfast',
            price: 40,
            count : 1,
            image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiHJEQIRXEZV0CNKNdEikGHSTTY4B9HHUX5vvTKUPgFa1EL3chhK3SNiW_cpzkPloOMoEikFFefnkfOrik1FgHhssEwKzjzRGgjVDNAMu3ddIcEWZssaAJaEWT-kzC6KPwh_2bw-MPqHZw//?imgmax=800"
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
        
        <Breakfastslider></Breakfastslider>

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