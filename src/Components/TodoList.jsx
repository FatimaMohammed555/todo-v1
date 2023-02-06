
import React , {useContext ,useState ,useEffect} from 'react';
import ListItem from "../Components/ListItem";
import {DataContext} from "../Components/DataProvider";

 const TodoList = () => {
 
 const {users,userInfo}=useContext(DataContext);
 
// lets find the user who loggin inside the users
let findUserLoggin=users.find(item => item.email === userInfo.email);

let [findUserState , setFindUserState]=useState(findUserLoggin);
 console.log(findUserState ,'findUserState');
 const switchComplete = (id) =>{
//  const newTodos = [...todos];
//  newTodos.forEach((todo , index) => {
//  if (index === id) {
//   todo.complete = !todo.complete;
//  }
//  })
//  setTodos(newTodos);
 }
 
 const handelEditTodos = (editVal , id) =>{
//  const newTodos = [...todos];
//  newTodos.forEach((todo , index) => {
//  if (index === id) {
//   todo.name = editVal;
//  }
//  })
//  setTodos(newTodos);
 }
 
 
const handelDelete = (id) => {
console.log(id);
  // setTodos(todos.filter((todo) => todo.id !== id))
  }
 
  const handelDeleteTodo = (id) =>{
  // console.log(id);
  //  todos.splice(id,1);
  //  const newTodos = [...todos];
  //   console.log(todos);
  //   setTodos(newTodos);
  //   console.log(newTodos ,"newTodossssss");
  }
    // const handelDeleteTodo = (id) => {
    //   const newTodos = todos.filter((person) => person.id !== id);
    //   console.log(newTodos);
    //   setTodos(newTodos);
    // };
    
    // removePeople(e) {
    //   var index = array.indexOf(e.target.value)
    //   if (index !== -1) {
    //     array.splice(index, 1);
    //     this.setState({people: array});
    //   }
    // }    
    
    // const handleDelete = (id) => {
    //   const delTodo = todos.filter((to) => to.id !== id);
    //   setTodos([...delTodo]);
    // };
 


    // useEffect(()=>{
    //   setFindUserState(findUserLoggin)
    //   },[users]); 
 
  return (
    <ul>
    {
    findUserState.userTodos.map((todo , index) => (
    <span>{todo?.todoName}</span>
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
  </ul>
  )
}

export default TodoList;


