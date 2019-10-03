import React from 'react'
import propTypes from 'prop-types'

const { string } = propTypes

const PlayerLabel = ({ name }) => (
  <>
    <h3 className="player-label">{name}</h3>
  </>
)

PlayerLabel.propTypes = {
  name: string.isRequired
}

export default PlayerLabel
