import React from 'react'
import './MapHeader.less'
import earthImage from '../../static/images/earth.png'
import { RaisedButton } from 'material-ui'

const style = {
  button: {
    // width: 140,
    height: 30,
    marginRight: 12,
  }
}

const MapHeader = ({ loginFlag, onClick }) => {
  return (
    <div className="Map-Header">
      <div className="Map-Header-Left">
        <img src={earthImage} alt="地图"/>
        <span>WMS</span>
      </div>
      <div className="Map-Header-right">
        {
          (function() {
            if (loginFlag) {
              return (
                <RaisedButton
                  label="登出"
                  style={style.button}
                  secondary={true}

                  onClick={() => {onClick()}}
                />
              )
            } else {
              return (
                <RaisedButton
                  label="退出"
                  primary={true}
                  secondary={true}
                  style={style.button}
                  onClick={() => {onClick()}}
                />
              )
            }
          })()
        }
      </div>
    </div>
  )
}

MapHeader.defaultProps = {
  loginFlag: true,
  onClick: function() {
    alert('onClick')
  }
}

export default MapHeader
