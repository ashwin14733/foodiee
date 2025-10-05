
import React,{ useState, useEffect } from 'react';
import Typed from 'typed.js';

const Sliderone = () => {
  const [imageIndex, setImageIndex] = useState(0);
    const el = React.useRef(null);
  
    React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['Crispy on the outside, soft on the inside!🔥', 'Coffee is my love language! 💕☕','Fresh, fruity, fabulous! ✨🍓',"The perfect breakfast comfort food!",'Taste of tradition in every bite! 🏛️👅','Starting strong with oats!'],
        typeSpeed: 40,
        loop:true,
      });
  
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []);

  // Headphone data
  const headphones = [
    { 
      image: "https://madrascafewi.com/wp-content/uploads/2023/04/medhu-vada.png", 
      alt: "Green beverage",
      background: "radial-gradient(50% 50% at 50% 50%, #C7F6D0 0%, #7CB686 92.19%)"
    },
    { 
      image: "https://static.vecteezy.com/system/resources/previews/051/679/495/non_2x/blue-cup-of-milk-tea-and-biscuit-on-transparent-background-free-png.png", 
      alt: "Blue beverage",
      background: "radial-gradient(50% 50% at 50% 50%, #D1E4F6 0%, #5F9CCF 100%)"
    },
    { 
      image: "https://wallpapers.com/images/high/summer-fruit-salad-png-osh-zp4gypo7sj3gp4rl.png", 
      alt: "Red beverage",
      background: "radial-gradient(50% 50% at 50% 50%, #FFB7B2 0%, #ED746E 100%)"
    },
     { 
      image: "https://static.vecteezy.com/system/resources/previews/055/043/575/non_2x/omelette-dish-on-transparent-background-free-png.png", 
      alt: "Red beverage",
      background: "radial-gradient(50% 50% at 50% 50%, #ffde4bff 0%, #baa400ff 100%)"
    },
    { 
      image: "https://static.vecteezy.com/system/resources/previews/047/825/562/non_2x/idli-against-transparent-background-free-png.png", 
      alt: "White beverage",
      background: "radial-gradient(50% 50% at 50% 50%, #D7D7D7 0%, #979797 100%)"
    },
    { 
      image: "https://wallpapers.com/images/hd/steel-cut-oats-recipe-png-85-mwn21amoj1pn1kcp.jpg", 
      alt: "Black beverage",
      background: "radial-gradient(50% 50% at 50% 50%, #6B6B6B 0%, #292929 100%)"
    }
  ];

  // Auto-advance slider
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % headphones.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [headphones.length]);

  // Helper function to get image class
  const getImageClass = (index) => {
    if (index === imageIndex) return 'active';
    if (index === (imageIndex - 1 + headphones.length) % headphones.length) return 'previous';
    if (index === (imageIndex + 1) % headphones.length) return 'next';
    return 'inactive';
  };

  return (
    <div className="h-screen overflow-hidden font-montserrat">
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;900&display=swap");
        
        .font-montserrat {
          font-family: "Montserrat", sans-serif;
        }

        .slider-main {
          min-height: 700px;
          background: radial-gradient(50% 50% at 50% 50%, #c7f6d0 0%, #7cb686 92.19%);
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 100%;
          overflow: hidden;
          position: relative;
          z-index: 1;
        }

        .background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 2s ease-in-out;
          z-index: -1;
        }

        .background.active {
          opacity: 1;
        }

        .containerone {
          position: relative;
          left: calc(50% - (1140px / 2));
          width: 50%;
          padding: 100px 0;
          max-width: 525px;
          height: 100%;
        }

        .slider-content-wrap {
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100%;
          position: relative;
          left: -100px;
        }

        .heading-style-2 {
          color: #fff;
          font-size: 50px;
          font-weight: 900;
          line-height: 55px;
          margin-bottom: 40px;
          text-align: start;
        }

        .description {
          color: #fff;
          font-family: Montserrat;
          font-size: 18px;
          font-weight: 400;
          line-height: 35px;
          margin-bottom: 28px;
        }

        .logo img {
          width: 271px;
          height: auto;
          margin-bottom: 20px;
        }

        .social-icons {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .social-icon {
          border: 2px solid #fff;
          border-radius: 50%;
          width: 45px;
          height: 45px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .slider-images {
          position: relative;
          width: 50%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

                        .slider-image {
          position: absolute;
          top: -15%;
          left: 85%;
          filter: blur(20px);
          transform: rotate(-60deg) scale(0.3);
          transition: all 1.8s ease-in-out;
          object-fit: cover;
          max-width: 800px;
          max-height: 1000px;
          height: 100vh;
          min-height: 600px;
          width: auto;
          opacity: 0;
        }

        .slider-image.next {
          opacity: 0.4;
          filter: blur(25px);
          top: -15%;
          left: 85%;
          transform: rotate(-60deg) scale(0.4);
          z-index: 1;
        }

        .slider-image.active {
          opacity: 0.9;
          filter: blur(0px);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(0deg) scale(0.85);
          z-index: 3;
        }

        .slider-image.previous {
          opacity: 0.3;
          filter: blur(20px);
          top: 90%;
          left: 85%;
          transform: rotate(60deg) scale(0.3);
          z-index: 1;
        }

        .slider-image.inactive {
          opacity: 0;
          filter: blur(30px);
          top: 110%;
          left: 90%;
          transform: rotate(60deg) scale(0.2);
          z-index: 0;
        }

        /* Responsive Design */
        @media screen and (max-width: 1199px) {
          .logo img { width: 230px; }
          .heading-style-2 { font-size: 40px; line-height: 45px; margin-bottom: 30px; }
          .description { font-size: 17px; line-height: 28px; margin-bottom: 22px; }
          .containerone { left: calc(50% - (920px / 2)); padding: 80px 0; max-width: 475px; }
          .slider-image { 
            max-width: 350px; 
            max-height: 450px; 
            height: 55vh; 
            min-height: 280px; 
          }
        }

        @media screen and (max-width: 991px) {
          .logo img { width: 210px; }
          .heading-style-2 { font-size: 35px; line-height: 43px; margin-bottom: 22px; }
          .description { font-size: 16px; line-height: 26px; margin-bottom: 18px; }
          .containerone { left: calc(50% - (720px / 2)); padding: 70px 0; max-width: 405px; }
          .slider-images { width: 45%; }
          .slider-image { 
            max-width: 300px; 
            max-height: 400px; 
            height: 50vh; 
            min-height: 250px; 
          }
        }

        @media screen and (max-width: 767px) {
          .logo img { width: 200px; }
          .slider-main { flex-direction: column; min-height: 900px; }
          .social-icon { width: 35px; height: 35px; }
          .containerone { position: unset; padding: 70px 0; max-width: 540px; width: 100%; }
          .slider-images { width: 100%; height: 50%; }
          .slider-image { 
            max-width: 250px; 
            max-height: 320px; 
            height: 40vh; 
            min-height: 200px; 
          }
        }

        @media screen and (max-width: 575px) {
          .logo img { width: 180px; }
          .heading-style-2 { font-size: 30px; line-height: 40px; margin-bottom: 20px; }
          .description { font-size: 15px; line-height: 24px; margin-bottom: 16px; }
          .social-icon { width: 32px; height: 32px; }
          .containerone { padding: 50px 20px; max-width: 100%; }
          .slider-image { 
            max-width: 200px; 
            max-height: 260px; 
            height: 35vh; 
            min-height: 180px; 
          }
        }
      `}</style>

      <section className="slider-main">
        {/* Dynamic Backgrounds */}
        {headphones.map((headphone, index) => (
          <div
            key={`bg-${index}`}
            className={`background ${index === imageIndex ? 'active' : ''}`}
            style={{ background: headphone.background }}
          />
        ))}

        <div className="containerone">
          <div className="logo">
            <a href="#">
              <svg width="271" height="60" viewBox="0 0 271 60" fill="none">
                <text x="0" y="40" fill="white" fontSize="24" fontWeight="900" fontFamily="Montserrat">
                  FOOD FOR THE SOUL
                </text>
              </svg>
            </a>
          </div>
          
          <div className="slider-content-wrap">
            <div className="slider-content">
              <h2 className="heading-style-2">
                Short & Sweet Yum! Food coma incoming. Eat well
              </h2>
              <h3 className="description">
              <span ref={el} />

              </h3>
              <p>Share what truly resonates with you and your meal. Add po pular hashtags like #foodie, #instafood, #foodphotography, and #delicious to increase visibility. </p>
               
              <h3 className="heading-style-2">$779.99</h3>
              
              <div className="social-icons">
                <a href="#" className="social-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="social-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="social-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="slider-images">
          {headphones.map((headphone, index) => (
            <img
              key={index}
              className={`slider-image ${getImageClass(index)}`}
              src={headphone.image}
              alt={headphone.alt}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Sliderone;

