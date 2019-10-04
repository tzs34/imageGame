import React, { createContext, useReducer } from 'react'
import { gameReducer, initialState } from '../reducer'
import propTypes from 'prop-types'

const { element } = propTypes

export const GameContext = createContext()

const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState)
  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  )
}

// used for testing only
export const GameProviderValueByProp  = ({ children, defaultState}) => {
    const [state, dispatch] =  useReducer(gameReducer, defaultState)
    return (
      <GameContext.Provider value={{ state, dispatch }}>
        {children}
      </GameContext.Provider>
    )
  }

GameProvider.propTypes = {
  children: element.isRequired
}



export default GameProvider
