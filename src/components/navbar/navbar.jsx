import React from 'react';
import "./navbar.css";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-logo">RECAMP</Link>
            <div className="navbar-links">
                <Link to="/" className="navbar-link">Главная</Link>
                <Link to ="/menu" className="navbar-link">Меню</Link>
                <Link to="/about" className="navbar-link">О нас</Link>
                <Link to="/login" className="navbar-link">Войти</Link>
            </div>
        </nav>
    );
}

export default Navbar;