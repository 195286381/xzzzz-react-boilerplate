import React from 'react'
import './Menu.less'
import Head from '../components/GisMap/MapHeader'
import { Link } from 'react-router-dom'
import tvImg from '../static/images/tv.png'
const Menu = () => {
  return (
    <div>
       <Head />
       <div className="gis-menu-box gis-menu-box-first">
         <img src={tvImg} alt="监控"/>
         <span className="gis-menu-box-title"><Link to="/gisMonitor">GIS 集群监控</Link></span>
       <br/>
       <span className="gis-menu-box-description">监控 GIS 集群系统运行状态</span>
       </div>
       <div className="gis-menu-box">
       <img src={tvImg} alt="监控"/>
       <span className="gis-menu-box-title"><Link to="/gisMap">GIS 图层管理</Link></span>
       <br/>
       <span className="gis-menu-box-description">管理及查看 GIS 服务器集群上部署的图层</span>
       </div>

    </div>
  )
}

export default Menu
