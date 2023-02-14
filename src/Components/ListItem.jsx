
import React, { useState ,useContext } from 'react';
import {DataContext} from "../Components/DataProvider";

const ListItem = ({todo , id , checkComplete ,handelEditTodos ,handelDeleteTodo,handleDelete}) => {

const [onEdit , setOnEdit]=useState(false);
const [editValue , setEditValue]=useState(todo.todoName);

// const {handelDeleteTodo}=useContext(DataContext);


const handelOnEdit = () =>{
setOnEdit(true)
}

const handleSave =(id) =>{
  setOnEdit(false)
if (editValue) {
  handelEditTodos(editValue,id)
}else{
setEditValue(todo.todoName)
}
}

// const handelDelete = (id) => {
// console.log(id);
//   setTodos(todos.filter((todo) => todo.id !== id))
//   }



if (onEdit) {
  return (
    <li>
      <input type="text" id='editValue' 
      value={editValue} 
      name="editValue" 
      onChange={(e) => setEditValue(e.target.value)}
      />
     <div className='d-flex'>
    <button onClick={() => handleSave(id)}>Save</button>
    {/* <button onClick={() => handelDeleteTodo(id)}>Delete</button> */}
    </div>
  </li>
  )
}else{
  return (
    <li>
    <label htmlFor={id} className={todo.complete ? "active" : ""}>
      <input type="checkbox" id={id} checked={todo.complete} onChange={() => checkComplete(id)} />
     {todo.todoName}
    </label>
    <div>
    <button disabled={todo.complete} onClick={handelOnEdit}>Edit</button>
    <button onClick={() =>handelDeleteTodo(id)}>Delete</button>
    </div>
  </li>
  )
}

  
}

export default ListItem;

