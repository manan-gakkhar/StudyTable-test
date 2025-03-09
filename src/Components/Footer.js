import React from "react";
import "../styles/Footer.css";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h2 className="brand-name">
          Study<span>table</span>
        </h2>
      </div>
      <div className="footer-center">
        <button className="notice-board">
          📌 <span>Notice Board</span>
        </button>
      </div>
      <div className="footer-right">
        <div className="socials">
          <h3>Socials</h3>
          <p>
            <span/> Instagram
          </p>
          <p>
            <span/> What’s App
          </p>
        </div>
        <div className="blogs">
          <h3>Blogs</h3>
          <p>How we plan learning session ?</p>
          <p>How we plan assessment session ?</p>
          <p>How we manage student life ?</p>
          <p>The effective student</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
