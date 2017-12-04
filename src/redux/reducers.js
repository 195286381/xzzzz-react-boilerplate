/**
 * reducer 配置 (除了路由 reducer)
 */

import homeReducer from '../views/HomeRedux'
import { reducer as filterReducer } from '../components/TodoList/filter'
import { reducer as todosReducer } from '../components/TodoList/todos'
import gisMapReducer from '../views/GisMapRedux'
const reducers = {
  home: homeReducer,
  filter: filterReducer,
  todos: todosReducer,
  gisMap: gisMapReducer,
}

export default reducers
