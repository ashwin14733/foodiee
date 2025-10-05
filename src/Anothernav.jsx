// import React, { useState, useEffect } from 'react'
// import { Link, useNavigate, Outlet, useLocation } from 'react-router-dom'
// import car from './images/cart.png'

// const Anothernav = () => {
//   const navigate = useNavigate()
//   const location = useLocation()
//   const [searchitems, setSearchitems] = useState('')
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const [cart, setCart] = useState([]); // ✅ default empty array


//   // Handle scroll effect for navbar
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20)
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   const handlesearch = (e) => {
//     e.preventDefault()
//     if (searchitems.trim()) {
//       const currentpath = location.pathname
//       if (
//         [
//           '/shop',
//           '/chatitems',
//           '/noodles',
//           '/paratha',
//           '/pizza',
//           '/shakes',
//           '/briyani',
//         ].includes(currentpath)
//       ) {
//         navigate(currentpath, { state: { searchitems } })
//       } else {
//         navigate('/shop', { state: { searchitems } })
//       }
//     }
//   }

//   const categorychange = (e) => {
//     const selectedcategory = e.target.value
//     switch (selectedcategory) {
//       case 'Breakfast':
//         navigate('/breakfast')
//         break
//       case 'Lunch':
//         navigate('/lunch')
//         break
//       case 'Dinner':
//         navigate('/dinner')
//         break
//       case 'Snacks':
//         navigate('/snacks')
//         break
//       case 'Beverages':
//         navigate('/beverages')
//         break
//       default:
//         navigate('/shop')
//         break
//     }
//   }

//   return (
//     <>
//       <style jsx>{`
//         .aesthetic-navbar {
//           background: linear-gradient(135deg, 
//             rgba(255, 193, 7, 0.95) 0%, 
//             rgba(255, 152, 0, 0.9) 50%, 
//             rgba(255, 87, 34, 0.85) 100%);
//           backdrop-filter: blur(20px);
//           border-bottom: 1px solid rgba(255, 255, 255, 0.2);
//           box-shadow: 
//             0 8px 32px rgba(0, 0, 0, 0.1),
//             0 0 0 1px rgba(255, 255, 255, 0.05),
//             inset 0 1px 0 rgba(255, 255, 255, 0.1);
//           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//           position: sticky;
//           top: 0;
//           z-index: 1000;
//           padding: 0.8rem 0;
//         }

//         .aesthetic-navbar.scrolled {
//           background: linear-gradient(135deg, 
//             rgba(255, 193, 7, 0.98) 0%, 
//             rgba(255, 152, 0, 0.95) 50%, 
//             rgba(255, 87, 34, 0.9) 100%);
//           backdrop-filter: blur(25px);
//           box-shadow: 
//             0 12px 40px rgba(0, 0, 0, 0.15),
//             0 0 0 1px rgba(255, 255, 255, 0.1),
//             inset 0 1px 0 rgba(255, 255, 255, 0.15);
//           padding: 0.5rem 0;
//         }

//         .brand-logo {
//           width: 60px;
//           height: 60px;
//           border-radius: 50%;
//           border: 3px solid rgba(255, 255, 255, 0.3);
//           transition: all 0.3s ease;
//           box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
//         }

//         .brand-logo:hover {
//           transform: scale(1.05) rotate(5deg);
//           border-color: rgba(255, 255, 255, 0.6);
//           box-shadow: 0 6px 30px rgba(0, 0, 0, 0.2);
//         }

//         .nav-link-modern {
//           color: rgba(255, 255, 255, 0.9) !important;
//           font-weight: 600;
//           padding: 0.8rem 1.5rem !important;
//           border-radius: 50px;
//           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//           position: relative;
//           overflow: hidden;
//           text-decoration: none;
//         }

//         .nav-link-modern::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: -100%;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
//           transition: left 0.6s;
//         }

//         .nav-link-modern:hover {
//           color: #fff !important;
//           background: rgba(255, 255, 255, 0.2);
//           backdrop-filter: blur(10px);
//           transform: translateY(-2px);
//           box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
//         }

//         .nav-link-modern:hover::before {
//           left: 100%;
//         }

//         .nav-link-modern.active {
//           background: rgba(255, 255, 255, 0.25);
//           color: #fff !important;
//           box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.1);
//         }

//         .search-container {
//           position: relative;
//           overflow: hidden;
//         }

//         .search-input {
//           background: rgba(255, 255, 255, 0.15) !important;
//           border: 2px solid rgba(255, 255, 255, 0.2) !important;
//           border-radius: 50px !important;
//           color: white !important;
//           padding: 12px 20px !important;
//           font-weight: 500;
//           backdrop-filter: blur(10px);
//           transition: all 0.3s ease;
//           box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.1);
//         }

//         .search-input:focus {
//           background: rgba(255, 255, 255, 0.25) !important;
//           border-color: rgba(255, 255, 255, 0.4) !important;
//           box-shadow: 
//             inset 0 2px 10px rgba(0, 0, 0, 0.1),
//             0 0 0 3px rgba(255, 255, 255, 0.1),
//             0 8px 25px rgba(0, 0, 0, 0.1) !important;
//           transform: translateY(-1px);
//           outline: none;
//         }

//         .search-input::placeholder {
//           color: rgba(255, 255, 255, 0.7);
//         }

//         .search-btn {
//           background: linear-gradient(45deg, #fff, #f8f9fa) !important;
//           border: none !important;
//           border-radius: 50px !important;
//           padding: 12px 20px !important;
//           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//           box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
//           position: relative;
//           overflow: hidden;
//         }

//         .search-btn::before {
//           content: '';
//           position: absolute;
//           top: 50%;
//           left: 50%;
//           width: 0;
//           height: 0;
//           background: radial-gradient(circle, rgba(255, 193, 7, 0.3) 0%, transparent 70%);
//           transition: all 0.3s ease;
//           transform: translate(-50%, -50%);
//         }

//         .search-btn:hover {
//           transform: translateY(-2px) scale(1.05);
//           box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
//         }

//         .search-btn:hover::before {
//           width: 300px;
//           height: 300px;
//         }

//         .category-select {
//           background: rgba(255, 255, 255, 0.15) !important;
//           border: 2px solid rgba(255, 255, 255, 0.2) !important;
//           border-radius: 50px !important;
//           color: white !important;
//           padding: 12px 20px !important;
//           font-weight: 500;
//           backdrop-filter: blur(10px);
//           transition: all 0.3s ease;
//           outline: none;
//           cursor: pointer;
//           box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.1);
//         }

//         .category-select:focus,
//         .category-select:hover {
//           background: rgba(255, 255, 255, 0.25) !important;
//           border-color: rgba(255, 255, 255, 0.4) !important;
//           transform: translateY(-1px);
//           box-shadow: 
//             inset 0 2px 10px rgba(0, 0, 0, 0.1),
//             0 0 0 3px rgba(255, 255, 255, 0.1),
//             0 8px 25px rgba(0, 0, 0, 0.1);
//         }

//         .category-select option {
//           background: #333;
//           color: white;
//           padding: 10px;
//         }

//         .cart-container {
//           position: relative;
//           display: flex;
//           align-items: center;
//           gap: 0.5rem;
//           padding: 0.8rem 1.2rem;
//           background: rgba(255, 255, 255, 0.2);
//           border-radius: 50px;
//           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//           text-decoration: none;
//           backdrop-filter: blur(10px);
//           border: 2px solid rgba(255, 255, 255, 0.1);
//         }

//         .cart-container:hover {
//           background: rgba(255, 255, 255, 0.3);
//           transform: translateY(-3px) scale(1.02);
//           box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
//           border-color: rgba(255, 255, 255, 0.3);
//         }

//         .cart-icon {
//           width: 28px;
//           height: 28px;
//           filter: brightness(0) invert(1);
//           transition: all 0.3s ease;
//         }

//         .cart-container:hover .cart-icon {
//           transform: scale(1.1) rotate(10deg);
//         }

//         .cart-count {
//           background: linear-gradient(45deg, #ff6b6b, #ff8e53);
//           color: white;
//           border-radius: 50%;
//           width: 28px;
//           height: 28px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 0.8rem;
//           font-weight: 700;
//           box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4);
//           transition: all 0.3s ease;
//           position: absolute;
//           top: -5px;
//           right: -5px;
//           animation: ${(cart?.length ?? 0) > 0 ? 'pulse 2s infinite' : 'none'};
//         }

//         @keyframes pulse {
//           0% { transform: scale(1); }
//           50% { transform: scale(1.2); }
//           100% { transform: scale(1); }
//         }

//         .cart-container:hover .cart-count {
//           transform: scale(1.1);
//           box-shadow: 0 6px 20px rgba(255, 107, 107, 0.6);
//         }

//         .mobile-menu {
//           background: linear-gradient(135deg, 
//             rgba(255, 193, 7, 0.95) 0%, 
//             rgba(255, 152, 0, 0.9) 100%);
//           backdrop-filter: blur(20px);
//           border-radius: 20px;
//           margin: 1rem;
//           padding: 1.5rem;
//           box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
//           border: 1px solid rgba(255, 255, 255, 0.2);
//         }

//         .mobile-toggle {
//           background: rgba(255, 255, 255, 0.2) !important;
//           border: 2px solid rgba(255, 255, 255, 0.3) !important;
//           border-radius: 12px !important;
//           padding: 8px !important;
//           transition: all 0.3s ease;
//         }

//         .mobile-toggle:hover {
//           background: rgba(255, 255, 255, 0.3) !important;
//           transform: scale(1.05);
//         }

//         .mobile-toggle-icon {
//           background-image: none !important;
//           width: 20px;
//           height: 2px;
//           background: white;
//           position: relative;
//           transition: all 0.3s ease;
//         }

//         .mobile-toggle-icon::before,
//         .mobile-toggle-icon::after {
//           content: '';
//           position: absolute;
//           width: 100%;
//           height: 100%;
//           background: white;
//           transition: all 0.3s ease;
//         }

//         .mobile-toggle-icon::before {
//           transform: translateY(-6px);
//         }

//         .mobile-toggle-icon::after {
//           transform: translateY(6px);
//         }

//         .container-custom {
//           max-width: 1400px;
//           margin: 0 auto;
//           padding: 0 2rem;
//         }

//         @media (max-width: 768px) {
//           .search-container {
//             width: 100%;
//             margin: 1rem 0;
//           }
          
//           .cart-container {
//             position: fixed;
//             bottom: 20px;
//             right: 20px;
//             z-index: 1001;
//             box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
//           }
//         }

//         .navbar-content {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           width: 100%;
//         }

//         .nav-links {
//           display: flex;
//           gap: 1rem;
//           align-items: center;
//         }

//         .right-section {
//           display: flex;
//           align-items: center;
//           gap: 1.5rem;
//         }

//         @media (max-width: 991px) {
//           .nav-links,
//           .right-section {
//             flex-direction: column;
//             width: 100%;
//             gap: 1rem;
//           }
//         }

//         /* Floating particles effect */
//         .navbar-particles {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           overflow: hidden;
//           pointer-events: none;
//         }

//         .particle {
//           position: absolute;
//           background: rgba(255, 255, 255, 0.1);
//           border-radius: 50%;
//           animation: float 20s infinite linear;
//         }

//         @keyframes float {
//           0% {
//             transform: translateY(100vh) rotate(0deg);
//             opacity: 0;
//           }
//           10% {
//             opacity: 1;
//           }
//           90% {
//             opacity: 1;
//           }
//           100% {
//             transform: translateY(-100vh) rotate(360deg);
//             opacity: 0;
//           }
//         }
//       `}</style>

//       <nav className={`aesthetic-navbar ${isScrolled ? 'scrolled' : ''}`}>
//         {/* Floating particles background effect */}
//         <div className="navbar-particles">
//           {[...Array(8)].map((_, i) => (
//             <div 
//               key={i}
//               className="particle"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 width: `${Math.random() * 4 + 2}px`,
//                 height: `${Math.random() * 4 + 2}px`,
//                 animationDelay: `${Math.random() * 20}s`,
//                 animationDuration: `${Math.random() * 10 + 15}s`
//               }}
//             />
//           ))}
//         </div>

//         <div className="container-custom">
//           <div className="navbar-content">
//             {/* Brand Logo */}
//             <Link to="/home" className="d-flex align-items-center text-decoration-none">
//               <img 
//                 src="https://fooodiee.com/web/assets/web_logo-CbpPhD7S.jpg" 
//                 alt="Fooodiee Logo" 
//                 className="brand-logo"
//               />
//               <span className="ms-3 fs-4 fw-bold text-white d-none d-md-block">
//                 Fooodiee
//               </span>
//             </Link>

//             {/* Desktop Navigation */}
//             <div className="d-none d-lg-flex nav-links">
//               <Link to="/home" className={`nav-link-modern ${location.pathname === '/home' ? 'active' : ''}`}>
//                 <i className="fas fa-home me-2"></i>
//                 Home
//               </Link>
//               <Link to="/shop" className={`nav-link-modern ${location.pathname === '/shop' ? 'active' : ''}`}>
//                 <i className="fas fa-store me-2"></i>
//                 Shop
//               </Link>
//               <Link to="/cart" className={`nav-link-modern ${location.pathname === '/cart' ? 'active' : ''}`}>
//                 <i className="fas fa-shopping-bag me-2"></i>
//                 Orders
//               </Link>
//             </div>

//             {/* Desktop Right Section */}
//             <div className="d-none d-lg-flex right-section">
//               {/* Search Bar */}
//               <form onSubmit={handlesearch} className="search-container d-flex">
//                 <input
//                   className="search-input"
//                   value={searchitems}
//                   type="search"
//                   placeholder="Search delicious foods..."
//                   onChange={(e) => setSearchitems(e.target.value)}
//                 />
//                 <button type="submit" className="search-btn ms-2">
//                   <i className="fas fa-search" style={{color: '#333'}}></i>
//                 </button>
//               </form>

//               {/* Category Selector */}
//               <select 
//                 className="category-select"
//                 onChange={categorychange}
//                 defaultValue="Select Your Category"
//               >
//                 <option value="Select Your Category">🍽️ Categories</option>
//                 <option value="Breakfast">🥞 Breakfast</option>
//                 <option value="Lunch">🍛 Lunch</option>
//                 <option value="Dinner">🍽️ Dinner</option>
//                 <option value="Snacks">🍿 Snacks</option>
//                 <option value="Beverages">🥤 Beverages</option>
//               </select>

//               {/* Cart Icon */}
//               <Link to="/cart" className="cart-container">
//                 <img src={car} alt="Cart" className="cart-icon" />
//                 <span className="text-white fw-bold d-none d-xl-block">Cart</span>
//                 {cart.length > 0 && (
//                   <div className="cart-count">
//                     <span>{cart.length}</span>
//                   </div>
//                 )}
//               </Link>
//             </div>

//             {/* Mobile Menu Toggle */}
//             <button
//               className="d-lg-none mobile-toggle"
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               aria-label="Toggle navigation"
//             >
//               <div className="mobile-toggle-icon"></div>
//             </button>
//           </div>

//           {/* Mobile Menu */}
//           {isMobileMenuOpen && (
//             <div className="mobile-menu d-lg-none mt-3">
//               <div className="d-flex flex-column gap-3">
//                 {/* Mobile Navigation Links */}
//                 <div className="d-flex flex-column gap-2">
//                   <Link 
//                     to="/home" 
//                     className="nav-link-modern text-center"
//                     onClick={() => setIsMobileMenuOpen(false)}
//                   >
//                     <i className="fas fa-home me-2"></i>Home
//                   </Link>
//                   <Link 
//                     to="/shop" 
//                     className="nav-link-modern text-center"
//                     onClick={() => setIsMobileMenuOpen(false)}
//                   >
//                     <i className="fas fa-store me-2"></i>Shop
//                   </Link>
//                   <Link 
//                     to="/cart" 
//                     className="nav-link-modern text-center"
//                     onClick={() => setIsMobileMenuOpen(false)}
//                   >
//                     <i className="fas fa-shopping-bag me-2"></i>Orders
//                   </Link>
//                 </div>

//                 {/* Mobile Search */}
//                 <form onSubmit={handlesearch} className="d-flex gap-2">
//                   <input
//                     className="search-input flex-grow-1"
//                     value={searchitems}
//                     type="search"
//                     placeholder="🔍 Search foods..."
//                     onChange={(e) => setSearchitems(e.target.value)}
//                   />
//                   <button type="submit" className="search-btn">
//                     <i className="fas fa-search" style={{color: '#333'}}></i>
//                   </button>
//                 </form>

//                 {/* Mobile Category */}
//                 <select 
//                   className="category-select w-100"
//                   onChange={categorychange}
//                   defaultValue="Select Your Category"
//                 >
//                   <option value="Select Your Category">🍽️ Select Category</option>
//                   <option value="Breakfast">🥞 Breakfast</option>
//                   <option value="Lunch">🍛 Lunch</option>
//                   <option value="Dinner">🍽️ Dinner</option>
//                   <option value="Snacks">🍿 Snacks</option>
//                   <option value="Beverages">🥤 Beverages</option>
//                 </select>
//               </div>
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* Mobile Cart - Fixed Position */}
//       <Link to="/cart" className="cart-container d-lg-none">
//         <img src={car} alt="Cart" className="cart-icon" />
//         {cart.length > 0 && (
//           <div className="cart-count">
//             {cart.length}
//           </div>
//         )}
//       </Link>

