import React from 'react'
import propTypes from 'prop-types'

const { number } = propTypes

const GameScore = ({ score }) => <div>{`Your current score is ${score}`}</div>

GameScore.propTypes = {
  score: number
}
export default GameScore
