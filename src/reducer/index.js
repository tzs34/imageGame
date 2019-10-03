import {
  READY,
  START_GAME,
  LOADING_PLAYERS,
  PLAYERS_LOADED,
  ERROR_LOADING_PLAYERS,
  PLAY,
  END_GAME,
  RESTART_GAME
} from './types'
import { getNextPair, didGuessCorrectly, isEndOfGame } from '../utils/app-utils'

const gameReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case START_GAME:
      return { ...state, ...{ playing: true } }
    case LOADING_PLAYERS:
      return { ...state, ...{ gameStatus: LOADING_PLAYERS } }
    case PLAYERS_LOADED:
      let [playerOne, playerTwo, seenPlayersIds] = getNextPair(
        payload,
        state.seenPlayersIds
      )
      return {
        ...state,
        ...{
          players: payload,
          seenPlayersIds,
          gameStatus: PLAYERS_LOADED,
          nextPair: [playerOne, playerTwo]
        }
      }
    case ERROR_LOADING_PLAYERS:
      return { ...state, ...{ gameStatus: ERROR_LOADING_PLAYERS } }
    case PLAY:
      let score = didGuessCorrectly(payload, state.nextPair)
      let playerScore = state.playerScore + score

      if (isEndOfGame(state.seenPlayersIds, state.players)) {
        return {
          ...state,
          ...{ players: state.players, gameStatus: END_GAME, nextPair: [] }
        }
      } else {
        let [nextPlayerOne, nextPlayerTwo, updatedSennPlayerIds] = getNextPair(
          state.players,
          state.seenPlayersIds
        )
        return {
          ...state,
          ...{
            playerScore,
            seenPlayersIds: updatedSennPlayerIds,
            gameStatus: PLAYERS_LOADED,
            nextPair: [nextPlayerOne, nextPlayerTwo]
          }
        }
      }
    case RESTART_GAME:
      let [playerone, playertwo] = getNextPair(state.players, [])
      return {
        ...initialState,
        ...{
          players: state.players,
          gameStatus: PLAYERS_LOADED,
          nextPair: [playerone, playertwo],
          seenPlayersIds: []
        }
      }
    default:
      return state
  }
}

const initialState = {
  playing: false,
  players: [],
  playerScore: 0,
  seenPlayersIds: [],
  nextPair: [],
  gameStatus: READY
}

export { initialState, gameReducer }
