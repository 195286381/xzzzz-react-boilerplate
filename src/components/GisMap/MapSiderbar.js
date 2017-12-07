import React, { Component } from 'react'

import './MapSiderbar.less'

import LayerTable from './LayerTable'

import closeBtn from '../../static/images/close.png'
import openBtn from '../../static/images/open.png'

class MapSiderbar extends Component {
  static defaultProps = {
    dataSource: [],
  }
  constructor() {
    super(...arguments)

    this.handleClick = this.handleClick.bind(this)
    this.state = {
      isOpen: true,
    }
  }

  isShowSiderbar() {
    const { isOpen } = this.state
  }

  handleClick() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    const { isOpen } = this.state
    const { dataSource, selectLayer } = this.props
    return (
      <div className="mapsiderbar">
        <div className="mapsiderbar-container"

          style={{
            left: `${isOpen ? 0 : -650}px`,
          }}
        >
          <LayerTable dataSource={dataSource} selectLayer={selectLayer}/>
          <div className="mapsidervar-btn"
            style={{
              backgroundImage: `url(${isOpen ? closeBtn : openBtn})`
            }}
            onClick={this.handleClick}
          />
        </div>
      </div>
    )
  }
}

export default MapSiderbar
