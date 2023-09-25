// Home.js

import React from 'react';
import '../assets/css/Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <header className="header">
        <div className="logo">
          <h1>D2H Bookstore</h1>
        </div>
        <nav className="nav">
          <ul>
            <li><Link to="/Dashboard">Dashboard</Link></li>
            <li><Link to="/ProfilePage">Profile</Link></li>
            <li><Link to="/CartPage">Cart</Link></li>
            <li><Link to="/settings">Settings</Link></li>
            <li><Link to="/Help">Help</Link></li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <div className="search-bar">
          <input placeholder="Search Books" className="search-input" type="text" />
          <button className="search-button">Search</button>
        </div>
        <div className="section-container">
          <section className="section">
            <div className="section-header">
              <img src="https://m.media-amazon.com/images/I/41Z2MlnVAwL.jpg" alt="Recommended Books" />
              <h2><Link to="/recommended">Recommended Books</Link></h2>
            </div>
           
          </section>
          <section className="section">
            <div className="section-header">
              <img src="https://www.publishersweekly.com/images/data/ARTICLE_PHOTO/photo/000/068/68848-1.JPG" alt="Top Sellers" />
              <h2><Link to="/topsellers">Top Sellers</Link></h2>
            </div>
           
          </section>
        </div>
        <div className="section-container">
          <section className="section">
            <div className="section-header">
              <img src="https://images.crowdspring.com/blog/wp-content/uploads/2018/09/27130903/rsz_hidden_treasure_smarikaahuja.png" alt="New Collection" />
              <h2><Link to="/newcollection">New Collection</Link></h2>
            </div>
           
          </section>
          <section className="section">
            <div className="section-header">
              <img src="https://th.bing.com/th/id/OIP.jQ1rMVZ7C2xX5cCAnLnlgQAAAA?pid=ImgDet&rs=1" alt="New Release" />
              <h2><Link to="/newrelease">New Release</Link></h2>
            </div>
           
          </section>
        </div>
        <div className="section-container">
          <section className="section">
            <div className="section-header">
              <img src="https://miblart.com/wp-content/uploads/2020/10/6tZyPWlI-683x1024.jpeg" alt="Top Author" />
              <h2><Link to="/topauthor">Top Author</Link></h2>
            </div>
            
          </section>
          <section className="section">
            <div className="section-header">
              <img src="https://4.bp.blogspot.com/-ayh32CF1HrY/UCt4sQzqBqI/AAAAAAAAAB0/iseG9EYmXp8/s1600/cover2.jpg" alt="Liked Books" />
              <h2><Link to="/likedbooks">Liked Books</Link></h2>
            </div>
            
          </section>
        </div>
      </main>

      <footer className="footer">
        <ul>
          <li><Link to="/terms">Terms and Conditions</Link></li>
          <li><Link to="/privacy">Privacy Policy</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/Contact us">Contact Us</Link></li>
        </ul>
      </footer>
    </div>
  );
}

export default Home;
