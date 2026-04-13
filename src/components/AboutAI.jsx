import React from 'react'

const goals = [
    { icon: 'ph-target', title: 'Цель проекта', text: 'Изучить и систематизировать информацию о современных технологиях искусственного интеллекта.' },
    { icon: 'ph-student', title: 'Образовательная', text: 'Создать доступный ресурс, где каждый ученик сможет понять основы ИИ без сложной терминологии.' },
    { icon: 'ph-globe-hemisphere-west', title: 'Актуальность', text: 'ИИ трансформирует медицину, транспорт и бизнес. Знание основ ИИ — ключевая компетенция 21 века.' },
    { icon: 'ph-microscope', title: 'Исследовательская', text: 'Проанализировать текущее состояние рынка ИИ и сравнить ведущие модели 2025 года.' },
]

export default function AboutAI() {
    return (
        <section id="about" className="section about">
            <div className="container">
                <h2 className="section__title">
                    <i className="ph-duotone ph-robot section__icon"></i>
                    Что такое ИИ?
                </h2>
                <p className="section__description">
                    <strong>Искусственный интеллект (ИИ)</strong> — это область информатики, занимающаяся созданием систем, способных выполнять задачи, требующие человеческого интеллекта: распознавание речи, принятие решений и визуальное восприятие.
                </p>

                <div className="about__timeline">
                    {[
                        { year: '1956', text: 'Термин «ИИ» предложен на конференции в Дартмуте' },
                        { year: '1997', text: 'Deep Blue побеждает Гарри Каспарова в шахматы' },
                        { year: '2012', text: 'Революция глубокого обучения в компьютерном зрении' },
                        { year: '2022', text: 'ChatGPT и бум генеративного ИИ' },
                        { year: '2025', text: 'Мультимодальные агенты и ИИ в науке', active: true }
                    ].map((item, i) => (
                        <div key={i} className={`about__timeline-item ${item.active ? 'about__timeline-item--active' : ''}`}>
                            <div className="about__timeline-year">{item.year}</div>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>

                <div className="goals-grid">
                    {goals.map((goal, i) => (
                        <div key={i} className="glass-card goal-card">
                            <div className="goal-card__icon">
                                <i className={`ph-duotone ${goal.icon}`}></i>
                            </div>
                            <h3 className="goal-card__title">{goal.title}</h3>
                            <p className="goal-card__text">{goal.text}</p>
                        </div>
                    ))}
                </div>

                <div className="glass-card about__info-block">
                    <h3 className="about__info-title"><i className="ph-fill ph-chart-bar"></i> Ключевые факты</h3>
                    <ul className="about__info-list">
                        <li><i className="ph-fill ph-trend-up"></i> Рынок ИИ достигнет <strong>$1.8 трлн</strong> к 2030 году</li>
                        <li><i className="ph-fill first-aid-kit"></i> Точность диагностики рака с ИИ — <strong>94%</strong></li>
                        <li><i className="ph-fill ph-car-profile"></i> Автономные авто проехали <strong>100+ млн миль</strong></li>
                        <li><i className="ph-fill ph-paint-brush"></i> Генеративный ИИ создаёт контент за секунды</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}