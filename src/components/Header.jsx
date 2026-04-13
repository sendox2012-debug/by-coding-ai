import React, { useState } from 'react'
import { Link } from 'react-scroll'

const navItems = [
    { label: 'Главная', to: 'hero', icon: 'ph-house' },
    { label: 'Об ИИ', to: 'about', icon: 'ph-info' },
    { label: 'ML', to: 'ml', icon: 'ph-brain' },
    { label: 'Топ ИИ', to: 'top', icon: 'ph-trophy' },
    { label: 'Демо', to: 'demo', icon: 'ph-chat-circle-text' },
    { label: 'Квиз', to: 'quiz', icon: 'ph-check-circle' },
]

export default function Header({ scrollY }) {
    const [menuOpen, setMenuOpen] = useState(false)
    const isScrolled = scrollY > 20

    return (
        <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
            <div className="header__container">
                <Link to="hero" smooth duration={500} className="header__logo">
                    <i className="ph-fill ph-robot header__logo-icon"></i>
                    <span className="header__logo-text">By Coding AI</span>
                </Link>

                <button
                    className={`header__burger ${menuOpen ? 'header__burger--active' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Меню"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
                    {navItems.map((item) => (
                        <Link
                            key={item.to}
                            to={item.to}
                            smooth
                            duration={500}
                            className="header__link"
                            onClick={() => setMenuOpen(false)}
                        >
                            <i className={`ph ${item.icon}`}></i>
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    )
}