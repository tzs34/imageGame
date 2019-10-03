import React, { createContext, useReducer } from 'react'
import { gameReducer, initialState } from '../reducer'

export const GameContext = createContext()

const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState)
  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  )
}

export default GameProvider
