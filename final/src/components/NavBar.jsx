import React, { useState, useEffect, useContext } from 'react';
import { IoCart } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { MdPerson } from "react-icons/md";
import crateAndBarrelLogo from "../assets/Crate-Barrel-Logo.png";
import { GoSearch } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";


import { useNavigate, Link } from 'react-router-dom';
import { UserContext, CartContext } from './link.jsx';

import LoginModal from './LoginModal';

import "./NavBar.css";


const NavBar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [dropdownHovered, setDropdownHovered] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const { user, setUser } = useContext(UserContext);
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userId');
    setUser(null);
    navigate('/');
  };

  const handleMouseEnter = (dropdownName) => {
    setActiveDropdown(dropdownName);
    setDropdownHovered(true);
  };

  const handleMouseLeave = () => {
    setDropdownHovered(false);
  };

  useEffect(() => {
    if (!dropdownHovered) {
      const timeout = setTimeout(() => {
        setActiveDropdown(null);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [dropdownHovered]);

  const handleDropdownMouseEnter = () => {
    setDropdownHovered(true);
  };

  const handleDropdownMouseLeave = () => {
    setDropdownHovered(false);
  };

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <div className="container1">
      <div className="top-bar">
        <div className="search-bar">
          <input type="search" placeholder="What can we help you find?" />
          <div className="search-icon">
            <GoSearch size={25} />
          </div>
        </div>
        <Link to="/">
          <div className="logo">
            <img src={crateAndBarrelLogo} alt="Crate and Barrel Logo" />
          </div>
        </Link>
        <div className="nav-links">
          {user ? (
            <div className="orders-signin">

              <a href="#" className="nav-link" onClick={handleLogout}>Logout</a>
            </div>

          ) : (
            <div className="orders-signin">
              <a href="#" className="nav-link" onClick={openModal}>Orders</a>
              <span>&</span>
              <a href="#" className="nav-link" onClick={openModal}>Sign In</a>
            </div>
          )}
          <LoginModal isOpen={isModalOpen} onClose={closeModal} />
          <div className="icons">
            <a href="#" className="icon">
              <MdPerson size={30} />
            </a>
            <a href="#" className="icon">
              <FaLocationDot size={23} />
            </a>
            <a href="#" className="icon">
              <GoHeartFill size={23} />
            </a>
            <div className="icon" id='cart-icon' onClick={handleCartClick}>
              <IoCart size={25} />
              {cartItems.length >= 0 && (
                <span className="cart-count">
                  {cartItems.length}
                </span>
              )}
            </div>

          </div>
        </div>
      </div>
      <div className="bottom-bar">
        <div id="links" className='categories'>
          <div
            id="link"
            className="category-link"
            onMouseEnter={() => handleMouseEnter('new')}
            onMouseLeave={handleMouseLeave}
          >
            NEW!
          </div>
          <div
            id="link"
            className="category-link"
            onMouseEnter={() => handleMouseEnter('wedding')}
            onMouseLeave={handleMouseLeave}
          >
            WEDDING REGISTRY
          </div>
          <div
            id="link"
            className="category-link"
            onMouseEnter={() => handleMouseEnter('')}
            onMouseLeave={handleMouseLeave}
          >
            FREE DESIGN SERVICES
          </div>
          <div
            id="link"
            className="category-link"
            onMouseEnter={() => handleMouseEnter('')}
            onMouseLeave={handleMouseLeave}
          >
            TRADE PROGRAM
          </div>
          <div
            id="link"
            className="category-link"
            onMouseEnter={() => handleMouseEnter('')}
            onMouseLeave={handleMouseLeave}
          >
            THE DORM SHOP
          </div>
          <div
            id="link"
            className="category-link"
            onMouseEnter={() => handleMouseEnter('')}
            onMouseLeave={handleMouseLeave}
          >
            COLLABORATIONS
          </div>
          <div
            id="link"
            className="category-link"
            onMouseEnter={() => handleMouseEnter('')}
            onMouseLeave={handleMouseLeave}
          >
            BEST SELLERS
          </div>
          <div
            className={`dropdown ${activeDropdown === 'new' ? 'show' : ''}`}
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
          >
            <div className="dropdown-columns">
              <div className="column">
                <h3>New Arrivals</h3>
                <ul>
                  <li><a href="#">Sofas & Sectionals</a></li>
                  <li><a href="#">Dining Tables</a></li>
                  <li><a href="#">Wine Glasses</a></li>
                  <li><a href="#">Serveware</a></li>
                  <li><a href="#">Coffee & Espresso</a></li>
                  <li><a href="#">Pillows & Throws</a></li>
                  <li><a href="#">Duvet Covers</a></li>
                  <li><a href="#">Rugs</a></li>
                  <li><a href="#">Window</a></li>
                  <li><a href="#">Home Renovation</a></li>
                </ul>
              </div>
              <div className="column">
                <h3>Trending</h3>
                <ul>
                  <li><a href="#">Best Sellers</a></li>
                  <li><a href="#">New Arrivals</a></li>
                  <li><a href="#">Beauty in the Balance Fall Style</a></li>
                  <li><a href="#">Our Flagship Virtual Store</a></li>
                  <li><a href="#">The Personalization Shop</a></li>
                  <li><a href="#">Sustainable & Quality Design</a></li>
                  <li><a href="#">#CrateStyle</a></li>
                </ul>
              </div>
              <div className="column">
                <h3>Collabs</h3>
                <ul>
                  <li><a href="#">Laura Kim</a></li>
                  <li><a href="#">Leanne Ford</a></li>
                  <li><a href="#">Eric Adjepong</a></li>
                  <li><a href="#">Becki Owens</a></li>
                  <li><a href="#">Holly Blakey</a></li>
                  <li><a href="#">Emily Henderson</a></li>
                  <li><a href="#">Athena Calderone</a></li>
                  <li><a href="#">Jake Arnold</a></li>
                </ul>
              </div>
              <div className="column dropdown-image">
                <img src="https://m.media-amazon.com/images/I/71NkioK0ExL._AC_UF894,1000_QL80_.jpg" alt="Outdoor Furniture" />
                <h3>1600+ New Arrivals</h3>
              </div>
            </div>
          </div>
          <div
            className={`dropdown ${activeDropdown === 'wedding' ? 'show' : ''}`}
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
          >
            <div className="dropdown-columns">
              <div className="column">
                <h3>The Wedding Registry</h3>
                <ul>
                  <li><a href="#">Get Started</a></li>
                  <li><a href="#">Create a Registry</a></li>
                  <li><a href="#">Find a Registry</a></li>
                  <li><a href="#">Manage My Registry</a></li>
                </ul>

              </div>
              <div className="column">

                <h3>Tips & Advice</h3>
                <ul>
                  <li><a href="#">Most-Loved Gifts</a></li>
                  <li><a href="#">FREE Gifts & Perks</a></li>
                  <li><a href="#">Real Registries</a></li>
                  <li><a href="#">One-Click Registries</a></li>
                  <li><a href="#">Registry Checklist</a></li>
                  <li><a href="#">Find Your Tabletop Style</a></li>
                  <li><a href="#">Most Forgotten Registry Items</a></li>
                  <li><a href="#">Private Registry Events</a></li>
                  <li><a href="#">FREE Design Services</a></li>
                  <li><a href="#">Wedding Registry Guides</a></li>

                </ul>
              </div>
              <div className="column">
                <h3>Top Categories</h3>
                <ul>
                  <li><a href="#">Kitchen Appliances & Electrics</a></li>
                  <li><a href="#">Cookware</a></li>
                  <li><a href="#">Dinnerware</a></li>
                  <li><a href="#">Kitchen Tools & Accessories</a></li>
                  <li><a href="#">Flatware</a></li>
                  <li><a href="#">Cutlery</a></li>
                  <li><a href="#">Bakeware</a></li>
                  <li><a href="#">Serveware</a></li>
                  <li><a href="#">Drinkware & Bar Tools</a></li>
                  <li><a href="#">Bedding</a></li>
                  <li><a href="#">Bath</a></li>
                  <li><a href="#">Table Linens</a></li>
                  <li><a href="#">Furniture</a></li>
                  <li><a href="#">Shop All</a></li>
                </ul>
              </div>
              <div className="column">
                <h3>Top Brands</h3>
                <ul>
                  <li><a href="#">Le Creuset</a></li>
                  <li><a href="#">Kitchenaid</a></li>
                  <li><a href="#">Breville</a></li>
                  <li><a href="#">All-Clad</a></li>
                  <li><a href="#">Wusthof</a></li>
                  <li><a href="#">Kitchen by Crate</a></li>
                  <li><a href="#">Dyson</a></li>
                  <li><a href="#">Caraway</a></li>
                  <li><a href="#">Zwilling</a></li>
                </ul>
              </div>
              <div className="column dropdown-image">
                <img src="https://m.media-amazon.com/images/I/71NkioK0ExL._AC_UF894,1000_QL80_.jpg" alt="Outdoor Furniture" />
                <h3>Top Registry Gifts</h3>
              </div>
            </div>
          </div>

        </div>
        <div className="categories">
          <div
            className="category-link"
            // onMouseEnter={() => toggleDropdown('furniture')}
            // onMouseLeave={() => toggleDropdown(null)}
            onMouseEnter={() => handleMouseEnter('furniture')}
            onMouseLeave={handleMouseLeave}
          >
            Furniture
          </div>
          <div
            className="category-link"
            // onMouseEnter={() => toggleDropdown('outdoor')}
            // onMouseLeave={() => toggleDropdown(null)}
            onMouseEnter={() => handleMouseEnter('outdoor')}
            onMouseLeave={handleMouseLeave}
          >
            Outdoor
          </div>
          <div
            className="category-link"
            onMouseEnter={() => handleMouseEnter('tabletop')}
            onMouseLeave={handleMouseLeave}
          >
            Tabletop & Bar
          </div>
          <div
            className="category-link"
            onMouseEnter={() => handleMouseEnter('kitchen')}
            onMouseLeave={handleMouseLeave}
          >
            Kitchen
          </div>
          <div
            className="category-link"
            onMouseEnter={() => handleMouseEnter('bedding')}
            onMouseLeave={handleMouseLeave}
          >
            Bedding
          </div>
          <div
            className="category-link"
            onMouseEnter={() => handleMouseEnter('bath')}
            onMouseLeave={handleMouseLeave}
          >
            Bath
          </div>
          <div
            className="category-link"
            onMouseEnter={() => handleMouseEnter('decor')}
            onMouseLeave={handleMouseLeave}
          >
            Decor & Pillows
          </div>
          <div
            className="category-link"
            onMouseEnter={() => handleMouseEnter('rugs')}
            onMouseLeave={handleMouseLeave}
          >
            Rugs
          </div>
          <div
            className="category-link"
            onMouseEnter={() => handleMouseEnter('lighting')}
            onMouseLeave={handleMouseLeave}
          >
            Lighting
          </div>
          <div
            className="category-link"
            onMouseEnter={() => handleMouseEnter('window')}
            onMouseLeave={handleMouseLeave}
          >
            Window
          </div>
          <div
            className="category-link"
            onMouseEnter={() => handleMouseEnter('gifts')}
            onMouseLeave={handleMouseLeave}
          >
            Gifts
          </div>
          <div
            className="category-link"
            id='active'
            onMouseEnter={() => handleMouseEnter('sale')}
            onMouseLeave={handleMouseLeave}
          >
            SALE
          </div>
          {/* <div className={`dropdown ${activeDropdown === 'furniture' ? 'show' : ''}`}> */}
          {/* <div className={`dropdown ${activeDropdown === 'furniture' ? 'show' : ''}`} onMouseEnter={() => toggleDropdown('furniture')} onMouseLeave={() => toggleDropdown(null)}> */}
          <div
            className={`dropdown ${activeDropdown === 'furniture' ? 'show' : ''}`}
            // onMouseEnter={() => handleMouseEnter('furniture')}
            // onMouseLeave={handleMouseLeave}
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
          >
            <div className="dropdown-columns">
              <div className="column">
                <h3>Living Room Furniture</h3>
                <ul>
                  <li><a href="#">Sofa & Sectional Collections</a></li>
                  <li><a href="#">Sectional Sofas</a></li>
                  <li><a href="#">Sofas</a></li>
                  <li><a href="#">Accent Chairs</a></li>
                  <li><a href="#">Coffee & Accent Tables</a></li>
                  <li><a href="#">TV Stands & Media Consoles</a></li>
                  <li><a href="#">Sleeper Sofas</a></li>
                  <li><a href="#">Chaise Lounges & Daybeds</a></li>
                  <li><a href="#">Ottomans & Benches</a></li>
                  <li><a href="#">Leather Furniture</a></li>
                  <li><a href="#">Game Tables</a></li>
                </ul>
                <h3>Storage & Modular Furniture</h3>
                <ul>
                  <li><a href="#">Storage Cabinets</a></li>
                  <li><a href="#">TV Stands</a></li>
                  <li><a href="#">Bookcases & Shelves</a></li>
                  <li><a href="#">Bar Carts & Bar Cabinets</a></li>
                  <li><a href="#">Buffets & Sideboards</a></li>
                  <li><a href="#">Entertainment Centers</a></li>
                  <li><a href="#">Storage Benches & Ottomans</a></li>
                  <li><a href="#">Dressers & Chests</a></li>
                  <li><a href="#">Kitchen Islands</a></li>
                  <li><a href="#">Bathroom Vanities</a></li>
                  <li><a href="#">Floating Shelves</a></li>
                  <li><a href="#">Modular Storage Collections</a></li>
                </ul>
              </div>
              <div className="column">
                <h3>Dining Room & Kitchen Furniture</h3>
                <ul>
                  <li><a href="#">Dining Tables</a></li>
                  <li><a href="#">Dining Chairs</a></li>
                  <li><a href="#">Bar & Counter Stools</a></li>
                  <li><a href="#">Dining Benches & Banquettes</a></li>
                  <li><a href="#">Buffets & Sideboards</a></li>
                  <li><a href="#">Kitchen Islands</a></li>
                  <li><a href="#">Bar Carts & Bar Cabinets</a></li>
                </ul>
                <h3>Home Office Furniture</h3>
                <ul>
                  <li><a href="#">Desks</a></li>
                  <li><a href="#">Office Chairs</a></li>
                  <li><a href="#">Filing Cabinets & Credenzas</a></li>
                  <li><a href="#">Bookcases & Shelves</a></li>
                  <li><a href="#">Office Accessories</a></li>
                  <li><a href="#">Small Space Home Office</a></li>
                  <li><a href="#">Kids Desks & Desk Chairs</a></li>
                </ul>
              </div>
              <div className="column">
                <h3>Bedroom Furniture</h3>
                <ul>
                  <li><a href="#">Beds & Headboards</a></li>
                  <li><a href="#">Dressers & Chests</a></li>
                  <li><a href="#">Nightstands</a></li>
                  <li><a href="#">Bedroom Benches</a></li>
                  <li><a href="#">Mattresses & Box Springs</a></li>
                  <li><a href="#">Cribs & Bassinets</a></li>
                  <li><a href="#">Kids Beds</a></li>
                </ul>
                <h3>Entryway Furniture</h3>
                <ul>
                  <li><a href="#">Entryway Tables</a></li>
                  <li><a href="#">Chests & Cabinets</a></li>
                  <li><a href="#">Entryway Benches & Mudroom Storage</a></li>
                  <li><a href="#">Entryway Decor</a></li>
                </ul>
                <h3>Quick Ship & In-Stock Furniture</h3>
              </div>
              <div className="column">
                <h3>Buying Guides & Styling Ideas</h3>
                <ul>
                  <li><a href="#">Get Free Swatches</a></li>
                  <li><a href="#">Design Your Perfect Sectional</a></li>
                  <li><a href="#">How to Choose a Sofa</a></li>
                  <li><a href="#">Create Your Own Headboard</a></li>
                  <li><a href="#">How to Choose a Coffee Table</a></li>
                  <li><a href="#">How to Style a Sectional</a></li>
                </ul>
                <h3>New Furniture</h3>
              </div>
              <div className="column dropdown-image">
                <img src="https://m.media-amazon.com/images/I/71NkioK0ExL._AC_UF894,1000_QL80_.jpg" alt="Sofa" />
                <h3>Sofas as Fast as 7 Days</h3>
              </div>

            </div>


          </div>
          {/* </div> */}
          {/* <div
            className="category-link"
            onMouseEnter={() => toggleDropdown('outdoor')}
            onMouseLeave={() => toggleDropdown(null)}
          >
            Outdoor */}
          {/* <div className={`dropdown ${activeDropdown === 'outdoor' ? 'show' : ''}`}> */}
          <div className={`dropdown ${activeDropdown === 'outdoor' ? 'show' : ''}`}
            // onMouseEnter={() => toggleDropdown('outdoor')}
            // onMouseLeave={() => toggleDropdown(null)}>
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}>


            <div className="dropdown-columns">
              <div className="column">
                <h3>Up to 60% off Outdoor</h3>
                <h3>All Outdoor</h3>
                <h3>Outdoor Furniture Collections</h3>
                <h3>Outdoor Lounge Furniture</h3>
                <ul>
                  <li><a href="#">Outdoor Sofas</a></li>
                  <li><a href="#">Outdoor Sectionals</a></li>
                  <li><a href="#">Outdoor Lounge Chairs</a></li>
                  <li><a href="#">Outdoor Adirondack Chairs</a></li>
                  <li><a href="#">Outdoor Chaise Lounges</a></li>
                  <li><a href="#">Outdoor Coffee Tables</a></li>
                  <li><a href="#">Outdoor Side Tables</a></li>
                  <li><a href="#">Outdoor Ottomans</a></li>
                  <li><a href="#">Outdoor Patio Umbrellas</a></li>
                  <li><a href="#">Patio Furniture Covers</a></li>
                  <li><a href="#">Fire Pits & Tables</a></li>
                </ul>
              </div>
              <div className="column">
                <h3>Outdoor Dining & Kitchen Furniture</h3>
                <ul>
                  <li><a href="#">Outdoor Dining Tables</a></li>
                  <li><a href="#">Outdoor Dining Chairs</a></li>
                  <li><a href="#">Outdoor Dining Benches</a></li>
                  <li><a href="#">Outdoor Counter Stools</a></li>
                  <li><a href="#">Outdoor Kitchen Furniture</a></li>
                  <li><a href="#">Patio Umbrellas</a></li>
                  <li><a href="#">Outdoor Furniture Sets</a></li>
                  <li><a href="#">Patio Furniture Covers</a></li>
                </ul>
                <h3>Outdoor Kitchen & Entertaining</h3>
                <ul>
                  <li><a href="#">Shop All</a></li>
                  <li><a href="#">Barbecue & Grilling</a></li>
                  <li><a href="#">Pizza Tools & Ovens</a></li>
                  <li><a href="#">Melamine Dinnerware</a></li>
                  <li><a href="#">Acrylic Drinkware</a></li>
                  <li><a href="#">Outdoor Serveware</a></li>
                  <li><a href="#">Outdoor Placemats</a></li>
                  <li><a href="#">Beverage Tubs</a></li>
                  <li><a href="#">Outdoor Cookware & Gadgets</a></li>
                  <li><a href="#">Picnic Accessories & Coolers</a></li>
                </ul>
              </div>
              <div className="column">
                <h3>Outdoor Decor</h3>
                <ul>
                  <li><a href="#">All Outdoor Decor</a></li>
                  <li><a href="#">Outdoor Planters</a></li>
                  <li><a href="#">Lanterns & Lighting</a></li>
                  <li><a href="#">Fire Pits & Tables</a></li>
                  <li><a href="#">Pillows</a></li>
                  <li><a href="#">Rugs</a></li>
                  <li><a href="#">Citronella Candles</a></li>
                  <li><a href="#">Outdoor Games</a></li>
                  <li><a href="#">Address Numbers & Mailboxes</a></li>
                </ul>
                <h3>Patio Umbrellas</h3>
                <h3>Buying Guides & Styling Ideas</h3>
                <ul>
                  <li><a href="#">Outdoor Patio Decorating Ideas</a></li>
                  <li><a href="#">Rooftop Patio Makeover by The Design Desk</a></li>
                  <li><a href="#">Cali-Modern Paradise by The Design Desk</a></li>
                  <li><a href="#">The Definitive Backyard Fire Pit Guide</a></li>
                  <li><a href="#">Outdoor Furniture Care Guide</a></li>
                </ul>
              </div>

              <div className="column">
                <h3>Quick Ship & In-Stock Outdoor Furniture</h3>
                <h3>New Outdoor Living</h3>
              </div>
              <div className="column dropdown-image">
                <img src="https://m.media-amazon.com/images/I/71NkioK0ExL._AC_UF894,1000_QL80_.jpg" alt="Outdoor Furniture" />
                <h3>Built for Outdoor Living</h3>
                <ul>
                  <li><a href="#">Outdoor Redesign by The Design Desk</a></li>
                  <li><a href="#">Outdoor Furniture Care Guide</a></li>
                  <li><a href="#">FSC-Certified Furniture</a></li>
                  <li><a href="#">Sunbrella Outdoor Furniture</a></li>
                </ul>
              </div>

            </div>


          </div>
          {/* </div> */}
          <div
            className={`dropdown ${activeDropdown === 'tabletop' ? 'show' : ''}`}
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
          >
            <div className="dropdown-columns">
              <div className="column">
                <h3>Up to 35% off Entertaining</h3>
                <h3>Dinnerware</h3>
                <ul>
                  <li><a href="#">Dinnerware Sets</a></li>
                  <li><a href="#">Dinner Plates</a></li>
                  <li><a href="#">Pasta & Cereal Bowls</a></li>
                  <li><a href="#">Salad Plates</a></li>
                  <li><a href="#">Melamine Dinnerware</a></li>
                  <li><a href="#">Appetizer & Dessert Plates</a></li>
                  <li><a href="#">Charger Plates & Server Plates</a></li>
                </ul>
                <h3>Serveware</h3>
                <ul>
                  <li><a href="#">Serveware Collections</a></li>
                  <li><a href="#">Serving Bowls & Baskets</a></li>
                  <li><a href="#">Cheese Boards & Knives</a></li>
                  <li><a href="#">Serving Platters & Trays</a></li>
                  <li><a href="#">Appetizer Serveware</a></li>
                  <li><a href="#">Cake Plates & Stands</a></li>
                  <li><a href="#">Serving Utensils</a></li>
                </ul>
              </div>
              <div className="column">
                <h3>Drinkware & Bar Tools</h3>
                <ul>
                  <li><a href="#">Wine Glasses</a></li>
                  <li><a href="#">Champagne Flutes</a></li>
                  <li><a href="#">Drinking Glasses</a></li>
                  <li><a href="#">Cocktail Glasses</a></li>
                  <li><a href="#">Decanters & Carafes</a></li>
                  <li><a href="#">Beverage Serveware</a></li>
                  <li><a href="#">Bar Tools & Accessories</a></li>
                  <li><a href="#">Coffee Mugs & Tea Cups</a></li>
                  <li><a href="#">Acrylic Glasses</a></li>
                  <li><a href="#">Water Bottles</a></li>
                  <li><a href="#">Refrigerators, Wine & Beer Fridges</a></li>
                  <li><a href="#">Drinkware Collections</a></li>
                </ul>
                <h3>Flatware</h3>
                <ul>
                  <li><a href="#">Flatware Sets</a></li>
                  <li><a href="#">Flatware Organizers</a></li>
                  <li><a href="#">Open Stock Flatware</a></li>
                  <li><a href="#">Flatware Serveware</a></li>
                </ul>
              </div>
              <div className="column">
                <h3>Table Linens</h3>
                <ul>
                  <li><a href="#">Napkins</a></li>
                  <li><a href="#">Placemats</a></li>
                  <li><a href="#">Table Runners</a></li>
                  <li><a href="#">Tablecloths</a></li>
                  <li><a href="#">Napkin Rings & Place Card Holders</a></li>
                  <li><a href="#">Table Linens by Color</a></li>
                </ul>
                <h3>Outdoor Entertaining</h3>
                <ul>
                  <li><a href="#">Melamine Dinnerware</a></li>
                  <li><a href="#">Acrylic Drinkware</a></li>
                  <li><a href="#">Outdoor Serveware</a></li>
                  <li><a href="#">Outdoor Placemats</a></li>
                  <li><a href="#">Beverage Tubs</a></li>
                </ul>
              </div>
              <div className="column">
                <h3>Popular Entertaining Collections</h3>
                <ul>
                  <li><a href="#">Marin Artisanal Tabletop Collection</a></li>
                  <li><a href="#">Aspen Tabletop Collection</a></li>
                  <li><a href="#">Mercer Tabletop Collection</a></li>
                  <li><a href="#">Tour Tabletop Collection</a></li>
                  <li><a href="#">Craft Minimalist Tabletop Collection</a></li>
                </ul>
                <h3>How to Choose Glassware</h3>
                <ul>
                  <li><a href="#">Types of Wine Glasses Guide</a></li>
                  <li><a href="#">Types of Cocktail Glasses Guide</a></li>
                </ul>
                <h3>Bar Cabinets & Bar Carts</h3>
                <h3>Clearance Tabletop & Bar</h3>
                <h3>Everyday Entertaining Starting at $4.95</h3>
                <h3>Wedding Registry</h3>
                <h3>New Tabletop & Bar</h3>
              </div>
              <div className="column dropdown-image">
                <img src="https://m.media-amazon.com/images/I/71NkioK0ExL._AC_UF894,1000_QL80_.jpg" alt="Outdoor Furniture" />
                <h3>35+ Dinnerware Collections</h3>
                <ul>
                  <li><a href="#">Best Sellers</a></li>
                  <li><a href="#">Statement Glassware</a></li>
                  <li><a href="#">White Dinnerware</a></li>
                  <li><a href="#">Olivia Culpo's Dinner Party</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className={`dropdown ${activeDropdown === 'kitchen' ? 'show' : ''}`}
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
          >
            <div className="dropdown-columns">
              <div className="column">
                <h3>Up to 40% off Top Kitchen Brands</h3>
                <h3>Kitchen Appliances & Electrics</h3>
                <ul>
                  <li><a href="#">Coffee, Espresso & Tea</a></li>
                  <li><a href="#">Toasters</a></li>
                  <li><a href="#">Toaster Ovens</a></li>
                  <li><a href="#">Air Fryers</a></li>
                  <li><a href="#">Blenders</a></li>
                  <li><a href="#">Juicers</a></li>
                  <li><a href="#">Mixers & Attachments</a></li>
                  <li><a href="#">Food Processors</a></li>
                  <li><a href="#">Slow Cookers & Pressure Cookers</a></li>
                  <li><a href="#">Waffle Makers</a></li>
                  <li><a href="#">Indoor Grills & Skillets</a></li>
                  <li><a href="#">Pizza Ovens & Tools</a></li>
                  <li><a href="#">Refrigerators, Wine & Beer Fridges</a></li>
                  <li><a href="#">Specialty Appliances</a></li>
                </ul>
                <h3>Coffee, Espresso, & Tea</h3>
                <ul>
                  <li><a href="#">Espresso Makers</a></li>
                  <li><a href="#">Coffee Makers</a></li>
                  <li><a href="#">Coffee Grinders</a></li>
                  <li><a href="#">Pour Over & French Press</a></li>
                  <li><a href="#">Teapots & Tea Kettles</a></li>
                  <li><a href="#">Iced Coffee</a></li>
                  <li><a href="#">Coffee & Tea Accessories</a></li>
                  <li><a href="#">Coffee Mugs & Teacups</a></li>
                </ul>
              </div>
              <div className="column">
                <h3>Cookware</h3>
                <ul>
                  <li><a href="#">Cookware Sets</a></li>
                  <li><a href="#">Frying Pans & Skillets</a></li>
                  <li><a href="#">Dutch Ovens & Braisers</a></li>
                  <li><a href="#">Pizza Tools & Ovens</a></li>
                  <li><a href="#">Stock & Soup Pots</a></li>
                  <li><a href="#">Saucepans & Sauciers</a></li>
                  <li><a href="#">Saute Pans</a></li>
                  <li><a href="#">Specialty Cookware</a></li>
                  <li><a href="#">Roasters & Lasagna Pans</a></li>
                  <li><a href="#">Griddles & Grill Pans</a></li>
                  <li><a href="#">Cookware by Material</a></li>
                </ul>
                <h3>Cutlery</h3>
                <ul>
                  <li><a href="#">Knife Sets</a></li>
                  <li><a href="#">Steak Knives</a></li>
                  <li><a href="#">Individual Knives</a></li>
                  <li><a href="#">Knife Sharpeners</a></li>
                  <li><a href="#">Knife Storage</a></li>
                </ul>
                <h3>Bakeware</h3>
                <ul>
                  <li><a href="#">Bakeware Sets</a></li>
                  <li><a href="#">Baking Sheets</a></li>
                  <li><a href="#">Baking Dishes</a></li>
                  <li><a href="#">Baking Tools</a></li>
                  <li><a href="#">Pie, Bread & Cake Pans</a></li>
                </ul>
              </div>
              <div className="column">
                <h3>Kitchen Linens</h3>
                <ul>
                  <li><a href="#">Kitchen Dish Towels</a></li>
                  <li><a href="#">Oven Mitts & Pot Holders</a></li>
                  <li><a href="#">Kitchen Aprons</a></li>
                </ul>
                <h3>Kitchen Tools & Accessories</h3>
                <ul>
                  <li><a href="#">Utensils & Gadgets</a></li>
                  <li><a href="#">Mixing Bowls</a></li>
                  <li><a href="#">Cutting Boards</a></li>
                  <li><a href="#">Colanders & Salad Spinners</a></li>
                  <li><a href="#">Salt & Pepper</a></li>
                  <li><a href="#">Kitchen Storage</a></li>
                  <li><a href="#">Cookbooks</a></li>
                  <li><a href="#">Cleaning Supplies</a></li>
                  <li><a href="#">Trash Cans</a></li>
                  <li><a href="#">Kitchen Standing Mats</a></li>
                </ul>
                <h3>CrateKitchen</h3>
                <ul>
                  <li><a href="#">Our Favorite Recipes</a></li>
                  <li><a href="#">Get Kitchen Inspiration</a></li>
                </ul>
                <h3>Gourmet Food & Candy</h3>
                <h3>Grilling</h3>
                <h3>Kitchen Exclusives</h3>
              </div>
              <div className="column">
                <h3>Shop by Brand</h3>
                <ul>
                  <li><a href="#">The Kitchen by Crate</a></li>
                  <li><a href="#">Breville</a></li>
                  <li><a href="#">KitchenAid</a></li>
                  <li><a href="#">Le Creuset</a></li>
                  <li><a href="#">Cuisinart</a></li>
                  <li><a href="#">All-Clad</a></li>
                  <li><a href="#">Wüsthof</a></li>
                  <li><a href="#">Philips</a></li>
                  <li><a href="#">Dyson</a></li>
                  <li><a href="#">Oxo</a></li>
                  <li><a href="#">Shop All</a></li>
                </ul>
                <h3>Clearance Kitchen</h3>
                <h3>Kitchen Buying Guides</h3>
                <ul>
                  <li><a href="#">Cookware Buying Guide</a></li>
                  <li><a href="#">Types of Knives Buying Guide</a></li>
                  <li><a href="#">Kitchen Essentials</a></li>
                  <li><a href="#">Kitchen Gadget Essentials</a></li>
                  <li><a href="#">8 Types of Coffee Makers</a></li>
                  <li><a href="#">How to Organize a Pantry</a></li>
                  <li><a href="#">Kitchen Organization Ideas</a></li>
                  <li><a href="#">Best Home Espresso Machines</a></li>
                </ul>
                <h3>Wedding Registry</h3>
                <h3>New Kitchen</h3>
              </div>
              <div className="column dropdown-image">
                <img src="https://m.media-amazon.com/images/I/71NkioK0ExL._AC_UF894,1000_QL80_.jpg" alt="Kitchen Appliances" />
                <h3>Up to $200 off Select Breville® Espresso Machines</h3>
                <ul>
                  <li><a href="#">Feel Good Food</a></li>
                  <li><a href="#">White & Wood Kitchen</a></li>
                  <li><a href="#">Best Sellers</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className={`dropdown ${activeDropdown === 'bedding' ? 'show' : ''}`}
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
          >
            <div className="dropdown-columns">
              <div className="column">
                <h3>Bedding</h3>
                <ul>
                  <li><a href="#">View All</a></li>
                  <li><a href="#">Duvet Covers</a></li>
                  <li><a href="#">Quilts & Coverlets</a></li>
                  <li><a href="#">New! Comforters</a></li>
                  <li><a href="#">Sheet Sets</a></li>
                  <li><a href="#">Pillow Shams & Pillowcases</a></li>
                  <li><a href="#">Bed Blankets</a></li>
                  <li><a href="#">Throw Pillows</a></li>
                  <li><a href="#">Shop Bedding by Color</a></li>
                  <li><a href="#">Shop Bedding by Collection</a></li>
                  <li><a href="#">Bedding Sets</a></li>
                </ul>
                <h3>Bedding Essentials</h3>
                <ul>
                  <li><a href="#">Duvet Inserts</a></li>
                  <li><a href="#">Bed Pillow Inserts</a></li>
                  <li><a href="#">Mattress Pads</a></li>
                </ul>
              </div>
              <div className="column">
                <h3>Shop by Fabric</h3>
                <ul>
                  <li><a href="#">Organic Cotton: Supersoft & Relaxed</a></li>
                  <li><a href="#">Linen: Airy & Breathable</a></li>
                  <li><a href="#">Hemp Bedding: Lightweight & Soft</a></li>
                  <li><a href="#">Organic Cotton Jersey: Cozy & Casual</a></li>
                  <li><a href="#">Cotton Percale: Lightweight & Cool</a></li>
                  <li><a href="#">Cotton Sateen: Luxurious & Smooth</a></li>
                  <li><a href="#">Flannel Bedding</a></li>
                </ul>
                <h3>Cleaning & Laundry</h3>
                <ul>
                  <li><a href="#">Laundry & Hampers</a></li>
                  <li><a href="#">Fans & Air Purifiers</a></li>
                  <li><a href="#">Vacuums</a></li>
                </ul>
              </div>
              <div className="column">
                <h3>Bedding Guides & Trending Ideas</h3>
                <ul>
                  <li><a href="#">How to Layer a Bed</a></li>
                  <li><a href="#">How to Put on a Duvet Cover</a></li>
                  <li><a href="#">Bedding Bestsellers</a></li>
                  <li><a href="#">The Ultimate White Bedding</a></li>
                </ul>
                <h3>New Bedding</h3>
                <h3>Up to 60% off Bedding</h3>
                <h3>Baby & Kids Bedding and Bath</h3>
                <h3>Wedding Registry</h3>
              </div>

              <div className="column dropdown-image">
                <img src="https://m.media-amazon.com/images/I/71NkioK0ExL._AC_UF894,1000_QL80_.jpg" alt="Bedding" />
                <h3>The Best Summer Bedding</h3>
                <ul>
                  <li><a href="#">Best Sellers</a></li>
                  <li><a href="#">The Ultimate White Bedding</a></li>
                  <li><a href="#">All Bedding Ships Free</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className={`dropdown ${activeDropdown === 'bath' ? 'show' : ''}`}
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
          >
            <div className="dropdown-columns">
              <div className="column">
                <h3>Bath Linens & Towels</h3>
                <ul>
                  <li><a href="#">Bath Towels</a></li>
                  <li><a href="#">Bath Rugs & Mats</a></li>
                  <li><a href="#">Bath Towel Bundles</a></li>
                  <li><a href="#">Shower Curtains & Rings</a></li>
                  <li><a href="#">Bathrobes</a></li>
                </ul>
                <h3>Bath Accessories & Storage</h3>
                <ul>
                  <li><a href="#">Bath Accessories</a></li>
                  <li><a href="#">Bath Storage</a></li>
                  <li><a href="#">Laundry Hampers & Accessories</a></li>
                  <li><a href="#">Wastebaskets</a></li>
                  <li><a href="#">Bathroom Cleaning</a></li>
                </ul>
              </div>
              <div className="column">
                <h3>Bath Hardware</h3>
                <ul>
                  <li><a href="#">Bath Faucets</a></li>
                  <li><a href="#">Towel Bars & Hooks</a></li>
                  <li><a href="#">Towel Rings</a></li>
                  <li><a href="#">Toilet Paper Holders</a></li>
                  <li><a href="#">Cabinet Pulls</a></li>
                  <li><a href="#">Cabinet Knobs</a></li>
                  <li><a href="#">View All</a></li>
                </ul>
                <h3>Bath Furniture</h3>
                <ul>
                  <li><a href="#">Bath Lighting</a></li>
                  <li><a href="#">Bath Mirrors</a></li>
                  <li><a href="#">Bath Vanities</a></li>
                </ul>
                <h3>Soaps & Lotions</h3>
                <h3>Self-Care & Bath Products</h3>
              </div>
              <div className="column">
                <h3>Buying Guides & Styling Ideas</h3>
                <ul>
                  <li><a href="#">Emily Henderson's Favorite Bathroom Styles</a></li>
                  <li><a href="#">Modern Bathroom Decor Ideas & Tips</a></li>
                </ul>
                <h3>Shop by Brand</h3>
                <ul>
                  <li><a href="#">Blomus</a></li>
                  <li><a href="#">Brabantia</a></li>
                  <li><a href="#">Kohler</a></li>
                  <li><a href="#">SimpleHuman</a></li>
                  <li><a href="#">Steele</a></li>
                </ul>
                <h3>New Bath</h3>
                <h3>Bath Clearance Sale</h3>
              </div>

              <div className="column dropdown-image">
                <img src="https://m.media-amazon.com/images/I/71NkioK0ExL._AC_UF894,1000_QL80_.jpg" alt="Bath" />
                <h3>Our #1 Bestselling Turkish Towels</h3>
                <ul>
                  <li><a href="#">Kohler Faucets</a></li>
                  <li><a href="#">Best Sellers</a></li>
                  <li><a href="#">All Bath Ships Free</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div
            className={`dropdown ${activeDropdown === 'decor' ? 'show' : ''}`}
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
          >
            <div className="dropdown-columns">
              <div className="column">
                <h3>Up to 30% Off Decorating</h3>
                <h3>New Decor</h3>
                <h3>Pillows & Throws</h3>
                <ul>
                  <li><a href="#">Throw Pillows</a></li>
                  <li><a href="#">Throw Blankets</a></li>
                  <li><a href="#">Throw Pillow Arrangements</a></li>
                  <li><a href="#">Outdoor Pillows</a></li>
                  <li><a href="#">Pillow Inserts</a></li>
                </ul>
                <h3>Wall Art & Decor</h3>
                <ul>
                  <li><a href="#">View All</a></li>
                  <li><a href="#">Art Prints</a></li>
                  <li><a href="#">Wall Decor</a></li>
                  <li><a href="#">Picture Frames</a></li>
                  <li><a href="#">Featured Artists Gallery</a></li>
                  <li><a href="#">Photography Prints</a></li>
                </ul>
              </div>
              <div className="column">
                <h3>Mirrors</h3>
                <ul>
                  <li><a href="#">View All</a></li>
                  <li><a href="#">Floor Mirrors</a></li>
                  <li><a href="#">Wall Mirrors</a></li>
                </ul>
                <h3>Botanicals & Vases</h3>
                <ul>
                  <li><a href="#">Stems & Branches</a></li>
                  <li><a href="#">Faux Potted Plants & Trees</a></li>
                  <li><a href="#">Vases</a></li>
                  <li><a href="#">Wreaths & Garland</a></li>
                  <li><a href="#">Botanical Arrangements</a></li>
                  <li><a href="#">Indoor & Outdoor Planters</a></li>
                </ul>
                <h3>Candles & Home Fragrances</h3>
                <ul>
                  <li><a href="#">Candle Holders</a></li>
                  <li><a href="#">Scented Candles & Diffusers</a></li>
                  <li><a href="#">Lanterns</a></li>
                  <li><a href="#">Taper & Pillar Candles</a></li>
                </ul>
              </div>
              <div className="column">
                <h3>Decorative Objects</h3>
                <ul>
                  <li><a href="#">Vases</a></li>
                  <li><a href="#">Decorative Sculptures & Figurines</a></li>
                  <li><a href="#">Centerpiece Bowls & Trays</a></li>
                  <li><a href="#">Coffee Table Books</a></li>
                </ul>
                <h3>Organization</h3>
                <ul>
                  <li><a href="#">Baskets & Storage Bins</a></li>
                  <li><a href="#">Floating Shelves</a></li>
                  <li><a href="#">Coat Racks & Wall Hooks</a></li>
                  <li><a href="#">Jewelry Boxes</a></li>
                  <li><a href="#">Office Decor & Organization</a></li>
                </ul>
                <h3>Home Accessories</h3>
                <ul>
                  <li><a href="#">Electronics & Tech Accessories</a></li>
                  <li><a href="#">Luggage & Travel Bags</a></li>
                  <li><a href="#">Fireplaces & Accessories</a></li>
                  <li><a href="#">Pet Accessories</a></li>
                  <li><a href="#">Games</a></li>
                </ul>
              </div>
              <div className="column">
                <h3>Hardware</h3>
                <ul>
                  <li><a href="#">View All</a></li>
                  <li><a href="#">Cabinet Pulls</a></li>
                  <li><a href="#">Cabinet Knobs</a></li>
                  <li><a href="#">Window Curtain Hardware</a></li>
                  <li><a href="#">Address Numbers & Mailboxes</a></li>
                </ul>
                <h3>Buying Guides & Styling Ideas</h3>
                <ul>
                  <li><a href="#">How to Style Throw Pillows</a></li>
                  <li><a href="#">How to Style a Sectional</a></li>
                  <li><a href="#">How to Create a Gallery Wall</a></li>
                  <li><a href="#">How to Arrange Florals Like a Pro</a></li>
                  <li><a href="#">Modern Farmhouse Decor Ideas</a></li>
                </ul>
                <h3>Best Sellers</h3>
              </div>
              <div className="column dropdown-image">
                <img src="https://m.media-amazon.com/images/I/71NkioK0ExL._AC_UF894,1000_QL80_.jpg" alt="Decor & Pillows" />
                <h3>New Pillows, Luxe Textures</h3>
                <ul>
                  <li><a href="#">Best Sellers</a></li>
                  <li><a href="#">Top Rated: Edge Mirror Collection</a></li>
                  <li><a href="#">Featured Artists Gallery</a></li>
                  <li><a href="#">Design Desk</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div
            className={`dropdown ${activeDropdown === 'rugs' ? 'show' : ''}`}
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
          >
            <div className="dropdown-columns">
              <div className="column">
                <h3>Up to 60% off Rugs</h3>
                <ul>
                  <li><a href="#">All Rugs</a></li>
                  <li><a href="#">Performance Rugs</a></li>
                  <li><a href="#">Rugs by Type</a></li>
                  <ul>
                    <li><a href="#">Area Rugs</a></li>
                    <li><a href="#">Indoor-Outdoor Rugs</a></li>
                    <li><a href="#">Runner Rugs</a></li>
                    <li><a href="#">Door Mats</a></li>
                    <li><a href="#">Rug Pads</a></li>
                  </ul>
                </ul>
              </div>
              <div className="column">
                <h3>Rugs by Size</h3>
                <ul>
                  <li><a href="#">6x9 Rugs</a></li>
                  <li><a href="#">8x10 Rugs</a></li>
                  <li><a href="#">9x12 Rugs</a></li>
                  <li><a href="#">10x14 Rugs</a></li>
                  <li><a href="#">12x15 Rugs</a></li>
                </ul>
                <h3>Rugs by Room</h3>
                <ul>
                  <li><a href="#">Living Room Rugs</a></li>
                  <li><a href="#">Kitchen Rugs</a></li>
                  <li><a href="#">Bedroom Rugs</a></li>
                </ul>
              </div>
              <div className="column">
                <h3>Rugs by Color</h3>
                <ul>
                  <li><a href="#">Neutral Rugs</a></li>
                  <li><a href="#">Black Rugs</a></li>
                  <li><a href="#">Grey Rugs</a></li>
                  <li><a href="#">Brown Rugs</a></li>
                  <li><a href="#">Blue Rugs</a></li>
                </ul>
                <h3>Rugs by Material</h3>
                <ul>
                  <li><a href="#">Premium Wool Rugs</a></li>
                  <li><a href="#">Performance Rugs</a></li>
                  <li><a href="#">Viscose Rugs</a></li>
                  <li><a href="#">Jute & Sisal Rugs</a></li>
                </ul>
              </div>
              <div className="column">
                <h3>Rugs by Style</h3>
                <ul>
                  <li><a href="#">Solid Rugs</a></li>
                  <li><a href="#">Patterned Rugs</a></li>
                  <li><a href="#">Traditional Rugs</a></li>
                  <li><a href="#">Moroccan Rugs</a></li>
                  <li><a href="#">Contemporary Rugs</a></li>
                  <li><a href="#">Textured Rugs</a></li>
                </ul>
                <h3>New Rugs</h3>
                <ul>
                  <li><a href="#">Quick Ship & In-Stock Rugs</a></li>
                </ul>
                <h3>Rug Collections</h3>
                <ul>
                  <li><a href="#">Vacuums</a></li>
                </ul>
              </div>
              <div className="column dropdown-image">
                <img src="https://m.media-amazon.com/images/I/71NkioK0ExL._AC_UF894,1000_QL80_.jpg" alt="Outdoor Furniture" />
                <h3>New, Cozy & Beautiful</h3>
                <ul>
                  <li><a href="#">Best Sellers</a></li>
                  <li><a href="#">How to Choose a Rug</a></li>
                  <li><a href="#">40+ New Baby & Kids Rugs</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className={`dropdown ${activeDropdown === 'lighting' ? 'show' : ''}`}
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
          >
            <div className="dropdown-columns">
              <div className="column">
                <h3>New Lighting</h3>
                <h3>All Lighting</h3>
                <h3>Table & Floor Lamps</h3>
                <ul>
                  <li><a href="#">Table Lamps</a></li>
                  <li><a href="#">Desk Lamps</a></li>
                  <li><a href="#">Floor Lamps</a></li>
                </ul>
              </div>
              <div className="column">
                <h3>Ceiling Lighting</h3>
                <ul>
                  <li><a href="#">Pendant Lighting & Chandeliers</a></li>
                  <li><a href="#">Flush Mount Lighting</a></li>
                  <li><a href="#">Ceiling Fans</a></li>
                  <li><a href="#">Wall Sconces</a></li>
                </ul>
              </div>
              <div className="column">
                <h3>Lighting by Room</h3>
                <ul>
                  <li><a href="#">Bedroom Lighting</a></li>
                  <li><a href="#">Dining Room Lighting</a></li>
                  <li><a href="#">Kitchen Lighting</a></li>
                  <li><a href="#">Living Room Lighting</a></li>
                  <li><a href="#">Bathroom Lighting</a></li>
                  <li><a href="#">Entryway Lighting Fixtures</a></li>
                  <li><a href="#">Light Bulbs</a></li>
                </ul>
              </div>
              <div className="column">
                <h3>Lighting Best Sellers Back</h3>
                <ul>
                  <li><a href="#">In-Stock</a></li>
                  <li><a href="#">Baby & Kids Lighting</a></li>
                  <li><a href="#">Clearance Lighting Starting at $65</a></li>
                </ul>

              </div>
              <div className="column dropdown-image">
                <img src="https://m.media-amazon.com/images/I/71NkioK0ExL._AC_UF894,1000_QL80_.jpg" alt="Outdoor Furniture" />
                <h3>Room-Changing New Lighting</h3>
                <ul>
                  <li><a href="#">How to Hang Pendant Lighting</a></li>
                  <li><a href="#">Pendant Lighting Starting at $70</a></li>
                  <li><a href="#">Best Sellers</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className={`dropdown ${activeDropdown === 'window' ? 'show' : ''}`}
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
          >
            <div className="dropdown-columns">
              <div className="column">
                <h3>Quick Ship & In-Stock Curtains</h3>
                <h3>All Window Curtains</h3>
                <h3>Window Curtain Collections</h3>
                <h3>Blackout Curtains</h3>
                <h3>Sheer Curtains</h3>
                <h3>Window Curtain Hardware</h3>
              </div>
              <div className="column">
                <h3>Window Curtains by Fabric</h3>
                <ul>
                  <li><a href="#">Velvet Curtains</a></li>
                  <li><a href="#">Linen Curtains</a></li>
                  <li><a href="#">Cotton Curtains</a></li>
                  <li><a href="#">Silk Curtains</a></li>
                </ul>
                <h3>Window Curtains by Color</h3>
                <ul>
                  <li><a href="#">White Window Curtains</a></li>
                  <li><a href="#">Grey Window Curtains</a></li>
                  <li><a href="#">Beige Window Curtains</a></li>
                  <li><a href="#">Blue Window Curtains</a></li>
                </ul>
              </div>
              <div className="column dropdown-image">
                <img src="https://m.media-amazon.com/images/I/71NkioK0ExL._AC_UF894,1000_QL80_.jpg" alt="Window Curtains" />
                <h3>New High-Quality Curtains</h3>
                <ul>
                  <li><a href="#">How to Hang Curtains</a></li>
                  <li><a href="#">How to Choose Curtains</a></li>
                  <li><a href="#">Best Sellers</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className={`dropdown ${activeDropdown === 'gifts' ? 'show' : ''}`}
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
          >
            <div className="dropdown-columns">
              <div className="column">
                <h3>Bestselling Gifts</h3>
                <h3>Kitchen Gifts</h3>
                <h3>Gifts for the Home</h3>

                <h3>Gifts By Price</h3>
                <ul>
                  <li><a href="#">Gifts Under $25</a></li>
                  <li><a href="#">Gifts Under $50</a></li>
                  <li><a href="#">Gifts Under $75</a></li>
                  <li><a href="#">Gifts Under $100</a></li>
                  <li><a href="#">Gifts $100 and Up</a></li>
                </ul>
                <h3>Wine & Cocktail Gifts</h3>
                <h3>Coffee & Tea Gifts</h3>

              </div>
              <div className="column">
                <h3>Personalized Gifts</h3>
                <h3>Gifts for the Host</h3>
                <h3 >Wedding Gifts</h3>
                <h3 >Baby & Kids Gifts</h3>
                <h3 >Gift Cards</h3>
              </div>
              <div className="column">
                <h3>Gifts By Recipient</h3>
                <ul>
                  <li><a href="#">Family Gifts</a></li>
                  <li><a href="#">Gifts for Her</a></li>
                  <li><a href="#">Gifts for Him</a></li>
                  <li><a href="#">Gifts for the Entertainer</a></li>
                  <li><a href="#">Gifts for the Baker</a></li>
                  <li><a href="#">Host and Hostess Gift Ideas</a></li>
                </ul>
                <h3>Gifts By Occasion</h3>
                <ul>
                  <li><a href="#">Housewarming Gifts</a></li>
                  <li><a href="#">Engagement Gifts</a></li>
                  <li><a href="#">Anniversary Gifts</a></li>
                  <li><a href="#">Birthday Gifts</a></li>
                  <li><a href="#">Thank You Gifts</a></li>
                  <li><a href="#">Graduation Gifts</a></li>
                </ul>
              </div>
              <div className="column dropdown-image">
                <img src="https://m.media-amazon.com/images/I/71NkioK0ExL._AC_UF894,1000_QL80_.jpg" alt="Outdoor Furniture" />
                <h3>Most-Loved Registry Gifts</h3>

              </div>
            </div>
          </div>
          <div
            className={`dropdown ${activeDropdown === 'sale' ? 'show' : ''}`}
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
          >
            <div className="dropdown-columns">
              <div className="column">
                <h3>Up to 60% off Summer Clearance</h3>
                <ul>
                  <li><a href="#">Shop All</a></li>
                  <li><a href="#">Furniture</a></li>
                  <li><a href="#">Outdoor</a></li>
                  <li><a href="#">Kitchen</a></li>
                  <li><a href="#">Rugs</a></li>
                  <li><a href="#">Decor</a></li>
                  <li><a href="#">Entertaining</a></li>
                  <li><a href="#">Bedding</a></li>
                  <li><a href="#">Lighting</a></li>
                </ul>
                <h3>Up to 40% off Bestselling Furniture</h3>
                <ul>
                  <li><a href="#">Shop All</a></li>
                  <li><a href="#">Sofas, Sectionals & More</a></li>
                  <li><a href="#">Dining Room</a></li>
                  <li><a href="#">Bedroom</a></li>
                  <li><a href="#">Accent Tables</a></li>
                  <li><a href="#">Storage & Home Office</a></li>
                </ul>
                <h3>Up to 60% Rugs</h3>
                <h3>Up to 60% off Outdoor</h3>
              </div>
              <div className="column">
                <h3>Up to 30% off Decorating</h3>
                <ul>
                  <li><a href="#">Shop All</a></li>
                  <li><a href="#">Botanicals & Candelight</a></li>
                  <li><a href="#">Outdoor Planters</a></li>
                  <li><a href="#">Mirrors & Wall Decor</a></li>
                  <li><a href="#">Pillows & Throws</a></li>
                  <li><a href="#">Hardware</a></li>
                  <li><a href="#">Lighting</a></li>
                  <li><a href="#">Bedding & Bath</a></li>
                </ul>
                <h3>Up to 60% off Clearance</h3>
                <ul>
                  <li><a href="#">Shop All Clearance</a></li>
                  <li><a href="#">Furniture</a></li>
                  <li><a href="#">Outdoor</a></li>
                  <li><a href="#">Decor</a></li>
                  <li><a href="#">Rugs</a></li>
                  <li><a href="#">Kitchen</a></li>
                  <li><a href="#">Tabletop</a></li>
                  <li><a href="#">Bedding</a></li>
                  <li><a href="#">Bath</a></li>
                  <li><a href="#">Lighting</a></li>
                  <li><a href="#">50%-60% off Final Sale</a></li>
                </ul>
              </div>

              <div className="column">
                <h3>Up to 40% off Top Kitchen Brands</h3>
                <ul>
                  <li><a href="#">$150 off Breville Barista Express Espresso Machine</a></li>
                  <li><a href="#">Over 40% Off Le Creuset Cookware</a></li>
                </ul>
                <h3>Up to 35% off Entertaining & Kitchen</h3>
                <ul>
                  <li><a href="#">Shop All</a></li>
                  <li><a href="#">Dinnerware</a></li>
                  <li><a href="#">Serveware</a></li>
                  <li><a href="#">Drinkware</a></li>
                  <li><a href="#">Table Linens & Flatware</a></li>
                  <li><a href="#">Kitchen</a></li>
                  <li><a href="#">Outdoor Entertaining</a></li>
                </ul>
                <h3>All Free Shipping</h3>
              </div>
              <div className="column dropdown-image">
                <img src="https://m.media-amazon.com/images/I/71NkioK0ExL._AC_UF894,1000_QL80_.jpg" alt="Outdoor Furniture" />
                <h3>Summer Sale: Up to 60% off</h3>
              </div>
            </div>

          </div>
          <a href="#" className="category-link">Crate&kids</a>
        </div>
        <div className="promotions">
          <a href="#" className="promo-link">Fall 2024 New Arrivals ➞</a>
          <span>|</span>
          <a href="#" className="promo-link">Up to 60% off Summer Clearance ➞</a>
          <span>|</span>
          <a href="#" className="promo-link">100% Free Design Help ➞</a>
          <span>|</span>
          <a href="#" className="promo-link">Up to 40% off Breville, KitchenAid & More ➞</a>
        </div>
      </div>
    </div >
  );
};

export default NavBar;
