import { NavLink, useNavigate } from "react-router-dom";
import "./styles/Navbar.css";

function NavBar(props) {
  const navigate = useNavigate();

  const logoutUser = () => {
    props.setToken(null);
    navigate("/");
  };

  if (props.token) {
    return (
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/plantlist">Plant List</NavLink>
        <NavLink to="/account">Account</NavLink>
        <NavLink to="/addplant">Add Plant</NavLink>
        <a onClick={logoutUser}>Logout</a>
      </nav>
    );
  }
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
    </nav>
  );
}

export default NavBar;
