// import { icon, text } from '@fortawesome/fontawesome-svg-core'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import car from './images/cart.png' 
import Navbar from './Navbar'

const Shop = ({cart, setCart}) => {
    const navigate = useNavigate();
  const categorychange = (e)=>{
    // e.preventDefault();
    const selectedcategory = e.target.value;

    switch(selectedcategory){
      case 'Breakfast':
        navigate('/breakfast')
        break;
      case 'Lunch':
        navigate('/lunch')
        break; 
      case 'Dinner':
        navigate('/dinner')
        break; 
      case 'Snacks':
        navigate('/snacks')
        break; 
      case 'Beverages':
        navigate('/beverages')
        break;
      default:
        navigate('/shop')
        break;
    }
  }
    const [productdetails, setProductdetails] = useState([
        {
            id: 12,
            product: 'Chicken Pizza',
            category: 'Mixed Dish',
            price: 150,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240729/ourmid/pngtree-irresistible-chicken-pizza-closeup-with-juicy-pieces-png-image_13274343.png"
        },
        {
            id: 13,
            product: 'Veg Pizza',
            category: 'Mixed Dish',
            price: 250,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/previews/046/861/103/non_2x/delicious-veggie-pizza-isolated-on-a-transparent-background-free-png.png"
        },
        {
            id: 14,
            product: 'Chicken Golden Delight',
            category: 'Mixed Dish',
            price: 250,
            count : 1,
            image: "https://assets.touch2success.com/static/ab3189f4548c2800ef1257418ce49b07/img/1743135270phpJVc5rY.png"
        },
        {
            id: 15,
            product: 'Non Veg Supreme',
            category: 'Mixed Dish',
            price: 250,
            count : 1,
            image: "https://png.pngtree.com/png-clipart/20230409/ourmid/pngtree-supreme-pizza-lifted-slice-png-image_6697088.png"
        },
        {
            id: 16,
            product: 'Peppy Paneer',
            category: 'Mixed Dish',
            price: 250,
            count : 1,
            image: "https://b.zmtcdn.com/data/dish_photos/c70/8ed3b93a011efce578898b88d8c7dc70.png"
        },
        {
            id: 17,
            product: 'Chicken Dominator',
            category: 'Mixed Dish',
            price: 280,
            count : 1,
            image: "https://b.zmtcdn.com/data/dish_photos/455/03c68ceb2c7c47b3dfaccc5aa3817455.png"
        },
        {
            id: 18,
            product: 'Pepper Barbecue & Onion',
            category: 'Mixed Dish',
            price: 250,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/thumbnails/058/026/483/small_2x/tasty-chicken-pizza-with-onions-and-cheese-png.png"
        },
        {
            id: 19,
            product: 'Chicken Pepperoni',
            category: 'Mixed Dish',
            price: 280,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/thumbnails/059/589/756/small/pizza-with-chicken-pepperoni-and-basil-food-photography-cut-out-transparent-png.png"
        },
        {
            id: 20,
            product: 'Chicken Sausage',
            category: 'Mixed Dish',
            price: 230,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240729/ourmid/pngtree-closeup-of-a-chicken-pizza-with-mouthwatering-toppings-png-image_13274350.png"
        },
        {
            id: 21,
            product: 'Non Veg Supreme',
            category: 'Mixed Dish',
            price: 200,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240913/ourmid/pngtree-pizza-chicken-food-png-vector-material-png-image_12896221.png"
        },
        {
            id: 22,
            product: 'Indi Chicken Tikka',
            category: 'Mixed Dish',
            price: 350,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/previews/046/791/335/non_2x/bbq-chicken-pizza-free-png.png"
        },
        {
            id: 23,
            product: 'Keema Do Pyaza',
            category: 'Mixed Dish',
            price: 350,
            count : 1,
            image: "https://shalepizza.netlify.app/img/Pizza%20Menu%20Images/12.png"
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

            <Navbar></Navbar>

            {/* <select name="category" id="category" style={{marginTop: "100px"}} onChange={categorychange}>
                    <option value="Select Your Category" >Select Your Category</option>
                    <option value="Breakfast">Breakfast </option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                    <option value="Snacks">Snacks</option>
                    <option value="Beverages">Beverages</option>
            
            
            
                  </select> */}
                  <h2 className='mt-5 mb-4 pt-5' style={{color: "orange"}}>What's on Your Mind?</h2>
                    <div className="cards">
                      <div className="card1 ">
                        <Link to = '/briyani'><img src="https://rosepng.com/wp-content/uploads/2024/09/s11728_chicken_biryani_isolated_on_white_background_da1c56d4-0b9e-493f-bb41-c2277115512d_0-photoroom.png" alt="Briyani" width={"150px"} /></Link>
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

            <div className="container mt-5 mb-5 pt-5 pb-5">
                <div className='row'>
                    {
                        filteredproducts.map((element, index) => 
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



        <Link to= '/cart'><img src={car} alt="carticon" className='carticon' /></Link>
            
        </div>
    )
}

export default Shop