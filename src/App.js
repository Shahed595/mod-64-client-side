import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Users from './components/Users/Users';
import AddUsers from './components/AddUsers/AddUsers';
import UpdateUsers from './components/UpdateUsers/UpdateUsers';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/users' element={<Users/>} />
        <Route path='/users/add' element={<AddUsers/>} /> 
        <Route path='/users/update/:id'element={<UpdateUsers/>} /> 
      </Routes>
    </div>
  );
}

export default App;
