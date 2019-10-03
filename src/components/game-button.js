import React from 'react'
import propTypes from 'prop-types'

import '../css/game-button.css'

const { bool, string, func } = propTypes

const GameButton = ({ label, hint, showButton, onClick }) => {
  function handleOnClick() {
    if (onClick) {
      onClick()
    }
  }
  return (
    <div className="gb-content">
      {!showButton ? (
        <span className="gb-hint">{hint}</span>
      ) : (
        <button className="gb-btn" onClick={handleOnClick}>
          {label}
        </button>
      )}
    </div>
  )
}

GameButton.propTypes = {
  label: string.isRequired,
  hint: string,
  showButon: bool,
  onClick: func
}
export default GameButton
