import React from "react";
import "./menu.css";
import Food from "../../components/menu-api/menu-api";

function Menu () {
    return(
        <div className="menu">
            <h1 className="menu-title">Меню</h1>
            <Food />
        </div>
    )
}

export default Menu;