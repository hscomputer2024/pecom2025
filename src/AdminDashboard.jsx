import React, { useState, useEffect } from 'react';

// Sample data for demonstration
const generateSampleData = () => {
  const foodItems = [
    { id: 1, name: 'Pizza Margherita', price: 12.99, category: 'Italian', stock: 42 },
    { id: 2, name: 'Chicken Burger', price: 8.99, category: 'Fast Food', stock: 35 },
    { id: 3, name: 'Caesar Salad', price: 9.99, category: 'Salads', stock: 28 },
    { id: 4, name: 'Sushi Platter', price: 18.99, category: 'Japanese', stock: 15 },
    { id: 5, name: 'Chocolate Cake', price: 6.99, category: 'Desserts', stock: 20 },
  ];

  const staffMembers = [
    { id: 1, name: 'John Smith', role: 'Manager', salary: 4500, joinedDate: '2022-01-15' },
    { id: 2, name: 'Sarah Johnson', role: 'Chef', salary: 3800, joinedDate: '2022-03-10' },
    { id: 3, name: 'Michael Brown', role: 'Delivery', salary: 3200, joinedDate: '2022-05-22' },
    { id: 4, name: 'Emily Davis', role: 'Cashier', salary: 2900, joinedDate: '2022-07-30' },
  ];

  const today = new Date();
  const currentMonth = today.getMonth();
  const lastMonth = currentMonth === 0 ? 11 : currentMonth - 1;

  const orders = [];
  let todayPayments = 0;
  
  const salesData = [];
  
  // Generate sample sales data for current and last month
  for (let i = 0; i < 15; i++) {
    const daysAgo = Math.floor(Math.random() * 45) + 15; // Date between 15 and 60 days ago
    const saleDate = new Date();
    saleDate.setDate(today.getDate() - daysAgo);
    
    if (saleDate.getMonth() === currentMonth || saleDate.getMonth() === lastMonth) {
      const item = foodItems[Math.floor(Math.random() * foodItems.length)];
      const quantity = Math.floor(Math.random() * 3) + 1;
      const total = (item.price * quantity).toFixed(2);
      
      salesData.push({
        id: i + 1,
        date: saleDate.toISOString().split('T')[0],
        customer: `Customer ${i+1}`,
        items: [{...item, quantity}],
        total,
        paymentMethod: ['Cash', 'Credit Card', 'Online'][Math.floor(Math.random() * 3)]
      });

      if (saleDate.toDateString() === today.toDateString()) {
        todayPayments += parseFloat(total);
      }
    }
  }

  return { foodItems, staffMembers, salesData, todayPayments };
};

