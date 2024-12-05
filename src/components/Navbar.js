// import React from "react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
    const { isAuthenticated, logout } = useContext(AuthContext);

    const handleLogout = () =>{
        logout();
        window.location.href = '/';

    };
    return(
        <nav>
            <ul>
            {isAuthenticated ?(
                    <>
                <li> <Link to = "/dashboard">Dashboard</Link></li>
                <li><button onClick={handleLogout}>Logout</button></li>
                </>
                ):(
                    <>
                     <li><Link to="/">Login</Link></li>
                     <li><Link to="/signup">Signup</Link></li>
                    </>
                )}
            </ul>
        </nav>
    );
};
export default Navbar;
