import React from 'react'
import { Link } from 'react-router-dom'

import './Nav.less'
const Nav = () => (
  <div className="nav">
    <ul>
      <li>
        <Link to="/">主页</Link>
      </li>
      <li>
        <Link to="/detail">详情</Link>
      </li>
      <li>
        <Link to="/todoList">todoList</Link>
      </li>
      <li>
        <Link to="/gisMap">gis地图</Link>
      </li>
    </ul>
  </div>
)

export default Nav
