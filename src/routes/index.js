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

const routes =() => (
  <Router>
    {/* <Frame> */}
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/detail" component={Detail}/>
        <Route exact path="/todoList" component={TodoList}/>
        <Route exact path="/gisMap" component={GisMap}/>
      </Switch>
    {/* </Frame> */}
  </Router>
)

export default routes
