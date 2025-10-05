// import React, { useEffect } from 'react';

// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import fanta from './images/fanta.png'
// import cocacola from './images/cocacola.png'
// import coconoutleaf from './images/coconoutleaf.png'
// import leaf from './images/leaf.webp'
// import leaf2 from './images/leaf2.png'
// import lemon from './images/lemon.webp'
// import orange from './images/orange.webp'
// import orange2 from './images/orange2.png'
// import pepsi from './images/pepsi.png'










// const FantaWebsite = () => {
//   useEffect(() => {
//     // Register ScrollTrigger plugin
//     gsap.registerPlugin(ScrollTrigger);

//     // First timeline for section two animations
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".two",
//         start: "0% 95%",
//         end: "70% 50%",
//         scrub: true,
//       }
//     });

//     tl.to("#fanta", {
//       top: "120%",
//       left: "0%"
//     }, 'orange')
//     .to("#orange-cut", {
//       top: "160%",
//       left: "23%"
//     }, 'orange')
//     .to("#orange", {
//       width: "15%",
//       top: "160%",
//       right: "10%"
//     }, 'orange')
//     .to("#leaf", {
//       top: "110%",
//       rotate: "130deg",
//       left: "70%"
//     }, 'orange')
//     .to("#leaf2", {
//       top: "110%",
//       rotate: "130deg",
//       left: "0%"
//     }, 'orange');

//     // Second timeline for section three animations
//     const tl2 = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".three",
//         start: "0% 95%",
//         end: "20% 50%",
//         scrub: true,
//       }
//     });

//     tl2.from(".lemon1", {
//       rotate: "-90deg",
//       left: "-100%",
//       top: "110%"
//     }, 'ca')
//     .from("#cocacola", {
//       rotate: "-90deg",
//       top: "110%",
//       left: "-100%",
//     }, 'ca')
//     .from(".lemon2", {
//       rotate: "90deg",
//       left: "100%",
//       top: "110%"
//     }, 'ca')
//     .from("#pepsi", {
//       rotate: "90deg",
//       top: "110%",
//       left: "100%",
//     }, 'ca')
//     .to("#orange-cut", {
//       width: "18%",
//       left: "42%",
//       top: "204%"
//     }, 'ca')
//     .to("#fanta", {
//       width: "35%",
//       top: "210%",
//       left: "33%",
//     }, 'ca');

//     // Cleanup function
//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, []);

//   return (
//     <>
//       <style jsx>{`
//         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
        
//         * {
//           margin: 0;
//           padding: 0;
//           box-sizing: border-box;
//           font-family: 'Inter', sans-serif;
//         }

//         html, body {
//           height: 100%;
//           width: 100%;
//         }

//         body::-webkit-scrollbar {
//           display: none;
//         }

//         #main {
//           width: 100%;
//           height: 100vh;
//           background-color: orangered;
//         }

//         nav {
//           position: fixed;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           width: 100%;
//           height: 10vh;
//           padding: 0vw 10vw;
//           z-index: 99;
//         }

//         nav a, nav i {
//           font-size: 1vw;
//           text-decoration: none;
//           color: #fff;
//         }

//         .cntr-nav {
//           display: flex;
//           gap: 3vw;
//         }

//         nav i {
//           font-size: 1.5vw;
//         }

//         .one {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           width: 100%;
//           height: 100vh;
//           background: linear-gradient(150deg, rgb(255, 166, 0), rgb(255, 94, 0));
//         }

//         .one h1 {
//           font-size: 25vw;
//           font-weight: 700;
//           color: #fff;
//         }

//         #fanta {
//           position: absolute;
//           width: 40%;
//           z-index: 2;
//           transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.5s;
//         }

//         #orange-cut {
//           position: absolute;
//           top: 10%;
//           left: 32%;
//           width: 15%;
//           z-index: 1;
//           transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.5s;
//         }

//         #orange {
//           position: absolute;
//           width: 20%;
//           z-index: 3;
//           top: 55%;
//           right: 30%;
//           transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.5s;
//         }

//         #leaf {
//           top: 10%;
//           left: 0%;
//           transform: rotate(60deg);
//           position: absolute;
//           width: 18%;
//           transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.5s;
//         }

//         #leaf2 {
//           top: 70%;
//           left: 80%;
//           transform: rotate(-90deg);
//           position: absolute;
//           width: 12%;
//           transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.5s;
//         }

