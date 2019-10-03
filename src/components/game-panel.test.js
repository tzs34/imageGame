import React from 'react'
import ReactDOM from 'react-dom'
import { waitForElement, render, fireEvent } from '@testing-library/react'
import GameProvider from '../context/gameContext'
import GamePanel from './game-panel'
import Copy from '../utils/copy'

const {
  labels: { buttonLabel, hintLabel }
} = Copy

describe('<GamePanel/>', () => {
  let wrapper
  beforeEach(() => {
    wrapper = render(
      <GameProvider>
        <GamePanel />
      </GameProvider>
    )
  })

  it('should render without error', () => {
    expect(wrapper.container).toBeDefined()
    expect(wrapper.container).not.toBeNull()
  })

  it('should render a button with correct label to start game', () => {
    const { getByText } = wrapper
    expect(getByText(buttonLabel)).toBeDefined()
  })

  it('should have an onClick function that starts the game', async () => {
    const { getByText } = wrapper
    const gameBtn = getByText(buttonLabel)
    fireEvent.click(gameBtn)
    await waitForElement(() => getByText(hintLabel))
    expect(getByText(hintLabel)).toBeDefined()
  })
})
