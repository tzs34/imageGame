import React from 'react'
import GameProvider from './context/gameContext'
import GamePanel from './components/gamePanel'
import '../src/css/app.css'

const App = ({ title }) => (
  <GameProvider>
    <main className="app">
      <h1 className="app-header">{title}</h1>
      <GamePanel />
    </main>
  </GameProvider>
)

export default App
