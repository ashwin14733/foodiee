// import React, { useEffect, useRef } from "react";
// // import "./AirpodsCarousel.css"; // ✅ keep CSS separate for clean animations

// const ProductCarousel = () => {
    
//   const carouselRef = useRef(null);
//   const listRef = useRef(null);


//   useEffect(() => {
//     const carousel = carouselRef.current;
//     const listHTML = listRef.current;
//     const nextButton = carousel.querySelector("#next");
//     const prevButton = carousel.querySelector("#prev");
//     const backButton = carousel.querySelector("#back");
//     const seeMoreButtons = carousel.querySelectorAll(".seeMore");

//     let unAcceppClick;

//     const showSlider = (type) => {
//       nextButton.style.pointerEvents = "none";
//       prevButton.style.pointerEvents = "none";

//       carousel.classList.remove("next", "prev");
//     let items = carousel.querySelectorAll(".carousel .list .item");

//       if (type === "next") {
//         listHTML.appendChild(items[0]);
//         carousel.classList.add("next");
//       } else {
//         listHTML.prepend(items[items.length - 1]);
//         carousel.classList.add("prev");
//       }

//       clearTimeout(unAcceppClick);
//       unAcceppClick = setTimeout(() => {
//         nextButton.style.pointerEvents = "auto";
//         prevButton.style.pointerEvents = "auto";
//       }, 2000);
//     };

//     nextButton.onclick = () => showSlider("next");
//     prevButton.onclick = () => showSlider("prev");

//     seeMoreButtons.forEach((button) => {
//       button.onclick = function () {
//         carousel.classList.remove("next", "prev");
//         carousel.classList.add("showDetail");
//       };
//     });

//     backButton.onclick = () => {
//       carousel.classList.remove("showDetail");
//     };
//   }, []);

//   return (
//     <div>
//         <style jsx>{`
//         @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
// body{
//     margin: 0;
//     background-color: #F4F4F4;
//     font-family: Poppins;
// }
// :root{
//     --item1-transform: translateX(-100%) translateY(-5%) scale(1.5);
//     --item1-filter: blur(30px);
//     --item1-zIndex: 11;
//     --item1-opacity: 0;

//     --item2-transform: translateX(0);
//     --item2-filter: blur(0px);
//     --item2-zIndex: 10;
//     --item2-opacity: 1;

//     --item3-transform: translate(50%,10%) scale(0.8);
//     --item3-filter: blur(10px);
//     --item3-zIndex: 9;
//     --item3-opacity: 1;

//     --item4-transform: translate(90%,20%) scale(0.5);
//     --item4-filter: blur(30px);
//     --item4-zIndex: 8;
//     --item4-opacity: 1;
    
//     --item5-transform: translate(120%,30%) scale(0.3);
//     --item5-filter: blur(40px);
//     --item5-zIndex: 7;
//     --item5-opacity: 0;
// }
// header{
//     width: 1140px;
//     max-width: 90%;
//     display: flex;
//     justify-content: space-between;
//     margin: auto;
//     height: 50px;
//     align-items: center;
// }
// header .logo{
//     font-weight: bold;
// }
// header nav a{
//     margin-left: 30px;
//     text-decoration: none;
//     color: #555;
//     font-weight: 500;
// }

// /* carousel */
// .carousel{
//     position: relative;
//     height: 800px;
//     overflow: hidden;
//     margin-top: -50px;
// }
// .carousel .list{
//     position: absolute;
//     width: 1140px;
//     max-width: 90%;
//     height: 80%;
//     left: 50%;
//     transform: translateX(-50%);
// }
// .carousel .list .item{
//     position: absolute;
//     left: 0%;
//     width: 70%;
//     height: 100%;
//     font-size: 15px;
//     transition: left 0.5s, opacity 0.5s, width 0.5s;
// }
// .carousel .list .item:nth-child(n + 6){
//     opacity: 0;
// }
// .carousel .list .item:nth-child(2){
//     z-index: 10;
//     transform: translateX(0);
// }
// .carousel .list .item img{
//     width: 50%;
//     position: absolute;
//     right: 0;
//     top: 50%;
//     transform: translateY(-50%);
//     transition: right 1.5s;
// }

