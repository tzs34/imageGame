import React from 'react'
import PlayerLabel from './player-label'
import propTypes from 'prop-types'

const { string, func, object } = propTypes

const PlayerTile = ({ name, id, imageData, onClick }) => {
  function handleOnClick() {
    if (onClick) {
      onClick(id)
    }
  }
  return (
    <div className="player-tile">
      <div onClick={handleOnClick}>
        <img
          src={imageData.url}
          alt={name}
          width={imageData.width}
          height={imageData.height}
        />
      </div>
      <PlayerLabel name={name} />
    </div>
  )
}

PlayerTile.propTypes = {
  name: string.isRequired,
  id: string.isRequired,
  imageData: object.isRequired,
  onClick: func
}

export default PlayerTile
