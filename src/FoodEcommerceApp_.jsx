import React, { useState } from 'react';

const FoodEcommerceApp_ = () => {
  // Categories data
  const categories = [
    { id: 1, name: 'Fast Food', icon: '🍔' },
    { id: 2, name: 'Salads', icon: '🥗' },
    { id: 3, name: 'Desserts', icon: '🍰' },
    { id: 4, name: 'Drinks', icon: '🍹' },
    { id: 5, name: 'Meals', icon: '🍛' },
    { id: 6, name: 'Breakfast', icon: '🥞' },
    { id: 7, name: 'Wraps', icon: '🌯' },
    { id: 8, name: 'Sushi', icon: '🍣' },
    { id: 9, name: 'Pizza', icon: '🍕' },
    { id: 10, name: 'Vegan', icon: '🌱' }
  ];

  // Products data with realistic food images
  const products = [
    {
      id: 1,
      name: 'Classic Burger',
      description: 'Juicy beef patty with lettuce, cheese, and special sauce',
      price: 8.99,
      category: 'Fast Food',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200',
      rating: 4.5,
      deliveryTime: '15-20 min',
      calories: 550,
      featured: true,
      popular: true,
      discount: 0
    },
    {
      id: 2,
      name: 'Caesar Salad',
      description: 'Fresh romaine lettuce with Caesar dressing and croutons',
      price: 7.50,
      category: 'Salads',
      image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=300&h=200',
      rating: 4.2,
      deliveryTime: '10-15 min',
      calories: 320,
      discount: 10
    },
    {
      id: 3,
      name: 'Chocolate Cake',
      description: 'Rich chocolate cake with fudge frosting',
      price: 6.99,
      category: 'Desserts',
      image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=300&h=200',
      rating: 4.8,
      deliveryTime: '12-18 min',
      calories: 450,
      discount: 0
    },
    {
      id: 4,
      name: 'Fruit Smoothie',
      description: 'Mixed berry smoothie with fresh fruits',
      price: 5.50,
      category: 'Drinks',
      image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=300&h=200',
      rating: 4.3,
      deliveryTime: '5-10 min',
      calories: 220,
      discount: 15
    },
    {
      id: 5,
      name: 'Chicken Rice Bowl',
      description: 'Grilled chicken with rice and vegetables',
      price: 9.99,
      category: 'Meals',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&h=200',
      rating: 4.6,
      deliveryTime: '20-25 min',
      calories: 600,
      discount: 5
    }
  ];

  // State management
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [checkoutInfo, setCheckoutInfo] = useState({
    name: '',
    address: '',
    paymentMethod: 'credit'
  });

  // Filter products
  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Cart functions
  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      return existingItem 
        ? prevCart.map(item => 
            item.id === product.id ? {...item, quantity: item.quantity + 1} : item
          )
        : [...prevCart, {...product, quantity: 1}];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === productId);
      return existingItem.quantity > 1
        ? prevCart.map(item => 
            item.id === productId ? {...item, quantity: item.quantity - 1} : item
          )
        : prevCart.filter(item => item.id !== productId);
    });
  };

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  // Order functions
  const placeOrder = () => {
    setShowCheckoutModal(true);
  };

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    alert(`Order placed! Total: $${(cartTotal + 2.99).toFixed(2)}`);
    setCart([]);
    setShowCart(false);
    setShowCheckoutModal(false);
  };

  // Render functions
  const renderProductItem = (product) => {
    const discountedPrice = product.price * (1 - product.discount / 100);
    
    return (
      <div key={product.id} className="product-card">
        {product.discount > 0 && (
          <div className="discount-badge">
            -{product.discount}%
          </div>
        )}
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-info">
          <h3>{product.name}</h3>
          <p className="product-description">{product.description}</p>
          <div className="product-meta">
            <div className="price-container">
              {product.discount > 0 ? (
                <>
                  <span className="original-price">${product.price.toFixed(2)}</span>
                  <span className="price">${discountedPrice.toFixed(2)}</span>
                </>
              ) : (
                <span className="price">${product.price.toFixed(2)}</span>
              )}
            </div>
            <div className="secondary-info">
              <span className="delivery-time">⌚ {product.deliveryTime}</span>
              <span className="rating">⭐ {product.rating}</span>
            </div>
          </div>
          <div className="calories">🔥 {product.calories} kcal</div>
          <button className="add-to-cart" onClick={() => addToCart(product)}>
            + Add to Cart
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        <div className="header-content">
          <div className="logo">
            <h1>FoodExpress</h1>
          </div>
          
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for food..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="search-button">🔍</button>
          </div>
          
          <button 
            className="cart-button" 
            onClick={() => setShowCart(!showCart)}
          >
            🛒 Cart ({cart.reduce((total, item) => total + item.quantity, 0)})
          </button>
        </div>
        
        {/* Side-scrolling category navigation */}
        <div className="category-scroller">
          <div className="category-nav">
            <button
              className={`category-item ${activeCategory === 'All' ? 'active' : ''}`}
              onClick={() => setActiveCategory('All')}
            >
              All
            </button>
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-item ${activeCategory === category.name ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.name)}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Banner */}
        <section className="hero-banner">
          <div className="hero-text">
            <h2>Delicious Food Delivered Fast</h2>
            <p>Order from your favorite restaurants</p>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1000&h=300&fit=crop" 
            alt="Food delivery" 
            className="hero-image"
          />
        </section>

        {/* Product Sections */}
        <section className="food-section">
          <h3>{activeCategory === 'All' ? 'Our Menu' : activeCategory}</h3>
          <div className="product-grid">
            {filteredProducts.map(renderProductItem)}
          </div>
        </section>
      </main>

      {/* Cart Modal */}
      {showCart && (
        <div className="modal-overlay">
          <div className="modal cart-modal">
            <div className="modal-header">
              <h3>Your Cart ({cart.reduce((total, item) => total + item.quantity, 0)})</h3>
              <button 
                className="close-modal"
                onClick={() => setShowCart(false)}
              >
                ×
              </button>
            </div>
            
            {cart.length > 0 ? (
              <>
                <div className="cart-items">
                  {cart.map(item => (
                    <div key={item.id} className="cart-item">
                      <img src={item.image} alt={item.name} />
                      <div className="item-details">
                        <h4>{item.name}</h4>
                        <div className="item-controls">
                          <button onClick={() => removeFromCart(item.id)}>-</button>
                          <span>{item.quantity}</span>
                          <button onClick={() => addToCart(item)}>+</button>
                        </div>
                      </div>
                      <div className="item-price">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="cart-summary">
                  <div className="summary-row">
                    <span>Subtotal:</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="summary-row">
                    <span>Delivery Fee:</span>
                    <span>$2.99</span>
                  </div>
                  <div className="summary-row total">
                    <span>Total:</span>
                    <span>${(cartTotal + 2.99).toFixed(2)}</span>
                  </div>
                  
                  <button 
                    className="checkout-button"
                    onClick={placeOrder}
                  >
                    Checkout
                  </button>
                </div>
              </>
            ) : (
              <div className="empty-cart">
                <p>Your cart is empty</p>
                <button
                  className="continue-shopping"
                  onClick={() => setShowCart(false)}
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Checkout Modal */}
      {showCheckoutModal && (
        <div className="modal-overlay">
          <div className="modal checkout-modal">
            <div className="modal-header">
              <h3>Complete Your Order</h3>
              <button 
                className="close-modal"
                onClick={() => setShowCheckoutModal(false)}
              >
                ×
              </button>
            </div>
            
            <form onSubmit={handleCheckoutSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input 
                  type="text" 
                  value={checkoutInfo.name}
                  onChange={(e) => setCheckoutInfo({...checkoutInfo, name: e.target.value})}
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Address</label>
                <textarea 
                  value={checkoutInfo.address}
                  onChange={(e) => setCheckoutInfo({...checkoutInfo, address: e.target.value})}
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Payment Method</label>
                <select
                  value={checkoutInfo.paymentMethod}
                  onChange={(e) => setCheckoutInfo({...checkoutInfo, paymentMethod: e.target.value})}
                >
                  <option value="credit">Credit Card</option>
                  <option value="debit">Debit Card</option>
                  <option value="cash">Cash on Delivery</option>
                </select>
              </div>
              
              <button type="submit" className="submit-order">
                Place Order
              </button>
            </form>
          </div>
        </div>
      )}

      <style jsx>{`
        /* Base Styles */
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
        }
        
        .app-container {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        /* Header Styles */
        .app-header {
          padding: 1rem;
          background: white;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          position: sticky;
          top: 0;
          z-index: 100;
        }
        
        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }
        
        .logo h1 {
          font-size: 1.8rem;
          color: #ff6b6b;
        }
        
        .search-bar {
          flex: 1;
          display: flex;
          max-width: 500px;
        }
        
        .search-bar input {
          flex: 1;
          padding: 0.8rem;
          border: 1px solid #ddd;
          border-radius: 4px 0 0 4px;
        }
        
        .search-button {
          padding: 0 1rem;
          background: #ff6b6b;
          color: white;
          border: none;
          border-radius: 0 4px 4px 0;
          cursor: pointer;
        }
        
        .cart-button {
          padding: 0.8rem 1.5rem;
          background: #333;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-weight: bold;
        }
        
        /* Category Scroller */
        .category-scroller {
          width: 100%;
          overflow-x: auto;
          padding-bottom: 1rem;
        }
        
        .category-nav {
          display: flex;
          gap: 0.5rem;
          padding: 0.5rem;
          min-width: max-content;
        }
        
        .category-item {
          padding: 0.6rem 1.2rem;
          background: #f5f5f5;
          border-radius: 20px;
          white-space: nowrap;
          cursor: pointer;
          border: none;
        }
        
        .category-item.active {
          background: #ff6b6b;
          color: white;
        }
        
        /* Main Content */
        .main-content {
          flex: 1;
          padding: 1rem;
        }
        
        /* Hero Banner */
        .hero-banner {
          position: relative;
          margin: 1rem 0;
          border-radius: 8px;
          overflow: hidden;
          height: 300px;
        }
        
        .hero-text {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 2rem;
          background: rgba(0,0,0,0.5);
          color: white;
        }
        
        .hero-text h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        
        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          z-index: -1;
        }
        
        /* Product Grid */
        .food-section h3 {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
        }
        
        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
        }
        
        .product-card {
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          transition: transform 0.3s;
        }
        
        .product-card:hover {
          transform: translateY(-5px);
        }
        
        .product-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        
        .product-info {
          padding: 1.5rem;
        }
        
        .product-info h3 {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
        }
        
        .product-description {
          color: #666;
          margin-bottom: 1rem;
          font-size: 0.9rem;
        }
        
        .discount-badge {
          position: absolute;
          top: 10px;
          right: 10px;
          background: #ff6b6b;
          color: white;
          padding: 0.3rem 0.6rem;
          border-radius: 4px;
          font-weight: bold;
        }
        
        .product-meta {
          display: flex;
          flex-direction: column;
          margin-bottom: 0.5rem;
        }
        
        .price-container {
          margin-bottom: 0.5rem;
        }
        
        .original-price {
          font-size: 0.9rem;
          color: #999;
          text-decoration: line-through;
        }
        
        .price {
          font-weight: bold;
          color: #ff6b6b;
          font-size: 1.1rem;
        }
        
        .secondary-info {
          display: flex;
          justify-content: space-between;
          color: #666;
          font-size: 0.9rem;
        }
        
        .add-to-cart {
          width: 100%;
          padding: 0.8rem;
          margin-top: 1rem;
          background: #ff6b6b;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        
        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        
        .modal {
          background: white;
          border-radius: 8px;
          width: 90%;
          max-width: 500px;
          max-height: 90vh;
          overflow-y: auto;
        }
        
        .modal-header {
          padding: 1.5rem;
          border-bottom: 1px solid #eee;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .close-modal {
          font-size: 1.5rem;
          background: none;
          border: none;
          cursor: pointer;
        }
        
        /* Cart Items */
        .cart-items {
          padding: 1.5rem;
        }
        
        .cart-item {
          display: flex;
          gap: 1rem;
          padding: 1rem 0;
          border-bottom: 1px solid #eee;
          align-items: center;
        }
        
        .cart-item img {
          width: 80px;
          height: 80px;
          object-fit: cover;
          border-radius: 4px;
        }
        
        .item-details {
          flex: 1;
        }
        
        .item-controls {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 0.5rem;
        }
        
        .item-controls button {
          width: 25px;
          height: 25px;
          background: #f5f5f5;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        
        .item-price {
          font-weight: bold;
          color: #ff6b6b;
        }
        
        .cart-summary {
          padding: 1.5rem;
          border-top: 1px solid #eee;
        }
        
        .summary-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
        }
        
        .summary-row.total {
          font-weight: bold;
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid #eee;
        }
        
        .checkout-button {
          width: 100%;
          padding: 1rem;
          margin-top: 1.5rem;
          background: #ff6b6b;
          color: white;
          border: none;
          border-radius: 4px;
          font-weight: bold;
          cursor: pointer;
        }
        
        .empty-cart {
          text-align: center;
          padding: 2rem;
        }
        
        .continue-shopping {
          padding: 0.8rem 1.5rem;
          margin-top: 1rem;
          background: #333;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        
        /* Checkout Form */
        form {
          padding: 1.5rem;
        }
        
        .form-group {
          margin-bottom: 1.5rem;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: bold;
        }
        
        .form-group input,
        .form-group textarea,
        .form-group select {
          width: 100%;
          padding: 0.8rem;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        
        .form-group textarea {
          height: 100px;
        }
        
        .submit-order {
          width: 100%;
          padding: 1rem;
          background: #ff6b6b;
          color: white;
          border: none;
          border-radius: 4px;
          font-weight: bold;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default FoodEcommerceApp_;