// .carousel .list .item .introduce{
//     opacity: 0;
//     pointer-events: none;
// }
// .carousel .list .item:nth-child(2) .introduce{
//     opacity: 1;
//     pointer-events: auto;
//     width: 400px;
//     position: absolute;
//     top: 50%;
//     transform:  translateY(-50%);
//     transition: opacity 0.5s;
// }
// .carousel .list .item .introduce .title{
//     font-size: 2em;
//     font-weight: 500;
//     line-height: 1em;
// }
// .carousel .list .item .introduce .topic{
//     font-size: 4em;
//     font-weight: 500;
// }
// .carousel .list .item .introduce .des{
//     font-size: small;
//     color: #5559;
// }
// .carousel .list .item .introduce .seeMore{
//     font-family: Poppins;
//     margin-top: 1.2em;
//     padding: 5px 0;
//     border: none;
//     border-bottom: 1px solid #555;
//     background-color: transparent;
//     font-weight: bold;
//     letter-spacing: 3px;
//     transition: background 0.5s;
// }
// .carousel .list .item .introduce .seeMore:hover{
//     background: #eee;
// }
// .carousel .list .item:nth-child(1){
//     transform: var(--item1-transform);
//     filter: var(--item1-filter);
//     z-index: var(--item1-zIndex);
//     opacity: var(--item1-opacity);
//     pointer-events: none;
// }
// .carousel .list .item:nth-child(3){
//     transform: var(--item3-transform);
//     filter: var(--item3-filter);
//     z-index: var(--item3-zIndex);
// }
// .carousel .list .item:nth-child(4){
//     transform: var(--item4-transform);
//     filter: var(--item4-filter);
//     z-index: var(--item4-zIndex);
// }
// .carousel .list .item:nth-child(5){
//     transform: var(--item5-transform);
//     filter: var(--item5-filter);
//     opacity: var(--item5-opacity);
//     pointer-events: none;
// }
// /* animation text in item2 */
// .carousel .list .item:nth-child(2) .introduce .title,
// .carousel .list .item:nth-child(2) .introduce .topic,
// .carousel .list .item:nth-child(2) .introduce .des,
// .carousel .list .item:nth-child(2) .introduce .seeMore{
//     opacity: 0;
//     animation: showContent 0.5s 1s ease-in-out 1 forwards;
// }
// @keyframes showContent{
//     from{
//         transform: translateY(-30px);
//         filter: blur(10px);
//     }to{
//         transform: translateY(0);
//         opacity: 1;
//         filter: blur(0px);
//     }
// }
// .carousel .list .item:nth-child(2) .introduce .topic{
//     animation-delay: 1.2s;
// }
// .carousel .list .item:nth-child(2) .introduce .des{
//     animation-delay: 1.4s;
// }
// .carousel .list .item:nth-child(2) .introduce .seeMore{
//     animation-delay: 1.6s;
// }
// /* next click */
// .carousel.next .item:nth-child(1){
//     animation: transformFromPosition2 0.5s ease-in-out 1 forwards;
// }
// @keyframes transformFromPosition2{
//     from{
//         transform: var(--item2-transform);
//         filter: var(--item2-filter);
//         opacity: var(--item2-opacity);
//     }
// }
// .carousel.next .item:nth-child(2){
//     animation: transformFromPosition3 0.7s ease-in-out 1 forwards;
// }
// @keyframes transformFromPosition3{
//     from{
//         transform: var(--item3-transform);
//         filter: var(--item3-filter);
//         opacity: var(--item3-opacity);
//     }
// }
// .carousel.next .item:nth-child(3){
//     animation: transformFromPosition4 0.9s ease-in-out 1 forwards;
// }
// @keyframes transformFromPosition4{
//     from{
//         transform: var(--item4-transform);
//         filter: var(--item4-filter);
//         opacity: var(--item4-opacity);
//     }
// }
// .carousel.next .item:nth-child(4){
//     animation: transformFromPosition5 1.1s ease-in-out 1 forwards;
// }
// @keyframes transformFromPosition5{
//     from{
//         transform: var(--item5-transform);
//         filter: var(--item5-filter);
//         opacity: var(--item5-opacity);
//     }
// }
// /* previous */
// .carousel.prev .list .item:nth-child(5){
//     animation: transformFromPosition4 0.5s ease-in-out 1 forwards;
// }
// .carousel.prev .list .item:nth-child(4){
//     animation: transformFromPosition3 0.7s ease-in-out 1 forwards;
// }
// .carousel.prev .list .item:nth-child(3){
//     animation: transformFromPosition2 0.9s ease-in-out 1 forwards;
// }
// .carousel.prev .list .item:nth-child(2){
//     animation: transformFromPosition1 1.1s ease-in-out 1 forwards;
// }
// @keyframes transformFromPosition1{
//     from{
//         transform: var(--item1-transform);
//         filter: var(--item1-filter);
//         opacity: var(--item1-opacity);        
//     }
// }

