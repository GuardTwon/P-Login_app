import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./screens/app/home";
import Login from "./screens/app/login";
import Register from "./screens/app/register";
// guardo el valor de logg para verificar si esta logeado  en storage
function App() {
  
  localStorage.setItem("loginuser","false")

  
  return (
    <BrowserRouter>
     

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" render   element={<Login />} />
        <Route path="/register" element={<Register />} />
        
      </Routes>
  
    </BrowserRouter>
  );
}

export default App;
