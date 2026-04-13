import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutAI from './components/AboutAI'
import MachineLearning from './components/MachineLearning'
import Widgets from './components/Widgets' // <--- Добавили
import TopAI from './components/TopAI'
import AIDemo from './components/AIDemo'
import Quiz from './components/Quiz'
import Footer from './components/Footer'

function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      <Header scrollY={scrollY} />
      <Hero />
      <AboutAI />
      <MachineLearning />
      <Widgets /> {/* <--- Вставили сюда */}
      <TopAI />
      <AIDemo />
      <Quiz />
      <Footer />
    </div>
  )
}

export default App