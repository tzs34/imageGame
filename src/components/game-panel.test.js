import React from 'react'
import ReactDOM from 'react-dom'
import { waitForElement, render, fireEvent } from '@testing-library/react'
import { GameProviderValueByProp } from '../context/gameContext'
import GamePanel from './game-panel'
import Copy from '../utils/copy'
import { PLAYERS_LOADED } from '../reducer/types'

const {
  labels: { buttonLabel, hintLabel }
} = Copy

const players = [
  {
    id: '1',
    first_name: 'Joe',
    last_name: 'Blogs',
    images: { default: { width: 200, height: 200, url: 'player-one-url' } }
  },
  {
    id: '2',
    first_name: 'Jane',
    last_name: 'Blogs',
    images: { default: { width: 200, height: 200, url: 'player-two-url' } }
  }
]
const defaultState = {
  playing: false,
  players,
  playerScore: 0,
  seenPlayersIds: [],
  nextPair: players,
  gameStatus: PLAYERS_LOADED
}

describe('<GamePanel/>', () => {
  let wrapper
  beforeEach(() => {
    wrapper = render(
      <GameProviderValueByProp defaultState={defaultState}>
        <GamePanel />
      </GameProviderValueByProp>
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
    const { getByText, getByTestId, getByAltText } = wrapper
    const gameBtn = getByText(buttonLabel)
    fireEvent.click(gameBtn)
    await waitForElement(() => getByText(hintLabel))
    expect(getByText(hintLabel)).toBeDefined()
    expect(getByTestId('player-tile-1')).toBeDefined()
    expect(getByTestId('player-tile-2')).toBeDefined()
    expect(getByText('Joe Blogs')).toBeDefined()
    expect(getByText('Jane Blogs')).toBeDefined()
    expect(getByAltText('image of Joe Blogs')).toBeDefined()
    expect(getByAltText('image of Jane Blogs')).toBeDefined()
  })
})
