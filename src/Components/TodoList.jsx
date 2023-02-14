
import React , {useContext ,useState ,useEffect} from 'react';
import ListItem from "../Components/ListItem";
import {DataContext} from "../Components/DataProvider";
import useLocalStorage from 'use-local-storage';

 const TodoList = ({findUserState,setFindUserState,findUserLoggin}) => {
 
 const {users,userInfo}=useContext(DataContext);
 
// lets find the user who loggin inside the users
// let findUserLoggin= users.find(item => item.email === userInfo.email);
// let findUserLoggin = users?.find(item => item?.email === userInfo?.email);
    
// let [findUserState , setFindUserState]=useLocalStorage(userInfo?.email,findUserLoggin);
  //  let [findUserState, setFindUserState] = useState(findUserLoggin);
   const switchComplete = (id) => {
    let newTodos = [...findUserState.userTodos]
     newTodos.forEach((todo, index) => {
       if (index === id) {
         todo.complete = !todo.complete
       }
     })
     setFindUserState({...findUserState,userTodos:newTodos})
     
     
//  const newTodos = [...todos];
//  newTodos.forEach((todo , index) => {
//  if (index === id) {
//   todo.complete = !todo.complete;
//  }
//  })
//  setTodos(newTodos);
 }
 
   const handelEditTodos = (editVal, id) => {
    let newTodos = [...findUserState.userTodos]
    newTodos.forEach((todo, index) => {
      if (index === id) {
        todo.todoName = editVal
      }
    })
    setFindUserState({...findUserState,userTodos:newTodos})
     
     
     
     
//  const newTodos = [...todos];
//  newTodos.forEach((todo , index) => {
//  if (index === id) {
//   todo.name = editVal;
//  }
//  })
//  setTodos(newTodos);
 }
 
 
   const handelDeleteTodo = (id) => {
    let fitlerDelete = findUserState.userTodos.filter((item, i) => i !== id)
     setFindUserState({...findUserState,userTodos:fitlerDelete})
  // console.log(id);
  //todos.splice(id,1);
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
 


//     useEffect(()=>{
//       setFindUserState(findUserLoggin)
//  console.log("🚀 ~ file: TodoList.jsx:14 ~ TodoList ~ findUserState", findUserState)

//       },[]); 
 
  return (
    <ul>
    {/* {
    findUserState?.userTodos?.map((todo , index) => (
    <li>{todo?.todoName}</li>
      // <ListItem todo={todo}
      // key={index}
      // id={index}
      // checkComplete={switchComplete}
      // handelEditTodos={handelEditTodos}
      // handelDeleteTodo={handelDeleteTodo}
      // // handleDelete={handleDelete}
      // />
    ))
    } */}
      {findUserState?.userTodos?.map((item, index) => (
          <ListItem todo={item}
          key={index}
          id={index}
          checkComplete={switchComplete}
          handelEditTodos={handelEditTodos}
          handelDeleteTodo={handelDeleteTodo}
         // // handleDelete={handleDelete}
          />
      ) )}
      
  </ul>
  )
}

export default TodoList;


