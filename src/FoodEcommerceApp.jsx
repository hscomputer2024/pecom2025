import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const FoodEcommerceApp = () => {
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
      featured: false,
      popular: true,
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
      featured: true,
      popular: false,
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
      featured: false,
      popular: false,
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
      featured: true,
      popular: true,
      discount: 5
    },
    {
      id: 6,
      name: 'Pancake Stack',
      description: 'Fluffy pancakes with maple syrup and berries',
      price: 7.25,
      category: 'Breakfast',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&h=200',
      rating: 4.7,
      deliveryTime: '10-15 min',
      calories: 480,
      featured: true,
      popular: true,
      discount: 0
    },
    {
      id: 7,
      name: 'Chicken Wrap',
      description: 'Grilled chicken with veggies in tortilla',
      price: 8.50,
      category: 'Wraps',
      image: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=300&h=200',
      rating: 4.4,
      deliveryTime: '12-18 min',
      calories: 420,
      featured: false,
      popular: true,
      discount: 5
    },
    {
      id: 8,
      name: 'Sushi Platter',
      description: 'Assorted sushi rolls with wasabi and soy sauce',
      price: 12.99,
      category: 'Sushi',
      image: 'https://images.unsplash.com/photo-1583627225831-a0c8c5f40d9b?w=300&h=200',
      rating: 4.9,
      deliveryTime: '20-30 min',
      calories: 380,
      featured: true,
      popular: false,
      discount: 10
    },
    {
      id: 9,
      name: 'Pepperoni Pizza',
      description: 'Classic pizza with mozzarella and pepperoni',
      price: 11.99,
      category: 'Pizza',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&h=200',
      rating: 4.6,
      deliveryTime: '15-25 min',
      calories: 700,
      featured: true,
      popular: true,
      discount: 0
    },
    {
      id: 10,
      name: 'Vegan Burger',
      description: 'Plant-based patty with vegan cheese and toppings',
      price: 9.50,
      category: 'Vegan',
      image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=300&h=200',
      rating: 4.3,
      deliveryTime: '15-20 min',
      calories: 380,
      featured: false,
      popular: false,
      discount: 0
    }
  ];

  // State management
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [userLocation, setUserLocation] = useState('Your Location');
  const [orderHistory, setOrderHistory] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('menu');
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [authFormData, setAuthFormData] = useState({
    loginEmail: '',
    loginPassword: '',
    registerName: '',
    registerEmail: '',
    registerPassword: '',
    registerConfirmPassword: ''
  });
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

  const featuredProducts = products.filter(product => product.featured);
  const popularProducts = products.filter(product => product.popular);

  // Cart functions
  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id ? {...item, quantity: item.quantity + 1} : item
      ));
    } else {
      setCart([...cart, {...product, quantity: 1}]);
    }
  };

  const removeFromCart = (productId) => {
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem.quantity > 1) {
      setCart(cart.map(item => 
        item.id === productId ? {...item, quantity: item.quantity - 1} : item
      ));
    } else {
      setCart(cart.filter(item => item.id !== productId));
    }
  };

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  // Order functions
  const placeOrder = () => {
    setShowCheckoutModal(true);
  };

  const handleCheckoutSubmit = () => {
    const order = {
      id: Date.now(),
      items: [...cart],
      total: cartTotal,
      date: new Date().toLocaleString(),
      status: 'Processing',
      deliveryAddress: checkoutInfo.address,
      paymentMethod: checkoutInfo.paymentMethod
    };
    
    setOrderHistory([...orderHistory, order]);
    setCart([]);
    setShowCart(false);
    setShowCheckoutModal(false);
    setCheckoutInfo({ name: '', address: '', paymentMethod: 'credit' });
    alert('Order placed successfully!');
  };

  // Auth functions
  const handleLogin = (e) => {
    e.preventDefault();
    // Simple validation
    if (authFormData.loginEmail && authFormData.loginPassword) {
      setIsLoggedIn(true);
      setShowLoginModal(false);
      alert('Logged in successfully!');
    } else {
      alert('Please fill in all fields');
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Simple validation
    if (authFormData.registerPassword !== authFormData.registerConfirmPassword) {
      alert("Passwords don't match");
      return;
    }
    if (authFormData.registerName && authFormData.registerEmail && authFormData.registerPassword) {
      setIsLoggedIn(true);
      setShowRegisterModal(false);
      alert('Account created successfully!');
    } else {
      alert('Please fill in all fields');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    alert('Logged out successfully!');
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

  // Side-scrolling category navigation
  const renderCategoryNav = () => (
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
  );

  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        <div className="header-content">
          <div className="logo">
            <img src="https://placehold.co/150x50?text=FoodExpress" alt="FoodExpress Logo" />
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
          
          <div className="user-controls">
            <div className="location-selector">
              <span className="location-icon">📍</span>
              <select 
                value={userLocation} 
                onChange={(e) => setUserLocation(e.target.value)}
              >
                <option>Your Location</option>
                <option>New York</option>
                <option>Los Angeles</option>
                <option>Chicago</option>
                <option>Houston</option>
              </select>
            </div>
            
            {isLoggedIn ? (
              <>
                <button className="header-button" onClick={() => setActiveTab('orders')}>
                  My Orders
                </button>
                <button className="header-button" onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <button 
                  className="header-button" 
                  onClick={() => setShowLoginModal(true)}
                >
                  Login
                </button>
                <button 
                  className="header-button primary" 
                  onClick={() => setShowRegisterModal(true)}
                >
                  Sign Up
                </button>
              </>
            )}
            
            <button 
              className="cart-button" 
              onClick={() => setShowCart(!showCart)}
              data-count={cart.length}
            >
              🛒 Cart
            </button>
          </div>
        </div>
        
        {renderCategoryNav()}
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Banner */}
        <section className="hero-banner">
          <div className="hero-text">
            <h1>Delicious Food Delivered Fast</h1>
            <p>Browse our extensive menu and order your favorite meals</p>
            <button className="hero-button">Order Now</button>
          </div>
          <div className="hero-image">
            <img 
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&h=300&crop=entropy&cs=tinysrgb" 
              alt="Delicious food selection" 
            />
          </div>
        </section>

        {/* Scrollable Product Sections */}
        <div className="content-sections">
          {activeTab === 'menu' && (
            <>
              {activeCategory === 'All' && (
                <section className="food-section">
                  <h2>Popular Choices</h2>
                  <div className="horizontal-scroller">
                    <div className="product-grid">
                      {popularProducts.map(renderProductItem)}
                    </div>
                  </div>
                </section>
              )}
              
              <section className="food-section">
                <h2>{activeCategory === 'All' ? 'All Menu Items' : activeCategory}</h2>
                <div className="product-grid">
                  {filteredProducts.map(renderProductItem)}
                </div>
              </section>
            </>
          )}

          {activeTab === 'deals' && (
            <section className="food-section">
              <h2>Special Deals</h2>
              <div className="product-grid">
                {products.filter(p => p.discount > 0).map(renderProductItem)}
              </div>
            </section>
          )}

          {activeTab === 'orders' && isLoggedIn && (
            <section className="orders-section">
              <h2>Order History</h2>
              {orderHistory.length > 0 ? (
                <div className="order-list">
                  {orderHistory.map(order => (
                    <div className="order-card" key={order.id}>
                      <div className="order-header">
                        <div className="order-meta">
                          <span className="order-id">Order #{order.id}</span>
                          <span className="order-date">{order.date}</span>
                        </div>
                        <span className={`order-status ${order.status.toLowerCase()}`}>
                          {order.status}
                        </span>
                      </div>
                      <div className="order-items">
                        {order.items.map(item => (
                          <div className="order-item" key={item.id}>
                            <img src={item.image} alt={item.name} />
                            <div className="item-info">
                              <span>{item.name}</span>
                              <span>{item.quantity}x</span>
                            </div>
                            <span>${(item.price * item.quantity).toFixed(2)}</span>
                          </div>
                        ))}
                      </div>
                      <div className="order-total">
                        <span>Total:</span>
                        <span>${(order.total + 2.99).toFixed(2)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="empty-state">
                  <img 
                    src="https://placehold.co/200x200?text=No+Orders" 
                    alt="No orders yet"
                  />
                  <p>You haven't placed any orders yet</p>
                  <button 
                    className="primary-button"
                    onClick={() => setActiveTab('menu')}
                  >
                    Browse Menu
                  </button>
                </div>
              )}
            </section>
          )}
        </div>
      </main>

      {/* Footer */}
      {/*<footer className="app-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>FoodExpress</h3>
            <p>Delivering happiness to your doorstep since 2023</p>
            <div className="social-links">
              <a href="#"><span>Facebook</span></a>
              <a href="#"><span>Instagram</span></a>
              <a href="#"><span>Twitter</span></a>
            </div>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li onClick={() => setActiveTab('menu')}>Menu</li>
              <li onClick={() => setActiveTab('deals')}>Deals</li>
              <li onClick={() => isLoggedIn ? setActiveTab('orders') : alert('Please login')}>
                My Orders
              </li>
              <li onClick={isLoggedIn ? handleLogout : () => setShowLoginModal(true)}>
                {isLoggedIn ? 'Logout' : 'Login'}
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>Email: contact@foodexpress.com</p>
            <p>Phone: (123) 456-7890</p>
            <p>Hours: 9AM - 10PM Daily</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} FoodExpress. All rights reserved.</p>
        </div>
      </footer>*/}

      {/* Modals */}
      {/* Cart Modal */}
      {showCart && (
        <div className="modal-overlay">
          <div className="modal cart-modal">
            <div className="modal-header">
              <h2>Your Cart ({cart.length})</h2>
              <button 
                className="close-modal"
                onClick={() => setShowCart(false)}
              >
                ×
              </button>
            </div>
            
            {cart.length > 0 ? (
              <>
                <div className="modal-body">
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
                  </div>
                </div>
                
                <div className="modal-footer">
                  <button 
                    className="secondary-button"
                    onClick={() => setShowCart(false)}
                  >
                    Continue Shopping
                  </button>
                  <button 
                    className="primary-button"
                    onClick={placeOrder}
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </>
            ) : (
              <div className="empty-cart">
                <img 
                  src="https://placehold.co/200x200?text=Cart+Empty" 
                  alt="Empty shopping cart"
                />
                <p>Your cart is empty</p>
                <button
                  className="primary-button"
                  onClick={() => {
                    setShowCart(false);
                    setActiveTab('menu');
                  }}
                >
                  Browse Menu
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Login Modal */}
      {showLoginModal && (
        <div className="modal-overlay">
          <div className="modal auth-modal">
            <div className="modal-header">
              <h2>Login</h2>
              <button 
                className="close-modal"
                onClick={() => setShowLoginModal(false)}
              >
                ×
              </button>
            </div>
            
            <form onSubmit={handleLogin} className="auth-form">
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  value={authFormData.loginEmail}
                  onChange={(e) => setAuthFormData({
                    ...authFormData,
                    loginEmail: e.target.value
                  })}
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  value={authFormData.loginPassword}
                  onChange={(e) => setAuthFormData({
                    ...authFormData,
                    loginPassword: e.target.value
                  })}
                  required
                />
              </div>
              
              <div className="form-footer">
                <button type="submit" className="primary-button">
                  Login
                </button>
                <p>
                  Don't have an account?{' '}
                  <button
                    type="button"
                    className="text-button"
                    onClick={() => {
                      setShowLoginModal(false);
                      setShowRegisterModal(true);
                    }}
                  >
                    Sign up
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Registration Modal */}
      {showRegisterModal && (
        <div className="modal-overlay">
          <div className="modal auth-modal">
            <div className="modal-header">
              <h2>Create Account</h2>
              <button 
                className="close-modal"
                onClick={() => setShowRegisterModal(false)}
              >
                ×
              </button>
            </div>
            
            <form onSubmit={handleRegister} className="auth-form">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  value={authFormData.registerName}
                  onChange={(e) => setAuthFormData({
                    ...authFormData,
                    registerName: e.target.value
                  })}
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  value={authFormData.registerEmail}
                  onChange={(e) => setAuthFormData({
                    ...authFormData,
                    registerEmail: e.target.value
                  })}
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  value={authFormData.registerPassword}
                  onChange={(e) => setAuthFormData({
                    ...authFormData,
                    registerPassword: e.target.value
                  })}
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  value={authFormData.registerConfirmPassword}
                  onChange={(e) => setAuthFormData({
                    ...authFormData,
                    registerConfirmPassword: e.target.value
                  })}
                  required
                />
              </div>
              
              <div className="form-footer">
                <button type="submit" className="primary-button">
                  Create Account
                </button>
                <p>
                  Already have an account?{' '}
                  <button
                    type="button"
                    className="text-button"
                    onClick={() => {
                      setShowRegisterModal(false);
                      setShowLoginModal(true);
                    }}
                  >
                    Login
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Checkout Modal */}
      {showCheckoutModal && (
        <div className="modal-overlay">
          <div className="modal checkout-modal">
            <div className="modal-header">
              <h2>Checkout</h2>
              <button 
                className="close-modal"
                onClick={() => setShowCheckoutModal(false)}
              >
                ×
              </button>
            </div>
            
            <form onSubmit={handleCheckoutSubmit} className="checkout-form">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  value={checkoutInfo.name}
                  onChange={(e) => setCheckoutInfo({
                    ...checkoutInfo,
                    name: e.target.value
                  })}
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Delivery Address</label>
                <textarea
                  value={checkoutInfo.address}
                  onChange={(e) => setCheckoutInfo({
                    ...checkoutInfo,
                    address: e.target.value
                  })}
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Payment Method</label>
                <div className="payment-options">
                  <label className="payment-option">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="credit"
                      checked={checkoutInfo.paymentMethod === 'credit'}
                      onChange={() => setCheckoutInfo({
                        ...checkoutInfo,
                        paymentMethod: 'credit'
                      })}
                      required
                    />
                    Credit Card
                  </label>
                  <label className="payment-option">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cash"
                      checked={checkoutInfo.paymentMethod === 'cash'}
                      onChange={() => setCheckoutInfo({
                        ...checkoutInfo,
                        paymentMethod: 'cash'
                      })}
                    />
                    Cash on Delivery
                  </label>
                </div>
              </div>
              
              <div className="order-summary">
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
              </div>
              
              <div className="modal-footer">
                <button 
                  type="button"
                  className="secondary-button"
                  onClick={() => setShowCheckoutModal(false)}
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="primary-button"
                >
                  Place Order
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Global Styles */}
      <style jsx global>{`
        :root {
          --primary-color: #ff6b6b;
          --primary-dark: #e05555;
          --secondary-color: #4ecdc4;
          --dark-color: #292f36;
          --light-color: #f7fff7;
          --gray-color: #6c757d;
          --light-gray: #f1f1f1;
          --border-radius: 8px;
          --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          --transition: all 0.3s ease;
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html, body, #root {
          height: 100%;
          width: 100%;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        button {
          cursor: pointer;
          border: none;
          background: none;
        }

        input, textarea, select {
          font-family: inherit;
          font-size: inherit;
        }

        img {
          max-width: 100%;
          height: auto;
        }
      `}</style>

      {/* Component Styles */}
      <style jsx>{`
        /* Main App Container */
        .app-container {
          display: flex;
          flex-direction: column;
          height: 100vh;
          width: 100%;
          overflow: hidden;
          background-color: var(--light-color);
        }

        /* Header Styles */
        .app-header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: white;
          box-shadow: var(--shadow);
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .logo img {
          height: 40px;
        }

        .search-bar {
          flex: 1;
          min-width: 250px;
          max-width: 500px;
          display: flex;
        }

        .search-bar input {
          flex: 1;
          padding: 0.75rem;
          border: 1px solid var(--light-gray);
          border-radius: var(--border-radius) 0 0 var(--border-radius);
        }

        .search-button {
          padding: 0 1rem;
          background: var(--primary-color);
          color: white;
          border-radius: 0 var(--border-radius) var(--border-radius) 0;
        }

        .user-controls {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .location-selector {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem;
          background: var(--light-gray);
          border-radius: var(--border-radius);
        }

        .header-button {
          padding: 0.75rem 1rem;
          border-radius: var(--border-radius);
          transition: var(--transition);
        }

        .header-button.primary {
          background: var(--primary-color);
          color: white;
        }

        .header-button:hover {
          background: var(--light-gray);
        }

        .header-button.primary:hover {
          background: var(--primary-dark);
        }

        .cart-button {
          position: relative;
          padding: 0.75rem 1rem;
          background: var(--dark-color);
          color: white;
          border-radius: var(--border-radius);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .cart-button::after {
          content: attr(data-count);
          position: absolute;
          top: -8px;
          right: -8px;
          background: var(--primary-color);
          color: white;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          font-size: 0.7rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Category Scroller */
        .category-scroller {
          width: 100%;
          overflow-x: auto;
          padding-bottom: 0.5rem;
        }

        .category-nav {
          display: flex;
          gap: 0.5rem;
          padding: 0.5rem;
          min-width: max-content;
        }

        .category-item {
          padding: 0.75rem 1.25rem;
          background: var(--light-gray);
          border-radius: 20px;
          font-size: 0.9rem;
          white-space: nowrap;
          transition: var(--transition);
        }

        .category-item.active {
          background: var(--primary-color);
          color: white;
        }

        /* Main Content */
        .main-content {
          flex: 1;
          overflow-y: auto;
        }

        /* Hero Banner */
        .hero-banner {
          position: relative;
          height: 300px;
          display: flex;
          overflow: hidden;
          margin-bottom: 2rem;
        }

        .hero-text {
          flex: 1;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: rgba(0,0,0,0.6);
          color: white;
          z-index: 1;
        }

        .hero-text h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .hero-text p {
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }

        .hero-button {
          align-self: flex-start;
          padding: 0.8rem 1.5rem;
          background: var(--primary-color);
          color: white;
          border-radius: var(--border-radius);
        }

        .hero-image {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        .hero-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Content Sections */
        .content-sections {
          padding: 1rem;
        }

        /* Horizontal Scroller */
        .horizontal-scroller {
          overflow-x: auto;
          padding-bottom: 1rem;
        }

        .horizontal-scroller .product-grid {
          display: flex;
          gap: 1.5rem;
          padding: 0.5rem;
          width: max-content;
        }

        /* Product Grid */
        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
          margin-top: 1rem;
        }

        .product-card {
          background: white;
          border-radius: var(--border-radius);
          overflow: hidden;
          box-shadow: var(--shadow);
          transition: var(--transition);
        }

        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }

        .product-image {
          width: 100%;
          height: 180px;
          object-fit: cover;
        }

        .product-info {
          padding: 1rem;
        }

        .product-info h3 {
          margin-bottom: 0.5rem;
          font-size: 1.2rem;
        }

        .product-description {
          color: var(--gray-color);
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }

        .product-meta {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .price-container {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .original-price {
          font-size: 0.9rem;
          color: var(--gray-color);
          text-decoration: line-through;
        }

        .price {
          font-weight: bold;
          color: var(--primary-color);
          font-size: 1.1rem;
        }

        .secondary-info {
          display: flex;
          justify-content: space-between;
          color: var(--gray-color);
          font-size: 0.9rem;
        }

        .add-to-cart {
          width: 100%;
          padding: 0.75rem;
          margin-top: 1rem;
          background: var(--primary-color);
          color: white;
          border-radius: var(--border-radius);
          transition: var(--transition);
        }

        .add-to-cart:hover {
          background: var(--primary-dark);
        }

        .discount-badge {
          position: absolute;
          top: 10px;
          right: 10px;
          background: var(--primary-color);
          color: white;
          padding: 0.5rem;
          border-radius: var(--border-radius);
          font-weight: bold;
          font-size: 0.8rem;
        }

        /* Orders Section */
        .orders-section {
          padding: 1rem;
        }

        .order-list {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin-top: 1rem;
        }

        .order-card {
          background: white;
          border-radius: var(--border-radius);
          box-shadow: var(--shadow);
          overflow: hidden;
        }

        .order-header {
          padding: 1rem;
          background: var(--light-gray);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .order-meta {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .order-id {
          font-weight: bold;
        }

        .order-date {
          font-size: 0.8rem;
          color: var(--gray-color);
        }

        .order-status {
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
        }

        .order-items {
          padding: 1rem;
        }

        .order-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 0;
          border-bottom: 1px solid var(--light-gray);
        }

        .order-item:last-child {
          border-bottom: none;
        }

        .order-item img {
          width: 60px;
          height: 60px;
          object-fit: cover;
          border-radius: var(--border-radius);
        }

        .order-total {
          padding: 1rem;
          background: var(--light-gray);
          display: flex;
          justify-content: space-between;
          font-weight: bold;
        }

        .empty-state {
          text-align: center;
          padding: 3rem 0;
        }

        .empty-state img {
          max-width: 200px;
          margin-bottom: 1rem;
        }

        .primary-button {
          padding: 0.8rem 1.5rem;
          background: var(--primary-color);
          color: white;
          border-radius: var(--border-radius);
          transition: var(--transition);
        }

        .primary-button:hover {
          background: var(--primary-dark);
        }

        .secondary-button {
          padding: 0.8rem 1.5rem;
          background: var(--light-gray);
          border-radius: var(--border-radius);
          transition: var(--transition);
        }

        .secondary-button:hover {
          background: #e0e0e0;
        }

        .text-button {
          color: var(--primary-color);
          text-decoration: underline;
        }

        /* Footer */
        .app-footer {
          background: var(--dark-color);
          color: white;
          padding: 2rem 1rem 1rem;
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .footer-section h3,
        .footer-section h4 {
          margin-bottom: 1rem;
        }

        .footer-section p,
        .footer-section li {
          color: #ddd;
          margin-bottom: 0.5rem;
        }

        .footer-section ul {
          list-style: none;
        }

        .footer-section li {
          cursor: pointer;
          transition: var(--transition);
        }

        .footer-section li:hover {
          color: white;
        }

        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }

        .footer-bottom {
          text-align: center;
          padding-top: 1rem;
          border-top: 1px solid rgba(255,255,255,0.1);
          font-size: 0.9rem;
          color: #999;
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.5);
          z-index: 1000;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1rem;
        }

        .modal {
          background: white;
          border-radius: var(--border-radius);
          overflow: hidden;
          width: 100%;
          max-width: 500px;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
        }

        .modal-header {
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid var(--light-gray);
        }

        .close-modal {
          font-size: 1.5rem;
          font-weight: bold;
        }

        .modal-body {
          flex: 1;
          padding: 1rem;
          overflow-y: auto;
        }

        .modal-footer {
          padding: 1rem;
          display: flex;
          gap: 1rem;
          justify-content: flex-end;
          border-top: 1px solid var(--light-gray);
        }

        /* Auth Modals */
        .auth-form {
          padding: 1rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: bold;
        }

        .form-group input {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid var(--light-gray);
          border-radius: var(--border-radius);
        }

        .form-footer {
          margin-top: 2rem;
          text-align: center;
        }

        /* Cart Modal */
        .cart-items {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .cart-item {
          display: flex;
          gap: 1rem;
          padding: 1rem;
          background: var(--light-gray);
          border-radius: var(--border-radius);
        }

        .cart-item img {
          width: 80px;
          height: 80px;
          object-fit: cover;
          border-radius: var(--border-radius);
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
          width: 30px;
          height: 30px;
          background: white;
          border-radius: var(--border-radius);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
        }

        .item-price {
          font-weight: bold;
          color: var(--primary-color);
        }

        .cart-summary {
          margin-top: 2rem;
          padding: 1rem;
          background: var(--light-gray);
          border-radius: var(--border-radius);
        }

        .summary-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
        }

        .summary-row.total {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid #ddd;
          font-weight: bold;
        }

        /* Checkout Form */
        .checkout-form {
          padding: 1rem;
        }

        .payment-options {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-top: 1rem;
        }

        .payment-option {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem;
          background: var(--light-gray);
          border-radius: var(--border-radius);
        }

        .order-summary {
          margin-top: 2rem;
          padding: 1rem;
          background: var(--light-gray);
          border-radius: var(--border-radius);
        }
      `}</style>
    </div>
  );
};
export default FoodEcommerceApp;
/* Render the app
const App = () => {
  return <FoodEcommerceApp />;
};

export default App;

// For standalone usage
ReactDOM.render(<App />, document.getElementById('root'));*/
