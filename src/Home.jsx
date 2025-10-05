import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import Shop from './Shop'
import ProductCarousel from './ProductCarousel'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Lunchslider from '../src/Categories/Lunchslider'
import FantaWebsite from './FantaWebsite'
import Solar from './Solar'
// import gsap from 'gsap'
// import { ScrollSmoother } from "gsap/ScrollSmoother";
import Anothernav from './Anothernav'

// gsap.registerPlugin(ScrollSmoother);




const Home = () => {

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

  // useEffect(()=>{
  //   ScrollSmoother.create({
  //     wrapper : "#smooth-wrapper",
  //     content : "#smooth-content",
  //     smooth : 1.2,
  //     effects : true,
  //   })
  // },[])

  
  return (  
    <div>
      {/* <Navbar></Navbar> */}
      <Anothernav></Anothernav>
      {/* <div id="smooth-wrapper">
        <div id="smooth-content"> */}



        {/* <Link to= '/navbar'>Navbar  </Link> */}
        <ProductCarousel></ProductCarousel>

          
          
          

          {/* <select name="category" id="category" style={{marginTop: "100px"}} onChange={categorychange}>
            <option value="Select Your Category" >Select Your Category</option>
            <option value="Breakfast">Breakfast </option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Snacks">Snacks</option>
            <option value="Beverages">Beverages</option>
          </select> */}
          <h2 className='mt-5 mb-4 pt-5' style={{color: "orange"}}>What's on Your Mind?</h2>
          <div>
            <div className="cards"  >
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
            


              

              <div className='lunchslider' style={{margin:"80px 0px", width:"100wh", height:"100vh"}}>
                <Lunchslider></Lunchslider>

              </div>


        




            <div id="carouselExampleFade" class="carousel slide carousel-fade m-5">
                <div class="carousel-inner">
                  <div class="carousel-item active ">
                    <img src="https://www.jaypeehotels.com/blog/wp-content/uploads/2024/07/Blog-3-scaled.jpg" class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                    <img src="https://sortedmedia.com.au/wp-content/uploads/2020/06/DSC0903-scaled.jpg" class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                    <img src="https://wallpapers.com/images/hd/classy-butter-chicken-platter-indian-food-s8a8b9aojk6kqoz0.jpg" class="d-block w-100" alt="..."/>
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>

              <div className="solar-wrapper">
                  <Solar></Solar>
              </div>




        <div className="m-5 pt-5 pb-5 column-gap-2">
        <div className='bottomcards d-flex gap-5'>
          <div class="card">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/959df04d-d2f9-4884-8f54-36bd3b4db3f7_74037.jpg" class="card-img-top"  alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Burger King</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                  <a href="#" class="btn btn-warning">Go</a>
                </div>
              </div>

              <div class="card">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/0d1d046a-9d43-4090-ab45-293ca5f54761_16227.JPG" class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Pizza Hut</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                  <a href="#" class="btn btn-warning">Go</a>
                </div>
              </div>
              <div class="card">
                <img src="https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2017/10/26140428/Starbucks-i.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">StarBucks</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                  <a href="#" class="btn btn-warning">Go</a>
                </div>
              </div>
              <div class="card">
                <img src="https://www.jocooks.com/wp-content/uploads/2022/08/chocolate-waffles-1-4.jpg" class="card-img-top1" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title"> Waffles</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                  <a href="#" class="btn btn-warning">Go</a>
                </div>
              </div>

          </div>
          </div>
          </div>


          <div class="card text-center">
              <div class="card-header" style={{color:"white", fontSize: "25px"}}>Footer</div>
              <div class="card-body">
                <h5 class="card-title">"I'm on a seafood diet. I see food, and I eat it."</h5>
                <p class="card-text">In the mood for food Indulge in life's greatest pleasure: food. Good food, good mood. Tasty food for every mood. We make [food] magic. Food is always a good idea.</p>
                <a href="#" class="btn btn-warning">LIKE FOODIEE</a>
              </div>
              <div class="card-footer text-body-secondary">
              2 days ago
              </div>
          </div>


        {/* </div>
      </div> */}
      


      
    </div>
  )
}

export default Home




