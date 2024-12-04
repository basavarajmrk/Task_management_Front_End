import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const handleLogout = () =>{
        localStorage.removeItem('token');
        window.location.href = '/';

    };
    return(
        <nav>
            <ul>
                <li> <Link to = "/dashboard">Dashboard</Link></li>
                <li><Link to = "/signup">Signup</Link></li>
                <li><button onClick={handleLogout}>Logout</button></li>

            </ul>
        </nav>
    );
};
export default Navbar;
