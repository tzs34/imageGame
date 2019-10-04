import React from 'react'
import propTypes from 'prop-types'

const { number, string } = propTypes

const GameScore = ({ score, label }) => <div>{`${label} ${score}`}</div>

GameScore.propTypes = {
  score: number,
  label: string
}
export default GameScore
