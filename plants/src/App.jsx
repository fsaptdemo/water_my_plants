import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
//styles
import "./App.css";
//components
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Account from "./components/Account";
import NavBar from "./components/Navbar";
import PlantList from "./components/PlantList";
import PlantDetails from "./components/PlantDetails";
import AddPlant from "./components/AddPlant";

function App() {
  const [token, setToken] = useState(null);

  console.log("token", token);
  return (
    <div>
      <BrowserRouter>
        <NavBar token={token} setToken={setToken} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register setToken={setToken} />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/account" element={<Account token={token} />} />
          <Route path="/plantlist" element={<PlantList token={token} />} />
          <Route
            path="/plantdetails/:id"
            element={<PlantDetails token={token} />}
          />
          <Route path="/addplant" element={<AddPlant token={token} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
