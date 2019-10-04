import { getNextPair, didGuessCorrectly, isEndOfGame } from '../utils/app-utils'

test('When seenPlayersIds length is greater than allPlayers length isEndOfGame  is true', () => {
  const seenPlayersIds = [{}, {}]
  const allPlayers = [{}]
  expect(isEndOfGame(seenPlayersIds, allPlayers)).toBe(true)
})

test('When seenPlayersIds length is less than allPlayers length by 2 isEndOfGame  is false', () => {
  const seenPlayersIds = [{}, {}]
  const allPlayers = [{}, {}, {}, {}]
  expect(isEndOfGame(seenPlayersIds, allPlayers)).toBe(false)
})

test('When seenPlayersIds length is equal allPlayers length by 2 isEndOfGame  is true', () => {
  const seenPlayersIds = [{}, {}]
  const allPlayers = [{}, {}]
  expect(isEndOfGame(seenPlayersIds, allPlayers)).toBe(true)
})

test('Function getNextPair returns an array containing two player objects and an array of seen player ids', () => {
  const seenPlayerIds = []
  const allPlayers = [{ id: '1' }, { id: '2' }]

  const result = getNextPair(allPlayers, seenPlayerIds)
  expect(result).toHaveLength(3)
  expect(result[2]).toHaveLength(2)
  expect(result[2]).toContain('1')
  expect(result[2]).toContain('2')
  const total = Number(result[0].id) + Number(result[1].id)
  expect(total).toBe(3)
})

test('Function didGuessCorrectly returns 1 if selected player fppg score is greater than unselected player fppg score', () => {
  const guessedPlayerId = 2
  const players = [{ id: 1, fppg: 5 }, { id: 2, fppg: 10 }]

  const result = didGuessCorrectly(guessedPlayerId, players)
  expect(result).toBe(1)
  expect(result).not.toBe(2)
})
