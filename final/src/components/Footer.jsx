import React from "react";
import "./Footer.css";
import crateAndBarrelLogo from "../assets/CrateandBarrel.png";
import crateAndKidsLogo from "../assets/CrateAndKids.png";
import CB2Logo from "../assets/CB2.png";
import hudsonLogo from "../assets/hudson.png";
import { CiMobile2 } from "react-icons/ci";
import { PiCubeThin } from "react-icons/pi";
import { HiOutlineChatBubbleLeftEllipsis } from "react-icons/hi2";
import { SlCreditCard } from "react-icons/sl";


import {
  FaYoutube,
  FaPinterestP,
  FaInstagram,
  FaFacebookF,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <div className="icon-text">
            <PiCubeThin size={40} />
            <h5>Orders</h5>
          </div>
          <p>Find out when your purchase will arrive or schedule a delivery.</p>
          <div className="links side-by-side">
            <a href="#">Track Order</a>
            <a href="#">Schedule Delivery</a>
          </div>
        </div>
        <div className="footer-section">
          <div className="icon-text">
            <HiOutlineChatBubbleLeftEllipsis size={45} />
            <h5>Contact Us & Store Locator</h5>
          </div>
          <p>
            Questions? Text us:{" "}
            <span style={{ textDecoration: "underline" }}>(312) 779-1979</span>
          </p>
          <div className="links side-by-side">
            <a href="#">Chat With Us</a>
            <a href="#">Leave Feedback</a>
            <a href="#">Find a Store</a>
          </div>
        </div>
        <div className="footer-section">
          <div className="icon-text">
            <SlCreditCard size={40} />
            <h5>Crate & Barrel Credit Card</h5>
          </div>
          <p>
            Earn Reward Dollars every time you shop* (excluding special
            financing purchases), plus get access to special offers and events.
          </p>
          <div className="links side-by-side">
            <a href="#">Apply Now</a>
            <a href="#">Manage Your Account</a>
          </div>
        </div>
        <div className="footer-section">
          <div className="icon-text">
            <CiMobile2 size={45} />
            <h5>Our iOS App</h5>
          </div>
          <p>
            Shop exclusive first looks, get personalized alerts and manage your
            registry faster and easier than ever before.
          </p>
          <a href="#">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
            />
          </a>
        </div>
      </div>
      <div className="footer-middle">
        <div className="footer-section">
          <h5>Help</h5>
          <a href="https://www.crateandbarrel.com/customer-service/">
            Customer Service
          </a>
          <a href="#">Account</a>
          <a href="#">Return Policy</a>
          <a href="#">Shipping Information</a>
          <a href="#">Product Recalls</a>
          <a href="#">Email & Text Preferences</a>
        </div>
        <div className="footer-section">
          <h5>Resources</h5>
          <a href="#">Free Design Services</a>
          <a href="#">Wedding Registry</a>
          <a href="#">Baby Registry</a>
          <a href="#">Gift Cards</a>
          <a href="#">Catalogs</a>
          <a href="#">Trade Program</a>
          <a href="#">Contract Grade Furniture</a>
        </div>
        <div className="footer-section">
          <h5>Our Company</h5>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Responsible Design</a>
          <a href="#">Accessibility Statement</a>
        </div>
        <div className="footer-section" id="social">
          <h5>Show us your look with:</h5>
          <div className="links side-by-side">
            <a href="#">#CrateStyle</a>
            <a href="#">#CrateKidsStyle</a>
          </div>
          <div className="social-media">
            <a href="https://www.instagram.com/crateandbarrel/">
              <FaInstagram size={24} color="black" />
            </a>
            <a href="#">
              <FaTiktok size={24} color="black" />
            </a>
            <a href="https://in.pinterest.com/crateandbarrel/">
              <FaPinterestP size={24} color="black" />
            </a>
            <a href="https://www.youtube.com/crateandbarrel">
              <FaYoutube size={24} color="black" />
            </a>
            <a href="https://www.facebook.com/crateandbarrel">
              <FaFacebookF size={24} color="black" />
            </a>
          </div>
          <h5>Our Brands</h5>
          <div className="footer-brands">
            <a href="#">
              <img
                src={crateAndBarrelLogo}
                id="cb"
                alt="Crate and Barrel Logo"
              />
            </a>
            <a href="#">
              <img src={crateAndKidsLogo} id="ck" alt="Crate and Kids Logo" />
            </a>
          </div>
          <div className="footer-brands">
            <a href="#">
              <img src={CB2Logo} id="cb2" alt="CB2 Logo" />
            </a>
            <a href="#">
              <img src={hudsonLogo} id="hud" alt="Hudson Logo" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-legal">
        <a href="#">Terms of Use</a>
        <a href="#">Privacy</a>
        <a href="#">Site Index</a>
        <a href="#">Ad Choices</a>
        <a href="#">Cookie Settings</a>
        <a href="#">CA Supply Chains Act</a>
        <a href="#">Do Not Sell or Share My Personal Information</a>
        <a href="#">*Credit Card Terms</a>
      </div>
      <div className="footer-copyright">
        <p>
          ©2024 All rights reserved. If you are using a screen reader and are
          having problems using this website, please call (800) 967-6696 for
          assistance.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
