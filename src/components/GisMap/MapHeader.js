import React from 'react'
import { Link } from 'react-router-dom'

import './MapHeader.less'
import earthImage from '../../static/images/earth.png'
import userPic from '../../static/images/user.png'

import { Popover } from 'antd'

const style = {
  button: {
    // width: 140,
    height: 30,
    marginRight: 12,
  }
}

const text = (
  <div
    style={{textAlign: 'center'}}
  >
    当前用户: Admin
  </div>
)

const content = (
  <div>
    <div
      className="map-header-loginout"
      style={{
        textAlign: 'center'
      }}
    ><Link to="/">退出登陆</Link></div>
  </div>

)

const MapHeader = ({ loginFlag, onClick }) => {
  return (
    <div className="Map-Header">
      <div className="Map-Header-Left">
        <Link to="/menu">
          <img src={earthImage} alt="地图"/>
          <span>WMS</span>
        </Link>
      </div>
      <Popover placement="bottomRight" title={text} content={content} trigger="click">
        <div className="Map-Header-right">
          <img src={userPic} alt="用户"/>
        </div>
      </Popover>

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
