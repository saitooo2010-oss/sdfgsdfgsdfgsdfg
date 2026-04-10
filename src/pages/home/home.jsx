import React from "react";
import "./home.css";
import Main from "../../components/main/main";
import Advantages from "../../components/advantages/advantages";

function Home() {
    return (
        <div className="home-container">
            <Main />
            <Advantages />
        </div>
    )
}

export default Home;