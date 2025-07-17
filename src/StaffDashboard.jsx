import React, { useState } from 'react';
import './StaffDashboard.css';

const StaffDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [stocks, setStocks] = useState([
    { id: 1, name: 'Cheeseburger', quantity: 50, category: 'Fast Food', price: 8.99, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&auto=format&fit=crop' },
    { id: 2, name: 'Pepperoni Pizza', quantity: 40, category: 'Fast Food', price: 12.99, image: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=300&auto=format&fit=crop' },
    { id: 3, name: 'Caesar Salad', quantity: 30, category: 'Healthy', price: 9.99, image: 'https://images.unsplash.com/photo-1546793665-b74649b81517?w=300&auto=format&fit=crop' },
    { id: 4, name: 'Spaghetti Carbonara', quantity: 20, category: 'Italian', price: 14.99, image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ce2?w=300&auto=format&fit=crop' }
  ]);
  
  const [orders, setOrders] = useState([
    { id: 1, customer: 'John Doe', items: ['Cheeseburger', 'Fries'], total: 12.99, status: 'Completed', date: '2023-06-15', time: '12:30 PM' },
    { id: 2, customer: 'Jane Smith', items: ['Pepperoni Pizza', 'Soda'], total: 15.99, status: 'Processing', date: '2023-06-15', time: '1:15 PM' },
    { id: 3, customer: 'Mike Johnson', items: ['Caesar Salad', 'Water'], total: 8.99, status: 'Delivered', date: '2023-06-14', time: '6:45 PM' },
    { id: 4, customer: 'Sarah Williams', items: ['Spaghetti Carbonara', 'Garlic Bread'], total: 14.50, status: 'Completed', date: '2023-06-14', time: '7:30 PM' }
  ]);
  
  const [offers, setOffers] = useState([
    { id: 1, name: 'Weekend Special', discount: 15, validUntil: '2023-12-31' },
    { id: 2, name: 'Happy Hour', discount: 20, validUntil: '2023-12-25' }
  ]);
  
  const [newStock, setNewStock] = useState({ 
    name: '', 
    quantity: '', 
    category: '', 
    price: '', 
    image: 'https://placehold.co/300x200?text=Food+Image' 
  });
  
  const [newOffer, setNewOffer] = useState({ 
    name: '', 
    discount: '', 
    validUntil: '' 
  });
  
  const [profile, setProfile] = useState({
    name: 'Chef Michael',
    email: 'chef@foodease.com',
    phone: '1234567890',
    address: '123 Restaurant St, Foodville',
    position: 'Head Chef',
    joinDate: '2022-01-15',
    avatar: 'https://placehold.co/150x150?text=CM'
  });

  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showOrderDetails, setShowOrderDetails] = useState(false);

  // Sales data
  const todayPayments = 1250.75;
  const lastMonthSales = 28500.50;
  
  const weeklySales = [
    { day: 'Mon', sales: 850, orders: 42 },
    { day: 'Tue', sales: 920, orders: 48 },
    { day: 'Wed', sales: 780, orders: 39 },
    { day: 'Thu', sales: 1100, orders: 55 },
    { day: 'Fri', sales: 1450, orders: 72 },
    { day: 'Sat', sales: 1950, orders: 98 },
    { day: 'Sun', sales: 1800, orders: 90 }
  ];

  const popularItems = [
    { name: 'Cheeseburger', sales: 120, revenue: 1078.80 },
    { name: 'Pepperoni Pizza', sales: 95, revenue: 1234.05 },
    { name: 'Spaghetti Carbonara', sales: 78, revenue: 1169.22 },
    { name: 'Caesar Salad', sales: 65, revenue: 649.35 }
  ];

  const handleAddStock = (e) => {
    e.preventDefault();
    const newItem = {
      ...newStock, 
      id: stocks.length + 1, 
      quantity: parseInt(newStock.quantity),
      price: parseFloat(newStock.price)
    };
    setStocks([...stocks, newItem]);
    setNewStock({ 
      name: '', 
      quantity: '', 
      category: '', 
      price: '', 
      image: 'https://placehold.co/300x200?text=Food+Image' 
    });
  };

  const handleRemoveStock = (id) => {
    setStocks(stocks.filter(stock => stock.id !== id));
  };

  const handleAddOffer = (e) => {
    e.preventDefault();
    setOffers([...offers, { 
      ...newOffer, 
      id: offers.length + 1, 
      discount: parseInt(newOffer.discount) 
    }]);
    setNewOffer({ name: '', discount: '', validUntil: '' });
  };

  const handleRemoveOffer = (id) => {
    setOffers(offers.filter(offer => offer.id !== id));
  };

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    alert('Profile updated successfully!');
  };

  const markStockOut = (id) => {
    setStocks(stocks.map(stock => 
      stock.id === id ? { ...stock, quantity: 0 } : stock
    ));
  };

  const handleRestock = (id) => {
    const newQuantity = prompt("Enter restock quantity:");
    if (newQuantity && !isNaN(newQuantity)) {
      setStocks(stocks.map(stock => 
        stock.id === id ? { ...stock, quantity: parseInt(newQuantity) } : stock
      ));
    }
  };

  const updateOrderStatus = (id, status) => {
    setOrders(orders.map(order => 
      order.id === id ? { ...order, status } : order
    ));
  };

  const handleViewOrderDetails = (order) => {
    setSelectedOrder(order);
    setShowOrderDetails(true);
  };

  const handleCloseOrderDetails = () => {
    setShowOrderDetails(false);
    setSelectedOrder(null);
  };

  const todayOrders = orders.filter(order => order.date === '2023-06-15');
  const stockoutItems = stocks.filter(stock => stock.quantity === 0);
  const lowStockItems = stocks.filter(stock => stock.quantity > 0 && stock.quantity < 10);

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-title">FoodEase Staff Dashboard</div>
        <div className="profile-btn" onClick={() => setActiveTab('profile')}>
          <img src={profile.avatar} alt="Profile" className="profile-avatar" />
          <span>{profile.name}</span>
        </div>
      </header>

      {/* Sidebar */}
      <aside className="dashboard-sidebar">
        <div className="brand">
          <img src="https://placehold.co/40x40?text=FE" alt="FoodEase Logo" className="brand-logo" />
          <div className="brand-name">FoodEase</div>
        </div>
        
        <nav className="nav-list">
          <button 
            className={`nav-link ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <span className="nav-icon">📊</span>
            <span>Dashboard</span>
          </button>
          
          <button 
            className={`nav-link ${activeTab === 'stocks' ? 'active' : ''}`}
            onClick={() => setActiveTab('stocks')}
          >
            <span className="nav-icon">📦</span>
            <span>Inventory</span>
          </button>
          
          <button 
            className={`nav-link ${activeTab === 'orders' ? 'active' : ''}`}
            onClick={() => setActiveTab('orders')}
          >
            <span className="nav-icon">🛒</span>
            <span>Orders</span>
          </button>
          
          <button 
            className={`nav-link ${activeTab === 'payments' ? 'active' : ''}`}
            onClick={() => setActiveTab('payments')}
          >
            <span className="nav-icon">💳</span>
            <span>Payments</span>
          </button>
          
          <button 
            className={`nav-link ${activeTab === 'offers' ? 'active' : ''}`}
            onClick={() => setActiveTab('offers')}
          >
            <span className="nav-icon">🎁</span>
            <span>Promotions</span>
          </button>
          
          <button 
            className={`nav-link ${activeTab === 'stockout' ? 'active' : ''}`}
            onClick={() => setActiveTab('stockout')}
          >
            <span className="nav-icon">⚠️</span>
            <span>Out of Stock</span>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        {/* Dashboard Overview */}
        {activeTab === 'dashboard' && (
          <>
            <div className="section-header">
              <h2 className="section-title">Dashboard Overview</h2>
              <button className="btn btn-outline">
                Export Report
              </button>
            </div>
            
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-title">Today's Revenue</div>
                <div className="stat-value">${todayPayments.toFixed(2)}</div>
                <div className="stat-change">
                  <span>↑ 12% from yesterday</span>
                </div>
              </div>
              
              <div className="stat-card">
                <div className="stat-title">Total Orders Today</div>
                <div className="stat-value">{todayOrders.length}</div>
                <div className="stat-change">
                  <span>↑ 8% from yesterday</span>
                </div>
              </div>
              
              <div className="stat-card">
                <div className="stat-title">Last Month Revenue</div>
                <div className="stat-value">${lastMonthSales.toFixed(2)}</div>
                <div className="stat-change negative">
                  <span>↓ 5% from last month</span>
                </div>
              </div>
              
              <div className="stat-card">
                <div className="stat-title">Low Stock Items</div>
                <div className="stat-value">{lowStockItems.length}</div>
                <div className="stat-change">
                  <span>5 need restocking</span>
                </div>
              </div>
            </div>
            
            <div className="charts-container">
              <div className="chart-card">
                <h3>Weekly Sales Performance</h3>
                <img 
                  src="https://placehold.co/800x300?text=Weekly+Sales+Chart" 
                  alt="Line chart showing daily sales" 
                  className="chart-image"
                />
                <div className="chart-legend">
                  {weeklySales.map((day, index) => (
                    <div key={index} className="legend-item">
                      <div className="legend-color" style={{ backgroundColor: '#3b82f6' }}></div>
                      <span>{day.day}: ${day.sales} ({day.orders} orders)</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="chart-card">
                <h3>Popular Items</h3>
                <img 
                  src="https://placehold.co/400x300?text=Popular+Items+Chart" 
                  alt="Bar chart showing top selling items" 
                  className="chart-image"
                />
                <div className="chart-legend">
                  {popularItems.map((item, index) => (
                    <div key={index} className="legend-item">
                      <div className="legend-color" style={{ backgroundColor: '#10b981' }}></div>
                      <span>{item.name}: ${item.revenue} ({item.sales} sold)</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="orders-card">
              <h3>Recent Orders</h3>
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Order #</th>
                      <th>Customer</th>
                      <th>Items</th>
                      <th>Time</th>
                      <th>Total</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {todayOrders.map(order => (
                      <tr key={order.id}>
                        <td>#{order.id}</td>
                        <td>{order.customer}</td>
                        <td>
                          <div className="item-card">
                            <img 
                              src={`https://placehold.co/60x60?text=${order.items[0].charAt(0)}`} 
                              alt={order.items[0]}
                              className="item-image"
                            />
                            <div className="item-info">
                              <div className="item-name">{order.items[0]}</div>
                              <div className="item-meta">+ {order.items.length - 1} more items</div>
                            </div>
                          </div>
                        </td>
                        <td>{order.time}</td>
                        <td>${order.total.toFixed(2)}</td>
                        <td>
                          <span className={`status-badge ${
                            order.status === 'Completed' ? 'status-completed' : 
                            order.status === 'Processing' ? 'status-processing' : 
                            'status-delivered'
                          }`}>
                            {order.status}
                          </span>
                        </td>
                        <td>
                          <button 
                            className="btn btn-outline"
                            onClick={() => handleViewOrderDetails(order)}
                          >
                            Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {/* Inventory Management */}
        {activeTab === 'stocks' && (
          <>
            <div className="section-header">
              <h2 className="section-title">Inventory Management</h2>
              <button 
                className="btn btn-primary"
                onClick={() => {
                  setNewStock({
                    name: '', 
                    quantity: '', 
                    category: '', 
                    price: '', 
                    image: 'https://placehold.co/300x200?text=Food+Image'
                  });
                  document.getElementById('addItemModal').showModal();
                }}
              >
                + Add New Item
              </button>
            </div>
            
            <div className="inventory-grid">
              {stocks.map(stock => (
                <div key={stock.id} className={`inventory-card ${stock.quantity < 10 ? 'low-stock' : ''}`}>
                  <div className="inventory-image-container">
                    <img src={stock.image} alt={stock.name} className="inventory-image" />
                    <div className={`inventory-quantity ${stock.quantity === 0 ? 'out-of-stock' : ''}`}>
                      {stock.quantity} in stock
                    </div>
                  </div>
                  <div className="inventory-details">
                    <h3>{stock.name}</h3>
                    <p>{stock.category}</p>
                    <div className="inventory-price">${stock.price.toFixed(2)}</div>
                    <div className="inventory-actions">
                      <button 
                        className="btn btn-outline"
                        onClick={() => {
                          setNewStock(stock);
                          document.getElementById('editItemModal').showModal();
                        }}
                      >
                        Edit
                      </button>
                      <button 
                        className="btn btn-danger"
                        onClick={() => handleRemoveStock(stock.id)}
                      >
                        Remove
                      </button>
                      <button 
                        className="btn btn-secondary"
                        onClick={() => markStockOut(stock.id)}
                      >
                        Mark Out
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Add Item Modal */}
            <dialog id="addItemModal" className="modal">
              <div className="modal-content">
                <h3>Add New Inventory Item</h3>
                <form onSubmit={handleAddStock}>
                  <div className="form-group">
                    <label>Item Name</label>
                    <input
                      type="text"
                      value={newStock.name}
                      onChange={(e) => setNewStock({...newStock, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Quantity</label>
                      <input
                        type="number"
                        value={newStock.quantity}
                        onChange={(e) => setNewStock({...newStock, quantity: e.target.value})}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Price ($)</label>
                      <input
                        type="number"
                        step="0.01"
                        value={newStock.price}
                        onChange={(e) => setNewStock({...newStock, price: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Category</label>
                    <select
                      value={newStock.category}
                      onChange={(e) => setNewStock({...newStock, category: e.target.value})}
                      required
                    >
                      <option value="">Select category</option>
                      <option value="Fast Food">Fast Food</option>
                      <option value="Healthy">Healthy</option>
                      <option value="Italian">Italian</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Image URL</label>
                    <input
                      type="text"
                      value={newStock.image}
                      onChange={(e) => setNewStock({...newStock, image: e.target.value})}
                    />
                    <div className="image-preview">
                      <img src={newStock.image} alt="Preview" />
                    </div>
                  </div>
                  <div className="modal-actions">
                    <button 
                      type="button" 
                      className="btn btn-outline"
                      onClick={() => document.getElementById('addItemModal').close()}
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">Add Item</button>
                  </div>
                </form>
              </div>
            </dialog>

            {/* Edit Item Modal */}
            <dialog id="editItemModal" className="modal">
              <div className="modal-content">
                <h3>Edit Inventory Item</h3>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  setStocks(stocks.map(s => s.id === newStock.id ? newStock : s));
                  document.getElementById('editItemModal').close();
                }}>
                  <div className="form-group">
                    <label>Item Name</label>
                    <input
                      type="text"
                      value={newStock.name}
                      onChange={(e) => setNewStock({...newStock, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Quantity</label>
                      <input
                        type="number"
                        value={newStock.quantity}
                        onChange={(e) => setNewStock({...newStock, quantity: e.target.value})}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Price ($)</label>
                      <input
                        type="number"
                        step="0.01"
                        value={newStock.price}
                        onChange={(e) => setNewStock({...newStock, price: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Category</label>
                    <select
                      value={newStock.category}
                      onChange={(e) => setNewStock({...newStock, category: e.target.value})}
                      required
                    >
                      <option value="Fast Food">Fast Food</option>
                      <option value="Healthy">Healthy</option>
                      <option value="Italian">Italian</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Image URL</label>
                    <input
                      type="text"
                      value={newStock.image}
                      onChange={(e) => setNewStock({...newStock, image: e.target.value})}
                    />
                    <div className="image-preview">
                      <img src={newStock.image} alt="Preview" />
                    </div>
                  </div>
                  <div className="modal-actions">
                    <button 
                      type="button" 
                      className="btn btn-outline"
                      onClick={() => document.getElementById('editItemModal').close()}
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">Save Changes</button>
                  </div>
                </form>
              </div>
            </dialog>
          </>
        )}

        {/* Orders List */}
        {activeTab === 'orders' && (
          <>
            <div className="section-header">
              <h2 className="section-title">Order Management</h2>
              <div className="order-filters">
                <button className="btn btn-outline">Today</button>
                <button className="btn btn-outline">This Week</button>
                <button className="btn btn-outline">This Month</button>
              </div>
            </div>
            
            <div className="table-container">
              <table className="orders-table">
                <thead>
                  <tr>
                    <th>Order #</th>
                    <th>Customer</th>
                    <th>Items</th>
                    <th>Date/Time</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map(order => (
                    <tr key={order.id}>
                      <td>#{order.id}</td>
                      <td>{order.customer}</td>
                      <td>
                        <div className="order-items">
                          {order.items.map((item, idx) => (
                            <div key={idx} className="order-item">
                              <img 
                                src={`https://placehold.co/40x40?text=${item.charAt(0)}`} 
                                alt={item}
                                className="order-item-image"
                              />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </td>
                      <td>{order.date}<br/>{order.time}</td>
                      <td>${order.total.toFixed(2)}</td>
                      <td>
                        <span className={`status-badge ${
                          order.status === 'Completed' ? 'status-completed' : 
                          order.status === 'Processing' ? 'status-processing' : 
                          'status-delivered'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td>
                        <div className="order-actions">
                          <button 
                            className="btn btn-outline"
                            onClick={() => handleViewOrderDetails(order)}
                          >
                            Details
                          </button>
                          {order.status === 'Processing' && (
                            <>
                              <button 
                                className="btn btn-success"
                                onClick={() => updateOrderStatus(order.id, 'Completed')}
                              >
                                Complete
                              </button>
                              <button 
                                className="btn btn-danger"
                                onClick={() => updateOrderStatus(order.id, 'Cancelled')}
                              >
                                Cancel
                              </button>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* Payments & Sales */}
        {activeTab === 'payments' && (
          <>
            <div className="section-header">
              <h2 className="section-title">Payments & Sales Analytics</h2>
              <div className="time-filters">
                <button className="btn btn-primary">Today</button>
                <button className="btn btn-outline">This Week</button>
                <button className="btn btn-outline">This Month</button>
              </div>
            </div>
            
            <div className="stats-grid">
              <div className="stat-card highlight">
                <div className="stat-title">Today's Revenue</div>
                <div className="stat-value">${todayPayments.toFixed(2)}</div>
                <div className="stat-change">
                  <span>↑ 12% from yesterday</span>
                </div>
              </div>
              
              <div className="stat-card">
                <div className="stat-title">Completed Orders</div>
                <div className="stat-value">{orders.filter(o => o.status === 'Completed').length}</div>
                <div className="stat-change">
                  <span>↑ 8% from yesterday</span>
                </div>
              </div>
              
              <div className="stat-card">
                <div className="stat-title">Average Order Value</div>
                <div className="stat-value">${(todayPayments / todayOrders.length).toFixed(2)}</div>
                <div className="stat-change negative">
                  <span>↓ 5% from last week</span>
                </div>
              </div>
            </div>
            
            <div className="chart-card full-width">
              <h3>Monthly Sales Trend</h3>
              <img 
                src="https://placehold.co/1200x400?text=Sales+Trend+Chart" 
                alt="Monthly sales trend chart"
                className="chart-image" 
              />
            </div>
            
            <div className="table-container">
              <table className="sales-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Total Orders</th>
                    <th>Completed</th>
                    <th>Revenue</th>
                    <th>Avg. Order Value</th>
                  </tr>
                </thead>
                <tbody>
                  {weeklySales.map((day, index) => (
                    <tr key={index}>
                      <td>{day.day}</td>
                      <td>{day.orders}</td>
                      <td>{Math.floor(day.orders * 0.85)}</td>
                      <td>${day.sales}</td>
                      <td>${(day.sales / day.orders).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* Promotions */}
        {activeTab === 'offers' && (
          <>
            <div className="section-header">
              <h2 className="section-title">Promotion Management</h2>
              <button 
                className="btn btn-primary"
                onClick={() => {
                  setNewOffer({ name: '', discount: '', validUntil: '' });
                  document.getElementById('addOfferModal').showModal();
                }}
              >
                + Create Promotion
              </button>
            </div>
            
            <div className="promotions-grid">
              {offers.map(offer => (
                <div key={offer.id} className="promotion-card">
                  <div className="promotion-header">
                    <h3>{offer.name}</h3>
                    <div className="promotion-discount">{offer.discount}% OFF</div>
                  </div>
                  <div className="promotion-details">
                    <p>Valid until: {offer.validUntil}</p>
                    <div className="promotion-actions">
                      <button 
                        className="btn btn-outline"
                        onClick={() => {
                          setNewOffer(offer);
                          document.getElementById('editOfferModal').showModal();
                        }}
                      >
                        Edit
                      </button>
                      <button 
                        className="btn btn-danger"
                        onClick={() => handleRemoveOffer(offer.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Add Offer Modal */}
            <dialog id="addOfferModal" className="modal">
              <div className="modal-content">
                <h3>Create New Promotion</h3>
                <form onSubmit={handleAddOffer}>
                  <div className="form-group">
                    <label>Promotion Name</label>
                    <input
                      type="text"
                      value={newOffer.name}
                      onChange={(e) => setNewOffer({...newOffer, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Discount (%)</label>
                    <input
                      type="number"
                      min="1"
                      max="100"
                      value={newOffer.discount}
                      onChange={(e) => setNewOffer({...newOffer, discount: e.target.value})}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Valid Until</label>
                    <input
                      type="date"
                      value={newOffer.validUntil}
                      onChange={(e) => setNewOffer({...newOffer, validUntil: e.target.value})}
                      required
                    />
                  </div>
                  <div className="modal-actions">
                    <button 
                      type="button" 
                      className="btn btn-outline"
                      onClick={() => document.getElementById('addOfferModal').close()}
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">Create Promotion</button>
                  </div>
                </form>
              </div>
            </dialog>

            {/* Edit Offer Modal */}
            <dialog id="editOfferModal" className="modal">
              <div className="modal-content">
                <h3>Edit Promotion</h3>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  setOffers(offers.map(o => o.id === newOffer.id ? newOffer : o));
                  document.getElementById('editOfferModal').close();
                }}>
                  <div className="form-group">
                    <label>Promotion Name</label>
                    <input
                      type="text"
                      value={newOffer.name}
                      onChange={(e) => setNewOffer({...newOffer, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Discount (%)</label>
                    <input
                      type="number"
                      min="1"
                      max="100"
                      value={newOffer.discount}
                      onChange={(e) => setNewOffer({...newOffer, discount: e.target.value})}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Valid Until</label>
                    <input
                      type="date"
                      value={newOffer.validUntil}
                      onChange={(e) => setNewOffer({...newOffer, validUntil: e.target.value})}
                      required
                    />
                  </div>
                  <div className="modal-actions">
                    <button 
                      type="button" 
                      className="btn btn-outline"
                      onClick={() => document.getElementById('editOfferModal').close()}
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">Save Changes</button>
                  </div>
                </form>
              </div>
            </dialog>
          </>
        )}

        {/* Out of Stock */}
        {activeTab === 'stockout' && (
          <>
            <div className="section-header">
              <h2 className="section-title">Out of Stock Items</h2>
              <div className="stock-toggles">
                <button className="btn btn-primary">Out of Stock ({stockoutItems.length})</button>
                <button className="btn btn-outline">Low Stock ({lowStockItems.length})</button>
              </div>
            </div>
            
            <div className="inventory-grid">
              {stockoutItems.length > 0 ? (
                stockoutItems.map(stock => (
                  <div key={stock.id} className="inventory-card out-of-stock">
                    <div className="inventory-image-container">
                      <img src={stock.image} alt={stock.name} className="inventory-image" />
                      <div className="inventory-quantity">0 in stock</div>
                    </div>
                    <div className="inventory-details">
                      <h3>{stock.name}</h3>
                      <p>{stock.category}</p>
                      <div className="inventory-price">${stock.price.toFixed(2)}</div>
                      <div className="inventory-actions">
                        <button 
                          className="btn btn-primary"
                          onClick={() => handleRestock(stock.id)}
                        >
                          Restock
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="empty-state">
                  <img src="https://placehold.co/300x200?text=No+Items+Out+of+Stock" alt="No items out of stock" />
                  <h3>All items are currently in stock!</h3>
                  <p>You have no items marked as out of stock at this time.</p>
                </div>
              )}
            </div>
          </>
        )}

        {/* Profile */}
        {activeTab === 'profile' && (
          <div className="profile-container">
            <div className="profile-header">
              <img src={profile.avatar} alt="Profile" className="profile-avatar-large" />
              <h2>{profile.name}</h2>
              <p>{profile.position}</p>
            </div>
            
            <form onSubmit={handleProfileUpdate} className="profile-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    value={profile.name}
                    onChange={(e) => setProfile({...profile, name: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({...profile, email: e.target.value})}
                    required
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="tel"
                    value={profile.phone}
                    onChange={(e) => setProfile({...profile, phone: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Position</label>
                  <input
                    type="text"
                    value={profile.position}
                    onChange={(e) => setProfile({...profile, position: e.target.value})}
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label>Address</label>
                <textarea
                  value={profile.address}
                  onChange={(e) => setProfile({...profile, address: e.target.value})}
                  rows="3"
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Join Date</label>
                  <input
                    type="text"
                    value={profile.joinDate}
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label>Last Login</label>
                  <input
                    type="text"
                    value="2023-06-15 14:30"
                    readOnly
                  />
                </div>
              </div>
              
              <div className="form-actions">
                <button type="button" className="btn btn-outline">
                  Change Password
                </button>
                <button type="submit" className="btn btn-primary">
                  Update Profile
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Order Details Modal */}
        {showOrderDetails && selectedOrder && (
          <div className="modal-backdrop">
            <div className="modal-content">
              <h3>Order Details #{selectedOrder.id}</h3>
              <div className="order-details">
                <div className="detail-row">
                  <span className="detail-label">Customer:</span>
                  <span className="detail-value">{selectedOrder.customer}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Date/Time:</span>
                  <span className="detail-value">{selectedOrder.date} at {selectedOrder.time}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Status:</span>
                  <span className={`status-badge ${
                    selectedOrder.status === 'Completed' ? 'status-completed' : 
                    selectedOrder.status === 'Processing' ? 'status-processing' : 
                    'status-delivered'
                  }`}>
                    {selectedOrder.status}
                  </span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Items:</span>
                  <ul className="order-items-list">
                    {selectedOrder.items.map((item, index) => (
                      <li key={index} className="order-item-detail">
                        <img 
                          src={`https://placehold.co/40x40?text=${item.charAt(0)}`} 
                          alt={item}
                          className="order-item-image"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Total:</span>
                  <span className="detail-value">${selectedOrder.total.toFixed(2)}</span>
                </div>
              </div>
              <div className="modal-actions">
                <button 
                  className="btn btn-primary"
                  onClick={handleCloseOrderDetails}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default StaffDashboard;
