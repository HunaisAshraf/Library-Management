import "../styles/adminlogin.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import adminImg from '../image/admnloginimg.png'



const AdminLogin = (props) => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();

  let handleSubmit = () => {
    if (email == props.data && password == 1234) {
      navigate("/admin-portal");
    } else {
      alert("invalid username or password");
    }
  };
  return (
    <div className="adminlogin">
      <div className="adm-nav">
        <Navbar />
      </div>
      <div className="adm-login">
        <div className="adm-detail">
          <h1>ADMIN LOGIN</h1>

          <form className="adm-form" action="" onSubmit={handleSubmit}>
            <label htmlFor="">EMAIL</label>
            <br />
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />{" "}
            <br />
            <label htmlFor="">Password</label>
            <br />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="adm-btns">
              <button>LOG IN</button>
            </div>
          </form>
        </div>
        <div className="adm-img">
          <img src={adminImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
