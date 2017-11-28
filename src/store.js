import { createStore, combineReducers } from 'redux'

import { reducer as filter } from './filter'
import { reducer as todos } from './todos'

const reducers = combineReducers({
  filter,
  todos
})

const store = createStore(reducers)

const middlewares = [];
if (process.env.NODE_ENV !== 'production') {
    // 生成环境做处理
}
export default store
