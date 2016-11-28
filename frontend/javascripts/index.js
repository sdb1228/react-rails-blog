import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import templateReducers from './reducers'
import App from './components/App'
import About from './components/About'
import page from 'page'

require('styles/main.scss')

let store = createStore(templateReducers)

page.base('/')
page('/', showHistory)
page('/extensions', showExtensions)
page('/settings', showSettings)
page('*', notfound)
page()

function showHistory (ctx) {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('content')
  )
}

function showExtensions (ctx) {
  ReactDOM.render(
    <Provider store={store}>
      <About />
    </Provider>,
    document.getElementById('content')
  )
}

function showSettings (ctx) {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('content')
  )
}

function notfound (ctx) {
  ReactDOM.render(
    <Provider store={store}>
      <About />
    </Provider>,
    document.getElementById('content')
  )
}

