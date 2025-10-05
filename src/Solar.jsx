import React from 'react'

const Solar = () => {
  return (
    <div>
      <h2 className='best'>Best Seller in Foodiee</h2>
      <div className="maincircle">
        <div className="cardcolor">
          <div className="circle">
            <img 
              src="https://wallpapers.com/images/hd/pepsi-can-splash-dynamic-advertisement-nrmd9ymdbo1qbtd7.png" 
              alt="Pepsi Logo" 
              className="logo" 
            />
          </div>

          <img src="https://www.pngplay.com/wp-content/uploads/1/Pepsi-PNG-Download-Image.png" alt="Pepsi Can" className="product_img" />

          <div className="content">
            <h2>Pepsi</h2>
            <p>
              Pepsi is a cool, refreshing drink that satisfies your thirst 
              and delights your taste buds. Our secret blend of flavors.
            </p>
            <a href="#">Shop Now</a>
          </div>
        </div>

        <div className="cardcolor" style={{ "--clr": "#d52b1e" }}>
          <div className="circle">
            <img 
              src="https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/512/512/true/eyJpZCI6ImRlNjU3ZWVkZjQxYWMyMzY1ZGFjMWIxZDVjOTU2MDE4LmpwZyIsInN0b3JhZ2UiOiJwdWJsaWNfc3RvcmUifQ?signature=2e57458323de9b802eba53af7645b2fa6858110b84f935d68b0679a114c4efea" 
              alt="Pepsi Logo" 
              className="logo" 
            />
          </div>

          <img src="https://static.vecteezy.com/system/resources/previews/057/446/228/non_2x/december-refreshment-in-berlin-featuring-a-classic-drink-against-a-bright-background-berlin-germany-december-16-2025-coca-cola-isolated-on-transparent-transparent-background-free-png.png" alt="Pepsi Can" className="product_img" />

          <div className="content">
            <h2>Coca cola</h2>
            <p>
              Coca Cola is a cool, refreshing drink that satisfies your thirst 
              and delights your taste buds. Our secret blend of flavors.
            </p>
            <a href="#" style={{backgroundColor:"black"}}>Shop Now</a>
          </div>
        </div>
      </div>

      <div className="maincircle">
        <div className="cardcolor" style={{ "--clr": "#7B3F00" }}>
          <div className="circle">
            <img 
              src="https://rosepng.com/wp-content/uploads/2024/02/s11728_milk_shake_isolated_on_white_background_-stylize_200__1197b7a3-1e83-4109-984f-1534e960aa52_2-photoroom-png-photoroom_11zon.png" 
              alt="Pepsi Logo" 
              className="logo" 
            />
          </div>

          <img src="https://wallpapers.com/images/hd/chocolate-milkshake-png-05212024-hkm632paawr5thbo.jpg" alt="Pepsi Can" className="product_img" />

          <div className="content">
            <h2>Chocolate Milkshake</h2>
            <p>
              Chocolate Milkshake is a cool, refreshing drink that satisfies your thirst 
              and delights your taste buds. 
            </p>
            <a href="#">Shop Now</a>
          </div>
        </div>

        <div className="cardcolor" style={{ "--clr": "#666666" }}>
          <div className="circle">
            <img 
              src="https://static.vecteezy.com/system/resources/previews/054/719/648/non_2x/delicious-cookies-and-cream-milkshake-topped-with-whipped-cream-and-chocolate-cookies-cookies-and-cream-milkshake-with-whipped-cream-on-transparent-background-free-png.png" 
              alt="Pepsi Logo" 
              className="logo" 
            />
          </div>

          <img src="https://wallpapers.com/images/hd/oreo-milkshake-png-rid6-s88eayfdfeki9mng.jpg" alt="Pepsi Can" className="product_img" />

          <div className="content">
            <h2>Oreo Milkshake</h2>
            <p>
              Oreo Milkshake is a cool, refreshing drink that satisfies your thirst 
              and delights your taste buds. Our secret blend of flavors.
            </p>
            <a href="#">Shop Now</a>
          </div>
        </div>
      </div>



      <style jsx>{`
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: #151515;
          --clr: #005cbf;
        }
          .best{
            color:#ffc107;
            position:relative;
            top:60px;
            font-size:45px;
            letter-spacing:3px;
          }
          .solar-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;  
            width: 100%;
            background: #151515;
            padding: 2rem 0;
          }
        .cardcolor {
          position: relative;
          left:-15px;
          width: 300px;
          height: 350px;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: 0.5s;
          transition-delay: 0.5s;
        }
        .cardcolor:hover {
          width: 600px;
          transition-delay: 0.5s;
        }
        .cardcolor .circle {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .cardcolor .circle::before {
          content: "";
          position: absolute;
          top: 30;
          left: 2;
          right: 2;
          width: 350px;
          height: 350px;
          border-radius: 50%;
          background: #191919;
          border: 8px solid var(--clr);
          transition: 0.5s, background 0.5s;
          transition-delay: 0.75s, 1s;
          filter: drop-shadow(0 0 10px var(--clr)) drop-shadow(0 0 60px var(--clr));
        }
        .cardcolor:hover .circle::before {
          transition-delay: 0.5s;
          width: 100%;
          height: 100%;
          border-radius: 20px;
          background: var(--clr);
        }
        .cardcolor .circle .logo {
          position: relative;
          width: 250px;
          transition: 0.5s;
          transition-delay: 0.5s;
        }
        .cardcolor:hover .circle .logo {
          transform: scale(0);
          transition-delay: 0s;
        }
        .cardcolor .product_img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0) rotate(315deg);
          height: 300px;
          transition: 0.5s ease-in-out;
        }
        .cardcolor:hover .product_img {
          transition-delay: 0.75s;
          top: 25%;
          left: 75%;
          height: 530px;
          transform: translate(-50%, -50%) scale(1) rotate(15deg);
        }
        .cardcolor .content {
          position: absolute;
          width: 50%;
          left: 20%;
          padding: 20px 20px 20px 20px;
          opacity: 0;
          transition: 0.5s;
          visibility: hidden;
        }
        .cardcolor:hover .content {
          transition-delay: 0.75s;
          opacity: 1;
          visibility: visible;
          left: 20px;
        }
        .cardcolor .content h2 {
          color: #fff;
          text-transform: uppercase;
          font-size: 2.5em;
          line-height: 1em;
        }
        .cardcolor .content p {
          color: #fff;
        }
        .cardcolor .content a {
          position: relative;
          color: #fff;
          background: #d52b1e;
          padding: 10px 20px;
          border-radius: 10px;
          display: inline-block;
          text-decoration: none;
          font-weight: 600;
          margin-top: 10px;
        }
      `}</style>
    </div>
  )
}

