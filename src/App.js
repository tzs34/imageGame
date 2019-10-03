import React from 'react'
import GameProvider from './context/gameContext'
import GamePanel from './components/game-panel'
import propTypes from 'prop-types'

import '../src/css/app.css'

const { string } = propTypes

const App = ({ title }) => (
  <GameProvider>
    <main className="app">
      <h1 className="app-header">{title}</h1>
      <GamePanel data-testid="game-panel" />
    </main>
  </GameProvider>
)

App.propTypes = {
  title: string.isRequired
}

export default App
