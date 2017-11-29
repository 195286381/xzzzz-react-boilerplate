import React, { Component } from 'react';
import { Provider } from 'react-redux'
// import TodoApp from './TodoApp'
// import store from './store'
import Routes from './routes'
import createStore from './redux/configureStore'
const store = createStore()
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App
