import React, { useEffect, useState } from 'react'

const Cart = ({cart,setCart}) => {
  const [price, setPrice] = useState(0)
  const [footcart,setFootcart] = useState("Your Food Cart is Empty")
 

  useEffect(()=>{
    let amount = 0;
   cart.filter((filterdata)=> amount = filterdata.price * filterdata.count +amount)
   setPrice(amount)
 
  },[cart])

//   useEffect(() => {
//   let amount = 0;
//   cart.forEach((item) => { 
//     amount += item.price * item.count;
//   });
//   setPrice(amount);
// }, [cart]);
  
    const removeproduct = (params)=>{
        console.log(params);
        const removedelement = cart.filter((filterdata)=>filterdata.id !== params.id )
        setCart(removedelement)

    }
  return (
    <div>
      <div className="container mt-5 mb-5 pt-5 pb-5">
        {
          cart.length == 0 ? <h2 style={{color:"orange"}}>Your Food Cart is Empty</h2> : <h2 style={{color:"orange", paddingBottom: "5 0px"}}>Total Amount : {price}</h2>
        }
      <div className='row'>
          {
            cart.map((element, index) => 
              <div key={index} className='col-lg-4'>
                <div className="card" >
                    <div className="card-body">
                      <div className="image-container mb-3">
                        <img src={element.image} className="imagepng"alt={element.product}style={{width: '180px',height: 'auto',objectFit: 'cover',borderRadius: '8px'}}/>
                      </div>
                      <h5 className="card-title">{element.product}</h5>
                      <p className="card-text">Category : {element.category}</p>
                      <p className="card-text">Price : ₹{element.price}</p>
                      <p className="card-text">Quantity : {element.count}</p>
                      <a href="#" className="btn btn-warning" onClick={()=>{removeproduct(element); Swal.fire({
                        title : "Oops !!!! 😔😔😔Items Removed From the Cart...",
                        icon : "info  ",
                        text : "Please Add the Meal",
                        color : "white",
                        background : 'rgba(255, 255, 255, 0.1)',
                        backdrop: 'rgba(0, 0, 0, 1)'
                      })}}>Remove</a>
                    </div>
                  </div>
              </div>
            )
        
          }
        </div>

        
        {/* <h2>{footcart}</h2>
        <h2>Price : {price}</h2> */}

        
    </div>
    </div>
  )
}

export default Cart


// import React, { useEffect, useState } from 'react';

// const Cart = ({ cart, setCart }) => {
//   const [price, setPrice] = useState(0);

//   useEffect(() => {
//     let amount = 0;
//     cart.forEach((item) => {
//       amount += item.price * item.count;
//     });
//     setPrice(amount);
//   }, [cart]);

//   const removeProduct = (product) => {
//     console.log('Removing product:', product);
//     const updatedCart = cart.filter((item) => item.id !== product.id);
//     setCart(updatedCart);
//   };

//   if (cart.length === 0) {
//     return (
//       <div className="container mt-4">
//         <div className="text-center">
//           <h3>Your cart is empty</h3>
//           <p>Add some items to get started!</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="container mt-4">
//       <h2 className="mb-4">Shopping Cart</h2>
      
//       <div className="row">
//         {cart.map((item, index) => (
//           <div key={item.id || index} className="col-lg-4 col-md-6 mb-4">
//             <div className="card h-100">
//               <div className="card-body d-flex flex-column">
//                 <div className="image-container mb-3 text-center">
//                   <img 
//                     src={item.image} 
//                     className="img-fluid"
//                     alt={item.product}
//                     style={{
//                       width: '180px',
//                       height: '180px',
//                       objectFit: 'cover',
//                       borderRadius: '8px'
//                     }}
//                   />
//                 </div>
//                 <h5 className="card-title">{item.product}</h5>
//                 <p className="card-text text-muted">{item.category}</p>
//                 <p className="card-text">
//                   <strong>Price: ₹{item.price}</strong>
//                 </p>
//                 <p className="card-text">
//                   <strong>Quantity: {item.count}</strong>
//                 </p>
//                 <p className="card-text">
//                   <strong>Subtotal: ₹{(item.price * item.count).toFixed(2)}</strong>
//                 </p>
//                 <button 
//                   className="btn btn-danger mt-auto"
//                   onClick={() => removeProduct(item)}
//                 >
//                   Remove from Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
      
//       <div className="row mt-4">
//         <div className="col-12">
//           <div className="card">
//             <div className="card-body">
//               <div className="d-flex justify-content-between align-items-center">
//                 <h3 className="mb-0">Total: ₹{price.toFixed(2)}</h3>
//                 <button className="btn btn-success btn-lg">
//                   Proceed to Checkout
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;