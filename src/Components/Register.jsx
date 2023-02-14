import React, { useState ,useContext} from 'react';
import { useNavigate } from "react-router-dom";
import { DataContext } from "./DataProvider";




const Register = () => {
const navigate = useNavigate();
const [name , setName]=useState('');
const [email , setEmail]=useState('');
const [password , setPassword]=useState('');

const {users, setUsers}=useContext(DataContext);

const [userInfo , setUserInfo]=useState({
name:'',
email:'',
password:'',
userTodos:[]
});


//to store value in localStorage
const onSubmit = (e) => {
e.preventDefault();
setUsers([...users , userInfo]);
// localStorage.setItem("user" , JSON.stringify(userInfo));
navigate("/login");
}


  return (
    <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" 
          name='name' value={userInfo.name} 
          onChange={(e) => setUserInfo({...userInfo , [e.target.name]:e.target.value})} required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" 
          name='email' value={userInfo.email} 
          onChange={(e) => setUserInfo({...userInfo , [e.target.name]:e.target.value})} required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control"
          name='password' value={userInfo.password}
          onChange={(e) => setUserInfo({...userInfo , [e.target.name]:e.target.value})} required />
        </div>
        <button type="submit" className="btn btn-primary btn-block">Register</button>
      </form>
  )
}

export default Register
