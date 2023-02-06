

import React , {useEffect , useState , createContext} from 'react';
import useLocalStorage from 'use-local-storage';

export const DataContext = createContext();

//useLocalStorage

export const DataProvider = (props) => {
// const [todos , setTodos]=useState(()=> {
//   return JSON.parse(localStorage.getItem('todos')) || [];
// });

let [users , setUsers]=useLocalStorage('allUsers',[]);

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


//get data from localStorage
// useEffect(() => {
// const todos = JSON.parse(localStorage.getItem('todos'));
// if(todos){
//   setTodos(todos);
// }
// },[]);


// todos,setTodos 

  return (
    <DataContext.Provider value={{handelDeleteTodo ,users ,setUsers,userInfo , setUserInfo}}>
      {props.children}
    </DataContext.Provider>
  )
}

// export default DataProvider

