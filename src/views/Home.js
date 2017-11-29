import React, { Component } from 'react'
import PreviewList from '../components/Home/PreviewList'
import { connect } from 'react-redux'

import {actions } from './HomeRedux'
import { push } from 'react-router-redux'

class Home extends Component {
  render() {
    const { loadArticles, articleList, push } = this.props

    return (
      <div>
        <h1>Home</h1>
        <PreviewList {...this.props}/>
      </div>
    )
  }
}

export default connect(
  state => ({
    articleList: state.home.list.articleList,
  }),
  {
    push,
    actions,
  }
)(Home)
