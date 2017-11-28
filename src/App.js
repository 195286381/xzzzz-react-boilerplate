import React, { Component } from 'react';
import { Provider } from 'react-redux'
import TodoApp from './TodoApp'
import store from './store'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TodoApp />
      </Provider>
    );
  }
}

export default App;
