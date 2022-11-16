import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../styles/usersidebar.css";

const UserSideBar = () => {
let navigate = useNavigate()

let handleClick = ()=>{
  navigate("/")
}

  return (
    <div className="user-sidebar">
      <div className="user">
        <div className="image">
          <img
            src="https://www.transparentpng.com/thumb/user/blue-male-user-profile-transparent-png-2lbgMx.png"
            alt=""
          />
        </div>
        <div className="userName">
          <p>Admin</p>
          <p>user@gmail.com</p>
        </div>
      </div>

      <div className="menu">
        <ul>
          <li>
            <Link to="/user-portal/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/user-portal/book-list" className="link">
              Book List
            </Link>
          </li>
        </ul>
      </div>
      <div >
      <button className="logout-btn" onClick={handleClick}>Log Out</button>
      </div>
    </div>
  );
};
export default UserSideBar;