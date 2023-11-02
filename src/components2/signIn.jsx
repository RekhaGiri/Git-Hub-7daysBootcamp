import React from "react";
import "../componet-css/signIn.css"

function SignIn(){
    return (
    <div class="container">
       <div class="header">
        <div class="text">Sign Up</div>
        <div class="underline"></div>
       </div>
      <div className="inputs">
        <div class="input">
            <input type="text" placeholder="Name" />
        </div>
        <div class="input">
            <input type="email" placeholder="Email Id" />
        </div>
        <div class="input">
            <input type="password" placeholder="Password" />
        </div>
      </div>
      
      <div class="forgot-password">Lost password<span> Click here</span></div>
      <div class="submit-container">
        <div class="submit">Sign Up</div>
        <div class="submit">Login</div>
      </div>

    </div>
       
    );
}

export default SignIn;
