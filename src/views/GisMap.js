import React, { Component } from 'react'
import './GisMap.less'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import MapHeader from '../components/GisMap/MapHeader'
import MapContent from '../components/GisMap/MapContent'
import MapSiderbar from '../components/GisMap/MapSiderbar'

import { actions } from './GisMapRedux'

class GisMap extends Component {

  componentDidMount() {
    const { loadDataSource } = this.props
    loadDataSource()
  }

  render() {
    const { dataSource, selectLayer } = this.props
    return (
      <div className="map-contaienr">
        <MapHeader />
        <MapSiderbar
          dataSource={dataSource}
          selectLayer={selectLayer}
        />
        <MapContent />
      </div>
    )
  }
}
const mapStateToProps = (state, ownerProps) => {
  return {
    dataSource: state.gisMap.layerTabel.dataSource,
  }
}

const mapDispatchToProps = (dispatch, ownerProps) => {
  return {
    loadDataSource: () => dispatch(actions.loadLayer()),
    selectLayer: (key) => dispatch(actions.selectLayer(key)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GisMap)
