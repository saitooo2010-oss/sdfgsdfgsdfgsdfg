import React from "react";
import "./about.css";
import Donk from "../../images/donk.jpg";
import { Link } from "react-router-dom";

function About() {
    return (
        <div className="about-page">
            <header className="about-header">
                <h1 className="about-title">О нас</h1>
                <p className="about-subtitle">История. Люди. Вкус.</p>
            </header>

            <main className="about-main">
                <section className="about-biography">
                    <div className="bio-photo-box">
                        <img 
                            src={Donk} 
                            alt="" 
                        />
                    </div>
                    
                    <div className="bio-text-box">
                        <h2 className="bio-subtitle">Слово основателя</h2>
                        <div className="bio-paragraphs">
                            <p>
                                RECAMP начался не с бизнес-плана, а с простой мечты: создать место, 
                                куда хочется возвращаться. Место, где гастрономия не отделена от уюта, 
                                а каждый гость чувствует искреннее гостеприимство.
                            </p>
                            <p>
                                Мы верим в силу деталей. В свежесть утреннего улова, в аромат свежеиспеченного 
                                хлеба, в улыбку официанта. Мы не просто готовим еду, мы создаем моменты, 
                                которые остаются в памяти. Наша команда — это семья, объединенная общей 
                                страстью к совершенству.
                            </p>
                            <p>
                                Добро пожаловать в наш дом. Надеемся, вы разделите нашу любовь.
                            </p>
                        </div>
                        <div className="bio-signature">
                            <span className="signature-name">Даниил Donk</span>
                            <span className="signature-title">Основатель, RECAMP</span>
                        </div>
                    </div>
                </section>
            </main>
            <div className="back-button">
                <Link to="/" className="back-link">Вернуться на главную</Link>
            </div>
        </div>
    );
}

export default About;