// import { icon, text } from '@fortawesome/fontawesome-svg-core'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
// import car from './images/cart.png' 
import car from '../images/cart.png'
import Navbar from '../Navbar'
import Lunchslider from './Lunchslider'
import Anothernav from '../Anothernav'


const Shop = ({cart, setCart}) => {


    const [productdetails, setProductdetails] = useState([
        {
            id: 96,
            product: 'Curd Rice',
            category: 'Lunch',
            price: 10,
            count : 1,
            image: "https://jugaadindiancuisine.com/wp-content/uploads/2023/09/Jeera-Rice-1.png"
        },
        {
            id: 97,
            product: 'Lemon Rice',
            category: 'Lunch',
            price: 40 ,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240204/ourmid/pngtree-indian-lemon-rice-png-image_11540901.png "
        },
        {
            id: 98,
            product: 'Tamarind Rice',
            category: 'Lunch',
            price: 60,
            count : 1,
            image: "https://www.gopuja.com/pub/media/catalog/product/cache/95da668ac1bacfccaaf0df939dd185e5/2/_/2_6-2.png"
        },
        {
            id: 99,
            product: 'Veg Briyani',
            category: 'Lunch',
            price: 10,
            count : 1,
            image: "https://rosepng.com/wp-content/uploads/2024/07/s11728_biryani_isolated_on_white_background_345f7498-388c-4ca0-8a88-cb5164050138_0-photoroom-300x300.png"
        },
        {
            id: 100,
            product: 'Panner Butter Masala',
            category: 'Lunch',
            price: 50,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/thumbnails/056/102/177/small_2x/indian-paneer-butter-masala-isolated-on-transparent-background-free-png.png"
        },
        {
            id: 101,
            product: 'Mango Rice ',
            category: 'Lunch',
            price: 80,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20231018/ourmid/pngtree-mango-sticky-rice-thai-food-png-image_10210374.png"
        },
        {
            id: 102,
            product: 'Tomato Rice',
            category: 'Lunch',
            price: 35,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240719/ourmid/pngtree-tomato-rice-also-known-as-tamatar-pilaf-or-pulav-made-using-png-image_12967975.png"
        },
        {
            id: 103,
            product: 'Coconut Rice',
            category: 'Lunch',
            price: 90,
            count : 1,
            image: "https://tandoorihutbenalla.com/wp-content/uploads/2020/08/Untitled-design-75.png"
        },
        {
            id: 104,
            product: 'Methi Rice',
            category: 'Lunch',
            price: 50,
            count : 1,
            image: "https://mysorecafe.com.au/wp-content/uploads/2022/07/Methi-Pulao.png"
        },
        {
            id: 105,
            product: 'Carrot Rice ',
            category: 'Lunch',
            price: 50,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20250512/ourmid/pngtree-rice-with-peas-and-carrots-top-view-png-image_16221037.png"
        },
        {
            id: 106,
            product: 'Beetroot Rice',
            category: 'Lunch',
            price: 60,
            count : 1,
            image: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_960,w_960//InstamartAssets/Receipes/beetroot_rice.webp"
        },
        {
            id: 107,
            product: 'Mushroom Rice',
            category: 'Lunch',
            price: 70,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240124/ourmid/pngtree-beef-stroganoff-mushroom-rice-straw-potato-png-image_11485615.png"
        },
        {
            id: 108,
            product: 'Kashmiri Pulao',
            category: 'Lunch',
            price: 100,
            count : 1,
            image: "https://spicemantra.kz/wp-content/uploads/2024/10/kashmiri-pulao-1.png"
        },
        {
            id: 109,
            product: 'Spicy Garlic Mushroom Recipe',
            category: 'Lunch',
            price: 180,
            count : 1,
            image: "https://myblacktree.com/cdn/shop/files/1000_F_304364043_9BptR5X9tU4KZx5gHOgdC5hpCeEhXW7X-removebg-preview.png?v=1691141558"
        },
        {
            id: 110,
            product: 'Veg Meals',
            category: 'Lunch',
            price: 120,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20231004/ourmid/pngtree-indian-thali-palav-png-image_10066789.png"
        },
        {
            id: 111,
            product: 'Non-Veg Meals',
            category: 'Lunch',
            price: 200,
            count : 1,
            image: "https://rosepng.com/wp-content/uploads/2024/09/s11728_veg_thali_isolated_on_white_background_59ef9727-5688-4c26-8774-07e7c4b937da_3-photoroom-300x300.png"
        },{
            id: 112,
            product: 'Mushroom Briyani',
            category: 'Lunch',
            price: 150,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20241109/ourmid/pngtree-flavored-biryani-rice-in-decorative-bowl-png-image_14321828.png"
        },{
            id: 113,
            product: 'Palak Rice',
            category: 'Lunch',
            price: 30,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/previews/067/094/627/non_2x/paneer-and-basmati-rice-with-green-spinach-sauce-dish-free-png.png"
        },{
            id: 114,
            product: 'Schezwan Fried Rice',
            category: 'Lunch',
            price: 150,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/thumbnails/042/268/358/small_2x/ai-generated-3d-rendering-of-a-fried-rice-in-a-plate-or-bowl-on-transparent-background-ai-generated-png.png"
        },{
            id: 115,
            product: 'Soya Chunks Briyani',
            category: 'Lunch',
            price: 140,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/previews/052/241/867/non_2x/delicious-biryani-clipart-with-spices-bursting-with-indian-flavor-free-png.png"
        },{
            id: 116,
            product: 'Bisi Bele Bath',
            category: 'Lunch',
            price: 120,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/thumbnails/036/289/640/small_2x/ai-generated-bisi-bele-bath-with-transparent-background-ai-png.png"
        },
        {
            id: 117,
            product: 'Normal Paratha',
            category: 'Lunch & Dinner',
            price: 50,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/thumbnails/049/178/253/small_2x/aloo-paratha-on-transparent-background-png.png"
        },
        {
            id: 118,
            product: 'Paneer Paratha',
            category: 'Mixed Dish',
            price: 150,
            count : 1,
            image: "https://vadilalglobal.com/cdn/shop/files/MalaiPaneerParatha.png?v=1710916895&width=1946"
        },
        {
            id: 119,
            product: 'Gobi Paratha',
            category: 'Mixed Dish',
            price: 150,
            count : 1,
            image: "https://64.media.tumblr.com/07446f95e6f96f9aaa94be4db82217af/534253c094293b40-32/s1280x1920/c91774a5aa22dfda1c26840e9cbb54902a13a44e.pnj"
        },
        {
            id: 120,
            product: 'Aloo Paratha',
            category: 'Mixed Dish',
            price: 180,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20250301/ourmid/pngtree-a-plate-of-stuffed-parathas-with-yogurt-and-pickles-on-transparent-png-image_15682989.png"
        },
        {
            id: 121,
            product: 'Palak Paratha',
            category: 'Mixed Dish',
            price: 250,
            count : 1,
            image: "https://vadilalglobal.com/cdn/shop/files/SpinachParatha.png?v=1710917634&width=1445"
        },
        {
            id: 122,
            product: 'Methi Paratha',
            category: 'Mixed Dish',
            price: 280,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/previews/054/721/774/non_2x/gujarati-specialty-soft-methi-thepla-free-png.png"
        },
        {
            id: 123,
            product: 'Beetroot Paratha',
            category: 'Mixed Dish',
            price: 250,
            count : 1,
            image: "https://www.ethicaldelights.in/cdn/shop/files/8_791d83e2-a727-463a-bde7-5f87485d1594.png?v=1749205106"
        },
        {
            id: 124,
            product: 'Mix Veg Paratha',
            category: 'Mixed Dish',
            price: 180,
            count : 1,
            image: "https://crown-foods.com/wp-content/uploads/2023/05/mix-vegetable-pharata_11zon-1024x1024-1.png"
        },
        {
            id: 125,
            product: 'Egg Paratha',
            category: 'Mixed Dish',
            price: 30,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/previews/054/312/178/non_2x/a-golden-brown-paratha-served-alongside-a-sunny-side-up-egg-garnished-with-a-sprinkle-of-black-pepper-free-png.png"
        },
        {
            id: 126,
            product: 'Pizza Paratha',
            category: 'Mixed Dish',
            price: 100,
            count : 1,
            image: "https://framerusercontent.com/images/NNZq2cULL6eviZAp6PhoEhRXl94.png"
        },
        {
            id: 127,
            product: 'Poli Paratha ',
            category: 'Mixed Dish',
            price: 80,
            count : 1,
            image: "https://pakistanatlas.com/wp-content/uploads/2020/09/Pakistani-Food_0128_129-Basen-wali-roti.png"
        },
        {
            id: 128,
            product: 'Butter Naan Paratha',
            category: 'Mixed Dish',
            price: 100,
            count : 1,
            image: "https://img.pikbest.com/png-images/20241230/delicious-butter-naan-bread_11320792.png!bw700"
        },
        {
            id: 129,
            product: 'Egg Noodles',
            category: 'Lunch',
            price: 150,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/thumbnails/051/125/508/small_2x/delicious-fried-noodles-isolated-on-transparent-background-png.png"
        },
        {
            id: 130,
            product: 'Ramen Noodles',
            category: 'Mixed Dish',
            price: 250,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/previews/054/655/884/non_2x/delicious-bowl-of-japanese-ramen-noodles-free-png.png"
        },
        {
            id: 131,
            product: 'Hakka Noodles',
            category: 'Mixed Dish',
            price: 250,
            count : 1,
            image: "https://spicemantra.kz/wp-content/uploads/2024/10/veg-noodle.png"
        },
        {
            id: 132,
            product: 'Maggi',
            category: 'Mixed Dish',
            price: 250,
            count : 1,
            image: "https://rosepng.com/wp-content/uploads/2024/08/s11728_maggi_isolated_on_white_background_944358f0-3f5b-4c3f-8133-3488ec6f4110_2-photoroom.png   "
        },
        {
            id: 133,
            product: 'Chicken Noodles',
            category: 'Mixed Dish',
            price: 250,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20250321/ourmid/pngtree-delicious-asian-noodles-with-teriyaki-chicken-and-vegetables-in-black-bowl-png-image_15818154.png"
        },
        {
            id: 134,
            product: 'Prawn Noodles',
            category: 'Mixed Dish',
            price: 280,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20241219/ourmid/pngtree-3d-hot-shrimp-noodles-in-black-bowl-on-transparent-background-png-image_14800560.png"
        },
        {
            id: 135,
            product: 'Schezwan Noodles',
            category: 'Mixed Dish',
            price: 250,
            count : 1,
            image: "https://images.deliveryhero.io/image/talabat/MenuItems/23C54AAEAFB3EFB3A06E2027614B31DE"
        },
        {
            id: 136,
            product: 'Beef Noodles',
            category: 'Mixed Dish',
            price: 280,
            count : 1,
            image: "https://www.redefinemeat.com/wp-content/uploads/2024/07/COURSE_ADJUST4-3.png"
        },
        {
            id: 137,
            product: 'Paneer Crispy Noodles',
            category: 'Mixed Dish',
            price: 230,
            count : 1,
            image: "https://flatskitchen.com/upload_images/1734161110paneernoodles.png"
        },
        {
            id: 138,
            product: 'Jjajangmyeon',
            category: 'Mixed Dish',
            price: 200,
            count : 1,
            image: "https://omonihouse.uk/assets/images/07.png"
        },
        {
            id: 139,
            product: 'Manchurian noodles',
            category: 'Mixed Dish',
            price: 350,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240104/ourmid/pngtree-spicy-noodles-with-manchurian-png-image_11403000.png"
        },
        {
            id: 140,
            product: 'Veg Singapuri Noodles',
            category: 'Mixed Dish',
            price: 350,
            count : 1,
            image: "https://spicemantra.kz/wp-content/uploads/2024/10/vsn-700x550.png"
        },
        {
            id: 141,
            product: 'Chicken Briyani',
            category: 'Lunch',
            price: 150,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/previews/048/067/082/non_2x/biryani-dish-malabar-biryani-with-thalassery-chicken-isolated-illustration-on-a-transparent-background-png.png"
        },
        {
            id: 142,
            product: 'Mutton Briyani',
            category: 'Lunch',
            price: 350,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240731/ourmid/pngtree-traditional-indian-mutton-biryani-png-image_13300367.png"
        },
        {
            id: 143,
            product: 'Prawn Briyani',
            category: 'Lunch',
            price: 200,
            count : 1,
            image: "https://seemattyrestaurant.com/wp-content/uploads/2024/03/prawn-biriyani.png"
        },
        {
            id: 144,
            product: 'Fish Briyani',
            category: 'Lunch',
            price: 250,
            count : 1,
            image: "https://seemattyrestaurant.com/wp-content/uploads/2024/03/fish_biriyani.png"
        },
        {
            id: 145,
            product: 'Hydrabad Dum Briyani',
            category: 'Lunch',
            price: 250,
            count : 1,
            image: "https://rosepng.com/wp-content/uploads/2024/09/s11728_chicken_biryani_isolated_on_white_background_da1c56d4-0b9e-493f-bb41-c2277115512d_0-photoroom.png"
        },
        {
            id: 146,
            product: 'Malabar Briyani',
            category: 'Lunch',
            price: 280,
            count : 1,
            image: "https://haadibiryani.com/wp-content/uploads/2020/08/MuttonBiryani.png"
        },
        {
            id: 147,
            product: 'Dindigul Briyani',
            category: 'Lunch',
            price: 250,
            count : 1,
            image: "https://dindigulmannarbiriyani.in/images/din.png"
        },
        {
            id: 148,
            product: 'Ambur Briyani',
            category: 'Lunch',
            price: 280,
            count : 1,
            image: "https://flashbiriyani.in/wp-content/uploads/2023/12/pnghq.com-chicken-biryani-png-1355-download.png"
        },
        {
            id: 149,
            product: 'Quill Briyani',
            category: 'Lunch',
            price: 230,
            count : 1,
            image: "https://www.arusuvaibriyani.com/images/product1.png"
        },
        {
            id: 150,
            product: 'Calcutta Briyani',
            category: 'Lunch',
            price: 200,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/previews/048/067/107/non_2x/biryani-dish-desi-dum-biryani-with-mutton-basmati-rice-isolated-illustration-on-a-transparent-background-png.png"
        },
        {
            id: 151,
            product: 'Wedding Briyani',
            category: 'Lunch',
            price: 350,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/previews/048/067/102/non_2x/biryani-dish-a-plate-of-dum-biryani-isolated-illustration-on-a-transparent-background-png.png"
        },
        {
            id: 152,
            product: 'Mandi Briyani',
            category: 'Lunch',
            price: 350,
            count : 1,
            image: "https://img.pikbest.com/origin/09/20/08/20GpIkbEsTJFy.png!bw700"
        }
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
        <Lunchslider></Lunchslider>
        
        

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