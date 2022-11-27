import './App.css';
import Navbar from "./templates/Navbar";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import {Routes, Route, BrowserRouter} from 'react-router-dom';

function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div><Navbar/> <Home/></div>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
