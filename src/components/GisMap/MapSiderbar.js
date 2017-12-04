import React, { Component } from 'react'

import './MapSiderbar.less'

import LayerTable from './LayerTable'

class MapSiderbar extends Component {
  constructor() {
    super(...arguments)

    this.handleClick = this.handleClick.bind(this)
    this.state = {
      // 边栏是否打开
      isOpen: true,
    }
  }

  isShowSiderbar() {
    // 判断是否显示
    const { isOpen } = this.state
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
          <LayerTable />
          <div className="mapsidervar-btn" />
        </div>
      </div>
    )
  }
}

export default MapSiderbar


// Ant Design of React