// /* detail  */
// .carousel .list .item .detail{
//     opacity: 0;
//     pointer-events: none;
// }
// /* showDetail */
// .carousel.showDetail .list .item:nth-child(3),
// .carousel.showDetail .list .item:nth-child(4){
//     left: 100%;
//     opacity: 0;
//     pointer-events: none;
// }
// .carousel.showDetail .list .item:nth-child(2){
//     width: 100%;
// }
// .carousel.showDetail .list .item:nth-child(2) .introduce{
//     opacity: 0;
//     pointer-events: none;
// }
// .carousel.showDetail .list .item:nth-child(2) img{
//     right: 50%;
// }
// .carousel.showDetail .list .item:nth-child(2) .detail{
//     opacity: 1;
//     width: 50%;
//     position: absolute;
//     right: 0;
//     top: 50%;
//     transform: translateY(-50%);
//     text-align: right;
//     pointer-events: auto;
// }
// .carousel.showDetail .list .item:nth-child(2) .detail .title{
//     font-size: 4em;
// }
// .carousel.showDetail .list .item:nth-child(2) .detail .specifications{
//     display: flex;
//     gap: 10px;
//     width: 100%;
//     border-top: 1px solid #5553;
//     margin-top: 20px;
// }
// .carousel.showDetail .list .item:nth-child(2) .detail .specifications div{
//     width: 90px;
//     text-align: center;
//     flex-shrink: 0;
// }
// .carousel.showDetail .list .item:nth-child(2) .detail .specifications div p:nth-child(1){
//     font-weight: bold;
// }
// .carousel.carousel.showDetail .list .item:nth-child(2) .checkout button{
//     font-family: Poppins;
//     background-color: transparent;
//     border: 1px solid #5555;
//     margin-left: 5px;
//     padding: 5px 10px;
//     letter-spacing: 2px;
//     font-weight: 500;
// }
// .carousel.carousel.showDetail .list .item:nth-child(2) .checkout button:nth-child(2){
//     background-color: #693EFF;
//     color: #eee;
// }
// .carousel.showDetail .list .item:nth-child(2) .detail  .title,
// .carousel.showDetail .list .item:nth-child(2) .detail  .des,
// .carousel.showDetail .list .item:nth-child(2) .detail .specifications,
// .carousel.showDetail .list .item:nth-child(2) .detail .checkout{
//     opacity: 0;
//     animation: showContent 0.5s 1s ease-in-out 1 forwards;
// }
// .carousel.showDetail .list .item:nth-child(2) .detail  .des{
//     animation-delay: 1.2s;
// }
// .carousel.showDetail .list .item:nth-child(2) .detail .specifications{
//     animation-delay: 1.4s;
// }
// .carousel.showDetail .list .item:nth-child(2) .detail .checkout{
//     animation-delay: 1.6s;
// }
// .arrows{
//     position: absolute;
//     bottom: 10px;
//     width: 1140px;
//     max-width: 90%;
//     display: flex;
//     justify-content: space-between;
//     left: 50%;
//     transform: translateX(-50%);
// }
// #prev,
// #next{
//     width: 40px;
//     height: 40px;
//     border-radius: 50%;
//     font-family: monospace;
//     border: 1px solid #5555;
//     font-size: large;
//     bottom: 20%;
//     left: 10%;
// }
// #next{
//     left: unset;
//     right: 10%;
// }
// #back{
//     position: absolute;
//     z-index: 100;
//     bottom: 0%;
//     left: 50%;
//     transform: translateX(-50%);
//     border: none;
//     border-bottom: 1px solid #555;
//     font-family: Poppins;
//     font-weight: bold;
//     letter-spacing: 3px;
//     background-color: transparent;
//     padding: 10px;
//     /* opacity: 0; */
//     transition: opacity 0.5s;
// }
// .carousel.showDetail #back{
//     opacity: 1;
// }
// .carousel.showDetail #prev,
// .carousel.showDetail #next{
//     opacity: 0;
//     pointer-events: none;
// }
// .carousel::before{
//     width: 500px;
//     height: 300px;
//     content: '';
//     background-image: linear-gradient(70deg, #DC422A, blue);
//     position: absolute;
//     z-index: -1;
//     border-radius: 20% 30% 80% 10%;
//     filter: blur(150px);
//     top: 50%;
//     left: 50%;
//     transform: translate(-10%, -50%);
//     transition: 1s;
// }
// .carousel.showDetail::before{
//     transform: translate(-100%, -50%) rotate(90deg);
//     filter: blur(130px);
// }
// @media screen and (max-width: 991px){
//     /* ipad, tablets */
//     .carousel .list .item{
//         width: 90%;
//     }
//     .carousel.showDetail .list .item:nth-child(2) .detail .specifications{
//         overflow: auto;
//     }
//     .carousel.showDetail .list .item:nth-child(2) .detail .title{
//         font-size: 2em;
//     }
// }
// @media screen and (max-width: 767px){
//     /* mobile */
//     .carousel{
//         height: 600px;
//     }
//     .carousel .list .item{
//         width: 100%;
//         font-size: 10px;
//     }
    
