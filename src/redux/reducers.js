/**
 * reducer 配置 (除了路由 reducer)
 */

import homeReducer from '../views/HomeRedux'
import { reducer as filterReducer } from '../components/TodoList/filter'
import { reducer as todosReducer } from '../components/TodoList/todos'

const reducers = {
  home: homeReducer,
  filter: filterReducer,
  todos: todosReducer,
}

export default reducers
