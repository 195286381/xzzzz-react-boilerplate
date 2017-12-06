import React from 'react'
import './Login.less'
import earthImg from '../static/images/earth-big.png'
import webgisImg from '../static/images/webgis-manager.png'
import { Button, Icon, Input } from 'antd'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="login-container">
      <img className="login-earthImg" src={earthImg} alt="earth"/>
      <img src={webgisImg} alt="earth"/>
      <form className="login-form">
        <Input
          addonBefore={
            <Icon
              type="user"
              style={{
                fontSize: 20,
                margin: "0 3px"
              }}
            />
          }
          placeholder="用户名"
          style={{
            width: 265,
            marginTop: 10,
            marginBottom: 15,
            // height: 40,
            // padding: 10,
            // fontSize: 40,
            // margin: "0 10px"
          }}
          size="large"
        />
        <Input
          addonBefore={
            <Icon
              type="lock"
              style={{
                fontSize: 20,
                margin: "0 3px"
              }}
            />
          }
          placeholder="密码"
          style={{
            width: 265,
            height: 40,
            fontSize: 14,
            marginBottom: 15,
          }}
          size="large"
        />
        <Button
          type="primary"
          style={{
            width: 265,
            height: 40,
            fontFamily: "Microsoft YaHei",
            fontSize: 14,
          }}
        ><Link to="/menu">登入</Link></Button>
      </form>
    </div>
  )
}

export default Login
