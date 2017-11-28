/**
 * export 导出 actions
 * export default 导出 reducer
 */

// initialState
const initialState = {
  loading: true,
  error: false,
  articleList: [],
}

// actionsTypes
const LOAD_ARTICLE = 'LOAD_ARTICLE'
const LOAD_ARTICLE_SUCCESS = 'LOAD_ARTICLE_SUCCESS'
const LOAD_ARTICLE_ERROR = 'LOAD_ARTICLE_ERROR'

// actions
const loadArticle = () => {

}

// reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    default: return state
  }
}

export default reducer;
