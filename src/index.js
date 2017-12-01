/**
 * 整个应用的入口
 */

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { AppContainer } from 'react-hot-loader'

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>
  , document.getElementById('root'))
