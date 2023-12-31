import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';
import Add from './Components/Add';
import About from './Components/About';
import Inventory from './Components/Inventory';
import Update from './Components/Update';
import Delete from './Components/Delete';
import Signup from './Components/Signup';
import Details from './Components/Details';
import MainHome from './Components/MainHome';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route index path='/' element={<Login/>}/>
          <Route path='/Signup' element={<Signup/>}/>
          <Route path='/MainHome' element={<MainHome/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Details" element={<Details/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Inventory" element={<Inventory/>}/>
          <Route path="/Add" element={<Add/>}/>
          <Route path='/Update' element={<Update/>}/>
          <Route path='/Delete' element={<Delete/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;