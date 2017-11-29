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
const LOAD_ARTICLES = 'LOAD_ARTICLE'
const LOAD_ARTICLES_SUCCESS = 'LOAD_ARTICLE_SUCCESS'
const LOAD_ARTICLES_ERROR = 'LOAD_ARTICLE_ERROR'

// actions
export const loadArticles = () => {
  return {
    types: [LOAD_ARTICLES, LOAD_ARTICLES_SUCCESS, LOAD_ARTICLES_ERROR],
    url: '/api/articles.json',
  };
}

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ARTICLES: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }

    case LOAD_ARTICLES_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        articleList: action.payload,
      };
    }

    case LOAD_ARTICLES_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    default:
      return state;
  }
}

export default reducer;
