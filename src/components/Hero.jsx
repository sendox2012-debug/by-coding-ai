import React from 'react'

export default function Hero() {
    return (
        <section id="hero" className="hero">
            <div className="hero__bg"></div>
            <div className="hero__content">
                <div className="hero__icon-wrapper">
                    <i className="ph-duotone ph-brain"></i>
                </div>
                <h1 className="hero__title">
                    <span className="hero__title-line">By Coding</span>
                    <span className="hero__title-line hero__title-line--accent">AI</span>
                </h1>
                <p className="hero__subtitle">
                    Проектная работа: Технологии будущего, которые меняют мир уже сегодня
                </p>
                <div className="hero__stats">
                    <div className="hero__stat glass-card">
                        <i className="ph-fill ph-calendar-check"></i>
                        <span className="hero__stat-number">2025</span>
                        <span className="hero__stat-label">Год расцвета ИИ</span>
                    </div>
                    <div className="hero__stat glass-card">
                        <i className="ph-fill ph-chart-line-up"></i>
                        <span className="hero__stat-number">97%</span>
                        <span className="hero__stat-label">Компаний используют ИИ</span>
                    </div>
                    <div className="hero__stat glass-card">
                        <i className="ph-fill ph-infinity"></i>
                        <span className="hero__stat-number">∞</span>
                        <span className="hero__stat-label">Возможностей</span>
                    </div>
                </div>
            </div>
        </section>
    )
}