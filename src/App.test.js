import React from 'react'
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react'
import App from './App'
import Copy from '../src/utils/copy'

const {
  title,
  labels: { buttonLabel }
} = Copy

describe('<App />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = render(<App title={title} />)
  })

  it('should render without error', () => {
    expect(wrapper.container).toBeDefined()
    expect(wrapper.container).not.toBeNull()
  })
  it('should render the title text', () => {
    const { getByText } = wrapper
    expect(getByText(title)).toBeDefined()
    expect(getByText(title)).toBeVisible()
  })
  it('should render a button with correct label to start game', () => {
    const { getByText } = wrapper
    expect(getByText(buttonLabel)).toBeDefined()
  })
})
