import React, { useState, useContext } from 'react';
import './LoginModal.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { SlCreditCard, SlBag } from "react-icons/sl";
import { CiHeart, CiDeliveryTruck } from "react-icons/ci";
import { IoIosStarOutline } from "react-icons/io";
import { RiSofaLine } from "react-icons/ri";
import { login, UserContext } from './link';
import image from '../assets/login.jpg'

const LoginModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    const result = await login({ email, password });

    if (result.user) {
      setUser(result.user);
      alert(result.message);
      setFormData({ email: '', password: '' });
      navigate('/');
      onClose();
    } else {
      alert(result.message);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close-button" onClick={onClose}>×</button>
        <div className='header1'>
          <h1 className='heading-font'>Account Sign In</h1>
        </div>
        <div className='body'>
          <div className='sub-body'>
            <h2 className='fonts head'>Sign In</h2>
            <div className='reset-password'>Reset password</div>
            <form onSubmit={handleLogin}>
              <div className='mg-16'>
                <div className='dsp-flex'>
                  <label htmlFor='email' className='mg-8 bold'><strong>Email</strong></label>
                  <span className='pd-4 mg-8'>required</span>
                </div>
                <input id='email' name='email' className='inp' type='email' value={formData.email} onChange={handleChange} required />
              </div>
              <div className='mg-16'>
                <div className='dsp-flex'>
                  <label htmlFor='password' className='mg-8 bold'><strong>Password</strong></label>
                  <div className='pd-4 mg-8'>required</div>
                </div>
                <input id='password' name='password' className='inp' type='password' value={formData.password} onChange={handleChange} required />
              </div>
              <button className='bttns' id='bt' type='submit'>
                SIGN IN
              </button>
            </form>
            <span className='jc-ct dsp-flex'>or</span>
            <div className='dsp-flex col'>
              <button className='btns-signin' onClick={() => alert('Sign in with Apple')}>
                <FontAwesomeIcon icon={faApple} className="icon" />
                SIGN IN WITH APPLE
              </button>
              <button className='btns-signin' onClick={() => alert('Sign in with Google')}>
                <FontAwesomeIcon icon={faGoogle} className="icon" />
                SIGN IN WITH GOOGLE
              </button>
            </div>
            <div className='terms'>
              By signing in, you are agreeing to our <a href="/Termsofuse">Terms of Use</a> and <a href="/privacypolicy.html">Privacy Policy</a>.
            </div>
          </div>
          <div id='pok'></div>
          <div className='sub-body dsp-flex fx-co'>
            <h2 className='mg-8'>Create An Account</h2>
            <div className='list-div'>
              <img src={image} />
              {/* <ul className='pd'>
                <li className='dsp-flex mg-18 sz'>
                  <SlCreditCard className='svgicon' />
                  <span className='mg-lt'>Save payment to view in-store purchases</span>
                </li>
                <li className='dsp-flex mg-18 sz'>
                  <IoIosStarOutline className='svgicon' />
                  <span className='mg-lt'>Redeem Rewards</span>
                </li>
                <li className='dsp-flex mg-18 sz'>
                  <SlBag className='svgicon' />
                  <span className='mg-lt'>Speedy checkout</span>
                </li>
                <li className='dsp-flex mg-18 sz'>
                  <CiDeliveryTruck className='svgicon' />
                  <span className='mg-lt'>Easily track orders and view order history</span>
                </li>
                <li className='dsp-flex mg-18 sz'>
                  <span className='mg-lt'>Create a Registry</span>
                </li>
                <li className='dsp-flex mg-18 sz'>
                  <RiSofaLine className='svgicon' />
                  <span className='mg-lt'>View Your Design Packages</span>
                </li>
                <li className='dsp-flex mg-18 sz'>
                  <CiHeart className='svgicon' />
                  <span className='mg-lt'>Manage Favorites Lists</span>
                </li>
              </ul> */}
            </div>
            <div className='wt'>
              <button className='bttns' onClick={() => { navigate("/signup"); onClose(); }}>CREATE ACCOUNT</button>
            </div>
            <div>
              Don't have an account? <a href="#">Track/Schedule Order</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
