import React from 'react'
import './GisMap.less'

import MapHeader from '../components/GisMap/MapHeader'
import MapContent from '../components/GisMap/MapContent'
// import MapSiderbar from '../components/GisMap/MapSiderbar'
const GisMap = () => {
  return (
    <div className="map-contaienr">
      <MapHeader />
      {/* <MapSiderbar /> */}
      <MapContent />
    </div>
  )
}

export default GisMap
