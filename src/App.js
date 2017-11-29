import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Routes from './routes'
import createStore from './redux/configureStore'
import DevTools from './redux/DevTools'

const store = createStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Routes />
          <DevTools />
        </div>
      </Provider>
    );
  }
}

export default App
