import React,{useNavigate} from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
   
    e.preventDefault();
    console.log(email);  
    actions.logIn(email, password);
    const token=sessionStorage.setItem('token'); // Save the token in sessionStorage
    if (!token) {
      navigate('/login'); // Use navigate to redirect to the login page if token is not present
    
    navigate ('/private'); // Redirect to the private route
  };
 
	return (
        <form className="text-center"onSubmit={handleSubmit}>
        <h1 className="text-light">Login.</h1>
        <div className="superFormWrappa ">
        <div className="formWrappal ">
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label text-warning">Email address</label>
          <input type="email" className="form-control" 
          placeholder="Type your email adress here" id="exampleInputEmail1" 
          aria-describedby="emailHelp"onChange={(e) => setEmail(e.target.value)}/>
          <div id="emailHelp" className="form-text text-light">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label text-warning">Password</label>
          <input type="password" className="form-control" 
           placeholder="Type your password here" 
           id="exampleInputPassword1"onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className="text-center">
        <button type="submit" className="btn btn-primary">Log in</button>
        </div>
         <p className="text-danger">
         Guess what? You're in the 'Not Registered' club! Time for a wild
          adventure—off to the registration form you go!
        </p>
        <div className="text-center">
       <Link to="/signUp">
       <button type="submit" className="btn btn-primary">Sign up.</button>
       </Link>
        </div>
       </div>
        </div>
        </form>      
       
         );
    };
}