// import { icon, text } from '@fortawesome/fontawesome-svg-core'
import React, { useEffect, useState } from 'react'
import { Link, useLocation,useNavigate } from 'react-router-dom'
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
            id: 1,
            product: 'Chicken Briyani',
            category: 'Lunch',
            price: 150,
            count : 1,
            image: "https://rosepng.com/wp-content/uploads/2024/09/s11728_chicken_biryani_isolated_on_white_background_da1c56d4-0b9e-493f-bb41-c2277115512d_0-photoroom.png"
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
            image: "https://png.pngtree.com/png-vector/20240727/ourmid/pngtree-mastering-the-art-of-biryani-authentic-recipes-and-techniques-png-image_13245161.png"
        },
        {
            id: 11,
            product: 'Wedding Briyani',
            category: 'Lunch',
            price: 350,
            count : 1,
            image: "https://png.pngtree.com/png-clipart/20230522/ourmid/pngtree-chicken-biryani-front-view-png-image_7104973.png"
        },
        {
            id: 12,
            product: 'Mandi Briyani',
            category: 'Lunch',
            price: 350,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240808/ourmid/pngtree-grilled-chicken-mandi-rice-a-culinary-delight-traditional-recipe-flavorful-isolated-png-image_13413537.png   "
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