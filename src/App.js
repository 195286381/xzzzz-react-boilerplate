import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Routes from './routes'
import createStore from './redux/configureStore'
import DevTools from './redux/DevTools'
import { MuiThemeProvider } from 'material-ui'
import './App.css'
import Frame from './layouts/Frame'
const store = createStore()

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Provider store={store}>
          <div>
            <Routes />
            <DevTools />
          </div>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App