const AdminDashboard = () => {
  const [stocks, setStocks] = useState([]);
  const [staff, setStaff] = useState([]);
  const [sales, setSales] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]);
  const [todayPayments, setTodayPayments] = useState(0);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [newItem, setNewItem] = useState({ name: '', price: '', category: '', stock: '' });
  const [newStaff, setNewStaff] = useState({ name: '', role: '', salary: '' });
  const [offers, setOffers] = useState([]);
  const [newOffer, setNewOffer] = useState({ title: '', discount: '', validUntil: '' });
  const [stockOutItems, setStockOutItems] = useState([]);

  useEffect(() => {
    const { foodItems, staffMembers, salesData, todayPayments } = generateSampleData();
    setStocks(foodItems);
    setStaff(staffMembers);
    setSales(salesData);
    setTodayPayments(todayPayments);
    setOrderHistory(salesData.slice(0, 5));
    setStockOutItems(foodItems.filter(item => item.stock <= 5));
  }, []);

  const handleAddStock = (e) => {
    e.preventDefault();
    if (newItem.name && newItem.price && newItem.category && newItem.stock) {
      const item = {
        id: Date.now(),
        ...newItem,
        stock: parseInt(newItem.stock)
      };
      setStocks([...stocks, item]);
      setNewItem({ name: '', price: '', category: '', stock: '' });
    }
  };

  const handleRemoveStock = (id) => {
    setStocks(stocks.filter(item => item.id !== id));
  };

  const handleAddStaff = (e) => {
    e.preventDefault();
    if (newStaff.name && newStaff.role && newStaff.salary) {
      const staffMember = {
        id: Date.now(),
        ...newStaff,
        joinedDate: new Date().toISOString().split('T')[0],
        salary: parseFloat(newStaff.salary)
      };
      setStaff([...staff, staffMember]);
      setNewStaff({ name: '', role: '', salary: '' });
    }
  };

  const handleRemoveStaff = (id) => {
    setStaff(staff.filter(member => member.id !== id));
  };

  const handleAddOffer = (e) => {
    e.preventDefault();
    if (newOffer.title && newOffer.discount && newOffer.validUntil) {
      const offer = {
        id: Date.now(),
        ...newOffer,
        discount: parseFloat(newOffer.discount)
      };
      setOffers([...offers, offer]);
      setNewOffer({ title: '', discount: '', validUntil: '' });
    }
  };

  const getMonthlySales = () => {
    const monthlySales = {};
    sales.forEach(sale => {
      const date = new Date(sale.date);
      const monthYear = `${date.getMonth() + 1}/${date.getFullYear()}`;
      if (!monthlySales[monthYear]) {
        monthlySales[monthYear] = 0;
      }
      monthlySales[monthYear] += parseFloat(sale.total);
    });
    return monthlySales;
  };

  const monthlySales = getMonthlySales();
  const monthlySalesByItem = {};
  stocks.forEach(item => {
    monthlySalesByItem[item.name] = 0;
  });
  sales.forEach(sale => {
    sale.items.forEach(item => {
      monthlySalesByItem[stocks.find(stock => stock.id === item.id)?.name] += 
        parseFloat(sale.total) * item.quantity;
    });
  });

  return (
    <div className="admin-dashboard">
      <header className="dashboard-header">
        <div className="header-left">
          <h1>FoodExpress Admin</h1>
          <p>Admin Dashboard</p>
        </div>
        <div className="header-right">
          <div className="status-indicator online"></div>
          <span>Online</span>
          <div className="admin-profile">
            <div className="profile-icon">
              <span>AD</span>
            </div>
          </div>
        </div>
      </header>

      <div className="dashboard-container">
        <nav className="sidebar">
          <ul>
            <li className={activeTab === 'dashboard' ? 'active' : ''} onClick={() => setActiveTab('dashboard')}>
              <i className="fas fa-tachometer-alt"></i> Dashboard
            </li>
            <li className={activeTab === 'stocks' ? 'active' : ''} onClick={() => setActiveTab('stocks')}>
              <i className="fas fa-boxes"></i> Inventory
            </li>
            <li className={activeTab === 'orders' ? 'active' : ''} onClick={() => setActiveTab('orders')}>
              <i className="fas fa-clipboard-list"></i> Orders
            </li>
            <li className={activeTab === 'sales' ? 'active' : ''} onClick={() => setActiveTab('sales')}>
              <i className="fas fa-chart-line"></i> Sales Analytics
            </li>
            <li className={activeTab === 'staff' ? 'active' : ''} onClick={() => setActiveTab('staff')}>
              <i className="fas fa-users"></i> Staff Management
            </li>
            <li className={activeTab === 'offers' ? 'active' : ''} onClick={() => setActiveTab('offers')}>
              <i className="fas fa-tag"></i> Promotions
            </li>
          </ul>
        </nav>

        <main className="main-content">
          {activeTab === 'dashboard' && (
            <div className="dashboard-overview">
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-header">
                    <h3>Today's Revenue</h3>
                    <i className="fas fa-money-bill-wave"></i>
                  </div>
                  <div className="stat-value">${todayPayments.toFixed(2)}</div>
                  <div className="stat-change positive">
                    <i className="fas fa-arrow-up"></i> 12% from yesterday
                  </div>
                </div>

                <div className="stat-card">
                  <div className="stat-header">
                    <h3>Orders Today</h3>
                    <i className="fas fa-clipboard"></i>
                  </div>
                  <div className="stat-value">{sales.filter(sale => new Date(sale.date).toDateString() === new Date().toDateString()).length}</div>
                  <div className="stat-change negative">
                    <i className="fas fa-arrow-down"></i> 5% from yesterday
                  </div>
                </div>

                <div className="stat-card">
                  <div className="stat-header">
                    <h3>Staff Members</h3>
                    <i className="fas fa-users"></i>
                  </div>
                  <div className="stat-value">{staff.length}</div>
                  <div className="stat-change neutral">
                    <i className="fas fa-equals"></i> No change
                  </div>
                </div>

                <div className="stat-card">
                  <div className="stat-header">
                    <h3>Stock Alerts</h3>
                    <i className="fas fa-exclamation-triangle"></i>
                  </div>
                  <div className="stat-value">{stocks.filter(item => item.stock <= 5).length}</div>
                  <div className="stat-change positive">
                    <i className="fas fa-sync"></i> Need restock
                  </div>
                </div>
              </div>

              <div className="data-grid">
                <div className="recent-orders">
                  <h3>Recent Orders</h3>
                  <table>
                    <thead>
                      <tr>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Items</th>
                        <th>Total</th>
                        <th>Payment</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orderHistory.map(order => (
                        <tr key={order.id}>
                          <td>#{order.id}</td>
                          <td>{order.customer}</td>
                          <td>{order.items.map(item => item.name).join(', ')}</td>
                          <td>${order.total}</td>
                          <td>{order.paymentMethod}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="stock-alerts">
                  <h3>Low Stock Items</h3>
                  <ul>
                    {stockOutItems.map(item => (
                      <li key={item.id}>
                        <span className="item-name">{item.name}</span>
                        <span className="item-stock">{item.stock} left</span>
                        <button className="restock-btn">Order More</button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'stocks' && (
            <div className="inventory-management">
              <div className="card">
                <h2>Inventory Management</h2>
                <div className="inventory-actions">
                  <button className="add-btn" onClick={() => document.getElementById('add-item-modal').style.display = 'block'}>
                    <i className="fas fa-plus"></i> Add New Item
                  </button>
                </div>

                <div className="inventory-list">
                  <table>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Item Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stocks.map(item => (
                        <tr key={item.id}>
                          <td>#{item.id}</td>
                          <td>{item.name}</td>
                          <td>{item.category}</td>
                          <td>${item.price.toFixed(2)}</td>
                          <td className={item.stock <= 5 ? 'low-stock' : ''}>{item.stock}</td>
                          <td>
                            <button className="edit-btn">
                              <i className="fas fa-edit"></i>
                            </button>
                            <button className="delete-btn" onClick={() => handleRemoveStock(item.id)}>
                              <i className="fas fa-trash"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div id="add-item-modal" className="modal">
                <div className="modal-content">
                  <span className="close" onClick={() => document.getElementById('add-item-modal').style.display = 'none'}>&times;</span>
                  <h3>Add New Food Item</h3>
                  <form onSubmit={handleAddStock}>
                    <div className="form-group">
                      <label>Item Name</label>
                      <input 
                        type="text" 
                        value={newItem.name}
                        onChange={(e) => setNewItem({...newItem, name: e.target.value})}
                        required 
                      />
                    </div>
                    <div className="form-group">
                      <label>Category</label>
                      <input 
                        type="text" 
                        value={newItem.category}
                        onChange={(e) => setNewItem({...newItem, category: e.target.value})}
                        required 
                      />
                    </div>
                    <div className="form-group">
                      <label>Price ($)</label>
                      <input 
                        type="number" 
                        step="0.01" 
                        min="0"
                        value={newItem.price}
                        onChange={(e) => setNewItem({...newItem, price: e.target.value})}
                        required 
                      />
                    </div>
                    <div className="form-group">
                      <label>Stock Quantity</label>
                      <input 
                        type="number" 
                        min="0"
                        value={newItem.stock}
                        onChange={(e) => setNewItem({...newItem, stock: e.target.value})}
                        required 
                      />
                    </div>
                    <button type="submit" className="submit-btn">Add Item</button>
                  </form>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div className="order-management">
              <div className="card">
                <h2>Order Management</h2>
                
                <div className="filter-section">
                  <div className="filter-group">
                    <label>Filter by:</label>
                    <select>
                      <option>Today</option>
                      <option>This Week</option>
                      <option>This Month</option>
                      <option>All Time</option>
                    </select>
                  </div>
                  <div className="filter-group">
                    <label>Status:</label>
                    <select>
                      <option>All</option>
                      <option>Pending</option>
                      <option>Completed</option>
                      <option>Cancelled</option>
                    </select>
                  </div>
                  <button className="refresh-btn">
                    <i className="fas fa-sync-alt"></i> Refresh
                  </button>
                </div>

                <div className="order-list">
                  <table>
                    <thead>
                      <tr>
                        <th>Order ID</th>
                        <th>Date</th>
                        <th>Customer</th>
                        <th>Items</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sales.map(order => (
                        <tr key={order.id}>
                          <td>#{order.id}</td>
                          <td>{order.date}</td>
                          <td>{order.customer}</td>
                          <td>
                            {order.items.map(item => (
                              <div key={item.id}>
                                {item.name} (x{item.quantity})
                              </div>
                            ))}
                          </td>
                          <td>${order.total}</td>
                          <td>
                            <span className="status-badge completed">Completed</span>
                          </td>
                          <td>
                            <button className="view-btn">
                              <i className="fas fa-eye"></i> View
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'sales' && (
            <div className="sales-analytics">
              <div className="card">
                <h2>Sales Analytics</h2>
                
                <div className="time-period-selector">
                  <button className="active">Today</button>
                  <button>Week</button>
                  <button>Month</button>
                  <button>Year</button>
                  <button>Custom Range</button>
                </div>

                <div className="sales-stats">
                  <div className="stat-summary">
                    <div>
                      <h3>Total Sales</h3>
                      <p>$12,456.78</p>
                    </div>
                    <div>
                      <h3>Orders</h3>
                      <p>142</p>
                    </div>
                    <div>
                      <h3>Avg. Order Value</h3>
                      <p>$87.72</p>
                    </div>
                  </div>

                  <div className="sales-chart">
                    <div className="chart-placeholder">
                      <img src="https://placehold.co/800x400" alt="Bar chart showing monthly sales data with peaks in December and troughs in February" />
                    </div>
                  </div>
                </div>

                <div className="detailed-report">
                  <h3>Monthly Sales Report</h3>
                  <table>
                    <thead>
                      <tr>
                        <th>Month</th>
                        <th>Total Sales</th>
                        <th>Avg. Daily Sales</th>
                        <th>Growth</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(monthlySales).map(([monthYear, total]) => (
                        <tr key={monthYear}>
                          <td>{monthYear}</td>
                          <td>${total.toFixed(2)}</td>
                          <td>${(total / 30).toFixed(2)}</td>
                          <td>
                            <span className="growth positive">
                              <i className="fas fa-arrow-up"></i> 15%
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'staff' && (
            <div className="staff-management">
              <div className="card">
                <h2>Staff Management</h2>
                
                <div className="staff-actions">
                  <button className="add-btn" onClick={() => document.getElementById('add-staff-modal').style.display = 'block'}>
                    <i className="fas fa-plus"></i> Add New Staff
                  </button>
                </div>

                <div className="staff-list">
                  <table>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Joined Date</th>
                        <th>Salary</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {staff.map(member => (
                        <tr key={member.id}>
                          <td>#{member.id}</td>
                          <td>{member.name}</td>
                          <td>{member.role}</td>
                          <td>{member.joinedDate}</td>
                          <td>${member.salary.toFixed(2)}</td>
                          <td>
                            <button className="edit-btn">
                              <i className="fas fa-edit"></i>
                            </button>
                            <button className="delete-btn" onClick={() => handleRemoveStaff(member.id)}>
                              <i className="fas fa-trash"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div id="add-staff-modal" className="modal">
                <div className="modal-content">
                  <span className="close" onClick={() => document.getElementById('add-staff-modal').style.display = 'none'}>&times;</span>
                  <h3>Add New Staff Member</h3>
                  <form onSubmit={handleAddStaff}>
                    <div className="form-group">
                      <label>Full Name</label>
                      <input 
                        type="text" 
                        value={newStaff.name}
                        onChange={(e) => setNewStaff({...newStaff, name: e.target.value})}
                        required 
                      />
                    </div>
                    <div className="form-group">
                      <label>Role</label>
                      <select 
                        value={newStaff.role}
                        onChange={(e) => setNewStaff({...newStaff, role: e.target.value})}
                        required
                      >
                        <option value="">Select Role</option>
                        <option value="Manager">Manager</option>
                        <option value="Chef">Chef</option>
                        <option value="Cashier">Cashier</option>
                        <option value="Delivery">Delivery</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Salary ($/month)</label>
                      <input 
                        type="number" 
                        step="0.01" 
                        min="0"
                        value={newStaff.salary}
                        onChange={(e) => setNewStaff({...newStaff, salary: e.target.value})}
                        required 
                      />
                    </div>
                    <button type="submit" className="submit-btn">Add Staff</button>
                  </form>
                </div>
              </div>

              <div className="card">
                <h2>Staff Payments</h2>
                
                <div className="payment-list">
                  <table>
                    <thead>
                      <tr>
                        <th>Staff ID</th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Salary</th>
                        <th>Last Payment</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {staff.map(member => (
                        <tr key={`payment-${member.id}`}>
                          <td>#{member.id}</td>
                          <td>{member.name}</td>
                          <td>{member.role}</td>
                          <td>${member.salary.toFixed(2)}</td>
                          <td>{new Date().toISOString().split('T')[0]}</td>
                          <td>
                            <span className="status-badge pending">Pending</span>
                          </td>
                          <td>
                            <button className="pay-btn">
                              <i className="fas fa-money-check-alt"></i> Pay Now
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'offers' && (
            <div className="offer-management">
              <div className="card">
                <h2>Promotions & Offers</h2>
                
                <div className="offer-actions">
                  <button className="add-btn" onClick={() => document.getElementById('add-offer-modal').style.display = 'block'}>
                    <i className="fas fa-plus"></i> Create New Offer
                  </button>
                </div>

                <div className="offer-list">
                  <table>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Discount</th>
                        <th>Valid Until</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {offers.map(offer => (
                        <tr key={offer.id}>
                          <td>#{offer.id}</td>
                          <td>{offer.title}</td>
                          <td>{offer.discount}%</td>
                          <td>{offer.validUntil}</td>
                          <td>
                            <span className="status-badge active">Active</span>
                          </td>
                          <td>
                            <button className="edit-btn">
                              <i className="fas fa-edit"></i>
                            </button>
                            <button className="delete-btn">
                              <i className="fas fa-trash"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div id="add-offer-modal" className="modal">
                <div className="modal-content">
                  <span className="close" onClick={() => document.getElementById('add-offer-modal').style.display = 'none'}>&times;</span>
                  <h3>Create New Food Offer</h3>
                  <form onSubmit={handleAddOffer}>
                    <div className="form-group">
                      <label>Offer Title</label>
                      <input 
                        type="text" 
                        value={newOffer.title}
                        onChange={(e) => setNewOffer({...newOffer, title: e.target.value})}
                        required 
                      />
                    </div>
                    <div className="form-group">
                      <label>Discount %</label>
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
                    <div className="form-group">
                      <label>Applicable Items</label>
                      <select multiple>
                        {stocks.map(item => (
                          <option key={item.id} value={item.id}>{item.name}</option>
                        ))}
                      </select>
                    </div>
                    <button type="submit" className="submit-btn">Create Offer</button>
                  </form>
                </div>
              </div>

              <div className="card">
                <h2>Stock Out Alerts</h2>
                
                <div className="alerts-list">
                  {stockOutItems.map(item => (
                    <div key={`alert-${item.id}`} className="alert-item">
                      <div className="alert-details">
                        <h3>{item.name}</h3>
                        <p>Only {item.stock} left in stock!</p>
                        <p className="alert-time">Last updated: {new Date().toLocaleTimeString()}</p>
                      </div>
                      <div className="alert-actions">
                        <button className="restock-btn">
                          <i className="fas fa-undo"></i> Restock Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      <style jsx>{`
        /* Global Styles */
        * {
          box-sizing: border-box;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
          margin: 0;
          padding: 0;
          background-color: #f5f5f7;
        }
        
        .admin-dashboard {
          display: flex;
          flex-direction: column;
          height: 100vh;
        }
        
        /* Header Styles */
        .dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 20px;
          background-color: #2c3e50;
          color: white;
          height: 60px;
        }
        
        .header-left h1 {
          margin: 0;
          font-size: 1.7rem;
          font-weight: 500;
        }
        
        .header-left p {
          margin: 0;
          font-size: 0.8rem;
          opacity: 0.8;
        }
        
        .header-right {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        
        .status-indicator {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        
        .status-indicator.online {
          background-color: #2ecc71;
        }
        
        .admin-profile {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .profile-icon {
          width: 40px;
          height: 40px;
          background-color: #3498db;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          cursor: pointer;
        }
        
        /* Dashboard Container Layout */
        .dashboard-container {
          display: flex;
          flex: 1;
          overflow: hidden;
        }
        
        /* Sidebar Styles */
        .sidebar {
          width: 220px;
          background-color: white;
          padding: 20px 0;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          z-index: 10;
        }
        
        .sidebar ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .sidebar li {
          padding: 12px 20px;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .sidebar li:hover {
          background-color: #f5f5f7;
        }
        
        .sidebar li.active {
          background-color: #e3f2fd;
          color: #1976d2;
          border-left: 4px solid #1976d2;
        }
        
        .sidebar i {
          width: 20px;
          text-align: center;
        }
        
        /* Main Content Styles */
        .main-content {
          flex: 1;
          padding: 20px;
          overflow-y: auto;
          background-color: #f5f5f7;
        }
        
        /* Card Styles */
        .card {
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          padding: 20px;
          margin-bottom: 20px;
        }
        
        .card h2 {
          margin-top: 0;
          color: #2c3e50;
          font-size: 1.5rem;
          border-bottom: 1px solid #eee;
          padding-bottom: 15px;
        }
        
        /* Stats Grid */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 20px;
        }
        
        .stat-card {
          background-color: white;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
        }
        
        .stat-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
          color: #7f8c8d;
        }
        
        .stat-header i {
          font-size: 1.5rem;
        }
        
        .stat-value {
          font-size: 2rem;
          font-weight: bold;
          color: #2c3e50;
        }
        
        .stat-change {
          margin-top: 10px;
          font-size: 0.9rem;
        }
        
        .stat-change.positive {
          color: #27ae60;
        }
        
        .stat-change.negative {
          color: #e74c3c;
        }
        
        .stat-change.neutral {
          color: #7f8c8d;
        }
        
        /* Data Grid */
        .data-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        
        .recent-orders, .stock-alerts {
          background-color: white;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
        }
        
        .recent-orders h3, .stock-alerts h3 {
          margin-top: 0;
          color: #2c3e50;
          font-size: 1.2rem;
        }
        
        /* Table Styles */
        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 15px;
        }
        
        th {
          text-align: left;
          padding: 12px 15px;
          background-color: #f5f7fa;
          color: #2c3e50;
          font-weight: 500;
        }
        
        td {
          padding: 12px 15px;
          border-top: 1px solid #eee;
          color: #34495e;
        }
        
        .low-stock {
          color: #e74c3c;
          font-weight: bold;
        }
        
        /* Button Styles */
        button {
          cursor: pointer;
          border: none;
          padding: 8px 12px;
          border-radius: 4px;
          font-size: 0.9rem;
          transition: all 0.2s;
        }
        
        .add-btn {
          background-color: #3498db;
          color: white;
          padding: 10px 15px;
        }
        
        .add-btn:hover {
          background-color: #2980b9;
        }
        
        .edit-btn {
          background-color: #f39c12;
          color: white;
          margin-right: 5px;
        }
        
        .edit-btn:hover {
          background-color: #e67e22;
        }
        
        .delete-btn {
          background-color: #e74c3c;
          color: white;
        }
        
        .delete-btn:hover {
          background-color: #c0392b;
        }
        
        .restock-btn {
          background-color: #2ecc71;
          color: white;
          font-size: 0.8rem;
          padding: 5px 10px;
        }
        
        .restock-btn:hover {
          background-color: #27ae60;
        }
        
        /* Status Badges */
        .status-badge {
          display: inline-block;
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 500;
        }
        
        .status-badge.completed {
          background-color: #e8f5e9;
          color: #2e7d32;
        }
        
        .status-badge.pending {
          background-color: #fff8e1;
          color: #ff8f00;
        }
        
        .status-badge.active {
          background-color: #e3f2fd;
          color: #1976d2;
        }
        
        /* Form Styles */
        .form-group {
          margin-bottom: 15px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 5px;
          font-weight: 500;
        }
        
        .form-group input, 
        .form-group select {
          width: 100%;
          padding: 8px 12px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        
        .submit-btn {
          background-color: #3498db;
          color: white;
          padding: 10px 20px;
        }
        
        .submit-btn:hover {
          background-color: #2980b9;
        }
        
        /* Modal Styles */
        .modal {
          display: none;
          position: fixed;
          z-index: 100;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
        }
        
        .modal-content {
          background-color: white;
          margin: 5% auto;
          padding: 20px;
          border-radius: 8px;
          width: 450px;
          max-width: 90%;
        }
        
        .close {
          color: #aaa;
          float: right;
          font-size: 28px;
          font-weight: bold;
          cursor: pointer;
        }
        
        .close:hover {
          color: black;
        }
        
        /* Filter Section */
        .filter-section {
          display: flex;
          gap: 15px;
          margin-bottom: 15px;
          align-items: center;
        }
        
        .filter-group {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .filter-group select {
          padding: 5px 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        
        .refresh-btn {
          background-color: #e3f2fd;
          color: #1976d2;
          padding: 8px 15px;
        }
        
        .refresh-btn:hover {
          background-color: #bbdefb;
        }
        
        /* View Button */
        .view-btn {
          background-color: #e3f2fd;
          color: #1976d2;
          font-size: 0.8rem;
        }
        
        .view-btn:hover {
          background-color: #bbdefb;
        }
        
        /* Pay Button */
        .pay-btn {
          background-color: #e8f5e9;
          color: #2e7d32;
          font-size: 0.8rem;
        }
        
        .pay-btn:hover {
          background-color: #c8e6c9;
        }
        
        /* Time Period Selector */
        .time-period-selector {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
        }
        
        .time-period-selector button {
          background-color: #f5f5f5;
          color: #333;
          border: none;
          padding: 8px 15px;
          border-radius: 20px;
        }
        
        .time-period-selector button.active {
          background-color: #1976d2;
          color: white;
        }
        
        /* Stat Summary */
        .stat-summary {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 20px;
          text-align: center;
        }
        
        .stat-summary h3 {
          color: #7f8c8d;
          margin-bottom: 5px;
        }
        
        .stat-summary p {
          font-size: 1.5rem;
          font-weight: bold;
          color: #2c3e50;
          margin: 0;
        }
        
        /* Chart Placeholder */
        .chart-placeholder {
          background-color: #f9f9f9;
          height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          margin-bottom: 20px;
        }
        
        /* Growth Indicator */
        .growth {
          font-weight: 500;
        }
        
        .growth.positive {
          color: #27ae60;
        }
        
        .growth.negative {
          color: #e74c3c;
        }
        
        /* Alerts List */
        .alerts-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        
        .alert-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #fff8e1;
          padding: 15px;
          border-radius: 8px;
          border-left: 4px solid #ffc107;
        }
        
        .alert-item h3 {
          margin: 0 0 5px 0;
          color: #ff8f00;
        }
        
        .alert-item p {
          margin: 0;
          font-size: 0.9rem;
          color: #333;
        }
        
        .alert-time {
          font-size: 0.8rem;
          color: #7f8c8d;
        }
      `}</style>

      {/* Font Awesome for icons */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" 
      />
    </div>
  );
};

export default AdminDashboard;
