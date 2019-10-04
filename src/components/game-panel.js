import React, { useContext, useEffect } from 'react'
import { GameContext } from '../context/gameContext'
import PlayerTile from './player-tile'
import GameInformation from './game-infomration'
import GameButton from './game-button'
import GameScore from './game-score'
import { cleanUpPlayerData } from '../utils/app-utils'
import {
  START_GAME,
  LOADING_PLAYERS,
  PLAYERS_LOADED,
  ERROR_LOADING_PLAYERS,
  PLAY,
  RESTART_GAME
} from '../reducer/types'
import Copy from '../utils/copy'

const {
  labels: {
    buttonLabel,
    hintLabel,
    loadingLabel,
    warningLabel,
    endLabel,
    scoreLabel
  }
} = Copy

const GamePanel = () => {
  const { state, dispatch } = useContext(GameContext)

  async function loadGameData() {
    let response = await fetch(process.env.REACT_APP_PLAYERS_JSON_URL)
    return await response.json()
  }

  useEffect(() => {
    dispatch({ type: LOADING_PLAYERS })
    loadGameData().then(({ players }) => {
      if (players && players.length > 0) {
        let formattedPlayers = cleanUpPlayerData(players)
        dispatch({ type: PLAYERS_LOADED, payload: formattedPlayers })
      } else {
        dispatch({ type: ERROR_LOADING_PLAYERS })
      }
    })
  }, [])

  function handlePlayerSelect(id) {
    dispatch({ type: PLAY, payload: id })
  }

  function renderPlayers(nextPair) {
    return nextPair.map(({ id, first_name, last_name, images }) => {
      let { default: imageData } = images
      return (
        <PlayerTile
          key={id}
          name={`${first_name} ${last_name}`}
          imageData={imageData}
          id={id}
          onClick={handlePlayerSelect}
        />
      )
    })
  }

  function startGame() {
    dispatch({ type: START_GAME })
  }

  function handleOnKeyPress(e) {
    if (e.key == 'Enter') {
      startGame()
    }
    if (e.key == 'Space') {
      startGame()
    }
  }

  function endCurrentGame() {
    dispatch({ type: RESTART_GAME })
  }
  const { nextPair, gameStatus, playerScore, playing } = state

  return (
    <>
      {playing && (
        <div className="game-panel">
          {' '}
          {nextPair.length > 0 ? (
            renderPlayers(nextPair)
          ) : (
            <GameInformation
              gameStatus={gameStatus}
              reStartGame={endCurrentGame}
              loadingLabel={loadingLabel}
              warningLabel={warningLabel}
              endGameLabel={endLabel}
            />
          )}
        </div>
      )}

      <GameButton
        label={buttonLabel}
        hint={hintLabel}
        showButton={!playing}
        onClick={() => {
          startGame()
        }}
        onKeyPress={handleOnKeyPress}
        data-testid="game-button"
      />
      <div>
        {playing && <GameScore score={playerScore} label={scoreLabel} />}
      </div>
    </>
  )
}

export default GamePanel
