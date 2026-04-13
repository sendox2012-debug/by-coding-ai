import React from 'react'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__grid">
                    <div className="footer__col">
                        <h3 className="footer__logo"><i className="ph-fill ph-robot"></i> By Coding AI</h3>
                        <p>Проектная работа.</p>
                    </div>
                    <div className="footer__col">
                        <h4>Команда</h4>
                        <ul className="footer__list">
                            <li><i className="ph-fill ph-user-circle"></i> <strong>Журавель Т.А.</strong> (Руководитель)</li>
                            <li><i className="ph-fill ph-code"></i> Субхонов С.</li>
                            <li><i className="ph-fill ph-code"></i> Шаров А.</li>
                        </ul>
                    </div>
                    <div className="footer__col">
                        <h4>Инфо</h4>
                        <ul className="footer__list">
                            <li><i className="ph-fill ph-calendar"></i> 2026 год</li>
                        </ul>
                    </div>
                </div>
                <div className="footer__bottom">
                    <p>© 2026 By Coding AI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
