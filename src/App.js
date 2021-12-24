import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Students from './components/Students/Students';
import AddStudents from './components/AddStudents/AddStudents';
import UpdateStudents from './components/UpdateStudents/UpdateStudents';

function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/students" element={<Students/>}/>
       <Route path="/students/add" element={<AddStudents/>} />
       <Route path="/students/update/:id" element={<UpdateStudents/>}/>
     </Routes>
    </div>
  );
}

export default App;
