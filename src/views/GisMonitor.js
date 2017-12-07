import React from 'react'

import './GisMonitor.less'

const GisMonitor = ({ className }) => {
  debugger;
  return (
     <div className="gisMonitor">
       <h1 className={`${className}-title`}>功能开发中...</h1>
     </div>
   )
}

GisMonitor.defaultProps = {
  className: 'gisMonitor',
}

export default GisMonitor