export default Solar




// import React from 'react'

// const Solar = () => {
//   return (
//     <div className="solar-container">
//       <div className="maincircle">
//         <div className="cardcolor">
//           <div className="circle">
//             <img 
//               src="https://wallpapers.com/images/hd/pepsi-can-splash-dynamic-advertisement-nrmd9ymdbo1qbtd7.png" 
//               alt="Pepsi Logo" 
//               className="logo" 
//             />
//           </div>

//           <img src="https://www.pngplay.com/wp-content/uploads/1/Pepsi-PNG-Download-Image.png" alt="Pepsi Can" className="product_img" />

//           <div className="content">
//             <h2>Pepsi</h2>
//             <p>
//               Pepsi is a cool, refreshing drink that satisfies your thirst 
//               and delights your taste buds. Our secret blend of flavors.
//             </p>
//             <a href="#">Shop Now</a>
//           </div>
//         </div>

//         <div className="cardcolor" style={{ "--clr": "#d52b1e" }}>
//           <div className="circle">
//             <img 
//               src="https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/512/512/true/eyJpZCI6ImRlNjU3ZWVkZjQxYWMyMzY1ZGFjMWIxZDVjOTU2MDE4LmpwZyIsInN0b3JhZ2UiOiJwdWJsaWNfc3RvcmUifQ?signature=2e57458323de9b802eba53af7645b2fa6858110b84f935d68b0679a114c4efea" 
//               alt="Coca Cola Logo" 
//               className="logo" 
//             />
//           </div>

//           <img src="https://static.vecteezy.com/system/resources/previews/057/446/228/non_2x/december-refreshment-in-berlin-featuring-a-classic-drink-against-a-bright-background-berlin-germany-december-16-2025-coca-cola-isolated-on-transparent-transparent-background-free-png.png" alt="Coca Cola Can" className="product_img" />

//           <div className="content">
//             <h2>Coca cola</h2>
//             <p>
//               Coca Cola is a cool, refreshing drink that satisfies your thirst 
//               and delights your taste buds. Our secret blend of flavors.
//             </p>
//             <a href="#" style={{backgroundColor:"black"}}>Shop Now</a>
//           </div>
//         </div>
//       </div>

//       <div className="maincircle">
//         <div className="cardcolor" style={{ "--clr": "#7B3F00" }}>
//           <div className="circle">
//             <img 
//               src="https://rosepng.com/wp-content/uploads/2024/02/s11728_milk_shake_isolated_on_white_background_-stylize_200__1197b7a3-1e83-4109-984f-1534e960aa52_2-photoroom-png-photoroom_11zon.png" 
//               alt="Milkshake Logo" 
//               className="logo" 
//             />
//           </div>

//           <img src="https://wallpapers.com/images/hd/chocolate-milkshake-png-05212024-hkm632paawr5thbo.jpg" alt="Chocolate Milkshake" className="product_img" />

