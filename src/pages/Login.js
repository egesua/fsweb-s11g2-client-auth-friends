import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const initialValues = {
  username: "workintech",
  password: "wecandoit",
};

const Login = () => {

  const [loginFormData, setLoginFormData] = useState(initialValues);
  const {login} = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(loginFormData);
    setLoginFormData(initialValues);
  };


  const handleChange = (e) => {
    setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            USERNAME
            <input
              name="username"
              type="text"
              value={loginFormData.username}
              onChange={handleChange}
            />
          </label>
          <label>
            PASSWORD
            <input
              name="password"
              type="password"
              value={loginFormData.password}
              onChange={handleChange}
            />
          </label>
          <button type="submit">SUBMIT</button>
        </div>
      </form>
    </>
  );
}

export default Login;