import React from "react";
import logo from "./components/logo.png"

export default function Navbar(){
    return(
        <nav>
            <img src={logo} className="logo-img"></img>
        </nav>
    )
}