//         #leaf3 {
//           position: absolute;
//           width: 20%;
//           top: 10%;
//           right: 0%;
//         }

//         .two {
//           display: flex;
//           width: 100%;
//           height: 100vh;
//           background: #4d231c;
//         }

//         .lft-two, .rght-two {
//           display: flex;
//           align-items: flex-start;
//           justify-content: center;
//           flex-direction: column;
//           gap: 5vh;
//           width: 50%;
//           height: 100%;
//         }

//         .lft-two svg {
//           margin-top: 50vh;
//           width: 90%;
//           transform: rotateX(50deg);
//         }

//         .rght-two {
//           padding: 0 5vw;
//         }

//         .rght-two h1 {
//           color: #fff;
//           font-size: 5vw;
//         }

//         .rght-two p {
//           font-size: 1vw;
//           color: #fff;
//           width: 80%;
//           line-height: 1.6;
//         }

//         .three {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 5vw;
//           width: 100%;
//           height: 100vh;
//           background: linear-gradient(150deg, rgb(255, 166, 0), rgb(255, 94, 0));
//         }

//         .card {
//           position: relative;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           flex-direction: column;
//           gap: 2vh;
//           width: 25vw;
//           height: 70vh;
//           margin-top: 10vh;
//           border-radius: 20px;
//           background-color: #fff;
//         }

//         .card h1 {
//           margin-top: 40vh;
//           font-size: 3vw;
//           font-weight: 700;
//         }

//         .card button {
//           font-size: 1vw;
//           border-radius: 50px;
//           border: none;
//           color: #fff;
//           background-color: rgb(255, 149, 0);
//           padding: 1vw 2vw;
//           cursor: pointer;
//           transition: background-color 0.3s ease;
//         }

//         .card button:hover {
//           background-color: rgb(255, 120, 0);
//         }

//         #cocacola {
//           top: -15%;
//           position: absolute;
//           width: 60%;
//           left: 50%;
//           transform: translate(-50%, 0%);
//           transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.5s;
//           z-index:2;
//         }

//         #pepsi {
//           top: -15%;
//           // left:-30px;
//           position: absolute;
//           width: 85%;
//           left: 50%;
//           z-index:2;
//           transform: translate(-50%, 0%);
//           transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.5s;
//         }

//         .lemon {
//           top: -30%;
//           position: absolute;
//           left: 50%;
//           width: 25vw;
//           transform: translate(-50%, 0%);
//           transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.5s;
//         }

//         /* Responsive Design */
//         @media screen and (max-width: 768px) {
//           nav {
//             padding: 0vw 5vw;
//           }
          
//           nav a, nav i {
//             font-size: 3vw;
//           }
          
//           .cntr-nav {
//             gap: 5vw;
//           }
          
//           .one h1 {
//             font-size: 30vw;
//           }
          
//           .rght-two h1 {
//             font-size: 8vw;
//           }
          
//           .rght-two p {
//             font-size: 2.5vw;
//           }
          
//           .three {
//             flex-direction: column;
//             gap: 3vh;
//             padding: 5vh 0;
//           }
          
//           .card {
//             width: 80vw;
//             height: 50vh;
//             margin-top: 2vh;
//           }
          
//           .card h1 {
//             font-size: 3vw;
//             margin-top: auto;
//             font-weight:700;
//             z-index:3
//           }
          
//           .card button {
//             font-size: 3vw;
//             padding: 2vw 4vw;
//           }
//         }
//       `}</style>

//       <div id="main">
//         {/* <nav>
//           <a href="#">Logo</a>
//           <div className="cntr-nav">
//             <a href="#">Home</a>
//             <a href="#">Products</a>
//             <a href="#">Shop</a>
//             <a href="#">Contact</a>
//           </div>
//           <i className="ri-menu-fill">☰</i>
//         </nav> */}

//         <div className="one">
//           <h1>FANTA</h1>
//           <img 
//             id="orange-cut" 
//             src= {orange2}
//             alt="Orange slice" 
//           />
//           <img 
//             id="fanta" 
//             src={fanta} 
//             alt="Fanta bottle" 
//           />
//           <img 
//             id="orange" 
//             src={orange}
//             alt="Orange" 
//           />
//           <img 
//             id="leaf" 
//             src={leaf}
//             alt="Leaf" 
//           />
//           <img 
//             id="leaf2" 
//             src= {leaf2}
//             alt="Leaf" 
//           />
//           <img 
//             id="leaf3" 
//             src={coconoutleaf}
//             alt="Leaf" 
//           />
//         </div>

