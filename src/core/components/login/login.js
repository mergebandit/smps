import React, { useState, useEffect } from 'react'
import Form from 'antd/es/form'
import Icon from 'antd/es/icon'
import Input from 'antd/es/input'
import Button from 'antd/es/button'

import formHasErrors from 'core/utils/form-has-errors';

function Login(WrappedComponent) {
  function Wrapped({ form, ...props }) {
    const { getFieldDecorator, validateFields, isFieldTouched, getFieldError, getFieldsError } = form
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
      validateFields()
    }, [validateFields])
  
    if (isAuthenticated) {
      return <WrappedComponent {...props} />
    }

    const Email = isFieldTouched('email') && getFieldError('email');
    const Password = isFieldTouched('password') && getFieldError('password');

    const handleSubmit = () => {
      setIsAuthenticated(true)
    }

    return (
      <>
        <h1>About as secure as most federal websites...</h1>
        <Form onSubmit={handleSubmit} className="login-form" style={{ maxWidth: 300, padding: 24 }}>
          <Form.Item label='Email' validateStatus={Email ? 'error' : ''} help={Email || ''}>
            {getFieldDecorator('email', {
              rules: [{ required: true, min: 5, message: 'Please input your email!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Email"
              />,
            )}
          </Form.Item>
          <Form.Item label='Password' validateStatus={Password ? 'error' : ''} help={Password || ''}>
            {getFieldDecorator('password', {
              rules: [{ required: true, min: 5, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          
          <Form.Item>
            <Button type="primary" disabled={formHasErrors(getFieldsError())} htmlType="submit" className="login-form-button" style={{ width: '100%'}}>
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
