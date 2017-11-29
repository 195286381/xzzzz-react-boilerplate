import React, { Component } from 'react'
import PreviewList from '../components/Home/PreviewList'
import { connect } from 'react-redux'

import { actions } from './HomeRedux'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux';

class Home extends Component {
  render() {
    const { loadArticles, articleList, push, list } = this.props
    return (
      <div>
        <h1>Home</h1>
        <PreviewList
          loadArticles={loadArticles}
          loading={list.loading}
          error={list.error}
          articleList={list.articleList}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownerProps) => {
  return {
    list: state.home.list
  }
}

const mapDispatchToProps = (dispatch, ownerProps) => ({
  loadArticles: () => dispatch(actions.loadArticles()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home)