//     .carousel .list{
//         height: 100%;
//     }
//     .carousel .list .item:nth-child(2) .introduce{
//         width: 50%;
//     }
    
//     .carousel .list .item img{
//         width: 40%;
//     }
//     .carousel.showDetail .list .item:nth-child(2) .detail{
//         backdrop-filter: blur(10px);
//         font-size: small;
//     }
//     .carousel .list .item:nth-child(2) .introduce .des,
//     .carousel.showDetail .list .item:nth-child(2) .detail .des{
//         height: 100px;
//         overflow: auto;
//     }
//     .carousel.showDetail .list .item:nth-child(2) .detail .checkout{
//         display: flex;
//         width: max-content;
//         float: right;
//     }
// }
//         `}</style>
   


//       {<div className="carousel" ref={carouselRef}>
//         <div className="list" ref={listRef}>
//           {[1, 2, 3, 4, 5, 6].map((num) => (
//             <div className="item" key={num}>
//               <img src="https://rosepng.com/wp-content/uploads/2024/09/s11728_chicken_biryani_isolated_on_white_background_da1c56d4-0b9e-493f-bb41-c2277115512d_0-photoroom.png" alt="briyani" />
//               <div className="introduce">
//                 <div className="title">Best Chicken</div>
//                 <div className="topic" style={{color:"#ffc107", fontWeight:"700"}}>Briyani</div>
//                 <div className="des">
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                   Officia, laborum cumque dignissimos quidem atque et eligendi
//                   aperiam voluptates beatae maxime.
//                 </div>
//                 <button className="seeMore">SEE MORE &#8599;</button>
//               </div>
//               <div className="detail">
//                 <div className="title" style={{color:"#ffc107", fontWeight:"700"}}>CHICKEN BRIYANI</div>
//                 <div className="des">
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                   Dolor, reiciendis suscipit nobis nulla animi, modi explicabo
//                   quod corrupti impedit illo, accusantium in eaque nam quia
//                   adipisci aut distinctio porro eligendi. Reprehenderit nostrum
//                   consequuntur ea! Accusamus architecto dolores modi ducimus
//                   facilis quas voluptatibus! Tempora ratione accusantium magnam
//                   nulla tenetur autem beatae.
//                 </div>
//                 <div className="specifications">
//                   <div>
//                             <p>Rating</p>
//                             <p>⭐⭐⭐⭐</p>
//                         </div>
//                         <div>
//                             <p>Quantity</p>
//                             <p>⭐⭐⭐⭐</p>
//                         </div>
//                         <div>
//                             <p>Flavour</p>
//                             <p>⭐⭐⭐⭐</p>
//                         </div>
//                         <div>
//                             <p>Aroma</p>
//                             <p>⭐⭐⭐⭐</p>
//                         </div>
//                         <div>
//                             <p>Price</p>
//                             <p>₹ 150</p>
//                         </div>
//                     </div>
//                     <div class="checkout">
//                         <button>ADD TO CART</button>
//                         <button>CHECKOUT</button>
//                     </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="arrows">
//           <button id="prev">&lt;</button>
//           <button id="next">&gt;</button>
//           <button id="back">See All &#8599;</button>
//         </div>
//       </div> }
      
//     </div>
//   );
// };

// export default ProductCarousel;









import React, { useEffect, useRef } from "react";

