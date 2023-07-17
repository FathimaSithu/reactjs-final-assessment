import { useState } from "react";
import "./signup.css";

function Signup() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission or validation logic here
    console.log("Email submitted:", email);
  };
  return (
    <div className="signupMain">
      <div className="signupCnt">
        <div className="signupText">
          <h2>Want First Dibs?</h2>
          <p>
            Join our email list and be the first to know about new limited
            edition products, material innovations, and lots of other fun
            updates.{" "}
          </p>
        </div>
        <div className="signupEmail">
          <div className="email-form">
            <form onSubmit={handleSubmit}   className="emailHolder">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={handleEmailChange}
             />
          
            </form>
          </div>
          <div className="spBtn">
          <button className="signupBtn">Sign up</button>
          </div>
        </div>
        <div className="signupPolicy">
          <p>
            {" "}
            Note: You can opt-out at any time. See our{" "}
            <span>
              <a href="#">Privacy Policy</a> and{" "}
              <a a href="#">
                Terms
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Signup;
