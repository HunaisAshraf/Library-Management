import { Link } from "react-router-dom";
import '../styles/navbar.css'

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="nav-brand"><h1>ELibrary</h1></div>
            <div className="nav-link">
                <ul>
                    <li><Link to="/" className="home-link">Home</Link></li>
                    
                </ul>
            </div>
            <div className="nav-btn"> 
            <Link to="/admin-login">
                        <button>Admin</button>
                    </Link>
                    <Link to="/user-login">
                        <button>User</button>
                    </Link></div>
        </nav>
     );
}
 
export default Navbar;