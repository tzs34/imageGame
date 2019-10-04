import React from 'react'
import {
  END_GAME,
  ERROR_LOADING_PLAYERS,
  LOADING_PLAYERS
} from '../reducer/types'
import propTypes from 'prop-types'

import '../css/game-button.css'

const { string, func } = propTypes

const GameInformation = ({
  gameStatus,
  reStartGame,
  loadingLabel,
  warningLabel,
  endGameLabel
}) => {
  function handleRestartGame() {
    if (reStartGame) {
      reStartGame()
    }
  }

  function renderGameInformation(status) {
    console.log(loadingLabel, warningLabel, endGameLabel)
    if (status === LOADING_PLAYERS) {
      return <div className="info-text">{loadingLabel}</div>
    }
    if (status === ERROR_LOADING_PLAYERS) {
      return <div className="warning-text">{warningLabel}</div>
    }
    if (status === END_GAME) {
      return (
        <button className="restart-btn" onClick={handleRestartGame}>
          {endGameLabel}
        </button>
      )
    }
  }

  return <>{renderGameInformation(gameStatus)}</>
}

GameInformation.propTypes = {
  gameStatus: string.isRequired,
  reStartGame: func
}

export default GameInformation
