import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Preview.css'

class Preview extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    push: PropTypes.string.isRequired,
  }

  handleNavigate(id, e) {
    const { push } = this.props
    e.preventDefault()

    push(`/detail/${id}`)
  }

  render() {
    return (
      <article className="article-preview-item">
        <h1 className="title">
          <a href={`/detail/${this.props.id}`} onClick={this.handleNavigate.bind(this, this.props.id)}>
            {this.props.title}
          </a>
        </h1>
        <span className="date">{this.props.date}</span>
        <p className="desc">{this.props.desc}</p>
      </article>
    )
  }
}

export default Preview
