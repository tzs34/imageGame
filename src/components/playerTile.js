import React from 'react'
import PlayerLabel from './playerLabel'

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

export default PlayerTile
