/**
 * 全局路由配置
 */

import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom'

import Frame from '../layouts/Frame'
import Home from '../views/Home'
import Detail from '../views/Detail'
import TodoList from '../views/TodoList'
import GisMap from '../views/GisMap'
import Login from '../views/Login'
import Menu from '../views/Menu'
import GisMonitor from '../views/GisMonitor'

const routes =() => (
  <Router>
    {/* <Frame> */}
      <Switch>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/detail" component={Detail}/>
        <Route exact path="/todoList" component={TodoList}/>
        <Route exact path="/menu" component={Menu}/>
        <Route exact path="/gisMap" component={GisMap}/>
        <Route exact path="/gisMonitor" component={GisMonitor}/>
        <Route exact path="/" component={Login}/>
      </Switch>
    {/* </Frame> */}
  </Router>
)

export default routes
