import React, { useEffect } from "react";
import "./advantages.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Advantages() {
    useEffect(() => {
        AOS.init({
            duration: 1000, 
            once: true,     
        });
    }, []);

    return (
        <div className="advantages-container">
            <div className="head-text" data-aos="fade-up">
                <h2>Наши преимущества</h2>
            </div>
            
            <div className="advantages-list">
                <div className="advantage-item" data-aos="fade-up" data-aos-delay="100">
                    <h3>Изысканная кухня</h3>
                    <p>Наше меню предлагает разнообразные блюда, приготовленные из свежих и качественных ингредиентов...</p>
                </div>

                <div className="advantage-item" data-aos="fade-up" data-aos-delay="300">
                    <h3>Уютная атмосфера</h3>
                    <p>Мы создали теплую и гостеприимную обстановку, где вы можете расслабиться...</p>
                </div>

                <div className="advantage-item" data-aos="fade-up" data-aos-delay="500">
                    <h3>Профессиональный сервис</h3>
                    <p>Наш дружелюбный и внимательный персонал всегда готов обеспечить вам высокий уровень обслуживания...</p>
                </div>
            </div>

            <div className="check-about-us" data-aos="zoom-in-up" data-aos-delay="700">
                <Link to="/about" className="about-link">Узнать больше о нас</Link>
            </div>
        </div>
    );
}

export default Advantages;