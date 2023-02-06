
import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from "./DataProvider";

const TaskForm = () => {

const { users , userInfo}=useContext(DataContext);
const [todoValue,setTodoValue]=useState({todoName:'' , complete:false});
console.log(users,'users');
console.log(userInfo,'userInfo')

// lets find the user who loggin inside the users
let findUserLoggin=users.find(item => item.email === userInfo.email);

let [findUserState , setFindUserState]=useState(findUserLoggin);



const addTodo = (e) =>{
e.preventDefault();
setFindUserState({...findUserState,userTodos: ['todoValue']});
// setTodos([...todos , {name:todoName , complete:false}]);
// setTodoValue({todoName:'' , complete:false});
console.log(findUserState,'findUserState')
}
console.log(todoValue,'todoValue');

// useEffect(()=>{
// setFindUserState(findUserLoggin)
// },[users]);

  return (
      <form onSubmit={addTodo} autoComplete="off" className="mt-3 task-form">
          <input
              type="text"
              className="form-control"
              name="todos"
              id="todos"
              value={todoValue.todoName}
              onChange={(e) => setTodoValue({...todoValue , todoName:e.target.value})}
              placeholder="What need to be done ?"
              required
          />
          <button type="submit" >Create</button>
      </form>
  )
}

export default TaskForm;
