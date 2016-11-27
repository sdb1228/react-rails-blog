import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import template from './reducers'
import App from './components/App'

require('styles/main.scss')

let store = createStore(template)

const main = document.getElementById('content')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  main
)
