
import React, { useState ,useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { DataContext } from "./DataProvider";

const Login = () => {
  const navigate = useNavigate();

  // const [userInfo , setUserInfo]=useState({
  //   email:'',
  //   password:''
  //   });

    const {userInfo, setUserInfo ,users}=useContext(DataContext);


const handelLogin = (e) =>{
  e.preventDefault();
  // const loggedUser =JSON.parse(localStorage.getItem("user"));
  if(users.some(user => user.email === userInfo.email && user.password === userInfo.password)){
  // localStorage.setItem("loggedin",true);
    navigate("/todos");
  }else{alert('Please check your email or password');}
}

  return (
    <form onSubmit={handelLogin}>
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" 
          name='email' 
          value={userInfo.email}
          onChange={(e) => setUserInfo({...userInfo , [e.target.name]:e.target.value})} required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control"
          name='password' 
          value={userInfo.password}
          onChange={(e) => setUserInfo({...userInfo , [e.target.name]:e.target.value})} required />
        </div>
        <button type="submit" className="btn btn-primary btn-block">Login</button>
      </form>
  )
}

export default Login
