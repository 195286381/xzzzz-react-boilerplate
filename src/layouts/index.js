import React from 'react'

const Layout = ({ children }) => (
    <div className="container">
        <Header />
        <div className="content">
            {children}
        </div>
    </div>
)