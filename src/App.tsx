import {Routes, Route} from 'react-router-dom';
import './App.css';
import { Login } from './Pages/Login/login';
import { StudentList } from './Pages/List/student-list';
import { useNavigate, useLocation } from 'react-router-dom';
import { AddEdit } from './Pages/AddEdit/add-edit';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
        <Routes>
          <Route path="/" element={ <Login navigate={navigate}/>}></Route>
          <Route path="/list" element={ <StudentList navigate={navigate}/>}></Route>
          <Route path="/add" element={ <AddEdit navigate={navigate} location={location}/>}></Route>
          <Route path="/edit/:id" element={ <AddEdit navigate={navigate} location={location}/>}></Route>
        </Routes>
    </>
  );
}

export default App;
