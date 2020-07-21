import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import Authentication from "../components/Authentication"
import { ISAUTHENTICATED } from "../utils/actions";
import { useStoreContext } from "../utils/GlobalState";
import "../CSS/login.css"

function Login() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [data, setData] = useState(null);
  const history = useHistory();
  const [state, dispatch] = useStoreContext();
  const register = () => {
    Axios({
      method: "POST",
      data: {
        username: registerUsername,
        password: registerPassword,
      },
      withCredentials: true,
      url: "https://project3-business-idea-forum.herokuapp.com/api/auth/register",
    }).then((res) => console.log(res));
  };
  const login = () => {
    Axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "https://project3-business-idea-forum.herokuapp.com/api/auth/login",
    }).then(({data}) => 
    {
      if (data._id){
        // console.log(data)
        localStorage.setItem("usernameData", data.username)
      dispatch({ type: ISAUTHENTICATED, user: data })
      history.push("/home")}

    });
  };
  const getUser = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "https://project3-business-idea-forum.herokuapp.com/api/auth/user",
    }).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  };
  return (
    <div className="Login">
        <h4 className="LoginTitle">Welcome!<br/>Please log in or register below</h4>
      <div className=" animate__animated animate__backInLeft">
        <h3 className="LoginText">Register</h3>
        <input
          className="InputField mb-3"
          placeholder="username"
          onChange={(e) => setRegisterUsername(e.target.value)}
        />
        <input
          className="InputField"
          placeholder="password"
          type="password"
          onChange={(e) => setRegisterPassword(e.target.value)}
        />
        <button className= "btn btn-info ml-3" onClick={register}>Submit</button>
      </div>

      <div className="animate__animated animate__backInRight">
        <h3 className="LoginText">Login</h3>
        <input
          className="InputField"
          placeholder="username"
          onChange={(e) => setLoginUsername(e.target.value)}
        />
        <input
          className="InputField"
          placeholder="password"
          type="password"
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <button className= "btn btn-info ml-3" onClick={login}>Submit</button>
      </div>

      {/* <div>
        <h1>Get User</h1>
        <button onClick={getUser}>Submit</button>
        {data ? <h1>Welcome Back {data.username}</h1> : null}
      </div> */}
    </div>
  );
}

export default Login;
