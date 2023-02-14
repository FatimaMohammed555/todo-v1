
import React, { useContext, useEffect, useState } from 'react';
import useLocalStorage from 'use-local-storage';

import { DataContext } from "./DataProvider";

const TaskForm = ({findUserState,setFindUserState,findUserLoggin}) => {

const { users , userInfo}=useContext(DataContext);
let [todoValue,setTodoValue]=useState({todoName:'' , complete:false});
    console.log("🚀 ~ file: TaskForm.jsx:9 ~ TaskForm ~ todoValue", todoValue)




// lets find the user who loggin inside the users
// let findUserLoggin = users?.find(item => item?.email === userInfo?.email);

// let [findUserState , setFindUserState]=useLocalStorage("findUserState",findUserLoggin);



const addTodo =  (e) =>{
    e.preventDefault();    
    setFindUserState({ ...findUserState, userTodos: [...findUserState.userTodos, todoValue] });
    
    // setTodos([...todos , {name:todoName , complete:false}]);
    setTodoValue({todoName:'' , complete:false});
}
console.log("🚀 ~ file: TaskForm.jsx:14 ~ TaskForm ~ findUserState", findUserState)

// useEffect(()=>{
// setFindUserState(findUserLoggin)
// },[findUserLoggin]);

    return (
      <>
      
      <form onSubmit={addTodo} autoComplete="off" className="mt-3 task-form">
          <input
              type="text"
              className="form-control"
              name="todoName"
              id="todos"
              value={todoValue.todoName}
              onChange={(e) => setTodoValue({...todoValue,todoName:e.target.value})}
              placeholder="What need to be done ?"
              required
          />
          <button type="submit" >Create</button>
            </form>
            {/* <ul>
    {
    findUserState?.userTodos?.map((todo , index) => (
    <li key={index}>{todo?.todoName}</li>
      // <ListItem todo={todo}
      // key={index}
      // id={index}
      // checkComplete={switchComplete}
      // handelEditTodos={handelEditTodos}
      // handelDeleteTodo={handelDeleteTodo}
      // // handleDelete={handleDelete}
      // />
    ))
    }
  </ul> */}
      </>
  )
}

export default TaskForm;
