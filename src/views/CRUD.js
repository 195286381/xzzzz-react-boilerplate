import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from '../components/CRUD/Nav'
import { navActions } from './CRUDRedux.js'
class CRUD extends Component {
  render() {
    const {
      articles,
      removeArticle
    } = this.props;
    return (
      <div>
        <h1 style={{fontSize: 30}}>CRUD title</h1>
        <Nav
          articles={articles}
          handleDeleteBtn={removeArticle}
        />
        <button onClick={() => {console.log('hello world')}}>click me</button>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    articles: state.curd.nav.fileList
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    removeArticle: function(id) {
      dispatch(navActions.deleteFileById(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CRUD)
