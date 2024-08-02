import { useState } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";
import { Button, useToast } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signUp } from "../components/link";
import {
  faApple,
  faGoogle,
} from '@fortawesome/free-brands-svg-icons';
const Register = () => {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { fname, lname, phone, email, password };
    const response = await signUp(user);
    console.log(response);

    setEmail('');
    setPassword('');
  };
  return (
    <div className="row">
      <div id="accinfo" className="size">
        <h1 className="title">Create an Account</h1>
        <div className="childsize">
          <p className="para">
            Want to check out faster, easily apply Rewards and keep track of your online and in-store orders? Create an account now and save your payment method. It's even easier when you sign up using Google or Apple.
          </p>
        </div>
        <div id="crtacc">
          <Button className='btns' leftIcon={<FontAwesomeIcon icon={faApple} className="icon" />} onClick={() => alert('Sign up with Apple')}>
            CREATE USING APPLE
          </Button>
        </div>


        <div id="crtacc">
          <Button className='btns' leftIcon={<FontAwesomeIcon icon={faGoogle} className="icon" />} onClick={() => alert('Sign up with Google')}>
            CREATE USING GOOGLE
          </Button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="childsize1" id="register">
            <label htmlFor="first-name"><b>First Name</b>&nbsp; required</label>
            <input
              type="text"
              id="first-name"
              name="first-name"
              required
              value={fname}
              onChange={(e) => setFName(e.target.value)} />
          </div>
          <div className="childsize1" id="register">
            <label htmlFor="last-name"><b>Last Name</b>&nbsp; required</label>
            <input
              type="text"
              id="last-name"
              name="last-name"
              required
              value={lname}
              onChange={(e) => setLName(e.target.value)} />
          </div>
          <div className="childsize1" id="register">
            <label htmlFor="phone"><b>Phone Number </b>&nbsp; required</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="childsize1" id="register">
            <label htmlFor="email"><b>Email Address</b>&nbsp; required</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="childsize1" id="register">
            <label htmlFor="password"><b>Create Password</b>&nbsp; required</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="ending" id="ending">
            <button type="submit" onClick={handleSubmit}>CREATE ACCOUNT</button>
            <div>
              By creating an account you are agreeing to our <a onClick={() => { navigate("/Termsofuse"); }}> Terms of Use</a> and <a href="privacypolicy.html"> Privacy Policy.</a>
            </div>
          </div>
        </form>


      </div>
    </div>
  );
};

export default Register;