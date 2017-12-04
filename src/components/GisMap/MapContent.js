import React, { Component } from 'react'

import olOperator from './olOperator'

import './MapContent.less'


class MapContent extends Component {

  render() {
    return (
      <div id="mapContent">
      </div>
    )
  }

  componentDidMount() {
    // 元素挂载后，进行地图的初始化
    olOperator.init({
      id: 'mapContent'
    });
  }

  componentWillUnmount() {

  }
}

export default MapContent
