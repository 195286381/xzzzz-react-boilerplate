import React from 'react'

import Nav from './Nav'

const Frame = ({ children }) => (
  <div className="container">
    <Nav />
    <hr />
    <div className="content">
      {children}
    </div>
  </div>
)

export default Frame
