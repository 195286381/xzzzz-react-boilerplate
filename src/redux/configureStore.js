/**
 * configureStore 是生成 Redux Store 的关键文件.
 */

import { createStore, combineReducers, compose, applyMiddleware } from 'redux'

import reducers from './reducers'