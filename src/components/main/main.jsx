import React from "react";
import "./main.css";
import { Link } from "react-router-dom";

function Main() {
    return (
        <div className="main-container">
            <div className="head-text">
                <h1>RECAMP</h1>
                <p className="mini-description">Изысканная кухня и уютная атмосфера для незабываемых моментов</p>
            </div>
            <div className="menu">
                <Link to="/menu" className="menu-link">Посмотреть меню</Link>
            </div>
        </div>
    )
}

export default Main;