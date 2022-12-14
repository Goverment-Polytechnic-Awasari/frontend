import React from 'react'
import { Tab, Tabs } from "react-bootstrap";
import LoginForm from '../components/Login/Login-Form'
import "./Login.css"
import loginIcon from '../assets/logo/login-icon.svg'

function Login() {
  return (
    <div className="LoginPage">
    <h5 className="GPA">GOVERNMENT POLYTECHNIC, AWASARI (KH)</h5>
    <h3 className="IT-MS">INFORMATION TECHNOLOGY DEPARTMENT MIS SYSTEM</h3>
    <img className="login-icon" src={loginIcon} alt="" />
    <h4 className="log">Login</h4>
    <div className="tabs">
      <Tabs
        defaultActiveKey="Subject-Teacher"
        transition={true}
        id="noanim-tab-example"
        className="mb-3"
      >
        <Tab className="tabbb" eventKey="HOD" title="HOD">
          <LoginForm />
        </Tab>
        <Tab className="tabbb" eventKey="Class-Teacher" title="Class Teacher">
          <LoginForm />
        </Tab>
        <Tab
          className="tabbb"
          eventKey="Subject-Teacher"
          title="Subject Teacher"
        >
          <LoginForm
          />
        </Tab>
      </Tabs>
    </div>
  </div>
  )
}

export default Login