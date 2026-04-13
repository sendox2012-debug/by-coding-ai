import React from 'react'

const topAI = [
    { rank: 1, name: 'GPT-5', company: 'OpenAI', icon: 'ph-open-ai-logo', desc: 'Флагман с мультимодальностью и глубоким рассуждением.' },
    { rank: 2, name: 'Claude Opus 4.6', company: 'Anthropic', icon: 'ph-chat-centered-text', desc: 'Лучший код и работа с документами. Очень "человечный".' },
    { rank: 3, name: 'Gemini flash 3', company: 'Google', icon: 'ph-google-logo', desc: 'Нативная работа с видео и аудио. Глубокая интеграция.' },
    { rank: 4, name: 'Llama 3.3', company: 'Meta', icon: 'ph-meta-logo', desc: 'Лучшая открытая модель. Бесплатна для бизнеса.' },
    { rank: 5, name: 'DeepSeek R1', company: 'DeepSeek', icon: 'ph-fish-simple', desc: 'Китайский прорыв. Дешевле и мощнее конкурентов.' },
    { rank: 6, name: 'Midjourney v6', company: 'MJ Research', icon: 'ph-image', desc: 'Король генерации изображений. Фотореализм.' },
]

export default function TopAI() {
    return (
        <section id="top" className="section top-ai">
            <div className="container">
                <h2 className="section__title">
                    <i className="ph-duotone ph-trophy section__icon"></i>
                    Топ ИИ 2025
                </h2>
                <p className="section__description">
                    Лидеры индустрии по бенчмаркам и влиянию на рынок.
                </p>

                <div className="top-ai__grid">
                    {topAI.map((ai) => (
                        <div key={ai.rank} className={`glass-card top-ai__card ${ai.rank === 1 ? 'top-ai__card--first' : ''}`}>
                            <div className="top-ai__header">
                                <span className="top-ai__rank">#{ai.rank}</span>
                                <i className={`ph-fill ${ai.icon} top-ai__brand-icon`}></i>
                            </div>
                            <h3 className="top-ai__name">{ai.name}</h3>
                            <span className="top-ai__company">{ai.company}</span>
                            <p className="top-ai__desc">{ai.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}