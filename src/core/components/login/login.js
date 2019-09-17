import React, { useState } from 'react'
import Form from 'antd/es/form'
import Icon from 'antd/es/icon'
import Input from 'antd/es/input'
import Button from 'antd/es/button'

function Login(WrappedComponent) {
  function Wrapped({ form, ...props }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
  
    if (isAuthenticated) {
      return <WrappedComponent {...props} />
    }
    const { getFieldDecorator } = form

    const handleSubmit = () => {
      setIsAuthenticated(true)
    }

    return (
      <>
        <h1>Login Form</h1>
        <Form onSubmit={handleSubmit} className="login-form" style={{ maxWidth: 300, padding: 24 }}>
          <Form.Item>
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'Please input your email!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Email"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '100%'}}>
              Log in
            </Button>
          </Form.Item>
        </Form>
      </>
    )

  }
  return Form.create({ name: 'normal_login' })(Wrapped)
}

export default Login
