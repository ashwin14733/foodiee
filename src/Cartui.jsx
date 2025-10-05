import React, { useState } from 'react';

const Cartui = () => {
  const [quantities, setQuantities] = useState({});

  const updateQuantity = (id, change) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + change)
    }));
  };

  const orderQueues = [
    {
      id: '#12008-3A',
      customerName: 'Aldo Vesper',
      table: 'Table 2B',
      time: '16-08-2025, 11:10 pm',
      status: 'On cooking',
      items: 6,
      statusColor: 'bg-orange-500',
      avatar: 'AV'
    },
    {
      id: '#12006-3A',
      customerName: 'Liam Blackwood',
      table: 'Table 4',
      time: '16-08-2025, 11:30 pm',
      status: 'Reserve now',
      items: 12,
      statusColor: 'bg-green-500',
      avatar: 'LB'
    }
  ];

  const productCategories = [
    { name: 'All menu', count: 242, icon: '🍽️', active: true },
    { name: 'Burger', count: 32, icon: '🍔' },
    { name: 'Sandwich', count: 18, icon: '🥪' },
    { name: 'Salad', count: 24, icon: '🥗' }
  ];

  const products = [
    {
      id: 1,
      name: 'Fiery Jalapeno',
      description: 'Special veg pizza with jalapeno',
      price: 199.00,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=200&h=120&fit=crop',
      discount: '-12%',
      variants: ['Original', 'Barbecue chicken']
    },
    {
      id: 2,
      name: 'Chicken Dominator',
      description: 'Loaded with double pepper',
      price: 499.00,
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=200&h=120&fit=crop',
      discount: '-16%',
      variants: ['Original', 'Grilled chicken']
    },
    {
      id: 3,
      name: 'Veg Biryani Special',
      description: 'Aromatic rice with vegetables',
      price: 399.00,
      image: 'https://images.unsplash.com/photo-1563379091339-03246963d7d3?w=200&h=120&fit=crop',
      discount: '-20%'
    },
    {
      id: 4,
      name: 'Chur Pork Dosa',
      description: 'Crispy dosa with spicy filling',
      price: 99.00,
      image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=200&h=120&fit=crop',
      discount: '-15%'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <nav className="text-sm text-gray-600 mb-4">
            Dashboard / Overview / Recent orders <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs ml-2">24</span>
          </nav>
        </div>

        {/* Order Queues Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Order Queues</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {orderQueues.map((order) => (
              <div key={order.id} className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-orange-500 font-semibold text-sm">{order.id}</span>
                  <span className="bg-gray-100 px-2 py-1 rounded-lg text-xs font-medium">{order.table}</span>
                </div>
                
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-orange-600 font-bold text-sm">{order.avatar}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">{order.customerName}</h3>
                    <p className="text-xs text-gray-500">{order.time}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full ${order.statusColor} mr-2`}></div>
                    <span className="text-sm font-medium">{order.status}</span>
                  </div>
                  <span className="text-sm font-semibold">{order.items} items</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Lists Section */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800">Product Lists</h2>
            <button className="text-gray-600 hover:text-gray-800 flex items-center">
              <span className="mr-1">👁️</span>
              <span className="text-sm">Input manually</span>
            </button>
          </div>

          {/* Category Tabs */}
          <div className="flex space-x-4 mb-6 overflow-x-auto">
            {productCategories.map((category, index) => (
              <div
                key={index}
                className={`flex items-center px-4 py-3 rounded-xl cursor-pointer transition-all ${
                  category.active
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-orange-50'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                <div>
                  <span className="font-medium">{category.name}</span>
                  <div className="text-xs opacity-80">{category.count} items</div>
                </div>
              </div>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-lg text-xs font-bold">
                    {product.discount}
                  </div>
                </div>
                
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg text-gray-800">{product.name}</h3>
                    <span className="text-xl font-bold text-gray-800">₹{product.price}</span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>

                  {product.variants && (
                    <div className="flex space-x-2 mb-4">
                      {product.variants.map((variant, index) => (
                        <button
                          key={index}
                          className={`px-3 py-1 rounded-full text-xs border transition-colors ${
                            index === 0
                              ? 'bg-orange-500 text-white border-orange-500'
                              : 'bg-white text-gray-600 border-gray-300 hover:border-orange-500'
                          }`}
                        >
                          {variant}
                        </button>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button
                        onClick={() => updateQuantity(product.id, -1)}
                        className="p-2 hover:bg-gray-50 transition-colors text-lg font-bold"
                      >
                        −
                      </button>
                      <span className="px-3 py-2 font-medium">
                        {quantities[product.id] || 1}
                      </span>
                      <button
                        onClick={() => updateQuantity(product.id, 1)}
                        className="p-2 hover:bg-gray-50 transition-colors text-lg font-bold"
                      >
                        +
                      </button>
                    </div>
                    
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center">
                      <span className="mr-2">🛒</span>
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartui;