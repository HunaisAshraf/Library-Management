import { Link } from "react-router-dom";
import "../styles/home.css";
import homeimg from '../image/homebackground.jpg'
import Navbar from "./navbar";

const Home = () => {
    return (
        <div className="home">
        {/* <nav className="navbar">
            <div className="nav-brand"><h1>ELibrary</h1></div>
            <div className="nav-link">
                <ul>
                    <li>home</li>
                    <li>about</li>
                    <li>contact</li>
                </ul>
            </div>
            <div className="nav-btn"> 
            <Link to="/admin-login">
                        <button>Admin</button>
                    </Link>
                    <Link to="/user-login">
                        <button>User</button>
                    </Link></div>
        </nav> */}
   
        <Navbar />
   
        <div className="home-content">
           <div className="home-btn">
                <h1>Need a good read? We’ve got you cover to covered.</h1>
                   <p>Browse from the largest collection of books. <br /> Read books from anywhere anytime.</p>
                    <Link to="/admin-login">
                        <button>Admin</button>
                    </Link>
                    <Link to="/user-login">
                        <button>User</button>
                    </Link>
                </div>
           <div className="home-image">
            <img src={homeimg} alt="" />
           </div>
           </div>
        </div>
    );
};

export default Home;
