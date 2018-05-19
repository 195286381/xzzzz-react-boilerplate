import React from 'react'
import { Button } from 'antd'
import { green200, yellow600 } from 'material-ui/styles/colors';
const Nav = (props) => {
    const { articles, handleDeleteBtn } = props
    return (
      <div style={{border: '5px solid pink' }}>
        {
          Array.isArray(articles) && articles.map(file => (
            <div key={file.id}>
              <div style={{color: 'red', fontSize: 20, fontWeight: 700}}>id: {file.id}</div>
              <div style={{color: green200}}>filename: {file.filename}</div>
              <div style={{color: yellow600}}>fileContent: {file.fileContent}</div>
              <Button  type="primary" onClick={() => handleDeleteBtn(file.id)}>删除</Button>
            </div>
          ))
        }
      </div>
    )
}

export default Nav
