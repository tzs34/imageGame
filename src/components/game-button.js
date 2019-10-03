import React from 'react'
import '../css/game-button.css'
const GameButton = ({ label, hint, showButton, onClick }) => {
  function handleOnClick() {
    if (onClick) {
      onClick()
    }
  }
  return (
    <div className="gb-content">
      {showButton ? (
        <button className="gb-btn" onClick={handleOnClick}>
          {label}
        </button>
      ) : (
        <span className="gb-hint">{hint}</span>
      )}
    </div>
  )
}

export default GameButton
