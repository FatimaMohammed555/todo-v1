

import React, { useContext, useState } from 'react';
import {DataContext} from './DataProvider';


const Footer = () => {

const [checkAll , setCheckAll]=useState(false);
const {users,userInfo}=useContext(DataContext);
 
// lets find the user who loggin inside the users
let findUserLoggin=users.find(item => item.email === userInfo.email);

let [findUserState , setFindUserState]=useState(findUserLoggin);
 

const handleCheckAll =() =>{
// const newTodos = [...todos];
// newTodos.forEach((todo) =>{todo.complete = !checkAll
// })
// setTodos(newTodos);
// setCheckAll(!checkAll);
}

const deleteTodo = () =>{
// const newTodos = todos.filter(todo => {
// return todo.complete === false
// })
// setTodos(newTodos);
// setCheckAll(false);
}

  return (
<div className="row">
    <div className='bottom-sec'>
    <label htmlFor="all">
      <input type="checkbox" id="all" name="all" onChange={handleCheckAll} checked={checkAll} />
      All
    </label>
    {/* <p>You have {todos.filter(todo => todo.complete === false).length} to do</p> */}
    <button id="delete" onClick={deleteTodo}>Delete</button>
    </div>
  </div>
  )
}

export default Footer


