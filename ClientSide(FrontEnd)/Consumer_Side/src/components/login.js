import "./login.css";

import { useState } from "react";

function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  function btnClick() {
    if (username === "" || password === "") {
      alert("fill all details");
    } else {
      let logininfo = JSON.parse(localStorage.getItem("signup")) || [];
      for (let i = 0; i < logininfo.length; i++) {
        if (
          logininfo[i].username === username &&
          logininfo[i].password === password
        ) {
          alert("login Successfull");
          localStorage.setItem("logindata", JSON.stringify(logininfo[i]));
          break;
        } else {
          alert("user does not exsist");
        }
      }
    }
  }

  return (
    <div>
      <div></div>

      <div className="form-container">
        <div className="form-container4">
          <h1 className="h11">Login page</h1>
          <input
            type="text"
            className="username"
            placeholder="UserName"
            onChange={(e) => setusername(e.target.value)}
          />
          <br></br>
          <input
            type="number"
            className="password"
            placeholder="password"
            onChange={(e) => setpassword(e.target.value)}
          />
          <br></br>
          <button className="submit1" onClick={btnClick}>
            Submit
          </button>
          <h4>signup page</h4>
          <h4 className="span">Forgot page</h4>
        </div>
      </div>
    </div>
  );
}

export default Login;