const ProductCarousel = () => {
  const carouselRef = useRef(null);
  const listRef = useRef(null);
 
  // Unique product data
  const products = [
    {
      id: 6,
      image: "https://www.pngplay.com/wp-content/uploads/1/Pepsi-PNG-Download-Image.png",
      title: "Softdrinks",
      topic: "Pepsi",
      topicColor: "#1685b8ff",
      description: "Pepsi is a carbonated soft drink with a cola flavor, manufactured by PepsiCo which serves as its flagship product",
      rating: "⭐⭐⭐⭐",
      quantity: "100 Pieces",
      flavour: "⭐⭐⭐⭐",
      aroma: "⭐⭐⭐⭐",
      price: "₹ 99"
    },
    {
      id: 1,
      image: "https://rosepng.com/wp-content/uploads/2024/09/s11728_chicken_biryani_isolated_on_white_background_da1c56d4-0b9e-493f-bb41-c2277115512d_0-photoroom.png",
      title: "Best Chicken",
      topic: "Biryani",
      topicColor: "#ffc107",
      description: "Aromatic basmati rice cooked with tender chicken pieces, fragrant spices, and saffron. A royal feast that melts in your mouth.",
      rating: "⭐⭐⭐⭐",
      quantity: "Full Plate",
      flavour: "⭐⭐⭐⭐",
      aroma: "⭐⭐⭐⭐",
      price: "₹ 180"
    },
    {
      id: 2,
      image: "https://png.pngtree.com/png-vector/20241211/ourmid/pngtree-authentic-italian-pizza-with-cheese-and-fresh-vegetable-toppings-png-image_14714611.png",
      title: "Margherita",
      topic: "Pizza",
      topicColor: "#e74c3c",
      description: "Classic Italian pizza with fresh mozzarella, tomato sauce, and basil leaves. Simple yet absolutely delicious.",
      rating: "⭐⭐⭐⭐",
      quantity: "Large (12\")",
      flavour: "⭐⭐⭐⭐",
      aroma: "⭐⭐⭐⭐",
      price: "₹ 299"
    },
    {
      id: 3,
      image: "https://static.vecteezy.com/system/resources/previews/022/911/694/non_2x/cute-cartoon-burger-icon-free-png.png",
      title: "Cheese",
      topic: "Burger",
      topicColor: "#f39c12",
      description: "Juicy beef patty with melted cheese, fresh lettuce, tomatoes, and our special sauce in a sesame bun.",
      rating: "⭐⭐⭐⭐",
      quantity: "Double Patty",
      flavour: "⭐⭐⭐⭐",
      aroma: "⭐⭐⭐⭐",
      price: "₹ 199"
    },
    {
      id: 4,
      image: "https://static.vecteezy.com/system/resources/previews/036/498/052/non_2x/ai-generated-creamy-chicken-alfredo-pasta-bow-on-transparent-background-free-png.png",
      title: "Creamy",
      topic: "Pasta",
      topicColor: "#9b59b6",
      description: "Al dente pasta in rich, creamy white sauce with herbs, garlic, and parmesan cheese. Comfort food at its finest.",
      rating: "⭐⭐⭐⭐",
      quantity: "Regular Bowl",
      flavour: "⭐⭐⭐⭐",
      aroma: "⭐⭐⭐⭐",
      price: "₹ 249"
    },
    {
      id: 5,
      image: "https://static.vecteezy.com/system/resources/previews/047/490/371/non_2x/vanilla-cone-ice-cream-with-chocolate-splash-and-pieces-on-a-transparent-background-free-png.png",
      title: "Chocolate",
      topic: "Ice Cream",
      topicColor: "#8b4513",
      description: "Rich and creamy chocolate ice cream made with premium cocoa. Perfect dessert to end your meal on a sweet note.",
      rating: "⭐⭐⭐⭐⭐",
      quantity: "3 Scoops",
      flavour: "⭐⭐⭐⭐",
      aroma: "⭐⭐⭐⭐",
      price: "₹ 120"
    },
    
  ];

  useEffect(() => {
    const carousel = carouselRef.current;
    const listHTML = listRef.current;
    const nextButton = carousel.querySelector("#next");
    const prevButton = carousel.querySelector("#prev");
    const backButton = carousel.querySelector("#back");
    const seeMoreButtons = carousel.querySelectorAll(".seeMore");

    let unAcceppClick;

    const showSlider = (type) => {
      nextButton.style.pointerEvents = "none";
      prevButton.style.pointerEvents = "none";

      carousel.classList.remove("next", "prev");
      let items = carousel.querySelectorAll(".carousel .list .item");

      if (type === "next") {
        listHTML.appendChild(items[0]);
        carousel.classList.add("next");
      } else {
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add("prev");
      }

      clearTimeout(unAcceppClick);
      unAcceppClick = setTimeout(() => {
        nextButton.style.pointerEvents = "auto";
        prevButton.style.pointerEvents = "auto";
      }, 2000);
    };

    nextButton.onclick = () => showSlider("next");
    prevButton.onclick = () => showSlider("prev");

    seeMoreButtons.forEach((button) => {
      button.onclick = function () {
        carousel.classList.remove("next", "prev");
        carousel.classList.add("showDetail");
      };
    });

    backButton.onclick = () => {
      carousel.classList.remove("showDetail");
    };
  }, []);

  return (
    <div>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        body{
            margin: 0;
            font-family: Poppins;
        }
        :root{
            --item1-transform: translateX(-100%) translateY(-5%) scale(1.5);
            --item1-filter: blur(30px);
            --item1-zIndex: 11;
            --item1-opacity: 0;

            --item2-transform: translateX(0);
            --item2-filter: blur(0px);
            --item2-zIndex: 10;
            --item2-opacity: 1;

            --item3-transform: translate(50%,10%) scale(0.8);
            --item3-filter: blur(10px);
            --item3-zIndex: 9;
            --item3-opacity: 1;

            --item4-transform: translate(90%,20%) scale(0.5);
            --item4-filter: blur(30px);
            --item4-zIndex: 8;
            --item4-opacity: 1;
            
            --item5-transform: translate(120%,30%) scale(0.3);
            --item5-filter: blur(40px);
            --item5-zIndex: 7;
            --item5-opacity: 0;
        }
        
        /* carousel */
        .carousel{
            position: relative;
            height: 800px;
            overflow: hidden;
            margin-top: -35px;
        }
        .carousel .list{
            position: absolute;
            width: 1140px;
            max-width: 90%;
            height: 90%;
            left: 50%;
            transform: translateX(-50%);
        }
        .carousel .list .item{
            position: absolute;
            left: 0%;
            width: 80%;
            height: 100%;
            font-size: 15px;
            transition: left 0.5s, opacity 0.5s, width 0.5s;
        }
        .carousel .list .item:nth-child(n + 6){
            opacity: 0;
        }
        .carousel .list .item:nth-child(2){
            z-index: 10;
            transform: translateX(0);
        }
        .carousel .list .item img{
            width: 50%;
            position: absolute;
            right: 0;
            top: 55%;
            transform: translateY(-50%);
            transition: right 1.5s;
        }

        .carousel .list .item .introduce{
            opacity: 0;
            pointer-events: none;
        }
        .carousel .list .item:nth-child(2) .introduce{
            opacity: 1;
            pointer-events: auto;
            width: 400px;
            position: absolute;
            top: 55%;
            transform:  translateY(-50%);
            transition: opacity 0.5s;
        }
        .carousel .list .item .introduce .title{
            font-size: 2em;
            font-weight: 500;
            line-height: 1em;
        }
        .carousel .list .item .introduce .topic{
            font-size: 4em;
            font-weight: 500;
        }
        .carousel .list .item .introduce .des{
            font-size: 16px;
            color: white;
        }
        .carousel .list .item .introduce .seeMore{
            font-family: Poppins;
            margin-top: 1.2em;
            padding: 5px 0;
            border: none;
            // border-bottom: 1px solid #555;
            background-color: #ffc107;
            font-weight: 700;
            letter-spacing: 3px;
            transition: background 0.5s;
            cursor: pointer;
            color:black;
            padding:10px 20px;
            border-radius:15px;
          
            
        }
        .carousel .list .item .introduce .seeMore:hover{
            background: #000;
            color:#ffc107;
            border:1px solid #ffc107;
            box-shadow: 0 0 20px rgba(255, 203, 34, 0.7);


        }
        .carousel .list .item:nth-child(1){
            transform: var(--item1-transform);
            filter: var(--item1-filter);
            z-index: var(--item1-zIndex);
            opacity: var(--item1-opacity);
            pointer-events: none;
        }
        .carousel .list .item:nth-child(3){
            transform: var(--item3-transform);
            filter: var(--item3-filter);
            z-index: var(--item3-zIndex);
        }
        .carousel .list .item:nth-child(4){
            transform: var(--item4-transform);
            filter: var(--item4-filter);
            z-index: var(--item4-zIndex);
        }
        .carousel .list .item:nth-child(5){
            transform: var(--item5-transform);
            filter: var(--item5-filter);
            opacity: var(--item5-opacity);
            pointer-events: none;
        }
        /* animation text in item2 */
        .carousel .list .item:nth-child(2) .introduce .title,
        .carousel .list .item:nth-child(2) .introduce .topic,
        .carousel .list .item:nth-child(2) .introduce .des,
        .carousel .list .item:nth-child(2) .introduce .seeMore{
            opacity: 0;
            animation: showContent 0.5s 1s ease-in-out 1 forwards;
        }
        @keyframes showContent{
            from{
                transform: translateY(-30px);
                filter: blur(10px);
            }to{
                transform: translateY(0);
                opacity: 1;
                filter: blur(0px);
            }
        }
        .carousel .list .item:nth-child(2) .introduce .topic{
            animation-delay: 1.2s;
        }
        .carousel .list .item:nth-child(2) .introduce .des{
            animation-delay: 1.4s;
        }
        .carousel .list .item:nth-child(2) .introduce .seeMore{
            animation-delay: 1.6s;
        }
        /* next click */
        .carousel.next .item:nth-child(1){
            animation: transformFromPosition2 0.5s ease-in-out 1 forwards;
        }
        @keyframes transformFromPosition2{
            from{
                transform: var(--item2-transform);
                filter: var(--item2-filter);
                opacity: var(--item2-opacity);
            }
        }
        .carousel.next .item:nth-child(2){
            animation: transformFromPosition3 0.7s ease-in-out 1 forwards;
        }
        @keyframes transformFromPosition3{
            from{
                transform: var(--item3-transform);
                filter: var(--item3-filter);
                opacity: var(--item3-opacity);
            }
        }
        .carousel.next .item:nth-child(3){
            animation: transformFromPosition4 0.9s ease-in-out 1 forwards;
        }
        @keyframes transformFromPosition4{
            from{
                transform: var(--item4-transform);
                filter: var(--item4-filter);
                opacity: var(--item4-opacity);
            }
        }
        .carousel.next .item:nth-child(4){
            animation: transformFromPosition5 1.1s ease-in-out 1 forwards;
        }
        @keyframes transformFromPosition5{
            from{
                transform: var(--item5-transform);
                filter: var(--item5-filter);
                opacity: var(--item5-opacity);
            }
        }
        /* previous */
        .carousel.prev .list .item:nth-child(5){
            animation: transformFromPosition4 0.5s ease-in-out 1 forwards;
        }
        .carousel.prev .list .item:nth-child(4){
            animation: transformFromPosition3 0.7s ease-in-out 1 forwards;
        }
        .carousel.prev .list .item:nth-child(3){
            animation: transformFromPosition2 0.9s ease-in-out 1 forwards;
        }
        .carousel.prev .list .item:nth-child(2){
            animation: transformFromPosition1 1.1s ease-in-out 1 forwards;
        }
        @keyframes transformFromPosition1{
            from{
                transform: var(--item1-transform);
                filter: var(--item1-filter);
                opacity: var(--item1-opacity);        
            }
        }

        /* detail  */
        .carousel .list .item .detail{
            opacity: 0;
            pointer-events: none;
        }
        /* showDetail */
        .carousel.showDetail .list .item:nth-child(3),
        .carousel.showDetail .list .item:nth-child(4){
            left: 100%;
            opacity: 0;
            pointer-events: none;
        }
        .carousel.showDetail .list .item:nth-child(2){
            width: 100%;
        }
        .carousel.showDetail .list .item:nth-child(2) .introduce{
            opacity: 0;
            pointer-events: none;
        }
        .carousel.showDetail .list .item:nth-child(2) img{
            right: 60%;
        }
        .carousel.showDetail .list .item:nth-child(2) .detail{
            opacity: 1;
            width: 50%;
            position: absolute;
            right: -50px;
            top: 55%;
            transform: translateY(-50%);
            text-align: right;
            pointer-events: auto;
            display:flex;
            flex-direction:column;
            gap:20px
        }
        .carousel.showDetail .list .item:nth-child(2) .detail .title{
            font-size: 4em;
        }
        .carousel.showDetail .list .item:nth-child(2) .detail .specifications{
            display: flex;
            gap: 10px;
            width: 100%;
            border-top: 1px solid #5553;
            margin-top: 20px;
        }
        .carousel.showDetail .list .item:nth-child(2) .detail .specifications div{
            width: 90px;
            text-align: center;
            flex-shrink: 0;
        }
        .carousel.showDetail .list .item:nth-child(2) .detail .specifications div p:nth-child(1){
            font-weight: bold;
        }
        .carousel.carousel.showDetail .list .item:nth-child(2) .checkout button{
            font-family: Poppins;
            background-color: transparent;
            border: 1px solid #ffc107;
            border-radius:10px;
            padding:10px 15px;
            margin-left: 5px;
            padding: 5px 10px;
            letter-spacing: 2px;
            font-weight: 500;
            cursor: pointer;
            color:white;
        }
        .carousel.carousel.showDetail .list .item:nth-child(2) .checkout button:nth-child(2){
            background-color: #ffc107;
            color: #000;
        }
        .carousel.showDetail .list .item:nth-child(2) .detail  .title,
        .carousel.showDetail .list .item:nth-child(2) .detail  .des,
        .carousel.showDetail .list .item:nth-child(2) .detail .specifications,
        .carousel.showDetail .list .item:nth-child(2) .detail .checkout{
            opacity: 0;
            animation: showContent 0.5s 1s ease-in-out 1 forwards;
        }
        .carousel.showDetail .list .item:nth-child(2) .detail  .des{
            animation-delay: 1.2s;
        }
        .carousel.showDetail .list .item:nth-child(2) .detail .specifications{
            animation-delay: 1.4s;
            padding-left:100px;
            margin-top:10px
        }
        .carousel.showDetail .list .item:nth-child(2) .detail .checkout{
            animation-delay: 1.6s;
            display:flex;
            align-items : center;
            justify-content:end;
            gap:50px
        }
        .arrows{
            position: absolute;
            bottom: 30px;
            width: 1370px;
            max-width: 90%;
            display: flex;
            justify-content: space-between;
            left: 50%;
            transform: translateX(-50%);
        }
        #prev,
        #next{
            width: 40px;
            height: 40px;
            border-radius: 50%;
            font-family: monospace;
            border: 1px solid #5555;
            font-size: large;
            bottom: 20%;
            left: 10%;
            cursor: pointer;
        }
        #next{
            left: unset;
            right: 10%;
        }
        #back{
            position: absolute;
            z-index: 100;
            bottom: 0%;
            left: 50%;
            transform: translateX(-50%);
            border: 1px solid transparent;
            color:black;
            // border-bottom: 1px solid #555;
            font-family: Poppins;
            font-weight: bold;
            letter-spacing: 3px;
            background-color: #ffc107;
            padding: 10px;
            opacity: 0;
            transition: opacity 0.5s;
            cursor: pointer;
            border-radius:10px;
            padding:10px 25px;
        }
            #back:hover{
                color:#ffc107;
                background-color:black;
                border : 1px solid #ffc107;
                box-shadow: 0 0 20px rgba(255, 203, 34, 0.7);


            }
        .carousel.showDetail #back{
            opacity: 1;
        }
        .carousel.showDetail #prev,
        .carousel.showDetail #next{
            opacity: 0;
            pointer-events: none;
        }
        .carousel::before{
            width: 500px;
            height: 300px;
            content: '';
            background-image: linear-gradient(70deg, #DC422A, blue);
            position: absolute;
            z-index: -1;
            border-radius: 20% 30% 80% 10%;
            filter: blur(150px);
            top: 50%;
            left: 50%;
            transform: translate(-10%, -50%);
            transition: 1s;
        }
        .carousel.showDetail::before{
            transform: translate(-100%, -50%) rotate(90deg);
            filter: blur(130px);
        }
        @media screen and (max-width: 991px){
            /* ipad, tablets */
            .carousel .list .item{
                width: 90%;
            }
            .carousel.showDetail .list .item:nth-child(2) .detail .specifications{
                overflow: auto;
            }
            .carousel.showDetail .list .item:nth-child(2) .detail .title{
                font-size: 2em;
            }
        }
        @media screen and (max-width: 767px){
            /* mobile */
            .carousel{
                height: 600px;
            }
            .carousel .list .item{
                width: 100%;
                font-size: 10px;
            }
            
            .carousel .list{
                height: 100%;
            }
            .carousel .list .item:nth-child(2) .introduce{
                width: 50%;
            }
            
            .carousel .list .item img{
                width: 40%;
            }
            .carousel.showDetail .list .item:nth-child(2) .detail{
                backdrop-filter: blur(10px);
                font-size: small;
            }
            .carousel .list .item:nth-child(2) .introduce .des,
            .carousel.showDetail .list .item:nth-child(2) .detail .des{
                height: 100px;
                overflow: auto;
            }
            .carousel.showDetail .list .item:nth-child(2) .detail .checkout{
                display: flex;
                width: max-content;
                float: right;
            }
        }
      `}</style>

      <div className="carousel" ref={carouselRef}>
        <div className="list" ref={listRef}>
          {products.map((product, index) => (
            <div className="item" key={product.id}>
              <img src={product.image} alt={product.topic} />
              <div className="introduce">
                <div className="title">{product.title}</div>
                <div className="topic" style={{color: product.topicColor, fontWeight:"700"}}>
                  {product.topic}
                </div>
                <div className="des">
                  {product.description}
                </div>
                <button className="seeMore">SEE MORE &#8599;</button>
              </div>
              <div className="detail">
                <div className="title" style={{color: product.topicColor, fontWeight:"700"}}>
                  {product.topic.toUpperCase()}
                </div>
                <div className="des">
                  {product.description}
                </div>
                <div className="specifications">
                  <div>
                    <p>Rating</p>
                    <p>{product.rating}</p>
                  </div>
                  <div>
                    <p>Quantity</p>
                    <p>{product.quantity}</p>
                  </div>
                  <div>
                    <p>Flavour</p>
                    <p>{product.flavour}</p>
                  </div>
                  <div>
                    <p>Aroma</p>
                    <p>{product.aroma}</p>
                  </div>
                  <div>
                    <p>Price</p>
                    <p>{product.price}</p>
                  </div>
                </div>
                <div className="checkout">
                  <button>ADD TO CART</button>
                  <button>CHECKOUT</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="arrows">
          <button id="prev">&lt;</button>
          <button id="next">&gt;</button>
          <button id="back">See All &#8599;</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;









