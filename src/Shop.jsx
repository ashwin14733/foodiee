// import { icon, text } from '@fortawesome/fontawesome-svg-core'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import car from './images/cart.png' 
import Navbar from './Navbar'
import Sliderone from './Sliderone'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from './Slider'
import ProductCarousel from './ProductCarousel'
import FantaWebsite from './FantaWebsite'
import Solar from './Solar'
import Anothernav from './Anothernav'

const Shop = ({cart, setCart}) => {


    const [productdetails, setProductdetails] = useState([
        {
            id: 309,
            product: 'Chicken Briyani',
            category: 'Lunch',
            price: 150,
            count : 1,
            image: "https://rosepng.com/wp-content/uploads/2024/09/s11728_chicken_biryani_isolated_on_white_background_da1c56d4-0b9e-493f-bb41-c2277115512d_0-photoroom.png"
        },
        {
            id: 309,
            product: 'Mutton Briyani',
            category: 'Lunch',
            price: 350,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240731/ourmid/pngtree-traditional-indian-mutton-biryani-png-image_13300367.png"
        },
        {
            id: 310,
            product: 'Prawn Briyani',
            category: 'Lunch',
            price: 200,
            count : 1,
            image: "https://seemattyrestaurant.com/wp-content/uploads/2024/03/prawn-biriyani.png"
        },
        {
            id: 311,
            product: 'Fish Briyani',
            category: 'Lunch',
            price: 250,
            count : 1,
            image: "https://seemattyrestaurant.com/wp-content/uploads/2024/03/fish_biriyani.png"
        },
        {
            id: 312,
            product: 'Hydrabad Dum Briyani',
            category: 'Lunch',
            price: 250,
            count : 1,
            image: "https://rosepng.com/wp-content/uploads/2024/09/s11728_chicken_biryani_isolated_on_white_background_da1c56d4-0b9e-493f-bb41-c2277115512d_0-photoroom.png"
        },
        {
            id: 313,
            product: 'Malabar Briyani',
            category: 'Lunch',
            price: 280,
            count : 1,
            image: "https://haadibiryani.com/wp-content/uploads/2020/08/MuttonBiryani.png"
        },
        {
            id: 314,
            product: 'Dindigul Briyani',
            category: 'Lunch',
            price: 250,
            count : 1,
            image: "https://dindigulmannarbiriyani.in/images/din.png"
        },
        {
            id: 315,
            product: 'Ambur Briyani',
            category: 'Lunch',
            price: 280,
            count : 1,
            image: "https://flashbiriyani.in/wp-content/uploads/2023/12/pnghq.com-chicken-biryani-png-1355-download.png"
        },
        {
            id: 316,
            product: 'Quill Briyani',
            category: 'Lunch',
            price: 230,
            count : 1,
            image: "https://www.arusuvaibriyani.com/images/product1.png"
        },
        {
            id: 317,
            product: 'Calcutta Briyani',
            category: 'Lunch',
            price: 200,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240727/ourmid/pngtree-mastering-the-art-of-biryani-authentic-recipes-and-techniques-png-image_13245161.png"
        },
        {
            id: 318,
            product: 'Wedding Briyani',
            category: 'Lunch',
            price: 350,
            count : 1,
            image: "https://png.pngtree.com/png-clipart/20230522/ourmid/pngtree-chicken-biryani-front-view-png-image_7104973.png"
        },
        {
            id: 319,
            product: 'Mandi Briyani',
            category: 'Lunch',
            price: 350,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240808/ourmid/pngtree-grilled-chicken-mandi-rice-a-culinary-delight-traditional-recipe-flavorful-isolated-png-image_13413537.png   "
        },
        {
            id: 320,
            product: 'Pani Puri',
            category: 'Chat',
            price: 20,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/previews/052/935/114/non_2x/delicious-pani-puri-clipart-free-png.png"
        },
        {
            id: 321,
            product: 'Aloo Potato Chat',
            category: 'Mixed Dish',
            price: 30,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20250513/ourmid/pngtree-aloo-tikki-topped-with-chutney-and-sev-png-image_16241245.png"
        },
        {
            id: 322,
            product: 'Corn Chat',
            category: 'Mixed Dish',
            price: 50,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240515/ourmid/pngtree-lip-smacking-chana-chaat-bowl-recipe-tasty-vegan-ideas-isolated-with-png-image_12470986.png"
        },
        {
            id: 323,
            product: 'Bhel Puri',
            category: 'Mixed Dish',
            price: 45,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/previews/051/043/736/non_2x/a-plate-of-colorful-indian-bhel-puri-or-pani-puri-with-vegetables-and-lime-on-a-transparent-background-perfect-for-product-banners-and-food-posts-free-png.png"
        },
        {
            id: 324,
            product: 'Vada Pav',
            category: 'Mixed Dish',
            price: 80,
            count : 1,
            image: "https://rosepng.com/wp-content/uploads/2024/09/s11728_vada_pav_isolated_on_white_background_6f846ef3-3cbb-43c1-bf28-00b29b6d40cb_1-photoroom.png"
        },
        {
            id: 325,
            product: 'Masala Puri',
            category: 'Mixed Dish',
            price: 45,
            count : 1,
            image: "https://www.kdmithaiwala.com/wp-content/uploads/2018/07/bhel-puri.png"
        },
        {
            id: 326,
            product: 'Samosa',
            category: 'Mixed Dish',
            price: 15,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240624/ourmid/pngtree-best-food-samosa-png-image_12840486.png"
        },
        {
            id: 327,
            product: 'Dahi Puri',
            category: 'Mixed Dish',
            price: 40,
            count : 1,
            image: "https://delhichaatpuri.com/wp-content/uploads/2024/10/81Na6DgwOL-removebg-preview.png"
        },
        {
            id: 328,
            product: 'Pav Bhaji',
            category: 'Mixed Dish',
            price: 85,
            count : 1,
            image: "https://rosepng.com/wp-content/uploads/2024/12/s11728_pav_bhaji_isolated_on_white_background_-stylize_200_b2e7d41e-b988-4514-8e72-48c4ad8fca6d_2-photoroom.png"
        },
        {
            id: 329,
            product: 'Aloo Bonda',
            category: 'Mixed Dish',
            price: 15,
            count : 1,
            image: "https://mysorecafe.com.au/wp-content/uploads/2022/07/Aloo-Bonda.png"
        },
        {
            id: 330,
            product: 'Masala Pav',
            category: 'Mixed Dish',
            price: 100,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20250301/ourmid/pngtree-spicy-indian-pav-bhaji-with-buttered-bun-and-side-garnish-on-png-image_15686603.png"
        },
        {
            id: 331,
            product: 'Channa Masala',
            category: 'Mixed Dish',
            price: 95,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/previews/039/107/086/non_2x/ai-generated-chana-chat-isolated-on-background-free-png.png"
        },
        {
            id: 332,
            product: 'Normal Paratha',
            category: 'Lunch & Dinner',
            price: 50,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/thumbnails/049/178/253/small_2x/aloo-paratha-on-transparent-background-png.png"
        },
        {
            id: 333,
            product: 'Paneer Paratha',
            category: 'Mixed Dish',
            price: 150,
            count : 1,
            image: "https://vadilalglobal.com/cdn/shop/files/MalaiPaneerParatha.png?v=1710916895&width=1946"
        },
        {
            id: 334,
            product: 'Gobi Paratha',
            category: 'Mixed Dish',
            price: 150,
            count : 1,
            image: "https://64.media.tumblr.com/07446f95e6f96f9aaa94be4db82217af/534253c094293b40-32/s1280x1920/c91774a5aa22dfda1c26840e9cbb54902a13a44e.pnj"
        },
        {
            id: 335,
            product: 'Aloo Paratha',
            category: 'Mixed Dish',
            price: 180,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20250301/ourmid/pngtree-a-plate-of-stuffed-parathas-with-yogurt-and-pickles-on-transparent-png-image_15682989.png"
        },
        {
            id: 336,
            product: 'Palak Paratha',
            category: 'Mixed Dish',
            price: 250,
            count : 1,
            image: "https://vadilalglobal.com/cdn/shop/files/SpinachParatha.png?v=1710917634&width=1445"
        },
        {
            id: 337,
            product: 'Methi Paratha',
            category: 'Mixed Dish',
            price: 280,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/previews/054/721/774/non_2x/gujarati-specialty-soft-methi-thepla-free-png.png"
        },
        {
            id: 338,
            product: 'Beetroot Paratha',
            category: 'Mixed Dish',
            price: 250,
            count : 1,
            image: "https://www.ethicaldelights.in/cdn/shop/files/8_791d83e2-a727-463a-bde7-5f87485d1594.png?v=1749205106"
        },
        {
            id: 339,
            product: 'Mix Veg Paratha',
            category: 'Mixed Dish',
            price: 180,
            count : 1,
            image: "https://crown-foods.com/wp-content/uploads/2023/05/mix-vegetable-pharata_11zon-1024x1024-1.png"
        },
        {
            id: 340,
            product: 'Egg Paratha',
            category: 'Mixed Dish',
            price: 30,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/previews/054/312/178/non_2x/a-golden-brown-paratha-served-alongside-a-sunny-side-up-egg-garnished-with-a-sprinkle-of-black-pepper-free-png.png"
        },
        {
            id: 341,
            product: 'Pizza Paratha',
            category: 'Mixed Dish',
            price: 100,
            count : 1,
            image: "https://framerusercontent.com/images/NNZq2cULL6eviZAp6PhoEhRXl94.png"
        },
        {
            id: 342,
            product: 'Poli Paratha ',
            category: 'Mixed Dish',
            price: 80,
            count : 1,
            image: "https://pakistanatlas.com/wp-content/uploads/2020/09/Pakistani-Food_0128_129-Basen-wali-roti.png"
        },
        {
            id: 343,
            product: 'Butter Naan Paratha',
            category: 'Mixed Dish',
            price: 100,
            count : 1,
            image: "https://img.pikbest.com/png-images/20241230/delicious-butter-naan-bread_11320792.png!bw700"
        },
        {
            id: 344,
            product: 'Egg Noodles',
            category: 'Lunch',
            price: 150,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/thumbnails/051/125/508/small_2x/delicious-fried-noodles-isolated-on-transparent-background-png.png"
        },
        {
            id: 345,
            product: 'Ramen Noodles',
            category: 'Mixed Dish',
            price: 250,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/previews/054/655/884/non_2x/delicious-bowl-of-japanese-ramen-noodles-free-png.png"
        },
        {
            id: 346,
            product: 'Hakka Noodles',
            category: 'Mixed Dish',
            price: 250,
            count : 1,
            image: "https://spicemantra.kz/wp-content/uploads/2024/10/veg-noodle.png"
        },
        {
            id: 347,
            product: 'Maggi',
            category: 'Mixed Dish',
            price: 250,
            count : 1,
            image: "https://rosepng.com/wp-content/uploads/2024/08/s11728_maggi_isolated_on_white_background_944358f0-3f5b-4c3f-8133-3488ec6f4110_2-photoroom.png   "
        },
        {
            id: 348,
            product: 'Chicken Noodles',
            category: 'Mixed Dish',
            price: 250,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20250321/ourmid/pngtree-delicious-asian-noodles-with-teriyaki-chicken-and-vegetables-in-black-bowl-png-image_15818154.png"
        },
        {
            id: 349,
            product: 'Prawn Noodles',
            category: 'Mixed Dish',
            price: 280,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20241219/ourmid/pngtree-3d-hot-shrimp-noodles-in-black-bowl-on-transparent-background-png-image_14800560.png"
        },
        {
            id: 350,
            product: 'Schezwan Noodles',
            category: 'Mixed Dish',
            price: 250,
            count : 1,
            image: "https://images.deliveryhero.io/image/talabat/MenuItems/23C54AAEAFB3EFB3A06E2027614B31DE"
        },
        {
            id: 351,
            product: 'Beef Noodles',
            category: 'Mixed Dish',
            price: 280,
            count : 1,
            image: "https://www.redefinemeat.com/wp-content/uploads/2024/07/COURSE_ADJUST4-3.png"
        },
        {
            id: 352,
            product: 'Paneer Crispy Noodles',
            category: 'Mixed Dish',
            price: 230,
            count : 1,
            image: "https://flatskitchen.com/upload_images/1734161110paneernoodles.png"
        },
        {
            id: 353,
            product: 'Jjajangmyeon',
            category: 'Mixed Dish',
            price: 200,
            count : 1,
            image: "https://omonihouse.uk/assets/images/07.png"
        },
        {
            id: 354,
            product: 'Manchurian noodles',
            category: 'Mixed Dish',
            price: 350,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240104/ourmid/pngtree-spicy-noodles-with-manchurian-png-image_11403000.png"
        },
        {
            id: 355,
            product: 'Veg Singapuri Noodles',
            category: 'Mixed Dish',
            price: 350,
            count : 1,
            image: "https://spicemantra.kz/wp-content/uploads/2024/10/vsn-700x550.png"
        },
         {
            id: 356,
            product: 'Chicken Pizza',
            category: 'Mixed Dish',
            price: 150,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240729/ourmid/pngtree-irresistible-chicken-pizza-closeup-with-juicy-pieces-png-image_13274343.png"
        },
        {
            id: 357,
            product: 'Veg Pizza',
            category: 'Mixed Dish',
            price: 250,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/previews/046/861/103/non_2x/delicious-veggie-pizza-isolated-on-a-transparent-background-free-png.png"
        },
        {
            id: 358,
            product: 'Chicken Golden Delight',
            category: 'Mixed Dish',
            price: 250,
            count : 1,
            image: "https://assets.touch2success.com/static/ab3189f4548c2800ef1257418ce49b07/img/1743135270phpJVc5rY.png"
        },
        {
            id: 359,
            product: 'Non Veg Supreme',
            category: 'Mixed Dish',
            price: 250,
            count : 1,
            image: "https://seemattyrestaurant.com/wp-content/uploads/2024/03/fish_biriyani.png"
        },
        {
            id: 360,
            product: 'Peppy Paneer',
            category: 'Mixed Dish',
            price: 250,
            count : 1,
            image: "https://b.zmtcdn.com/data/dish_photos/c70/8ed3b93a011efce578898b88d8c7dc70.png"
        },
        {
            id: 361,
            product: 'Chicken Dominator',
            category: 'Mixed Dish',
            price: 280,
            count : 1,
            image: "https://b.zmtcdn.com/data/dish_photos/455/03c68ceb2c7c47b3dfaccc5aa3817455.png"
        },
        {
            id: 362,
            product: 'Pepper Barbecue & Onion',
            category: 'Mixed Dish',
            price: 250,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/thumbnails/058/026/483/small_2x/tasty-chicken-pizza-with-onions-and-cheese-png.png"
        },
        {
            id: 363,
            product: 'Chicken Pepperoni',
            category: 'Mixed Dish',
            price: 280,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/previews/059/589/756/non_2x/pizza-with-chicken-pepperoni-and-basil-food-photography-cut-out-transparent-png.png"
        },
        {
            id: 364,
            product: 'CHICKEN SAUSAGE',
            category: 'Mixed Dish',
            price: 230,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240729/ourmid/pngtree-closeup-of-a-chicken-pizza-with-mouthwatering-toppings-png-image_13274350.png"
        },
        {
            id: 365,
            product: 'Non Veg Supreme',
            category: 'Mixed Dish',
            price: 200,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240913/ourmid/pngtree-pizza-chicken-food-png-vector-material-png-image_12896221.png"
        },
        {
            id: 366,
            product: 'Indi Chicken Tikka',
            category: 'Mixed Dish',
            price: 350,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/previews/046/791/335/non_2x/bbq-chicken-pizza-free-png.png"
        },
        {
            id: 367,
            product: 'Keema Do Pyaza',
            category: 'Mixed Dish',
            price: 350,
            count : 1,
            image: "https://shalepizza.netlify.app/img/Pizza%20Menu%20Images/12.png"
        },
           {
            id: 368,
            product: 'Ice cream Shakes',
            category: 'Lunch',
            price: 150,
            count : 1,
            image: "https://rosepng.com/wp-content/uploads/2024/02/s11728_milk_shake_isolated_on_white_background_-stylize_200__1197b7a3-1e83-4109-984f-1534e960aa52_2-photoroom-png-photoroom_11zon.png"
        },
        {
            id: 369,
            product: 'Strawberry Milkshake',
            category: 'Mixed Dish',
            price: 250,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240628/ourmid/pngtree-cherry-strawberry-vanilla-smoothie-with-a-solid-png-image_12734226.png"
        },
        {
            id: 370,
            product: 'Salted Caramel-Pretzel',
            category: 'Mixed Dish',
            price: 250,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240719/ourmid/pngtree-peanut-butter-jelly-milkshake-png-image_13149801.png"
        },
        {
            id: 371,
            product: 'Peanut Butter & Jelly',
            category: 'Mixed Dish',
            price: 250,
            count : 1,
            image: "https://images.ctfassets.net/o19mhvm9a2cm/7cc9UG5Am7ZyI8cfBZRQ5C/dc6e46dae880e198e83571011c6aa829/Website_2023_April_LTO_Dessert_OCS.png"
        },
        {
            id: 372,
            product: "Copycat McDonald's Shamrock",
            category: 'Mixed Dish',
            price: 250,
            count : 1,
            image: "https://corporate.mcdonalds.com/content/dam/sites/corp/nfl/newsroom/menu-items-2023/NR_201909_3780_MediumShamrockShake_Glass_A1_2000x2000.png.coredownload.png"
        },
        {
            id: 373,
            product: "S'mores Milkshake",
            category: 'Mixed Dish',
            price: 280,
            count : 1,
            image: "https://static.vecteezy.com/system/resources/previews/040/455/888/non_2x/ai-generated-s-mores-cocktail-topped-with-whipped-cream-crumbled-graham-crackers-free-png.png"
        },
        {
            id: 374,
            product: 'Oreo Cheesecake ',
            category: 'Mixed Dish',
            price: 250,
            count : 1,
            image: "https://wallpapers.com/images/hd/oreo-milkshake-png-rid6-s88eayfdfeki9mng.jpg"
        },
        {
            id: 375,
            product: 'Pebbles Milkshake',
            category: 'Mixed Dish',
            price: 280,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20250602/ourmid/pngtree-cereal-topped-milkshake-png-image_16452539.png"
        },
        {
            id: 376,
            product: 'Red Wine Milkshakes',
            category: 'Mixed Dish',
            price: 230,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240719/ourmid/pngtree-red-wine-milkshakes-png-image_13150017.png"
        },
        {
            id: 377,
            product: 'Strawberry Shortcake ',
            category: 'Mixed Dish',
            price: 200,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240703/ourmid/pngtree-strawberry-milkshake-splash-png-image_12973258.png"
        },
        {
            id: 378,
            product: 'Creamsicle Milkshake Shots',
            category: 'Mixed Dish',
            price: 350,
            count : 1,
            image: "https://img.pikbest.com/origin/10/49/86/712pIkbEsTyM6.png!sw800"
        },
        {
            id: 379,
            product: 'Banana Cream Pie Milkshake',
            category: 'Mixed Dish',
            price: 350,
            count : 1,
            image: "https://wallpapers.com/images/hd/banana-milkshake-png-3-rw4h89sfgp1hnrzu.jpg"
        },
        {
            id: 380,
            product: "Cap'n Crunch Milkshakes",
            category: 'Mixed Dish',
            price: 350,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240719/ourmid/pngtree-crunch-milkshakes-png-image_13150754.png"
        },
        {
            id: 381,
            product: 'Red Velvet Cheesecake Milkshake',
            category: 'Mixed Dish',
            price: 350,
            count : 1,
            image: "https://regrub.ca/beltline/wp-content/uploads/2023/09/Regrub_37.png"
        },
        {
            id: 382,
            product: 'Cookie Lovers Shakes',
            category: 'Mixed Dish',
            price: 350,
            count : 1,
            image: "https://png.pngtree.com/png-vector/20240902/ourmid/pngtree-chocolate-chip-cookie-milkshake-clipart-illustration-perfect-for-dessert-food-designs-png-image_13722933.png"
        },











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
        },{
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
        },{
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
        },{
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
            id: 303,
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


   const particularproduct = (element,numbers) =>{
    const uniquedata = countdown.filter((object,index,arr)=> index == arr.findIndex((ddd)=>  ddd.id === object.id))
    console.log("uniquedata",uniquedata);
    const findingpostion =  uniquedata.indexOf(element);
    uniquedata[findingpostion].count = uniquedata[findingpostion].count + numbers 
    setCart([...uniquedata])
    
    
    
}

    return (
        <div>
           {/* <select name="select" id="">
            <option value="Breakfast">Breakfast</option>
            <option value="Breakfast">Lunch</option>
            <option value="Breakfast">Dinner</option>

           </select> */}
            {/* <Navbar></Navbar> */}
            <Anothernav></Anothernav>
            <Sliderone></Sliderone>
            <ProductCarousel></ProductCarousel>
           <div className="solar-wrapper">
           {/* <h1 style={{color: 'red', fontSize: '50px'}}>TEST: Is this visible?</h1> */}
                <Solar></Solar>
            </div>
          <img src="https://images.squarespace-cdn.com/content/v1/5c64112fd86cc91b76535d5b/1648123012269-3BPULSOKWXWTW3KGHPFZ/STARBUCKS_PLANT_BASED_48%24-2.jpg?format=2500w" alt="" style={{width:"100%",padding:"100px 0px", height:'auto'}} />

            <div className="cardsection">
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

            <div className="container mt-5 mb-5 pb-5">
                <div className='row'>
                    {
                        // productdetails.map((element, index) => 
                            filteredproducts.map((element,index)=>
                            // <div key={element.id} className='col-lg-4 col-md-6 col-sm-12 mt-4 d-flex'>
                            <div key={`${element.id}-${index}`} className='col-lg-4 col-md-6 col-sm-12 mt-4 d-flex'>

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
            

        {/* <img src="https://pbs.twimg.com/media/CuPR-nXWYAE4Few.jpg" alt=""  /> */}


        <div>
            <Link to= '/cart'><img src={car} alt="carticon" className='carticon' />
        <h3 className='cartcountbtn'>{cart.length}</h3>
        </Link>
        </div>
        
            
        </div>
    )
}

export default Shop