// import { icon, text } from '@fortawesome/fontawesome-svg-core'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
// import car from './images/cart.png' 
import car from '../images/cart.png'
import Navbar from '../Navbar'
import Dinnerslider from './Dinnerslider'
import Anothernav from '../Anothernav'



const Shop = ({cart, setCart}) => {


    const [productdetails, setProductdetails] = useState([
        {
            id: 153,
            product: 'Idly',
            category: 'Dinner',
            price: 10,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/thumbnails/051/151/368/small_2x/indian-food-with-sauce-on-a-plate-png.png"
        },
        {
            id: 154,
            product: 'Dosa',
            category: 'Dinner',
            price: 40 ,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240131/ourmid/pngtree-masala-dosa-indian-traditional-food-with-sambhar-png-image_11521730.png"
        },
        {
            id: 155,
            product: 'Pongal',
            category: 'Dinner',
            price: 60,
            count : 1,
            image: "https://stagmo.in/cdn/shop/files/Bowl_6c59cdf5-4839-42a0-959d-adf57adc665d.png?v=1709039307&width=1445"
        },
        {
            id: 156,
            product: 'Vadai',
            category: 'Dinner',
            price: 10,
            count : 1,
            image: "https://madrascafewi.com/wp-content/uploads/2023/04/medhu-vada.png"
        },
        {
            id: 157,
            product: 'Khichdi',
            category: 'Dinner',
            price: 50,
            count : 1,
            image: "https://t4.ftcdn.net/jpg/13/54/32/19/360_F_1354321948_GBreVUvr0gjmy4oInWzyTaNewK6KkmdU.png"
        },
        {
            id: 158,
            product: 'Mini Idly',
            category: 'Dinner',
            price: 80,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240720/ourmid/pngtree-idly-sambar-with-chutney-png-image_12996627.png"
        },
        {
            id: 159,
            product: 'Quinoa Idli',
            category: 'Dinner',
            price: 35,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20241219/ourmid/pngtree-traditional-rice-cakes-on-a-banana-leaf-png-image_14806204.png"
        },
        {
            id: 160,
            product: 'Uttapam',
            category: 'Dinner',
            price: 90,
            count : 1,
            image: "https://purohitcafe.com/wp-content/uploads/2024/06/uttapam-mix_product.webp"
        },
        {
            id: 161,
            product: 'Ragi Rotti',
            category: 'Dinner',
            price: 50,
            count : 1,
            image: "https://www.soulfull.co.in/cdn/shop/files/m-ragi.png?v=10733598354469900039"
        },
        {
            id: 162,
            product: 'Upma ',
            category: 'Dinner',
            price: 50,
            count : 1,
            image: "https://indiashopping.io/cdn/shop/files/jain_rava_upma_0bb043d2-ea6c-4b63-ac96-173f66d5ef35.webp?v=1749116514"
        },
        {
            id: 163,
            product: 'Poha',
            category: 'Dinner',
            price: 60,
            count : 1,
            image: "https://rosepng.com/wp-content/uploads/2024/10/s11728_poha_isolated_on_white_background_-stylize_200_11fb9616-12c5-47bb-a0ec-3f71aa0a8ea2_2-photoroom.png"
        },
        {
            id: 164,
            product: 'Masala Paniyaram',
            category: 'Dinner',
            price: 70,
            count : 1,
            image: "https://mysorecafe.com.au/wp-content/uploads/2022/07/Urad-Daal-Vada-450x450.png"
        },
        {
            id: 165,
            product: 'Chocolate Pancake',
            category: 'Dinner',
            price: 70,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20241105/ourmid/pngtree-a-3d-render-of-stack-chocolate-pancakes-with-fresh-berries-png-image_14283810.png"
        },
        {
            id: 166,
            product: 'Medu Vada',
            category: 'Dinner',
            price: 10,
            count : 1,
            image: "https://madrascafewi.com/wp-content/uploads/2023/04/medhu-vada.png"
        },
        {
            id: 167,
            product: 'Banana Bread',
            category: 'Dinner',
            price: 30,
            count : 1,
            image: "https://coffeelab.gr/wp-content/uploads/2023/04/BANANA_BREAD.png"
        },
        {
            id: 168,
            product: 'Moong Dal Idly',
            category: 'Dinner',
            price: 30,
            count : 1,
            image: "https://www.intuiwell.com/wp-content/uploads/2025/03/moong-dal-idli-.png"
        },{
            id: 169,
            product: 'Rava Dosa',
            category: 'Dinner',
            price: 50,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/thumbnails/058/323/703/small_2x/dosa-on-wooden-plate-isolated-on-transparent-background-png.png"
        },{
            id: 170,
            product: 'Rava Idly',
            category: 'Dinner',
            price: 30,
            count : 1,
            image: "https://rosepng.com/wp-content/uploads/2024/09/s11728_idli_isolated_on_white_background_2f343d50-c08c-4680-9957-d16564a88d63_3-photoroom.png"
        },{
            id: 171,
            product: 'Masala Oats',
            category: 'Dinner',
            price: 50,
            count : 1,
            image: "https://media.istockphoto.com/id/1191001663/photo/vegetable-masala-oats-khichadi-served-in-a-bowl-selective-focus.jpg?s=612x612&w=0&k=20&c=sQDo0cyC34Bqvw_16wpjlvyeMyt5DnLdY3qGuFHC2NI="
        },
        ,{
            id: 172,
            product: 'Paneer Butter Masala',
            category: 'Dinner',
            price: 50,
            count : 1,
            image: "https://5.imimg.com/data5/ECOM/Default/2023/8/331529363/PK/WC/TN/64318608/paneer-butter-masala-removebg-preview.png"
        },{
            id: 173,
            product: 'Dal Makhani',
            category: 'Dinner',
            price: 50,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20250308/ourmid/pngtree-realistic-food-image-of-creamy-and-flavorful-dal-makhani-png-image_15743537.png"
        },
        {
            id: 174,
            product: 'Vegetable Biryani ',
            category: 'Dinner',
            price: 50,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240615/ourmid/pngtree-indian-vegetable-biryani-in-balti-dish-shot-from-topview-and-isolated-png-image_12487118.png"
        },{
            id: 175,
            product: 'Palak Paneer ',
            category: 'Dinner',
            price: 50,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/previews/054/721/689/non_2x/spinach-and-paneer-curry-palak-paneer-bowl-free-png.png    "
        },{
            id: 176,
            product: 'Aloo Gobi',
            category: 'Dinner',
            price: 50,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240723/ourmid/pngtree-aloo-gobi-indian-and-pakistani-food-cauliflower-png-image_13007774.png"
        },{
            id: 177,
            product: 'Rajma Curry',
            category: 'Dinner',
            price: 50,
            count : 1,
            image: "https://assets.hyperpure.com/data/images/products/3dc1ecd2e2010896a0f55a69174851b9.png"
        },{
            id: 178,
            product: 'Vegetable Pulao ',
            category: 'Dinner',
            price: 50,
            count : 1,
            image: "https://spicemantra.kz/wp-content/uploads/2024/10/veg-fried-rice1.png"
        },{
            id: 179,
            product: 'Chole Bhature ',
            category: 'Dinner',
            price: 50,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20250416/ourmid/pngtree-delicious-indian-chole-bhature-platter-spicy-chickpea-curry-puri-bread-png-image_16032378.png"
        },{
            id: 180,
            product: 'Margherita Pizza ',
            category: 'Dinner',
            price: 50,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20250220/ourmid/pngtree-margherita-pizza-white-background-png-image_15542507.png"
        },{
            id: 181,
            product: 'Vegetable Lasagna ',
            category: 'Dinner',
            price: 50,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20250322/ourmid/pngtree-close-up-photo-of-vegetable-lasagna-isolated-on-a-transparent-background-png-image_15845603.png"
        },{
            id: 182,
            product: 'Mushroom Risotto ',
            category: 'Dinner',
            price: 50,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20230906/ourmid/pngtree-risotto-italian-food-png-image_9997710.png"
        },{
            id: 183,
            product: 'Caprese Salad Bowl',
            category: 'Dinner',
            price: 50,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20250303/ourmid/pngtree-fresh-caprese-salad-with-cherry-tomatoes-basil-and-mozzarella-cheese-png-image_15701482.png"
        },{
            id: 184,
            product: 'Vegetable Stir Fry',
            category: 'Dinner',
            price: 50,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240708/ourmid/pngtree-vegetarian-stir-fry-healthy-eating-png-image_13025488.png"
        },{
            id: 185,
            product: 'Greek Salad',
            category: 'Dinner',
            price: 50,
            count : 1,
            image: "https://www.freeiconspng.com/uploads/greek-salad-png-21.png"
        },{
            id: 186,
            product: 'Vegetable Spring Rolls',
            category: 'Dinner',
            price: 50,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240822/ourmid/pngtree-delicious-vegetable-spring-rolls-fresh-and-crispy-recipes-png-image_13581538.png"
        },{
            id: 187,
            product: 'Tofu Pad Thai ',
            category: 'Dinner',
            price: 50,
            count : 1,
            image: "https://dragonflyfoods.com/wp-content/uploads/2020/03/pad-thai.png"
        },{
            id: 188,
            product: 'Grilled Chicken Breast',
            category: 'Dinner',
            price: 50,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240611/ourmid/pngtree-easy-grilled-chicken-fillet-with-rosemary-and-spices-spice-for-dinner-png-image_12608441.png"
        },{
            id: 189,
            product: 'Chicken Tikka Masala',
            category: 'Dinner',
            price: 50,
            count : 1,
            image: "https://img.pikbest.com/png-images/20241209/spicy-delicious-chicken-tikka-masala-curry_11232851.png!w700wp"
        },{
            id: 190,
            product: 'Chicken Fried Rice ',
            category: 'Dinner',
            price: 50,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20231013/ourmid/pngtree-flavorful-chicken-fry-rice-an-appetizing-mouth-watering-delight-with-textures-png-image_10267133.png"
        },{
            id: 191,
            product: 'BBQ Chicken Wings',
            category: 'Dinner',
            price: 50,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/previews/055/391/849/non_2x/delicious-bbq-chicken-wings-on-wooden-platter-free-png.png"
        },{
            id: 192,
            product: 'Chicken Caesar Salad ',
            category: 'Dinner',
            price: 50,
            count : 1,
            image: "https://freepngimg.com/thumb/salad/34916-3-grilled-chicken-caesar-salad.png"
        },{
            id: 193,
            product: 'Fish Curry',
            category: 'Dinner',
            price: 50,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/previews/052/979/960/non_2x/a-bowl-of-fish-curry-with-a-side-of-parsley-free-png.png"
        },
        {
            id: 194,
            product: 'Grilled Salmon',
            category: 'Dinner',
            price: 50,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20241219/ourmid/pngtree-a-grilled-salmon-steak-png-image_14702705.png"
        },{
            id: 195,
            product: 'Fish and Chips',
            category: 'Dinner',
            price: 50,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240611/ourmid/pngtree-fish-and-chips-fried-served-with-thickcut-fries-png-image_12651660.png"
        },{
            id: 196,
            product: 'Seafood Pasta',
            category: 'Dinner',
            price: 50,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/previews/050/830/659/non_2x/seafood-pasta-isolated-on-transparent-background-free-png.png"
        },{
            id: 197,
            product: 'Tandoori Fish',
            category: 'Dinner',
            price: 50,
            count : 1,
            image: "https://freepngimg.com/save/174127-fish-spicy-pic-fried-hq-image-free/1339x1067"
        },{
            id: 198,
            product: 'Beef Steak',
            category: 'Dinner',
            price: 50,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240207/ourmid/pngtree-fresh-grilled-meat-grilled-beef-steak-png-image_11712646.png"
        },{
            id: 199,
            product: 'Pork Ribs ',
            category: 'Dinner',
            price: 50,
            count : 1,
            image: "https://png.pngtree.com/png-clipart/20230408/ourmid/pngtree-a-barbecue-ribs-png-image_6684972.png"
        },{
            id: 200,
            product: 'Mixed Grill Platter',
            category: 'Dinner',
            price: 50,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/previews/052/244/557/non_2x/mixed-grill-platter-with-assorted-meats-and-vegetables-isolated-on-a-transparent-background-free-png.png"
        },{
            id: 201,
            product: 'Meat Lovers Pizza',
            category: 'Dinner',
            price: 50,
            count : 1,
            image: "https://raw.githubusercontent.com/hdpngworld/HPW/main/uploads/6527c9149f955-Meat%20Lovers%20Pizza%20Transparent%20hd%20png.png"
        },{
            id: 202,
            product: 'Surf and Turf ',
            category: 'Dinner',
            price: 50,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20250808/ourmid/pngtree-surf-and-turf-isolated-on-white-background-cutout-png-image_16737822.webp"
        },{
            id: 203,
            product: "Chef's Special Non-Veg Thali",
            category: 'Dinner',
            price: 50,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20250506/ourmid/pngtree-colorful-indian-thali-png-image_16165281.png"
        },
        {
            id: 204,
            product: "Plain Roti",
            category: 'Dinner',
            price: 50,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20231018/ourmid/pngtree-traditional-chapati-tortillas-isolated-created-with-generative-ai-png-image_10204193.png"
        },{
            id: 205,
            product: "Butter Roti",
            category: 'Dinner',
            price: 50,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240726/ourmid/pngtree-freshly-made-traditional-chapati-with-butter-png-image_13236221.png"
        },{
            id: 206,
            product: "Ghee Roti",
            category: 'Dinner',
            price: 50,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240726/ourmid/pngtree-homemade-chapati-with-a-rich-butter-spread-png-image_13236220.png"
        },{
            id: 207,
            product: "Tandoor Roti",
            category: 'Dinner',
            price: 50,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20250615/ourmid/pngtree-authentic-homemade-tandoori-roti-or-chapati-fluffy-and-warm-high-resolution-png-image_16539498.png"
        },{
            id: 208,
            product: "Phulka",
            category: 'Dinner',
            price: 50,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20230923/ourmid/pngtree-chapati-dish-tasty-pakistani-png-image_10122075.png"
        },{
            id: 209,
            product: "Roomali Roti",
            category: 'Dinner',
            price: 50,
            count : 1,
            image: "https://pakistanatlas.com/wp-content/uploads/2020/09/Pakistani-Food_0118_119-Rumali-roti.png"
        },{
            id: 210,
            product: "Missi Roti ",
            category: 'Dinner',
            price: 50,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240613/ourmid/pngtree-the-art-of-chapati-a-culinary-tradition-png-image_12737560.png"
        },{
            id: 211,
            product: "Makki di Roti",
            category: 'Dinner',
            price: 50,
            count : 1,
            image: "https://pakistanatlas.com/wp-content/uploads/2020/09/Pakistani-Food_0033_34-Sarsu-ka-saag-makai-ki-roti.png"
        },{
            id: 212,
            product: "Roti + Dal Combo ",
            category: 'Dinner',
            price: 50,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240726/ourmid/pngtree-homemade-chapati-accompanied-by-rich-curry-sauce-png-image_13236223.png"
        },{
            id: 213,
            product: "Paratha + Pickle Combo ",
            category: 'Dinner',
            price: 50,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20250301/ourmid/pngtree-a-plate-of-stuffed-parathas-with-yogurt-and-pickles-on-transparent-png-image_15682989.png"
        },{
            id: 214,
            product: "Prawn Curry",
            category: 'Dinner',
            price: 50,
            count : 1,
            image: "https://tandoorihutbenalla.com/wp-content/uploads/2020/08/Untitled-design-71.png"
        },{
            id: 215,
            product: "Chicken Chettinad",
            category: 'Dinner',
            price: 50,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/previews/054/269/579/non_2x/chicken-curry-in-a-bowl-on-a-transparent-background-free-png.png"
        },
        {
            id: 216,
            product: "Mutton Curry",
            category: 'Dinner',
            price: 50,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20250512/ourmid/pngtree-aromatic-mutton-curry-in-a-dark-bowl-garnished-with-cilantro-png-image_16191416.png"
        },{
            id: 217,
            product: "Kerala Fish Curry",
            category: 'Dinner',
            price: 50,
            count : 1,
            image: "https://erayisgroup.com/wp-content/uploads/2025/04/seer-fish-curry-traditional-indian-fish-curry-kerala-special-arranged-white-bowl-with-bowl-cooked-rice-banana-leaf-serving-foodarranged-wooden-textured-background-1.png"
        },{
            id: 218,
            product: "Onion Dosa",
            category: 'Dinner',
            price: 50,
            count : 1,
            image: "https://d1w7312wesee68.cloudfront.net/KjKG-BP_ZiOx7c15vuXMDRCkOo0-pV3HmwrjvfwPcqk/resize:fit:720:720/plain/s3://toasttab/restaurants/restaurant-131868000000000000/menu/items/1/item-800000003250971411_1726628122.png"
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
        <Dinnerslider></Dinnerslider>

        

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