import React, { Component } from 'react'
import PropTypes from 'prop-types'

class PreviewList extends Component {
  static propTypes = {
    loadArticles: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    articleList: PropTypes.arrayOf(PropTypes.object),
  }

  constructor() {
    super(...arguments)
  }

  componentDidMount() {
    const { loadArticles } = this.props
  }

  render() {
    const { loading, error, articleList } = this.props

    if (loading) {

    }

    if (error) {

    }

    return (
      <div>
        {
          articleList.map(item => (<preview {...item} key={item.id} />))
        }
      </div>
    )
  }
}

export default PreviewList
