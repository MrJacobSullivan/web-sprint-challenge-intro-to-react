// This is for the fake API. Do not delete!
import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import App from './App'
import theme from './theme'
import './reset.css'
import './index.css'

import { worker } from './mocks/browser'
worker.start()

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
