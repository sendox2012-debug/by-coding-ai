import React, { useState } from 'react'

const quizData = [
    { q: 'Что такое ИИ?', opts: ['Робот', 'Область информатики', 'Язык программирования', 'ОС'], correct: 1 },
    { q: 'Какой НЕ тип ML?', opts: ['С учителем', 'Без учителя', 'С наказанием', 'С подкреплением'], correct: 2 },
    { q: 'Кто создал ChatGPT?', opts: ['Google', 'Meta', 'OpenAI', 'Apple'], correct: 2 },
    { q: 'Что такое Deep Learning?', opts: ['Глубокое обучение', 'Поиск в Google', 'Вирус', 'Игра'], correct: 0 },
]

export default function Quiz() {
    const [current, setCurrent] = useState(0)
    const [answers, setAnswers] = useState([])
    const [selected, setSelected] = useState(null)
    const [showResult, setShowResult] = useState(false)
    const [finished, setFinished] = useState(false)

    const handleSelect = (idx) => { if (!showResult) setSelected(idx) }
    const handleConfirm = () => { if (selected !== null) { setShowResult(true); setAnswers([...answers, selected]) } }
    const handleNext = () => {
        if (current < quizData.length - 1) {
            setCurrent(current + 1); setSelected(null); setShowResult(false)
        } else { setFinished(true) }
    }
    const restart = () => { setCurrent(0); setAnswers([]); setSelected(null); setShowResult(false); setFinished(false) }

    const score = answers.reduce((acc, ans, i) => acc + (ans === quizData[i].correct ? 1 : 0), 0)

    if (finished) {
        return (
            <section id="quiz" className="section quiz">
                <div className="container">
                    <h2 className="section__title"><i className="ph-duotone ph-exam section__icon"></i> Результаты</h2>
                    <div className="glass-card quiz__result">
                        <i className={`ph-fill ${score === quizData.length ? 'ph-trophy' : 'ph-star'} quiz__result-icon`}></i>
                        <h3>{score} из {quizData.length}</h3>
                        <p>{score === quizData.length ? 'Идеально! Ты эксперт!' : 'Хорошая попытка!'}</p>
                        <button className="ios-btn-primary" onClick={restart}>Пройти заново</button>
                    </div>
                </div>
            </section>
        )
    }

    const q = quizData[current]
    return (
        <section id="quiz" className="section quiz">
            <div className="container">
                <h2 className="section__title"><i className="ph-duotone ph-question section__icon"></i> Квиз</h2>

                <div className="quiz__progress-bar-bg">
                    <div className="quiz__progress-bar-fill" style={{ width: `${((current + 1) / quizData.length) * 100}%` }}></div>
                </div>

                <div className="glass-card quiz__question">
                    <h3 className="quiz__q-text">{q.q}</h3>
                    <div className="quiz__opts">
                        {q.opts.map((opt, i) => {
                            let cls = 'quiz__opt'
                            if (showResult) {
                                if (i === q.correct) cls += ' quiz__opt--correct'
                                else if (i === selected) cls += ' quiz__opt--wrong'
                            } else if (i === selected) cls += ' quiz__opt--selected'

                            return (
                                <button key={i} className={cls} onClick={() => handleSelect(i)} disabled={showResult}>
                                    {showResult && i === q.correct && <i className="ph-fill ph-check"></i>}
                                    {showResult && i === selected && i !== q.correct && <i className="ph-fill ph-x"></i>}
                                    {!showResult && <i className="ph-bold ph-circle"></i>}
                                    {opt}
                                </button>
                            )
                        })}
                    </div>
                    <div className="quiz__actions">
                        {!showResult ? (
                            <button className="ios-btn-primary" onClick={handleConfirm} disabled={selected === null}>Ответить</button>
                        ) : (
                            <button className="ios-btn-secondary" onClick={handleNext}>Далее <i className="ph-bold ph-arrow-right"></i></button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}