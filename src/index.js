import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Copy from '../src/utils/copy'

ReactDOM.render(<App title={Copy.title} />, document.getElementById('root'))
