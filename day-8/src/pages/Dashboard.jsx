import React from 'react';
import '../assets/css/Dashboard.css';
import store from '../Redux/Store';
import { useNavigate } from 'react-router-dom';

function UserDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="user-dashboard-container">
      <header className="user-dashboard-header">
        <div className="user-info">
          <img
            src="https://cdn2.vectorstock.com/i/1000x1000/17/61/male-avatar-profile-picture-vector-10211761.jpg"
            alt="User Avatar"
            className="user-avatar"
          />
          <div className="user-details">
            <h1 className="welcome-text">Welcome, {store.getState().email}</h1>
            <p>Email: {store.getState().email}@example.com</p>
          </div>
        </div>

        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </header>

      <main className="user-dashboard-content">
        <section className="dashboard-section orders">
          <h2>Your Orders</h2>
          <div className="order-list">
            <div className="order-item">
              <p>Order 1</p>
              <p>Date: 2023-09-30</p>
              <p>Total: Rs;550.00</p>
              <button className="order-details-button">View Details</button>
            </div>
            <div className="order-item">
              <p>Order 2</p>
              <p>Date: 2023-09-28</p>
              <p>Total: Rs:650.00</p>
              <button className="order-details-button">View Details</button>
            </div>
          </div>
        </section>

        <section className="dashboard-section account-details">
          <h2>Account Details</h2>
          <div className="account-info">
            <p>Phone: +91 (97-------78)</p>
            <p>Address: 123 Main St, City, state ,country</p>
            <button className="edit-account-button">Edit Account</button>
          </div>
        </section>

        <section className="dashboard-section payment-details">
          <h2>Payment Details</h2>
          <div className="payment-info">
            <p>Card Type: Visa</p>
            <p>Card Number: **** **** **** 1234</p>
            <p>Expiry Date: 12/26</p>
            <button className="edit-payment-button">Edit Payment</button>
          </div>
        </section>
      </main>

      <section className="dashboard-section recommended-books">
        <h2>Recommended Books</h2>
        <div className="book-list">
          <div className="book-item">
            <img
              src="https://www.99booksstore.com/uploaded_files/product/341130488.webp"
              alt="Book 1"
              className="book-cover"
            />
            <p>BLUE LOCK</p>
            <p>Author: ittadori</p>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
          <div className="book-item">
            <img
              src="https://i0.wp.com/www.lacasadeel.net/wp-content/uploads/2023/06/d5rjeiz3d2g11-1.jpg?resize=608%2C790"
              alt="Book 2"
              className="book-cover"
            />
            <p>Demon Slayer</p>
            <p>Author: Koyogaru</p>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
          <div className="book-item">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/3/3f/Bleach_%28manga%29_1.png"
              alt="Book 3"
              className="book-cover"
            />
            <p>bleach</p>
            <p>Author: takamoto </p>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        </div>
      </section>

      <section className="dashboard-section recent-reviews">
        <h2>Trending</h2>
        <div className="review-list">
          <div className="review-item">
            <img
              src="https://www.animenewsnetwork.com/images/encyc/A17059-1943858730.1506587165.jpg"
              alt="Book 1"
              className="book-cover"
            />
            <p>Who Says You Can't? You Do</p>
            <p>About: 
              an small boy who came from the village and become the strongest of all
            </p>
          </div>
          <div className="review-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrFKUZWwTNRK-gySo8hhBhZxe00iTrWKueE4GjnqmiQp3Cw2_aslW8NzX0q-1ydCJ4S0A&usqp=CAU"
              alt="Book 2"
              className="book-cover"
            />
            <h4>Start With Why</h4>
            <p>About: an school life of a small girl</p>
          </div>
          <div className="review-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROEpSUjJIWs_MdR03cAfao5ynFne4snVbw1jTOZEzpwePixXyLa_DNEqespeKlsL6wedA&usqp=CAU"
              alt="Book 3"
              className="book-cover"
            />
            <h4>Man's Scarch For Meaning</h4>
            <p><b>About:</b> an amazing story both of them don't like each other and after some time they fell in love </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UserDashboard;