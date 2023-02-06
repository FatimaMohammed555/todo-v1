
import React, { useContext, useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import TaskForm from "../Components/TaskForm";
import TodoList from "../Components/TodoList";
import Footer from "../Components/Footer";
import { DataContext } from './DataProvider';


const Todos = () => {
    const navigate = useNavigate();
    const {users,userInfo}=useContext(DataContext);
 
    // lets find the user who loggin inside the users
    let findUserLoggin=users.find(item => item.email === userInfo.email);
    
    let [findUserState , setFindUserState]=useState(findUserLoggin);
     
    // const userName =JSON.parse(localStorage.getItem("user"));

const landleLogout = () =>{
// localStorage.removeItem("loggedin");
navigate("/login");
}

useEffect(()=>{
  setFindUserState(findUserLoggin)
  },[users]); 


  return (
  <div>
  <h2>welcome , {findUserState?.name}</h2>
  
  <div>
          <TaskForm />
          <TodoList />
          <Footer />
        </div>
  
  <button type="button" className="btn btn-primary btn-block" onClick={landleLogout} >Logout</button>

  </div>
  )
}

export default Todos;




