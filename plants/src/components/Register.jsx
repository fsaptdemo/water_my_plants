import { useState } from "react";
//api
import { useRegisterMutation } from "../redux/api";
//styles
import "./styles/Register.css";

function Register(props) {
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
    email: "",
    first_name: "",
    last_name: "",
  });
  const [errorMsg, setError] = useState(null);
  const [register] = useRegisterMutation();

  const eventHandler = async (event) => {
    event.preventDefault();
    const { data, error } = await register(userInfo);

    if (error) {
      //error.data.message --> error message
      setError(error.data.message);
      console.log(`error ${JSON.stringify(error.data.message)}`);
    } else {
      //data.token --> has token value
      props.setToken(data.token);
      console.log(`data ${JSON.stringify(data.token)}`);
    }
  };

  const onUserInput = (e) => {
    if (errorMsg) {
      setError(null);
    }

    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Register</h2>
      {/* error message */}
      {errorMsg ? <p>{errorMsg}</p> : <span />}
      <form onSubmit={eventHandler}>
        <label>
          Username
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={userInfo.username}
            onChange={onUserInput}
          />
        </label>
        <label htmlFor="password">
          Password{" "}
          <input
            type="password"
            placeholder="password"
            name="password"
            value={userInfo.password}
            onChange={onUserInput}
          />
        </label>
        <label>
          Email
          <input
            className="snailMail"
            type="text"
            placeholder="Email"
            name="email"
            value={userInfo.email}
            onChange={onUserInput}
          />
        </label>
        <label htmlFor="first_name">
          First Name{" "}
          <input
            className="fName"
            name="first_name"
            type="text"
            placeholder="first_name"
            value={userInfo.first_name}
            onChange={onUserInput}
          />
        </label>
        <label>
          Last Name
          <input
            className="lName"
            type="text"
            placeholder="last_name"
            name="last_name"
            value={userInfo.last_name}
            onChange={onUserInput}
          />
        </label>
        <button className="submitBtn">Submit</button>
      </form>
    </div>
  );
}

export default Register;
