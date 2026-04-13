import React, { useState } from 'react'

const widgetsData = [
  {
    id: 1,
    title: 'Нейросети',
    icon: 'ph-brain',
    color: '#007AFF', // Blue
    shortInfo: 'Основа современного ИИ.',
    fullText: 'Нейронные сети имитируют работу человеческого мозга. Они состоят из слоев узлов (нейронов), которые обрабатывают данные. Глубокое обучение (Deep Learning) использует сети с множеством слоев для решения сложнейших задач: от перевода языков до управления беспилотниками.',
    source: 'https://ru.wikipedia.org/wiki/Искусственная_нейронная_сеть',
    sourceName: 'Википедия: Нейросети'
  },
  {
    id: 2,
    title: 'Генеративный ИИ',
    icon: 'ph-magic-wand',
    color: '#AF52DE', // Purple
    shortInfo: 'Создает контент с нуля.',
    fullText: 'GenAI (Generative AI) — это модели, которые могут создавать новый контент: текст, изображения, аудио и код. Примеры: Midjourney рисует картины, Suno пишет музыку, а GitHub Copilot помогает программистам писать код быстрее.',
    source: 'https://habr.com/ru/articles/768770/',
    sourceName: 'Habr: Что такое GenAI'
  },
  {
    id: 3,
    title: 'Компьютерное зрение',
    icon: 'ph-eye',
    color: '#FF9500', // Orange
    shortInfo: 'Глаза искусственного интеллекта.',
    fullText: 'Технология, позволяющая компьютерам «видеть» и понимать изображения. Используется в FaceID для разблокировки телефона, в медицине для поиска опухолей на рентгене и в автономных автомобилях для распознавания дорожных знаков.',
    source: 'https://nvidia.ru/glossary/computer-vision',
    sourceName: 'NVIDIA: Computer Vision'
  },
  {
    id: 4,
    title: 'Обработка речи (NLP)',
    icon: 'ph-microphone',
    color: '#34C759', // Green
    shortInfo: 'Понимание человеческого языка.',
    fullText: 'Natural Language Processing позволяет машинам понимать, интерпретировать и генерировать человеческую речь. Благодаря этому работают Siri, Alexa и голосовые помощники в банках, которые могут вести диалог с клиентом.',
    source: 'https://yandex.ru/dev/dialogs/',
    sourceName: 'Yandex Dialogs'
  },
  {
    id: 5,
    title: 'Этика ИИ',
    icon: 'ph-scales',
    color: '#FF3B30', // Red
    shortInfo: 'Безопасность и законы.',
    fullText: 'Важнейшая область, изучающая риски ИИ: предвзятость алгоритмов, замена людей рабочими местами, дипфейки и авторское право. В ЕС уже принят «AI Act» — первый в мире закон, регулирующий использование искусственного интеллекта.',
    source: 'https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai',
    sourceName: 'EU AI Act'
  },
  {
    id: 6,
    title: 'ИИ в играх',
    icon: 'ph-game-controller',
    color: '#5856D6', // Indigo
    shortInfo: 'Умные враги и миры.',
    fullText: 'В видеоиграх ИИ управляет поведением неигровых персонажей (NPC). Современные технологии, مثل NVIDIA ACE, позволяют создавать персонажей, с которыми можно говорить голосом, и они будут отвечать осмысленно, используя LLM-модели.',
    source: 'https://blogs.nvidia.com/blog/ace/',
    sourceName: 'NVIDIA ACE'
  }
]

export default function Widgets() {
  const [activeWidget, setActiveWidget] = useState(null)

  return (
    <section className="section widgets-section">
      <div className="container">
        <h2 className="section__title">
          <i className="ph-duotone ph-app-window section__icon"></i>
          Виджеты знаний
        </h2>
        <p className="section__description">
          Нажми на виджет, чтобы узнать больше и перейти к источнику.
        </p>

        <div className="widgets-grid">
          {widgetsData.map((widget) => (
            <div 
              key={widget.id} 
              className="widget-card"
              onClick={() => setActiveWidget(widget)}
              style={{ '--accent': widget.color }}
            >
              <div className="widget-header">
                <i className={`ph-fill ${widget.icon}`}></i>
              </div>
              <div className="widget-body">
                <h3>{widget.title}</h3>
                <p>{widget.shortInfo}</p>
              </div>
              <div className="widget-footer">
                <span>Подробнее</span>
                <i className="ph-bold ph-arrow-right"></i>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Модальное окно (Popup) */}
      {activeWidget && (
        <div className="modal-overlay" onClick={() => setActiveWidget(null)}>
          <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveWidget(null)}>
              <i className="ph-bold ph-x"></i>
            </button>
            
            <div className="modal-icon" style={{ color: activeWidget.color }}>
              <i className={`ph-fill ${activeWidget.icon}`}></i>
            </div>
            
            <h2 className="modal-title">{activeWidget.title}</h2>
            <p className="modal-text">{activeWidget.fullText}</p>
            
            <a 
              href={activeWidget.source} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="modal-link"
            >
              <i className="ph-bold ph-globe"></i>
              {activeWidget.sourceName}
            </a>
          </div>
        </div>
      )}
    </section>
  )
}