//         <div className="two">
//           <div className="lft-two">
//             <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
//               <path 
//                 fill="#e04428" 
//                 d="M41.5,-59.5C49.8,-51.1,49.7,-33.6,50.7,-19.2C51.7,-4.7,53.8,6.7,52.4,18.9C51.1,31.1,46.3,44.1,36.9,52.9C27.6,61.8,13.8,66.5,-2.5,70C-18.8,73.4,-37.7,75.6,-52.5,68.5C-67.3,61.5,-78.2,45.2,-84.5,27.1C-90.9,9,-92.7,-10.8,-80.5,-19.3C-68.3,-27.8,-42.1,-24.8,-26.3,-30.8C-10.6,-36.8,-5.3,-51.7,5.7,-59.5C16.6,-67.3,33.2,-68,41.5,-59.5Z" 
//                 transform="translate(100 100)" 
//               />
//             </svg>
//           </div>
//           <div className="rght-two">
//             <h1>Flavour Updated</h1>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, excepturi sed, itaque placeat id natus soluta veniam obcaecati qui a laborum laboriosam dolorem illum labore sit, voluptates commodi neque dolores tempore temporibus deleniti? Nobis, ratione hic error quis cum neque nulla laudantium nostrum sit nihil dolorum quisquam enim quaerat, eaque ex sequi, harum totam quia non! Labore, neque! Amet voluptatem illo similique recusandae! Ex quaerat quibusdam asperiores, ducimus tempore magni labore. Tenetur voluptas, quos ex repellendus provident mollitia laboriosam adipisci alias a impedit, cum accusamus rerum delectus eaque facilis veniam quia laborum incidunt ea assumenda! Eos magni aspernatur quod distinctio.
//             </p>
//           </div>
//         </div>

//         <div className="three">
//           <div className="card">
//             {/* <img 
//               className="lemon lemon1" 
//               src={lemon} 
//               alt="Lemon" 
//             /> */}
//             <img 
//               id="cocacola" 
//               src={cocacola} 
//               alt="Coca Cola" 
//             />
//             <h1>CocaCola</h1>
//             <button>Buy Now</button>
//           </div>
          
//           <div className="card">
//             <h1>Fanta</h1>
//             <button>Buy Now</button>
//           </div>
          
//           <div className="card">
//             {/* <img 
//               className="lemon lemon2" 
//               src={cocacola}
//               alt="Lemon" 
//             /> */}
//             <img 
//               id="pepsi" 
//               src={pepsi}
//               alt="Pepsi" 
//             />
//             <h1>Pepsi</h1>
//             <button>Buy Now</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default FantaWebsite;






import React, { useEffect } from 'react';

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import fanta from './images/fanta.png'
import cocacola from './images/cocacola.png'
import coconoutleaf from './images/coconoutleaf.png'
import leaf from './images/leaf.webp'
import leaf2 from './images/leaf2.png'
import lemon from './images/lemon.webp'
import orange from './images/orange.webp'
import orange2 from './images/orange2.png'
import pepsi from './images/pepsi.png'

