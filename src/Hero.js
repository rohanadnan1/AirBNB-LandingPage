import React from "react";
import hero from "./components/hero.png"

export default function Hero(){
    return (
        <div className="hero-section">
            <img src={hero} className="hero-img"></img>
            <h1>
                Online Experience
            </h1>
            <p>
                Join unique interactive activities led by one of a kind host all without leaving home
            </p>
        </div>
    )
}