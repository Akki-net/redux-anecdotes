import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from './store'

store.subscribe(() => {
  const storeNow = store.getState()
  storeNow.anecdotes.sort((a, b) => b.votes - a.votes)
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)