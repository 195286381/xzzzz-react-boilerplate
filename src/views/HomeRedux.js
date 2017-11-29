import { combineReducers } from 'redux'

import list, { loadArticles } from '../components/Home/PreviewListRedux'

const reducers = combineReducers({
  list,
})

export default reducers

export const actions = {
  loadArticles,
}