//       <Outlet />
//     </>
//   )
// }

// export default Anothernav





import React, { useState, useEffect } from 'react'
import { Link, useNavigate, Outlet, useLocation } from 'react-router-dom'
import car from './images/cart.png'

const Navbar = ({ cart = [], setCart }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [searchitems, setSearchitems] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handlesearch = (e) => {
    e.preventDefault()
    if (searchitems.trim()) {
      const currentpath = location.pathname
      if (
        [
          '/shop',
          '/chatitems',
          '/noodles',
          '/paratha',
          '/pizza',
          '/shakes',
          '/briyani',
          '/products',
        ].includes(currentpath)
      ) {
        navigate(currentpath, { state: { searchitems } })
      } else {
        navigate('/shop', { state: { searchitems  } })
      }
    }
  }

  const categorychange = (e) => {
    const selectedcategory = e.target.value
    switch (selectedcategory) {
      case 'Breakfast':
        navigate('/breakfast')
        break
      case 'Lunch':
        navigate('/lunch')
        break
      case 'Dinner':
        navigate('/dinner')
        break
      case 'Snacks':
        navigate('/snacks')
        break
      case 'Beverages':
        navigate('/beverages')
        break
      default:
        navigate('/shop')
        break
    }
  }

  return (
    <>
      <style jsx>{`
        .aesthetic-navbar {
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.15) 0%, 
            rgba(255, 255, 255, 0.1) 50%, 
            rgba(255, 255, 255, 0.05) 100%);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.1),
            0 0 0 1px rgba(255, 255, 255, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: sticky;
          top: 0;
          z-index: 1000;
          padding: 0.8rem 0;
        }

        .aesthetic-navbar.scrolled {
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.25) 0%, 
            rgba(255, 255, 255, 0.15) 50%, 
            rgba(255, 255, 255, 0.1) 100%);
          backdrop-filter: blur(25px);
          box-shadow: 
            0 12px 40px rgba(0, 0, 0, 0.15),
            0 0 0 1px rgba(255, 255, 255, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.25);
          padding: 0.5rem 0;
        }

        .brand-logo {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          border: 3px solid rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .brand-logo:hover {
          transform: scale(1.05) rotate(5deg);
          border-color: rgba(255, 255, 255, 0.6);
          box-shadow: 0 6px 30px rgba(0, 0, 0, 0.2);
        }

        .nav-link-modern {
          color: rgba(255, 255, 255, 0.8) !important;
          font-weight: 600;
          padding: 0.8rem 1.5rem !important;
          border-radius: 50px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          text-decoration: none;
        }

        .nav-link-modern::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.6s;
        }

        .nav-link-modern:hover {
          color: #333 !important;
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(10px);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .nav-link-modern:hover::before {
          left: 100%;
        }

        .nav-link-modern.active {
          background: rgba(255, 255, 255, 0.35);
          color: #333 !important;
          box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .search-container {
          position: relative;
          overflow: hidden;
        }

        .search-input {
          background: rgba(255, 255, 255, 0.2) !important;
          border: 2px solid rgba(255, 255, 255, 0.3) !important;
          border-radius: 50px !important;
          color: #333 !important;
          padding: 12px 20px !important;
          font-weight: 500;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.05);
        }

        .search-input:focus {
          background: rgba(255, 255, 255, 0.35) !important;
          border-color: rgba(255, 255, 255, 0.5) !important;
          box-shadow: 
            inset 0 2px 10px rgba(0, 0, 0, 0.05),
            0 0 0 3px rgba(255, 255, 255, 0.2),
            0 8px 25px rgba(0, 0, 0, 0.1) !important;
          transform: translateY(-1px);
          outline: none;
        }

        .search-input::placeholder {
          color: rgba(255, 255, 255, 225);
        }

        .search-btn {
          background: linear-gradient(45deg, #fff, #f8f9fa) !important;
          border: none !important;
          border-radius: 50px !important;
          padding: 12px 20px !important;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          position: relative;
          overflow: hidden;
        }

        .search-btn::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: radial-gradient(circle, rgba(255, 193, 7, 0.3) 0%, transparent 70%);
          transition: all 0.3s ease;
          transform: translate(-50%, -50%);
        }

        .search-btn:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2) ;
        }

        .search-btn:hover::before {
          width: 300px;
          height: 300px;
        }

        .category-select {
          background: rgba(255, 255, 255, 0.15) !important;
          border: 2px solid rgba(255, 255, 255, 0.2) !important;
          border-radius: 50px !important;
          color: white !important;
          padding: 12px 20px !important;
          font-weight: 500;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          outline: none;
          cursor: pointer;
          box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .category-select:focus,
        .category-select:hover {
          background: rgba(255, 255, 255, 0.25) !important;
          border-color: rgba(255, 255, 255, 0.4) !important;
          transform: translateY(-1px);
          box-shadow: 
            inset 0 2px 10px rgba(0, 0, 0, 0.1),
            0 0 0 3px rgba(255, 255, 255, 0.1),
            0 8px 25px rgba(0, 0, 0, 0.1);
        }

        .category-select option {
          background: #333;
          color: white;
          padding: 10px;
        }

        .cart-container {
          position: relative;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.8rem 1.2rem;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.1);
        }

        .cart-container:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .cart-icon {
          width: 28px;
          height: 28px;
          filter: brightness(0) invert(1);
          transition: all 0.3s ease;
        }

        .cart-container:hover .cart-icon {
          transform: scale(1.1) rotate(10deg);
        }

        .cart-count {
          background: linear-gradient(45deg, #ff6b6b, #ff8e53);
          color: white;
          border-radius: 50%;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          font-weight: 700;
          box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4);
          transition: all 0.3s ease;
          position: absolute;
          top: -5px;
          right: -5px;
          animation: ${(cart?.length ?? 0) > 0 ? 'pulse 2s infinite' : 'none'};


        }

        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }

        .cart-container:hover .cart-count {
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(255, 107, 107, 0.6);
        }

        .mobile-menu {
          background: linear-gradient(135deg, 
            rgba(255, 193, 7, 0.95) 0%, 
            rgba(255, 152, 0, 0.9) 100%);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          margin: 1rem;
          padding: 1.5rem;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .mobile-toggle {
          background: rgba(255, 255, 255, 0.2) !important;
          border: 2px solid rgba(255, 255, 255, 0.3) !important;
          border-radius: 12px !important;
          padding: 8px !important;
          transition: all 0.3s ease;
        }

        .mobile-toggle:hover {
          background: rgba(255, 255, 255, 0.3) !important;
          transform: scale(1.05);
        }

        .mobile-toggle-icon {
          background-image: none !important;
          width: 20px;
          height: 2px;
          background: white;
          position: relative;
          transition: all 0.3s ease;
        }

        .mobile-toggle-icon::before,
        .mobile-toggle-icon::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background: white;
          transition: all 0.3s ease;
        }

        .mobile-toggle-icon::before {
          transform: translateY(-6px);
        }

        .mobile-toggle-icon::after {
          transform: translateY(6px);
        }

        .container-custom {
          max-width: 1630px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        @media (max-width: 768px) {
          .search-container {
            width: 100%;
            margin: 1rem 0;
          }
          
          .cart-container {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 1001;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
          }
        }

        .navbar-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .nav-links {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .right-section {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        @media (max-width: 991px) {
          .nav-links,
          .right-section {
            flex-direction: column;
            width: 100%;
            gap: 1rem;
          }
        }

        /* Floating particles effect */
        .navbar-particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
        }

        .particle {
          position: absolute;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          animation: float 20s infinite linear;
        }

        @keyframes float {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>

      <nav className={`aesthetic-navbar ${isScrolled ? 'scrolled' : ''}`}>
        {/* Floating particles background effect */}
        <div className="navbar-particles">
          {[...Array(8)].map((_, i) => (
            <div 
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${Math.random() * 10 + 15}s`
              }}
            />
          ))}
        </div>

        <div className="container-custom">
          <div className="navbar-content">
            {/* Brand Logo */}
            <Link to="/home" className="d-flex align-items-center text-decoration-none">
              <img 
                src="https://fooodiee.com/web/assets/web_logo-CbpPhD7S.jpg" 
                alt="Fooodiee Logo" 
                className="brand-logo"
              />
              <span className="ms-3 fs-4 fw-bold text-white d-none d-md-block">
                Fooodiee
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="d-none d-lg-flex nav-links">
              <Link to="/home" className={`nav-link-modern ${location.pathname === '/home' ? 'active' : ''}`}>
                <i className="fas fa-home me-2"></i>
                Home
              </Link>
              <Link to="/shop" className={`nav-link-modern ${location.pathname === '/shop' ? 'active' : ''}`}>
                <i className="fas fa-store me-2"></i>
                Shop
              </Link>
              <Link to="/cart" className={`nav-link-modern ${location.pathname === '/cart' ? 'active' : ''}`}>
                <i className="fas fa-shopping-bag me-2"></i>
                Orders
              </Link>
            </div>

            {/* Desktop Right Section */}
            <div className="d-none d-lg-flex right-section">
              {/* Search Bar */}
              <form onSubmit={handlesearch} className="search-container d-flex">
                <input
                  className="search-input"
                  value={searchitems}
                  type="search"
                  placeholder="Search delicious foods..."
                  onChange={(e) => setSearchitems(e.target.value)}
                />
                <button type="submit" className="search-btn ms-2">
                  <i className="fas fa-search" style={{color: '#333'}}></i>
                </button>
              </form>

              {/* Category Selector */}
              <select 
                className="category-select"
                onChange={categorychange}
                defaultValue="Select Your Category"
              >
                <option value="Select Your Category">🍽️ Categories</option>
                <option value="Breakfast">🥞 Breakfast</option>
                <option value="Lunch">🍛 Lunch</option>
                <option value="Dinner">🍽️ Dinner</option>
                <option value="Snacks">🍿 Snacks</option>
                <option value="Beverages">🥤 Beverages</option>
              </select>

              {/* Cart Icon */}
              <Link to="/cart" className="cart-container">
                <div style={{ position: 'relative' }}>
                  <img src={car} alt="Cart" className="cart-icon" />
                  {cart && cart.length > 0 && (
                    <div className="cart-count">
                      {cart.length}
                    </div>
                  )}
                </div>
                <span className="text-dark fw-bold d-none d-xl-block">Cart</span>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="d-lg-none mobile-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation"
            >
              <div className="mobile-toggle-icon"></div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="mobile-menu d-lg-none mt-3">
              <div className="d-flex flex-column gap-3">
                {/* Mobile Navigation Links */}
                <div className="d-flex flex-column gap-2">
                  <Link 
                    to="/home" 
                    className="nav-link-modern text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <i className="fas fa-home me-2"></i>Home
                  </Link>
                  <Link 
                    to="/shop" 
                    className="nav-link-modern text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <i className="fas fa-store me-2"></i>Shop
                  </Link>
                  <Link 
                    to="/cart" 
                    className="nav-link-modern text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <i className="fas fa-shopping-bag me-2"></i>Orders
                  </Link>
                </div>

                {/* Mobile Search */}
                <form onSubmit={handlesearch} className="d-flex gap-2">
                  <input
                    className="search-input flex-grow-1"
                    value={searchitems}
                    type="search"
                    placeholder="🔍 Search foods..."
                    onChange={(e) => setSearchitems(e.target.value)}
                  />
                  <button type="submit" className="search-btn">
                    <i className="fas fa-search" style={{color: '#333'}}></i>
                  </button>
                </form>

                {/* Mobile Category */}
                <select 
                  className="category-select w-100"
                  onChange={categorychange}
                  defaultValue="Select Your Category"
                >
                  <option value="Select Your Category">🍽️ Select Category</option>
                  <option value="Breakfast">🥞 Breakfast</option>
                  <option value="Lunch">🍛 Lunch</option>
                  <option value="Dinner">🍽️ Dinner</option>
                  <option value="Snacks">🍿 Snacks</option>
                  <option value="Beverages">🥤 Beverages</option>
                </select>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Cart - Fixed Position */}
      <Link to="/cart" className="cart-container d-lg-none">
        <img src={car} alt="Cart" className="cart-icon" />
        {cart.length > 0 && (
          <div className="cart-count">
            {cart.length}
          </div>
        )}
      </Link>

      <Link to= '/cart'><img src={car} alt="carticon" className='carticon' />
              <h3 className='cartcountbtn'>{cart.length}</h3>
      </Link>

      <Outlet />
    </>
  )
}

export default Navbar













