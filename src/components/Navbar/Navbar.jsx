import React from "react";
import './Navbar.css';


function Navbar(){

    return(
        <div className="navbar">
        <div className="brand">
            <h1>Revolve Solutions</h1>
        </div>
        <div className="menu">
            <p>Products</p>
            <p>Solutions</p>
            <p>Resources</p>
            <p>Company</p>
        </div>
    </div>
    )
}

export default Navbar;