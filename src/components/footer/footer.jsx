import React from "react";
import "./footer.css";

function Footer() {
    return (
        <div className="footer-container">
            <div className="header-text">
                <h2>RECAMP</h2>
                <p className="mini-description">Лучший ресторан в городе</p>
            </div>
            <div className="contact">
                <h3>Контакты</h3>
                <p className="number">+7 (XXX) XXX-XX-XX</p>
                <p className="email">info@recamp.ru</p>
            </div>
            <div className="work-hour">
                <h3>Часы работы</h3>
                <p className="hours">Пн-Вс: 10:00 — 23:00</p>
            </div>
            <div className="rights">
                <p>© 2026 RECAMP. Все права защищены.</p>
            </div>
        </div>
    )
}

export default Footer;