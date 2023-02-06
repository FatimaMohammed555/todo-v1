import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Register from './Components/Register';
import {Routes , Route} from 'react-router-dom';
import Todos from './Components/Todos';




function App() {
  return (
     <>
     <Navbar />
    <div className="App">
     <Routes>
    <Route path='login' element={<Login />} />
    <Route path='register' element={<Register />} />
    <Route path='todos' element={<Todos />} />
    </Routes>
    </div>
     </>
  );
}

export default App;