const FantaWebsite = () => {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // First timeline for section two animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-section",
        start: "0% 95%",
        end: "70% 50%",
        scrub: true,
      }
    });

    tl.to("#fanta", {
      top: "120%",
      left: "0%"
    }, 'orange')
    .to("#orange-cut", {
      top: "160%",
      left: "23%"
    }, 'orange')
    .to("#orange", {
      width: "15%",
      top: "160%",
      right: "10%"
    }, 'orange')
    .to("#leaf", {
      top: "110%",
      rotate: "130deg",
      left: "70%"
    }, 'orange')
    .to("#leaf2", {
      top: "110%",
      rotate: "130deg",
      left: "0%"
    }, 'orange');

    // Second timeline for section three animations
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".products-showcase",
        start: "0% 95%",
        end: "20% 50%",
        scrub: true,
      }
    });

    tl2.from(".citrus-left", {
      rotate: "-90deg",
      left: "-100%",
      top: "110%"
    }, 'ca')
    .from("#cocacola", {
      rotate: "-90deg",
      top: "110%",
      left: "-100%",
    }, 'ca')
    .from(".citrus-right", {
      rotate: "90deg",
      left: "100%",
      top: "110%"
    }, 'ca')
    .from("#pepsi", {
      rotate: "90deg",
      top: "110%",
      left: "100%",
    }, 'ca')
    .to("#orange-cut", {
      width: "18%",
      left: "42%",
      top: "204%"
    }, 'ca')
    .to("#fanta", {
      width: "35%",
      top: "210%",
      left: "33%",
    }, 'ca');

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Inter', sans-serif;
        }

        html, body {
          height: 100%;
          width: 100%;
        }

        body::-webkit-scrollbar {
          display: none;
        }

        #app-container {
          width: 100%;
          height: 100vh;
          background-color: orangered;
        }

        .site-navigation {
          position: fixed;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          height: 10vh;
          padding: 0vw 10vw;
          z-index: 99;
        }

        .site-navigation a, .site-navigation i {
          font-size: 1vw;
          text-decoration: none;
          color: #fff;
        }

        .nav-center {
          display: flex;
          gap: 3vw;
        }

        .site-navigation i {
          font-size: 1.5vw;
        }

        .landing-section {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100vh;
          background: linear-gradient(150deg, rgb(255, 166, 0), rgb(255, 94, 0));
        }

        .landing-section h1 {
          font-size: 25vw;
          font-weight: 700;
          color: #fff;
        }

        #fanta {
          position: absolute;
          width: 40%;
          z-index: 2;
          transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.5s;
        }

        #orange-cut {
          position: absolute;
          top: 10%;
          left: 32%;
          width: 15%;
          z-index: 1;
          transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.5s;
        }

        #orange {
          position: absolute;
          width: 20%;
          z-index: 3;
          top: 55%;
          right: 30%;
          transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.5s;
        }

        #leaf {
          top: 10%;
          left: 0%;
          transform: rotate(60deg);
          position: absolute;
          width: 18%;
          transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.5s;
        }

        #leaf2 {
          top: 70%;
          left: 80%;
          transform: rotate(-90deg);
          position: absolute;
          width: 12%;
          transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.5s;
        }

        #leaf3 {
          position: absolute;
          width: 20%;
          top: 10%;
          right: 0%;
        }

        .hero-section {
          display: flex;
          width: 100%;
          height: 100vh;
          background: #4d231c;
        }

        .content-left, .content-right {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          flex-direction: column;
          gap: 5vh;
          width: 50%;
          height: 100%;
        }

        .content-left svg {
          margin-top: 50vh;
          width: 90%;
          transform: rotateX(50deg);
        }

        .content-right {
          padding: 0 5vw;
        }

        .content-right h1 {
          color: #fff;
          font-size: 5vw;
        }

        .content-right p {
          font-size: 1vw;
          color: #fff;
          width: 80%;
          line-height: 1.6;
        }

        .products-showcase {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5vw;
          width: 100%;
          height: 100vh;
          background: linear-gradient(150deg, rgb(255, 166, 0), rgb(255, 94, 0));
        }

        .product-card {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 2vh;
          width: 25vw;
          height: 70vh;
          margin-top: 10vh;
          border-radius: 20px;
          background-color: #fff;
        }

        .product-card h1 {
          margin-top: 40vh;
          font-size: 3vw;
          font-weight: 700;
        }

        .product-card button {
          font-size: 1vw;
          border-radius: 50px;
          border: none;
          color: #fff;
          background-color: rgb(255, 149, 0);
          padding: 1vw 2vw;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .product-card button:hover {
          background-color: rgb(255, 120, 0);
        }

        #cocacola {
          top: -15%;
          position: absolute;
          width: 60%;
          left: 50%;
          transform: translate(-50%, 0%);
          transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.5s;
          z-index:2;
        }

        #pepsi {
          top: -15%;
          position: absolute;
          width: 85%;
          left: 50%;
          z-index:2;
          transform: translate(-50%, 0%);
          transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.5s;
        }

        .citrus-element {
          top: -30%;
          position: absolute;
          left: 50%;
          width: 25vw;
          transform: translate(-50%, 0%);
          transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.5s;
        }

        /* Responsive Design */
        @media screen and (max-width: 768px) {
          .site-navigation {
            padding: 0vw 5vw;
          }
          
          .site-navigation a, .site-navigation i {
            font-size: 3vw;
          }
          
          .nav-center {
            gap: 5vw;
          }
          
          .landing-section h1 {
            font-size: 30vw;
          }
          
          .content-right h1 {
            font-size: 8vw;
          }
          
          .content-right p {
            font-size: 2.5vw;
          }
          
          .products-showcase {
            flex-direction: column;
            gap: 3vh;
            padding: 5vh 0;
          }
          
          .product-card {
            width: 80vw;
            height: 50vh;
            margin-top: 2vh;
          }
          
          .product-card h1 {
            font-size: 3vw;
            margin-top: auto;
            font-weight:700;
            z-index:3
          }
          
          .product-card button {
            font-size: 3vw;
            padding: 2vw 4vw;
          }
        }
      `}</style>

      <div id="app-container">
        {/* <nav className="site-navigation">
          <a href="#">Logo</a>
          <div className="nav-center">
            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="#">Shop</a>
            <a href="#">Contact</a>
          </div>
          <i className="ri-menu-fill">☰</i>
        </nav> */}

        <div className="landing-section">
          <h1>FANTA</h1>
          <img 
            id="orange-cut" 
            src= {orange2}
            alt="Orange slice" 
          />
          <img 
            id="fanta" 
            src={fanta} 
            alt="Fanta bottle" 
          />
          <img 
            id="orange" 
            src={orange}
            alt="Orange" 
          />
          <img 
            id="leaf" 
            src={leaf}
            alt="Leaf" 
          />
          <img 
            id="leaf2" 
            src= {leaf2}
            alt="Leaf" 
          />
          <img 
            id="leaf3" 
            src={coconoutleaf}
            alt="Leaf" 
          />
        </div>

        <div className="hero-section">
          <div className="content-left">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path 
                fill="#e04428" 
                d="M41.5,-59.5C49.8,-51.1,49.7,-33.6,50.7,-19.2C51.7,-4.7,53.8,6.7,52.4,18.9C51.1,31.1,46.3,44.1,36.9,52.9C27.6,61.8,13.8,66.5,-2.5,70C-18.8,73.4,-37.7,75.6,-52.5,68.5C-67.3,61.5,-78.2,45.2,-84.5,27.1C-90.9,9,-92.7,-10.8,-80.5,-19.3C-68.3,-27.8,-42.1,-24.8,-26.3,-30.8C-10.6,-36.8,-5.3,-51.7,5.7,-59.5C16.6,-67.3,33.2,-68,41.5,-59.5Z" 
                transform="translate(100 100)" 
              />
            </svg>
          </div>
          <div className="content-right">
            <h1>Flavour Updated</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, excepturi sed, itaque placeat id natus soluta veniam obcaecati qui a laborum laboriosam dolorem illum labore sit, voluptates commodi neque dolores tempore temporibus deleniti? Nobis, ratione hic error quis cum neque nulla laudantium nostrum sit nihil dolorum quisquam enim quaerat, eaque ex sequi, harum totam quia non! Labore, neque! Amet voluptatem illo similique recusandae! Ex quaerat quibusdam asperiores, ducimus tempore magni labore. Tenetur voluptas, quos ex repellendus provident mollitia laboriosam adipisci alias a impedit, cum accusamus rerum delectus eaque facilis veniam quia laborum incidunt ea assumenda! Eos magni aspernatur quod distinctio.
            </p>
          </div>
        </div>

        <div className="products-showcase">
          <div className="product-card">
            {/* <img 
              className="citrus-element citrus-left" 
              src={lemon} 
              alt="Lemon" 
            /> */}
            <img 
              id="cocacola" 
              src={cocacola} 
              alt="Coca Cola" 
            />
            <h1>CocaCola</h1>
            <button>Buy Now</button>
          </div>
          
          <div className="product-card">
            <h1>Fanta</h1>
            <button>Buy Now</button>
          </div>
          
          <div className="product-card">
            {/* <img 
              className="citrus-element citrus-right" 
              src={cocacola}
              alt="Lemon" 
            /> */}
            <img 
              id="pepsi" 
              src={pepsi}
              alt="Pepsi" 
            />
            <h1>Pepsi</h1>
            <button>Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FantaWebsite;








