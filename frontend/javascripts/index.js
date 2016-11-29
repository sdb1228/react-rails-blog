import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import templateReducers from './reducers'
import App from './components/App'
import About from './components/About'
import PageError from './components/PageError'
import page from 'page'

require('styles/main.scss')

let store = createStore(templateReducers)

page('/', showRoot)
page('/posts', showHistory)
page('/about', showAbout)
page('/settings', showSettings)
page('*', notfound)
page()

function showRoot (ctx) {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('content')
  )
}

function showHistory (ctx) {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('content')
  )
}

function showAbout (ctx) {
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
      <PageError />
    </Provider>,
    document.getElementById('content')
  )
}