//           <div className="content">
//             <h2>Chocolate Milkshake</h2>
//             <p>
//               Chocolate Milkshake is a cool, refreshing drink that satisfies your thirst 
//               and delights your taste buds. 
//             </p>
//             <a href="#">Shop Now</a>
//           </div>
//         </div>

//         <div className="cardcolor" style={{ "--clr": "#2C2C2C" }}>
//           <div className="circle">
//             <img 
//               src="https://static.vecteezy.com/system/resources/previews/054/719/648/non_2x/delicious-cookies-and-cream-milkshake-topped-with-whipped-cream-and-chocolate-cookies-cookies-and-cream-milkshake-with-whipped-cream-on-transparent-background-free-png.png" 
//               alt="Oreo Milkshake Logo" 
//               className="logo" 
//             />
//           </div>

//           <img src="https://wallpapers.com/images/hd/oreo-milkshake-png-rid6-s88eayfdfeki9mng.jpg" alt="Oreo Milkshake" className="product_img" />

//           <div className="content">
//             <h2>Oreo Milkshake</h2>
//             <p>
//               Oreo Milkshake is a cool, refreshing drink that satisfies your thirst 
//               and delights your taste buds. Our secret blend of flavors.
//             </p>
//             <a href="#">Shop Now</a>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .solar-container {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           width: 100%;
//           min-height: 100vh;
//           background: #151515;
//           padding: 2rem 0;
//         }

//         .maincircle {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           gap: 2rem;
//           margin: 2rem 0;
//           flex-wrap: wrap;
//         }

//         .cardcolor {
//           position: relative;
//           width: 300px;
//           height: 350px;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           transition: 0.5s;
//           transition-delay: 0.5s;
//           --clr: #005cbf;
//         }

//         .cardcolor:hover {
//           width: 600px;
//           transition-delay: 0.5s;
//         }

//         .cardcolor .circle {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           border-radius: 20px;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }

//         .cardcolor .circle::before {
//           content: "";
//           position: absolute;
//           top: 30px;
//           left: 2px;
//           right: 2px;
//           width: 350px;
//           height: 350px;
//           border-radius: 50%;
//           background: #191919;
//           border: 8px solid var(--clr);
//           transition: 0.5s, background 0.5s;
//           transition-delay: 0.75s, 1s;
//           filter: drop-shadow(0 0 10px var(--clr)) drop-shadow(0 0 60px var(--clr));
//         }

//         .cardcolor:hover .circle::before {
//           transition-delay: 0.5s;
//           width: 100%;
//           height: 100%;
//           border-radius: 20px;
//           background: var(--clr);
//         }

//         .cardcolor .circle .logo {
//           position: relative;
//           width: 250px;
//           transition: 0.5s;
//           transition-delay: 0.5s;
//         }

//         .cardcolor:hover .circle .logo {
//           transform: scale(0);
//           transition-delay: 0s;
//         }

//         .cardcolor .product_img {
//           position: absolute;
//           top: 50%;
//           left: 50%;
//           transform: translate(-50%, -50%) scale(0) rotate(315deg);
//           height: 300px;
//           transition: 0.5s ease-in-out;
//         }

//         .cardcolor:hover .product_img {
//           transition-delay: 0.75s;
//           top: 25%;
//           left: 75%;
//           height: 530px;
//           transform: translate(-50%, -50%) scale(1) rotate(15deg);
//         }

//         .cardcolor .content {
//           position: absolute;
//           width: 50%;
//           left: 20%;
//           padding: 20px 20px 20px 20px;
//           opacity: 0;
//           transition: 0.5s;
//           visibility: hidden;
//         }

//         .cardcolor:hover .content {
//           transition-delay: 0.75s;
//           opacity: 1;
//           visibility: visible;
//           left: 20px;
//         }

//         .cardcolor .content h2 {
//           color: #fff;
//           text-transform: uppercase;
//           font-size: 2.5em;
//           line-height: 1em;
//         }

//         .cardcolor .content p {
//           color: #fff;
//         }

//         .cardcolor .content a {
//           position: relative;
//           color: #fff;
//           background: #d52b1e;
//           padding: 10px 20px;
//           border-radius: 10px;
//           display: inline-block;
//           text-decoration: none;
//           font-weight: 600;
//           margin-top: 10px;
//         }

//         /* Responsive Design */
//         @media screen and (max-width: 768px) {
//           .maincircle {
//             flex-direction: column;
//             gap: 1rem;
//           }
          
//           .cardcolor {
//             width: 280px;
//             height: 320px;
//           }
          
//           .cardcolor:hover {
//             width: 90vw;
//           }
          
//           .cardcolor .content h2 {
//             font-size: 2em;
//           }
//         }

//         @media screen and (max-width: 1200px) {
//           .maincircle {
//             flex-wrap: wrap;
//             justify-content: center;
//           }
//         }
//       `}</style>
//     </div>
//   )
// }

// export default Solar





