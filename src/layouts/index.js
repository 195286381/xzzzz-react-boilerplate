import React from 'react'

import Header from './Header'

const Layout = ({ children }) => (
  <div className="container">
    <Header />
    <div className="content">
      {children}
    </div>
  </div>
)

export default Layout
