import React from 'react'
import './MapHeader.less'
import earthImage from '../../static/earth.png'
import { RaisedButton } from 'material-ui'

const style = {
  button: {
    // width: 140,
    height: 30,
    marginRight: 12,
  }
}

const MapHeader = () => (
  <div className="Map-Header">
    <div className="Map-Header-Left">
      <img src={earthImage} alt="地图"/>
      <span>WMS</span>
    </div>
    <div className="Map-Header-right">
      <RaisedButton
        label="登陆"
        style={style.button}
        primary={true}
        onClick={() => {alert('login')}}
      />
      <RaisedButton label="退出" secondary={true} style={style.button}/>
    </div>
  </div>
)

export default MapHeader
