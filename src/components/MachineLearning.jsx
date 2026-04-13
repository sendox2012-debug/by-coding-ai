import React, { useState } from 'react'

const mlTypes = [
    {
        type: 'С учителем',
        icon: 'ph-chalkboard-teacher',
        description: 'Модель обучается на размеченных данных («вход → правильный ответ»).',
        examples: ['Спам-фильтры', 'Распознавание лиц', 'Прогноз цен'],
        analogy: 'Ученик решает задачи, а учитель проверяет ответы.',
    },
    {
        type: 'Без учителя',
        icon: 'ph-detective',
        description: 'Модель сама ищет закономерности и группы в данных без подсказок.',
        examples: ['Сегментация клиентов', 'Поиск аномалий', 'Рекомендации'],
        analogy: 'Ребёнок сам сортирует игрушки по цветам без инструкций.',
    },
    {
        type: 'С подкреплением',
        icon: 'ph-game-controller',
        description: 'Агент учится методом проб и ошибок, получая награды или штрафы.',
        examples: ['AlphaGo', 'Роботы Boston Dynamics', 'Автопилот Tesla'],
        analogy: 'Дрессировка собаки: за трюк — лакомство, за ошибку — ничего.',
    },
]

const steps = [
    { num: 1, title: 'Сбор данных', text: 'Данные — это «топливо» для ИИ.' },
    { num: 2, title: 'Подготовка', text: 'Очистка и нормализация информации.' },
    { num: 3, title: 'Выбор модели', text: 'Нейросеть, дерево решений или SVM.' },
    { num: 4, title: 'Обучение', text: 'Настройка весовых коэффициентов.' },
    { num: 5, title: 'Оценка', text: 'Тест на данных, которых модель не видела.' },
    { num: 6, title: 'Деплой', text: 'Запуск модели в реальном мире.' },
]

export default function MachineLearning() {
    const [activeTab, setActiveTab] = useState(0)

    return (
        <section id="ml" className="section ml">
            <div className="container">
                <h2 className="section__title">
                    <i className="ph-duotone ph-cpu section__icon"></i>
                    Машинное обучение
                </h2>
                <p className="section__description">
                    Компьютеры учатся выполнять задачи без явного программирования, находя паттерны в больших данных.
                </p>

                <div className="glass-card ml__analogy">
                    <h3 className="ml__analogy-title"><i className="ph-fill ph-lightbulb"></i> Аналогия</h3>
                    <p>
                        Вместо правил («у кошек острые уши») мы показываем компьютеру <strong>10 000 фото</strong>.
                        Он сам находит отличия. Это и есть машинное обучение.
                    </p>
                </div>

                <h3 className="ml__subtitle">Типы обучения</h3>
                <div className="ml__tabs">
                    {mlTypes.map((item, i) => (
                        <button
                            key={i}
                            className={`ml__tab ${activeTab === i ? 'ml__tab--active' : ''}`}
                            onClick={() => setActiveTab(i)}
                        >
                            <i className={`ph-duotone ${item.icon}`}></i>
                            {item.type}
                        </button>
                    ))}
                </div>

                <div className="glass-card ml__card">
                    <h3 className="ml__card-title">
                        <i className={`ph-duotone ${mlTypes[activeTab].icon}`}></i>
                        Обучение {mlTypes[activeTab].type}
                    </h3>
                    <p className="ml__card-desc">{mlTypes[activeTab].description}</p>
                    <div className="ml__analogy-box">
                        <i className="ph-fill ph-puzzle-piece"></i> <strong>Аналогия:</strong> {mlTypes[activeTab].analogy}
                    </div>
                    <h4 className="ml__examples-title">Примеры:</h4>
                    <ul className="ml__examples-list">
                        {mlTypes[activeTab].examples.map((ex, i) => (
                            <li key={i}><i className="ph-fill ph-check-circle"></i> {ex}</li>
                        ))}
                    </ul>
                </div>

                <h3 className="ml__subtitle">Как это работает?</h3>
                <div className="ml__steps">
                    {steps.map((step, i) => (
                        <div key={i} className="glass-card ml__step">
                            <div className="ml__step-number">{step.num}</div>
                            <div className="ml__step-content">
                                <h4 className="ml__step-title">{step.title}</h4>
                                <p className="ml__step-text">{step.text}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="glass-card ml__neural">
                    <h3 className="ml__neural-title"><i className="ph-duotone ph-network"></i> Нейронная сеть</h3>
                    <div className="ml__neural-grid">
                        <div className="ml__neural-item">
                            <h4><i className="ph-fill ph-circle"></i> Нейрон</h4>
                            <p>Базовая единица обработки данных.</p>
                        </div>
                        <div className="ml__neural-item">
                            <h4><i className="ph-fill ph-stack"></i> Слои</h4>
                            <p>Входной, скрытые и выходной слои.</p>
                        </div>
                        <div className="ml__neural-item">
                            <h4><i className="ph-fill ph-sliders-horizontal"></i> Веса</h4>
                            <p>Параметры, которые настраиваются при обучении.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}