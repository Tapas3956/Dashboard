import React from 'react'
import {useState} from 'react';
import { useNavigate } from "react-router-dom";
const Login = () => {

const navigate = useNavigate();
const [username, setusername] = useState("");
const [password, setpassword] = useState("");
const [authenticated, setauthenticated] = useState(
localStorage.getItem(localStorage.getItem("authenticated") || false)
);
const users = [{ username: "admin", password: "admin123" }];
const handleSubmit = (e) => {
e.preventDefault();
const account = users.find((user) => user.username === username);  
if (account && account.password === password) {
localStorage.setItem("authenticated", true);
navigate("/home");
}else{
    if(!account){
        alert("User not exist! Please check username!")
    } else{
        alert("Wrong Password!")
    }
    
}

};
  
  return (
    <>
        <div className='bg-gradient-primary1'>
            <div class="container">

            <div class="row justify-content-center d-flex">

                <div class="col-xl-10 col-lg-12 col-md-9">

                    <div class="card o-hidden border-0 shadow-lg my-5">
                        <div class="card-body p-0">
                            <div class="row">
                                <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                <div class="col-lg-6">
                                    <div class="p-5">
                                        <div class="text-center">
                                            <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                        </div>
                                        <form class="user" onSubmit={handleSubmit}>
                                            <div class="form-group">
                                                
                                             <input type="text" class="form-control form-control-user" name="Username" value={username} onChange={(e) => setusername(e.target.value)} />
                                            </div>
                                            <div class="form-group">
                                            
                                                <input type="password" class="form-control form-control-user" name="Password" onChange={(e) => setpassword(e.target.value)} />

                                            </div>
                                            <div class="form-group">
                                                <div class="custom-control custom-checkbox small">
                                                    <input type="checkbox" class="custom-control-input" id="customCheck" />
                                                    <label class="custom-control-label" for="customCheck">Remember
                                                        Me</label>
                                                </div>
                                            </div>

                                            <button type="submit" class="btn btn-primary btn-user btn-block">Submit</button>
                                            <hr />
                                            <a href="index.html" class="btn btn-google btn-user btn-block">
                                                <i class="fab fa-google fa-fw"></i> Login with Google
                                            </a>
                                            <a href="index.html" class="btn btn-facebook btn-user btn-block">
                                                <i class="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                            </a>
                                        </form>
                                        <hr />
                                        <div class="text-center">
                                            <a class="small" href="forgot-password.html">Forgot Password?</a>
                                        </div>
                                        <div class="text-center">
                                            <a class="small" href="register.html">Create an Account!</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>


        </div> 

        
      
    </>
  )
}

export default Login
