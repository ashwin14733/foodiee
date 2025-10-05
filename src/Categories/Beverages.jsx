import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import car from '../images/cart.png'
import Navbar from '../Navbar'
// import Slider from 'react-slick'
import Slider from '../Slider'
import FantaWebsite from '../FantaWebsite'
import Solar from '../Solar'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Anothernav from '../Anothernav'



const Beverages = ({cart, setCart}) => {


    const [productdetails, setProductdetails] = useState([
        {
            id: 238,
            product: 'Masala Chai',
            category: 'Beverages',
            price: 15,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240708/ourmid/pngtree-indian-cardamom-tea-refreshment-png-image_13038788.png"
        },
        {
            id: 239,
            product: 'Ginger Tea',
            category: 'Beverages',
            price: 20,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240623/ourmid/pngtree-hot-ginger-tea-isolated-on-transparent-background-png-image_12828393.png"
        },
        {
            id: 240,
            product: 'Cardamom Tea ',
            category: 'Beverages',
            price: 20,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240611/ourmid/pngtree-spice-infusion-cardamom-tea-recipes-png-image_12692423.png"
        },
        {
            id: 241,
            product: 'Plain Tea',
            category: 'Beverages',
            price: 12,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20250227/ourmid/pngtree-tea-cup-with-hot-drink-and-saucer-png-image_15585357.png"
        },
        {
            id: 242,
            product: 'Black Tea',
            category: 'Beverages',
            price: 25,
            count : 1,
            image: "https://png.pngtree.com/png-clipart/20230816/ourmid/pngtree-black-tea-or-sulaimani-png-image_9183716.png"
        },
        {
            id: 243,
            product: 'Green Tea',
            category: 'Lunch',
            price: 30,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240722/ourmid/pngtree-refreshing-green-tea-perfect-for-any-time-of-day-png-image_13211693.png"
        },
        {
            id: 244,
            product: 'Lemon Tea',
            category: 'Beverages',
            price: 25,
            count : 1,
            image: "https://pngmax.com/_next/image?url=https%3A%2F%2Fpng-max.s3.ap-south-1.amazonaws.com%2Flow%2F0166eb0a-45b5-400d-9354-7edb40d0dfbc.png&w=1200&q=75"
        },
        {
            id: 245,
            product: 'Honey Ginger Tea',
            category: 'Beverages',
            price: 30,
            count : 1,
            image: "https://img.pikbest.com/origin/10/12/36/82jpIkbEsTivR.png!f305cw"
        },
        {
            id: 246,
            product: 'Tulsi Tea',
            category: 'Beverages',
            price: 35,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-a-cup-of-tea-with-leaves-tea-png-image_9193006.png"
        },
        {
            id: 247,
            product: 'Cutting Chai  ',
            category: 'Beverages',
            price: 15,
            count : 1,
            image: "https://png.pngtree.com/png-clipart/20221109/ourmid/pngtree-fresh-milk-tea-or-indian-kadak-chai-png-image_6432496.png"
        },
        {
            id: 248,
            product: 'Filter Coffee',
            category: 'Beverages',
            price: 30,
            count : 1,
            image: "https://png.pngtree.com/png-clipart/20230218/ourmid/pngtree-ground-coffee-traditional-cup-png-image_6608756.png"
        },
        {
            id: 249,
            product: 'Black Coffee',
            category: 'Beverages',
            price: 25,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/thumbnails/024/984/825/small_2x/black-cup-of-coffee-transparent-background-pro-png.png"
        },
        {
            id: 250,
            product: 'Cappuccino',
            category: 'Beverages',
            price: 70,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20250327/ourmid/pngtree-assorted-coffee-cups-including-cappuccino-cup-with-heart-png-image_15878581.png"
        },
        {
            id: 251,
            product: 'Latte',
            category: 'Beverages',
            price: 80,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/thumbnails/023/742/327/small_2x/latte-coffee-isolated-illustration-ai-generative-free-png.png"
        },
        {
            id: 252,
            product: 'Americano',
            category: 'Beverages',
            price: 55,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/previews/036/159/760/non_2x/ai-generated-americano-is-espresso-with-hot-water-with-transparent-background-free-png.png"
        },
        {
            id: 253,
            product: 'Mocha',
            category: 'Beverages',
            price: 80,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20230918/ourmid/pngtree-mocha-coffee-frappe-in-glass-png-image_10125631.png"
        },{
            id: 254,
            product: 'Cold Coffee',
            category: 'Beverages',
            price: 60,
            count : 1,
            image: "https://rosepng.com/wp-content/uploads/2024/09/s11728_cold_coffee_isolated_on_white_background_4c14cfac-1154-4664-8c53-d4f019c2ccc9_0-photoroom.png"
        },{
            id: 255,
            product: 'Espresso ',
            category: 'Beverages',
            price: 45,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20230918/ourmid/pngtree-cup-of-espresso-coffee-png-image_10121518.png"
        },{
            id: 256,
            product: 'Macchiato',
            category: 'Beverages',
            price: 65,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20250209/ourmid/pngtree-layered-latte-macchiato-png-image_15430008.png"
        },{
            id: 257,
            product: 'Instant Coffee',
            category: 'Beverages',
            price: 30,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/thumbnails/053/581/271/small/a-white-coffee-cup-with-steam-rising-from-it-sits-on-a-white-saucer-png.png"
        },{
            id: 258,
            product: 'Orange Juice',
            category: 'Beverages',
            price: 40,
            count : 1,
            image: "https://rosepng.com/wp-content/uploads/2024/02/s11728_juice_isolated_on_white_background_-stylize_200_-v_6_7999e0b8-8262-421b-8c6f-c7395894a71c_0-photoroom-png-photoroom_11zon.png"
        },
        {
            id: 259,
            product: 'Apple Juice ',
            category: 'Beverages',
            price: 50,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240130/ourmid/pngtree-lovely-apple-juice-png-image_11569499.png"
        },{
            id: 260,
            product: 'Mango Juice',
            category: 'Beverages',
            price: 55,
            count : 1,
            image: "https://wallpapers.com/images/hd/mango-juice-png-80-7opm5qnqifgepfm8.jpg"
        },{
            id: 261,
            product: 'Watermelon Juice ',
            category: 'Beverages',
            price: 40,
            count : 1,
            image: "https://pngmax.com/_next/image?url=https%3A%2F%2Fpng-max.s3.ap-south-1.amazonaws.com%2Foriginal%2Ff50b5dcb-2342-4210-989b-27269b63509f.png&w=256&q=75"
        },{
            id: 262,
            product: 'Pineapple Juice',
            category: 'Beverages',
            price: 50,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240131/ourmid/pngtree-a-glass-of-pineapple-juice-png-image_11524081.png"
        },{
            id: 263,
            product: 'Pomegranate Juice',
            category: 'Beverages',
            price: 70,
            count : 1,
            image: "https://img.pikbest.com/origin/09/08/49/677pIkbEsTEsF.png!sw800"
        },{
            id: 264,
            product: 'Mixed Fruit Juice ',
            category: 'Beverages',
            price: 60,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20241101/ourmid/pngtree-mixed-fruit-juice-png-image_14227939.png"
        },{
            id: 265,
            product: 'Mosambi Juice',
            category: 'Beverages',
            price: 35,
            count : 1,
            image: "https://pngmax.com/_next/image?url=https%3A%2F%2Fpng-max.s3.ap-south-1.amazonaws.com%2Flow%2Fc5edece1-1a94-4ec1-aca0-6180dfebc5cd.png&w=1200&q=75"
        },{
            id: 266,
            product: 'Carrot Juice ',
            category: 'Beverages',
            price: 45,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/thumbnails/049/633/083/small_2x/refreshing-carrot-juice-with-a-transparent-background-a-perfect-summer-drink-png.png"
        },{
            id: 267,
            product: 'Beetroot Juice',
            category: 'Beverages',
            price: 50,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/previews/055/821/836/non_2x/glass-of-beetroot-juice-on-transparent-background-free-png.png"
        },{
            id: 268,
            product: 'Mango Milkshake ',
            category: 'Beverages',
            price: 70,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240626/ourmid/pngtree-creamy-mango-milkshake-summer-drink-png-image_12862609.png"
        },{
            id: 269,
            product: 'Chocolate Milkshake',
            category: 'Beverages',
            price: 65,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240815/ourmid/pngtree-chocolate-milkshake-png-image_13494230.png"
        },{
            id: 270,
            product: 'Vanilla Milkshake',
            category: 'Beverages',
            price: 60,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/previews/060/351/844/non_2x/vanilla-milkshake-with-whipped-cream-and-a-cherry-free-png.png"
        },{
            id: 271,
            product: 'Strawberry Milkshake',
            category: 'Beverages',
            price: 75,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/thumbnails/049/667/570/small/strawberry-milkshake-with-whipped-cream-and-a-transparent-background-png.png"
        },{
            id: 272,
            product: 'Banana Milkshake',
            category: 'Beverages',
            price: 55,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/thumbnails/059/935/057/small/refreshing-banana-milkshake-with-creamy-topping-and-slice-garnish-png.png"
        },{
            id: 273,
            product: 'Oreo Milkshake',
            category: 'Beverages',
            price: 80,
            count : 1,
            image: "https://wallpapers.com/images/high/oreo-milkshake-ingredient-png-ykn64-vqxjk8q7cj6e9eem.png"
        },{
            id: 274,
            product: 'Mixed Berry Smoothie',
            category: 'Beverages',
            price: 85,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20250221/ourmid/pngtree-glass-of-mixed-berry-smoothie-png-image_15541979.png"
        },
        {
            id: 275,
            product: 'Protein Smoothie',
            category: 'Beverages',
            price: 95,
            count : 1,
            image: "https://wallpapers.com/images/hd/protein-power-smoothie-png-45-1g8h4fi078ofnh3l.jpg"
        },{
            id: 276,
            product: 'Green Smoothie ',
            category: 'Beverages',
            price: 90,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240603/ourmid/pngtree-plastic-cup-green-smoothie-mockup-realistic-style-png-image_12603435.png"
        },{
            id: 277,
            product: 'Peanut Butter Smoothie',
            category: 'Beverages',
            price: 85,
            count : 1,
            image: "https://wallpapers.com/images/hd/chocolate-peanut-butter-smoothie-png-pvl-ndpjtojkiehzavnv.jpg"
        },{
            id: 278,
            product: 'Coca Cola',
            category: 'Beverages',
            price: 30,
            count : 1,
            image: "https://png.pngtree.com/recommend-works/png-clipart/20250112/ourmid/pngtree-three-bottles-of-coca-cola-png-image_15148128.png"
        },{
            id: 279,
            product: 'Pepsi',
            category: 'Beverages',
            price: 30,
            count : 1,
            image: "https://wallpapers.com/images/hd/pepsi-can-splash-dynamic-advertisement-nrmd9ymdbo1qbtd7.png"
        },{
            id: 280,
            product: 'Sprite',
            category: 'Beverages',
            price: 30,
            count : 1,
            image: "https://pngimg.com/d/sprite_PNG98773.png"
        },{
            id: 281,
            product: 'Fanta',
            category: 'Beverages',
            price: 30,
            count : 1,
            image: "https://pngimg.com/d/fanta_PNG32.png"
        },{
            id: 282,
            product: 'Limca ',
            category: 'Beverages',
            price: 30,
            count : 1,
            image: "https://www.jamoona.com/cdn/shop/files/Limca-300ml-Softdrink--Dose--9017180.png?v=1753217555"
        },{
            id: 283,
            product: 'Sweet Lassi',
            category: 'Beverages',
            price: 40,
            count : 1,
            image: "https://pngmax.com/_next/image?url=https%3A%2F%2Fpng-max.s3.ap-south-1.amazonaws.com%2Flow%2F5df0571c-c7e6-4782-83d0-0f3a10b7e961.png&w=1200&q=75"
        },{
            id: 284,
            product: 'Mango Lassi',
            category: 'Beverages',
            price: 40,
            count : 1,
            image: "https://wallpapers.com/images/hd/mango-juice-png-80-7opm5qnqifgepfm8.jpg"
        },
        {
            id: 285,
            product: 'Rose Lassi',
            category: 'Beverages',
            price: 40,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240724/ourmid/pngtree-rose-falooda-drink-poster-with-syrup-and-vermicelli-sof-illustration-food-png-image_13182860.png"
        },{
            id: 286,
            product: 'Mint Lassi ',
            category: 'Beverages',
            price: 45,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20241002/ourmid/pngtree-a-glass-of-lassi-isolated-on-white-transparent-background-png-image_13998579.png"
        },{
            id: 287,
            product: 'Banana Lassi',
            category: 'Beverages',
            price: 40,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240913/ourmid/pngtree-mango-banana-smoothie-png-image_12921084.png"
        },{
            id: 288,
            product: 'Buttermilk (Chaas)',
            category: 'Beverages',
            price: 45,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20250426/ourmid/pngtree-authentic-lassi-in-a-rustic-mug-png-image_16115979.png"
        },{
            id: 289,
            product: 'Masala Chaas',
            category: 'Beverages',
            price: 40,
            count : 1,
            image: "https://png.pngtree.com/png-clipart/20230412/ourmid/pngtree-indian-buttermilk-drink-png-image_6702270.png"
        },{
            id: 290,
            product: 'Thandai',
            category: 'Beverages',
            price: 60,
            count : 1,
            image: "https://pakistanatlas.com/wp-content/uploads/2020/09/Pakistani-Food_0157_158-Sardai-_-Thandai.png"
        },{
            id: 291,
            product: 'Jal Jeera',
            category: 'Beverages',
            price: 40,
            count : 1,
            image: "https://pakistanatlas.com/wp-content/uploads/2020/09/Pakistani-Food_0163_164-Zeera-Sharbat.png"
        },{
            id: 292,
            product: 'Aam Panna ',
            category: 'Beverages',
            price: 45,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/thumbnails/067/463/845/small/aam-panna-indian-summer-drink-isolated-on-transparent-background-png.png"
        },{
            id: 293,
            product: 'Kokum Sharbat',
            category: 'Beverages',
            price: 50,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20241107/ourmid/pngtree-3d-cranberry-juice-splash-in-glass-on-transparent-background-png-image_14312230.png"
        },{
            id: 294,
            product: 'Sattu Drink',
            category: 'Beverages',
            price: 60,
            count : 1,
            image: "https://pakistanatlas.com/wp-content/uploads/2020/09/Pakistani-Food_0156_157-Sattu-Drink.png"
        },{
            id: 295,
            product: 'Sugarcane Juice',
            category: 'Beverages',
            price: 30,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240506/ourmid/pngtree-sugarcane-juice-with-lemon-mint-png-image_12362442.png"
        },{
            id: 296,
            product: 'Tender Coconut Water',
            category: 'Beverages',
            price: 60,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20250322/ourmid/pngtree-fresh-green-coconut-with-water-droplets-on-surface-png-image_15850470.png"
        },{
            id: 297,
            product: 'Lemon Honey Water',
            category: 'Beverages',
            price: 65,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20231123/ourmid/pngtree-3d-honey-lemon-water-transparent-background-png-image_10715986.png"
        },{
            id: 298,
            product: 'Cucumber Mint Water',
            category: 'Beverages',
            price: 45,
            count : 1,
            image: "https://wallpapers.com/images/hd/cucumber-mint-mojito-refreshment-pisdnxlky7y13g4q.jpg"
        },{
            id: 299,
            product: 'Aloe Vera Juice',
            category: 'Beverages',
            price: 50,
            count : 1,
            image: "https://mahaoverseas.com/wp-content/uploads/2024/10/freepicdownloader.com_-refreshing-aloe-vera-juice-normal-removebg-preview.png"
        },
        {
            id: 300,
            product: 'Wheatgrass Shot ',
            category: 'Beverages',
            price: 55,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20250703/ourmid/pngtree-fresh-wheatgrass-juice-in-glass-with-sprigs-isolated-on-transparent-background-png-image_16601567.webp"
        },{
            id: 301,
            product: 'Amla Juice',
            category: 'Beverages',
            price: 60,
            count : 1,
            image: "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/g/67e788f4b713ec945a2849e1/istockphoto-1310998360-removebg-preview-640x640.png"
        },{
            id: 302,
            product: 'Iced Tea',
            category: 'Beverages',
            price: 35,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240519/ourmid/pngtree-jumbo-cup-iced-tea-hd-png-image_12495355.png"
        },{
            id: 303,
            product: 'Virgin Mojito',
            category: 'Beverages',
            price: 55,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240207/ourmid/pngtree-mojitos-summer-cocktail-png-image_11673113.png"
        },{
            id: 505,
            product: 'Blue Lagoon',
            category: 'Beverages',
            price: 65,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20250320/ourmid/pngtree-classic-blue-lagoon-cocktail-with-a-stylish-look-png-image_15786733.png"
        },{
            id: 304,
            product: 'Shirley Temple',
            category: 'Beverages',
            price: 75,
            count : 1,
            image: "https://www.finestcall.com/wp-content2/uploads/sites/23/2021/12/Shirly-Temple-of-Doom-1-scaled-1.png"
        },{
            id: 305,
            product: 'Fresh Lime Soda',
            category: 'Beverages',
            price: 30,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20250301/ourmid/pngtree-fresh-lime-soda-drink-with-ice-and-zesty-citrus-png-image_15681470.png"
        },{
            id: 306,
            product: 'Hot Chocolate',
            category: 'Beverages',
            price: 85,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20231106/ourmid/pngtree-realistic-hot-cocoa-png-image_10495904.png"
        },{
            id: 307,
            product: 'Rose Milk',
            category: 'Beverages',
            price: 40,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/thumbnails/044/266/859/small/strawberry-juice-isolated-detailed-watercolor-hand-drawn-painting-illustration-png.png"
        },
        {
            id: 308,
            product: 'Jigarthanda',
            category: 'Beverages',
            price: 85,
            count : 1,
            image: "https://mfjllp.com/wp-content/uploads/2024/07/Home-hero-banner-jigarthanda-products-1-1-768x768.png"
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

   const [quantity, setQuantity] = useState(1)


//      const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     autoplay: true,
//     autoplaySpeed: 2500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//   };


// const particularproduct = (element,numbers) =>{
//     const uniquedata = countdown.filter((object,index,arr)=> index == arr.findIndex((ddd)=>  ddd.id === object.id))
//     console.log("uniquedata",uniquedata);
//     const findingpostion =  uniquedata.indexOf(element);
//     uniquedata[findingpostion].count = uniquedata[findingpostion].count + numbers 
//     setCart([...uniquedata])
    
    
    
// }



const particularproduct = (element, numbers) => {
  const uniquedata = countdown.filter(
    (object, index, arr) => index === arr.findIndex((ddd) => ddd.id === object.id)
  );

  console.log("uniquedata", uniquedata);

  const findingpostion = uniquedata.indexOf(element);

  if (findingpostion !== -1) {
    const currentCount = uniquedata[findingpostion].count || 1;
    const newCount = currentCount + numbers;

    // ✅ Prevent negative count
    uniquedata[findingpostion].count = newCount < 1 ? 1 : newCount;

    setCart([...uniquedata]);
  }
};

    

  









    return (
        <div>
            
        {/* <Navbar></Navbar> */}
        <Anothernav></Anothernav>
        <Slider></Slider>
        {/* <FantaWebsite></FantaWebsite> */}



{/* 
        <Slider {...settings}>
  {productdetails.slice(0, 8).map((item) => (
    <div key={item.id} className="text-center p-3">
      <img
        src={item.image}
        alt={item.product}
        style={{
          width: "150px",
          height: "150px",
          objectFit: "contain",
          margin: "auto",
        }}
      />
      <h6 className="mt-2">{item.product}</h6>
      <p className="text-success fw-bold">₹{item.price}</p>
    </div>
  ))}
</Slider> */}

        


         

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

                    {/* <Solar></Solar> */}

          <img src="https://images.squarespace-cdn.com/content/v1/5c64112fd86cc91b76535d5b/1648123012269-3BPULSOKWXWTW3KGHPFZ/STARBUCKS_PLANT_BASED_48%24-2.jpg?format=2500w" alt="" style={{width:"100%",padding:"100px 0px", height:'auto'}} />

            {/* <h1 className='text-danger mt-5 pt-5'>Beverages Items:</h1> */}


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
                                        {/* <p style={{color:"white"}}>Total : ₹{element.price * quantity}</p> */}
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
            {/* <FantaWebsite></FantaWebsite> */}



<Link to= '/cart'><img src={car} alt="carticon" className='carticon' />
        <h3 className='cartcountbtn'>{cart.length}</h3></Link>            
        </div>
    )
}

export default Beverages







// import React, { useEffect, useState } from 'react'
// import { Link, useLocation } from 'react-router-dom'
// import car from '../images/cart.png'
// import Navbar from '../Navbar'
// import Slider from '../Slider'

// const Beverages = ({cart, setCart}) => {
//     const [productdetails, setProductdetails] = useState([
//         {
//             id: 238,
//             product: 'Masala Chai',
//             category: 'Beverages',
//             price: 15,
//             count : 1,
//             image: "https://png.pngtree.com/png-vector/20240708/ourmid/pngtree-indian-cardamom-tea-refreshment-png-image_13038788.png"
//         },
//         {
//             id: 239,
//             product: 'Ginger Tea',
//             category: 'Beverages',
//             price: 20,
//             count : 1,
//             image: "https://png.pngtree.com/png-vector/20240623/ourmid/pngtree-hot-ginger-tea-isolated-on-transparent-background-png-image_12828393.png"
//         },
//         {
//             id: 240,
//             product: 'Cardamom Tea ',
//             category: 'Beverages',
//             price: 20,
//             count : 1,
//             image: "https://png.pngtree.com/png-vector/20240611/ourmid/pngtree-spice-infusion-cardamom-tea-recipes-png-image_12692423.png"
//         },
//         {
//             id: 241,
//             product: 'Plain Tea',
//             category: 'Beverages',
//             price: 12,
//             count : 1,
//             image: "https://png.pngtree.com/png-vector/20250227/ourmid/pngtree-tea-cup-with-hot-drink-and-saucer-png-image_15585357.png"
//         },
//         {
//             id: 242,
//             product: 'Black Tea',
//             category: 'Beverages',
//             price: 25,
//             count : 1,
//             image: "https://png.pngtree.com/png-clipart/20230816/ourmid/pngtree-black-tea-or-sulaimani-png-image_9183716.png"
//         },
//         {
//             id: 243,
//             product: 'Green Tea',
//             category: 'Lunch',
//             price: 30,
//             count : 1,
//             image: "https://png.pngtree.com/png-vector/20240722/ourmid/pngtree-refreshing-green-tea-perfect-for-any-time-of-day-png-image_13211693.png"
//         },
//         {
//             id: 244,
//             product: 'Lemon Tea',
//             category: 'Beverages',
//             price: 25,
//             count : 1,
//             image: "https://pngmax.com/_next/image?url=https%3A%2F%2Fpng-max.s3.ap-south-1.amazonaws.com%2Flow%2F0166eb0a-45b5-400d-9354-7edb40d0dfbc.png&w=1200&q=75"
//         },
//         {
//             id: 245,
//             product: 'Honey Ginger Tea',
//             category: 'Beverages',
//             price: 30,
//             count : 1,
//             image: "https://img.pikbest.com/origin/10/12/36/82jpIkbEsTivR.png!f305cw"
//         },
//         {
//             id: 246,
//             product: 'Tulsi Tea',
//             category: 'Beverages',
//             price: 35,
//             count : 1,
//             image: "https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-a-cup-of-tea-with-leaves-tea-png-image_9193006.png"
//         },
//         {
//             id: 247,
//             product: 'Cutting Chai  ',
//             category: 'Beverages',
//             price: 15,
//             count : 1,
//             image: "https://png.pngtree.com/png-clipart/20221109/ourmid/pngtree-fresh-milk-tea-or-indian-kadak-chai-png-image_6432496.png"
//         },
//         {
//             id: 248,
//             product: 'Filter Coffee',
//             category: 'Beverages',
//             price: 30,
//             count : 1,
//             image: "https://png.pngtree.com/png-clipart/20230218/ourmid/pngtree-ground-coffee-traditional-cup-png-image_6608756.png"
//         },
//         {
//             id: 249,
//             product: 'Black Coffee',
//             category: 'Beverages',
//             price: 25,
//             count : 1,
//             image: "https://static.vecteezy.com/system/resources/thumbnails/024/984/825/small_2x/black-cup-of-coffee-transparent-background-pro-png.png"
//         },
//         {
//             id: 250,
//             product: 'Cappuccino',
//             category: 'Beverages',
//             price: 70,
//             count : 1,
//             image: "https://png.pngtree.com/png-vector/20250327/ourmid/pngtree-assorted-coffee-cups-including-cappuccino-cup-with-heart-png-image_15878581.png"
//         },
//         {
//             id: 251,
//             product: 'Latte',
//             category: 'Beverages',
//             price: 80,
//             count : 1,
//             image: "https://static.vecteezy.com/system/resources/thumbnails/023/742/327/small_2x/latte-coffee-isolated-illustration-ai-generative-free-png.png"
//         },
//         {
//             id: 252,
//             product: 'Americano',
//             category: 'Beverages',
//             price: 55,
//             count : 1,
//             image: "https://static.vecteezy.com/system/resources/previews/036/159/760/non_2x/ai-generated-americano-is-espresso-with-hot-water-with-transparent-background-free-png.png"
//         },
//         {
//             id: 253,
//             product: 'Mocha',
//             category: 'Beverages',
//             price: 80,
//             count : 1,
//             image: "https://png.pngtree.com/png-vector/20230918/ourmid/pngtree-mocha-coffee-frappe-in-glass-png-image_10125631.png"
//         }
//         // ... (keeping only first 16 items for brevity, but you can add all your items)
//     ])

//     const location = useLocation();
//     const [searchitems, setSearchitems] = useState('');

//     useEffect(()=>{
//         setSearchitems(location.state?.searchitems || '')
//     },[location.state])

//     const filteredproducts = productdetails.filter((items) =>
//         items.product.toLowerCase().includes(searchitems.toLowerCase())
//     )

//     const addtocart = (product)=>{
//         setCart(cart =>{
//             let cartitems = cart.find((item)=>item.id === product.id)
//             return cartitems ? cart.map((item)=> item.id === product.id ? {...item, count : item.count +1} : item) : [...cart, {...product, count : 1}]
//         })
//     }

//     const [quantity, setQuantity] = useState(1)

//     return (
//         <div>
//             <Navbar></Navbar>
//             <Slider></Slider>

//             <div className="cardsection">
//                 <div className="card1 ">
//                     <Link to = '/shop'><img src="https://rosepng.com/wp-content/uploads/2024/09/s11728_chicken_biryani_isolated_on_white_background_da1c56d4-0b9e-493f-bb41-c2277115512d_0-photoroom.png" alt="Briyani" width={"150px"} /></Link>
//                     <p>Briyani</p>
//                 </div>
//                 <div className="card1">
//                     <Link to= "/pizza"><img src="https://png.pngtree.com/png-vector/20241211/ourmid/pngtree-authentic-italian-pizza-with-cheese-and-fresh-vegetable-toppings-png-image_14714611.png" alt="Pizza"  width={"170px"}/></Link>
//                     <p>Pizza</p>
//                 </div>
//                 <div className="card1">
//                     <Link to='/noodles'><img src="https://rosepng.com/wp-content/uploads/2024/10/s11728_chowmein_isolated_on_white_background_-stylize_200_6963855d-6af2-47ef-9b61-c1e27057be3a_3-photoroom.png" alt="Noodles"  width={"140px"} /></Link>
//                     <p>Noodles</p>
//                 </div>
//                 <div className="card1">
//                     <Link to = '/paratha'><img src="https://png.pngtree.com/png-vector/20250301/ourmid/pngtree-a-plate-of-stuffed-parathas-with-yogurt-and-pickles-on-transparent-png-image_15682989.png" alt="Paratha"  width={"180px"}/></Link>
//                     <p>Paratha</p>
//                 </div>
//                 <div className="card1">
//                     <Link to = '/shakes'><img src="https://static.vecteezy.com/system/resources/previews/029/107/695/non_2x/chocolate-milkshake-with-toppings-on-a-transparent-background-ai-generative-free-png.png" alt="Shakes"  width={"150px"}/></Link>
//                     <p>Shakes</p>
//                 </div>
//                 <div className="card1">
//                     <Link to={'/chatitems'}><img src="https://static.vecteezy.com/system/resources/previews/052/935/114/non_2x/delicious-pani-puri-clipart-free-png.png" alt="Chat items"  width={"150px"}/></Link>
//                     <p>Chat Items</p>
//                 </div>
//             </div>

//             {/* Modern Instagram-Style Cards Section */}
//             <div className="modern-beverages-container">
//                 <div className="beverages-grid">
//                     {filteredproducts.map((element, index) =>
//                         <div key={element.id} className="modern-beverage-card">
//                             <div className="card-image-wrapper">
//                                 <img 
//                                     src={element.image} 
//                                     className="beverage-image"
//                                     alt={element.product}
//                                 />
//                                 <div className="image-overlay">
//                                     <div className="quick-actions">
//                                         <button className="heart-btn">
//                                             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                                                 <path d="20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
//                                             </svg>
//                                         </button>
//                                         <button className="view-btn">
//                                             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                                                 <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
//                                                 <circle cx="12" cy="12" r="3"></circle>
//                                             </svg>
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
                            
//                             <div className="card-content">
//                                 <div className="product-header">
//                                     <h3 className="product-name">{element.product}</h3>
//                                     <span className="category-badge">{element.category}</span>
//                                 </div>
                                
//                                 <div className="price-section">
//                                     <span className="price">₹{element.price}</span>
//                                     <span className="price-label">per serving</span>
//                                 </div>
                                
//                                 <div className="quantity-section">
//                                     <div className="quantity-controls">
//                                         <button 
//                                             className="qty-btn minus"
//                                             onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
//                                         >
//                                             −
//                                         </button>
//                                         <span className="quantity-display">{quantity}</span>
//                                         <button 
//                                             className="qty-btn plus"
//                                             onClick={() => setQuantity(quantity + 1)}
//                                         >
//                                             +
//                                         </button>
//                                     </div>
//                                     <div className="total-price">
//                                         Total: <span>₹{element.price * quantity}</span>
//                                     </div>
//                                 </div>
                                
//                                 <button 
//                                     className="add-to-cart-btn"
//                                     onClick={() => {
//                                         addtocart(element);
//                                         // Add your Swal.fire here
//                                     }}
//                                 >
//                                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                                         <circle cx="9" cy="21" r="1"></circle>
//                                         <circle cx="20" cy="21" r="1"></circle>
//                                         <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
//                                     </svg>
//                                     Add to Cart
//                                 </button>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>

//             <Link to='/cart'>
//                 <img src={car} alt="carticon" className='carticon' />
//                 <h3 className='cartcountbtn'>{cart.length}</h3>
//             </Link>

//             <style jsx>{`
//                 .modern-beverages-container {
//                     padding: 40px 20px;
//                     background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//                     min-height: 100vh;
//                 }

//                 .beverages-grid {
//                     display: grid;
//                     grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
//                     gap: 30px;
//                     max-width: 1400px;
//                     margin: 0 auto;
//                 }

//                 .modern-beverage-card {
//                     background: rgba(255, 255, 255, 0.95);
//                     backdrop-filter: blur(20px);
//                     border-radius: 24px;
//                     overflow: hidden;
//                     box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
//                     transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
//                     position: relative;
//                     border: 1px solid rgba(255, 255, 255, 0.2);
//                 }

//                 .modern-beverage-card::before {
//                     content: '';
//                     position: absolute;
//                     top: 0;
//                     left: 0;
//                     right: 0;
//                     height: 4px;
//                     background: linear-gradient(90deg, #ff6b6b, #ffd93d, #6bcf7f, #4d72aa, #9b59b6);
//                     opacity: 0;
//                     transition: opacity 0.3s ease;
//                 }

//                 .modern-beverage-card:hover::before {
//                     opacity: 1;
//                 }

//                 .modern-beverage-card:hover {
//                     transform: translateY(-10px) scale(1.02);
//                     box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
//                 }

//                 .card-image-wrapper {
//                     position: relative;
//                     height: 280px;
//                     background: linear-gradient(145deg, #f8f9ff, #e8ecff);
//                     display: flex;
//                     align-items: center;
//                     justify-content: center;
//                     overflow: hidden;
//                 }

//                 .beverage-image {
//                     width: 200px;
//                     height: 200px;
//                     object-fit: contain;
//                     transition: all 0.4s ease;
//                     filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.1));
//                 }

//                 .modern-beverage-card:hover .beverage-image {
//                     transform: scale(1.1) rotate(5deg);
//                 }

//                 .image-overlay {
//                     position: absolute;
//                     top: 0;
//                     left: 0;
//                     right: 0;
//                     bottom: 0;
//                     background: linear-gradient(45deg, rgba(0, 0, 0, 0.1), rgba(255, 255, 255, 0.1));
//                     opacity: 0;
//                     transition: all 0.3s ease;
//                     display: flex;
//                     align-items: flex-start;
//                     justify-content: flex-end;
//                     padding: 15px;
//                 }

//                 .modern-beverage-card:hover .image-overlay {
//                     opacity: 1;
//                 }

//                 .quick-actions {
//                     display: flex;
//                     flex-direction: column;
//                     gap: 10px;
//                 }

//                 .heart-btn, .view-btn {
//                     width: 40px;
//                     height: 40px;
//                     background: rgba(255, 255, 255, 0.9);
//                     border: none;
//                     border-radius: 50%;
//                     display: flex;
//                     align-items: center;
//                     justify-content: center;
//                     transition: all 0.3s ease;
//                     color: #666;
//                     backdrop-filter: blur(10px);
//                 }

//                 .heart-btn:hover, .view-btn:hover {
//                     background: #ff6b6b;
//                     color: white;
//                     transform: scale(1.1);
//                 }

//                 .card-content {
//                     padding: 25px;
//                 }

//                 .product-header {
//                     display: flex;
//                     justify-content: space-between;
//                     align-items: flex-start;
//                     margin-bottom: 15px;
//                 }

//                 .product-name {
//                     font-size: 1.4rem;
//                     font-weight: 700;
//                     color: #2c3e50;
//                     margin: 0;
//                     line-height: 1.2;
//                 }

//                 .category-badge {
//                     background: linear-gradient(45deg, #667eea, #764ba2);
//                     color: white;
//                     padding: 4px 12px;
//                     border-radius: 15px;
//                     font-size: 0.75rem;
//                     font-weight: 600;
//                     text-transform: uppercase;
//                     letter-spacing: 0.5px;
//                 }

//                 .price-section {
//                     display: flex;
//                     align-items: baseline;
//                     gap: 8px;
//                     margin-bottom: 20px;
//                 }

//                 .price {
//                     font-size: 2rem;
//                     font-weight: 800;
//                     color: #27ae60;
//                     background: linear-gradient(45deg, #27ae60, #2ecc71);
//                     -webkit-background-clip: text;
//                     -webkit-text-fill-color: transparent;
//                     background-clip: text;
//                 }

//                 .price-label {
//                     color: #7f8c8d;
//                     font-size: 0.85rem;
//                     font-weight: 500;
//                 }

//                 .quantity-section {
//                     display: flex;
//                     justify-content: space-between;
//                     align-items: center;
//                     margin-bottom: 25px;
//                     padding: 15px;
//                     background: rgba(102, 126, 234, 0.05);
//                     border-radius: 15px;
//                     border: 1px solid rgba(102, 126, 234, 0.1);
//                 }

//                 .quantity-controls {
//                     display: flex;
//                     align-items: center;
//                     gap: 15px;
//                 }

//                 .qty-btn {
//                     width: 35px;
//                     height: 35px;
//                     border: none;
//                     border-radius: 50%;
//                     background: linear-gradient(45deg, #667eea, #764ba2);
//                     color: white;
//                     font-size: 1.2rem;
//                     font-weight: 600;
//                     cursor: pointer;
//                     transition: all 0.3s ease;
//                     display: flex;
//                     align-items: center;
//                     justify-content: center;
//                 }

//                 .qty-btn:hover {
//                     transform: scale(1.1);
//                     box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
//                 }

//                 .quantity-display {
//                     font-size: 1.1rem;
//                     font-weight: 600;
//                     color: #2c3e50;
//                     min-width: 25px;
//                     text-align: center;
//                 }

//                 .total-price {
//                     font-weight: 600;
//                     color: #2c3e50;
//                 }

//                 .total-price span {
//                     color: #e74c3c;
//                     font-size: 1.1rem;
//                 }

//                 .add-to-cart-btn {
//                     width: 100%;
//                     padding: 15px;
//                     background: linear-gradient(45deg, #ff6b6b, #ee5a6f);
//                     border: none;
//                     border-radius: 15px;
//                     color: white;
//                     font-size: 1.1rem;
//                     font-weight: 600;
//                     cursor: pointer;
//                     transition: all 0.3s ease;
//                     display: flex;
//                     align-items: center;
//                     justify-content: center;
//                     gap: 10px;
//                     text-transform: uppercase;
//                     letter-spacing: 0.5px;
//                 }

//                 .add-to-cart-btn:hover {
//                     background: linear-gradient(45deg, #ee5a6f, #ff6b6b);
//                     transform: translateY(-2px);
//                     box-shadow: 0 10px 25px rgba(238, 90, 111, 0.4);
//                 }

//                 .add-to-cart-btn:active {
//                     transform: translateY(0);
//                 }

//                 @media (max-width: 768px) {
//                     .beverages-grid {
//                         grid-template-columns: 1fr;
//                         gap: 20px;
//                         padding: 0 10px;
//                     }

//                     .modern-beverage-card {
//                         border-radius: 20px;
//                     }

//                     .card-content {
//                         padding: 20px;
//                     }

//                     .product-name {
//                         font-size: 1.2rem;
//                     }

//                     .price {
//                         font-size: 1.6rem;
//                     }
//                 }

//                 @keyframes fadeInUp {
//                     from {
//                         opacity: 0;
//                         transform: translateY(30px);
//                     }
//                     to {
//                         opacity: 1;
//                         transform: translateY(0);
//                     }
//                 }

//                 .modern-beverage-card {
//                     animation: fadeInUp 0.6s ease forwards;
//                 }

//                 .modern-beverage-card:nth-child(odd) {
//                     animation-delay: 0.1s;
//                 }

//                 .modern-beverage-card:nth-child(even) {
//                     animation-delay: 0.2s;
//                 }
//             `}</style>
//         </div>
//     )
// }

// export default Beverages