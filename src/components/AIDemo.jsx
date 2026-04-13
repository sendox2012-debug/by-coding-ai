import React, { useState, useRef, useEffect } from 'react'

// База ответов (та же самая)
const aiResponses = {
    'привет': 'Привет! 👋 Я демо-бот By Coding AI. Спроси меня про ИИ!',
    'что такое ии': 'ИИ — это системы, выполняющие задачи, требующие человеческого интеллекта (зрение, речь, решения). 🧠',
    'машинное обучение': 'Подраздел ИИ, где компьютеры учатся на данных. Бывает с учителем, без и с подкреплением. 📊',
    'нейросеть': 'Математическая модель мозга. Слои нейронов обрабатывают данные через веса. 🧬',
    'chatgpt': 'Чат-бот от OpenAI. Самая популярная языковая модель в мире. 💬',
    'будущее': 'ИИ-агенты, роботы, персонализированная медицина и, возможно, AGI (общий интеллект). 🚀',
}

const defaultResponses = [
    'Интересно! 🤔 Спроси лучше про: машинное обучение, нейросети или ChatGPT.',
    'Я пока учусь! 💡 Попробуй спросить: «Что такое ИИ?» или «Расскажи про ChatGPT».',
]

export default function AIDemo() {
    const [messages, setMessages] = useState([
        { role: 'ai', text: 'Привет! Я виртуальный ассистент проекта. Спроси меня об ИИ! 👇' }
    ])
    const [input, setInput] = useState('')
    const [isTyping, setIsTyping] = useState(false)
    const messagesEndRef = useRef(null)

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages])

    const getResponse = (userMsg) => {
        const lower = userMsg.toLowerCase()
        for (const [key, response] of Object.entries(aiResponses)) {
            if (lower.includes(key)) return response
        }
        return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
    }

    const handleSend = () => {
        if (!input.trim()) return
        const userMessage = input.trim()
        setMessages(prev => [...prev, { role: 'user', text: userMessage }])
        setInput('')
        setIsTyping(true)

        setTimeout(() => {
            setMessages(prev => [...prev, { role: 'ai', text: getResponse(userMessage) }])
            setIsTyping(false)
        }, 1000)
    }

    return (
        <section id="demo" className="section ai-demo">
            <div className="container">
                <h2 className="section__title">
                    <i className="ph-duotone ph-chat-circle-dots section__icon"></i>
                    Демо ИИ
                </h2>

                <div className="ios-chat-container glass-card">
                    <div className="ios-chat-messages">
                        {messages.map((msg, i) => (
                            <div key={i} className={`ios-message ios-message--${msg.role}`}>
                                {msg.role === 'ai' && <i className="ph-fill ph-robot ios-msg-icon"></i>}
                                <div className="ios-msg-bubble">{msg.text}</div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="ios-message ios-message--ai">
                                <i className="ph-fill ph-robot ios-msg-icon"></i>
                                <div className="ios-msg-bubble ios-typing">
                                    <span></span><span></span><span></span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="ios-input-area">
                        <input
                            type="text"
                            className="ios-input"
                            placeholder="Сообщение..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        />
                        <button className="ios-send-btn" onClick={handleSend}>
                            <i className="ph-fill ph-paper-plane-right"></i>
                        </button>
                    </div>

                    <div className="ios-suggestions">
                        {['Что такое ИИ?', 'Нейросеть', 'ChatGPT', 'Будущее'].map((s) => (
                            <button key={s} className="ios-chip" onClick={() => { setInput(s); setTimeout(handleSend, 100); }}>
                                {s}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}