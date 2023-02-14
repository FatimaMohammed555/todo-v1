

import React , {useEffect , useState , createContext} from 'react';
import useLocalStorage from 'use-local-storage';

export const DataContext = createContext();

//useLocalStorage

export const DataProvider = (props) => {
// const [todos , setTodos]=useState(()=> {
//   return JSON.parse(localStorage.getItem('todos')) || [];
// });

//to save all users register in localstorage key =>allUsers
const [users , setUsers]=useLocalStorage('allUsers',[]);

//to save all users loggin in localstorage key =>LogginUser
const [userInfo , setUserInfo]=useLocalStorage("LogginUser",{
  email:'',
  password:''
  });

// console.log(todos , "hhhhhhhhh");
const handelDeleteTodo = (e) =>{
  // console.log(e);
    // let newTodos = todos.filter(todo => {
    // return todo.id !== id;
    // })
    // setTodos(newTodos);
    }




//add data to localStorage
// useEffect(() => {
// // console.log(todos ,"effffff");
// localStorage.setItem('todos' , JSON.stringify(todos));
// },[todos]);



  return (
    <DataContext.Provider value={{handelDeleteTodo ,users ,setUsers,userInfo , setUserInfo}}>
      {props.children}
    </DataContext.Provider>
  )
}

// export default DataProvider

