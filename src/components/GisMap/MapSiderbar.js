import React, { Component } from 'react'

import './MapSiderbar.less'

class MapSiderbar extends Component {
  constructor() {
    super(...arguments)

    this.handleClick = this.handleClick.bind(this)
    this.state = {
      // 边栏是否打开
      isOpen: true,
    }
  }

  // 处理边栏的点击事件
  handleClick() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    const { children } = this.props
    return (
      <div className="mapsiderbar">
        <div className="mapsiderbar-container">
          这个是边栏
          <div className="mapsidervar-btn" />
          children
        </div>
      </div>
    )
  }
}

export default MapSiderbar
