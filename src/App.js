import React, { Component } from 'react';
// import { Provider } from 'react-redux'
// import TodoApp from './TodoApp'
// import store from './store'
import Routes from './routes'
class App extends Component {
  render() {
    return (
      // <Provider store={store}>
      //   <TodoApp />
      // </Provider>
      <Routes />
    );
  }
}

export default App
