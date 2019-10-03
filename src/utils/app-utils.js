function randomNumberUpTo(max) {
  return Math.floor(Math.random() * max)
}

function isNotIncluded(items, predicate) {
  return function(obj) {
    return !items.includes(obj[predicate])
  }
}

function getRandomPlayer(players) {
  let index = randomNumberUpTo(players.length)
  let randomPlayer = players.splice(index, 1)
  return [randomPlayer[0], players]
}

export function getNextPair(allPlayers, seenPlayerIds) {
  let notSelected = isNotIncluded(seenPlayerIds, 'id')

  let availablePlayers = allPlayers.filter(notSelected)

  let [playerOne, remainingPlayers] = getRandomPlayer(availablePlayers)
  let [playerTwo] = getRandomPlayer(remainingPlayers)
  seenPlayerIds.push(playerOne.id, playerTwo.id)
  return [playerOne, playerTwo, seenPlayerIds]
}

export function didGuessCorrectly(guessedPlayerID, currentPlayers) {
  const guessedPlayerFPPG = currentPlayers.find(
    ({ id }) => guessedPlayerID === id
  ).fppg
  const otherPlayerFPPG = currentPlayers.find(
    ({ id }) => guessedPlayerID !== id
  ).fppg
  return guessedPlayerFPPG > otherPlayerFPPG ? 1 : 0
}

export function isEndOfGame(seenPlayerIds, allPlayers) {
  let threshold = allPlayers.length - 2
  return threshold < seenPlayerIds.length
}

export function cleanUpPlayerData(data) {
  return data.map(player => {
    let fppg = Math.round(Number(player.fppg))
    let id = String(player.id)
    return { ...player, ...{ id, fppg } }
  })
}
