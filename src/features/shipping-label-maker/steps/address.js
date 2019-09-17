import React, { useEffect } from 'react'
import Form from 'antd/es/form'
import Input from 'antd/es/input'
import Icon from 'antd/es/icon'
import Typography from 'antd/es/typography'
import Row from 'antd/es/row'
import Col from 'antd/es/col'

import { StyledForm } from './steps.styles'

const { Title } = Typography

function hasErrors(fields) {
  return Object.keys(fields).some(field => fields[field])
}

function Address({ form, title, onFormChange, values, onValidate }) {
  const { validateFields } = form
  useEffect(() => {
    async function validate() {
      try {
        await validateFields()
        onValidate(true)
      } catch (ex) {
        console.error(ex)
        onValidate(false)
      }
    }
    validate()
  }, [validateFields, onValidate])

  const { getFieldDecorator, getFieldError, isFieldTouched } = form
  const Name = isFieldTouched('name') && getFieldError('name')
  const Street = isFieldTouched('street') && getFieldError('street')
  const City = isFieldTouched('city') && getFieldError('city')
  const State = isFieldTouched('state') && getFieldError('state')
  const Zip = isFieldTouched('zip') && getFieldError('zip')

  const baseLayout = {
    labelCol: {
      md: 24,
      lg: 2
    },
    wrapperCol: {
      md: 24,
      lg: 22
    }
  }

  return (
    <>
      <Title level={2}>{title}</Title>
      <StyledForm data-testid="address-form">
        <Form.Item
          label="Name"
          validateStatus={Name ? 'error' : ''}
          help={Name || ''}
          {...baseLayout}
        >
          {getFieldDecorator('name', {
            rules: [
              { required: true, min: 3, message: 'Please input your name!' }
            ],
            initialValue: values.name
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Name"
            />
          )}
        </Form.Item>
        <Form.Item
          label="Street"
          validateStatus={Street ? 'error' : ''}
          help={Street || ''}
          {...baseLayout}
        >
          {getFieldDecorator('street', {
            rules: [
              { required: true, min: 3, message: 'Please input your street!' }
            ],
            initialValue: values.street
          })(
            <Input
              prefix={<Icon type="home" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Street"
            />
          )}
        </Form.Item>
        <Row>
          <Col lg={10}>
            <Form.Item
              label="City"
              validateStatus={City ? 'error' : ''}
              help={City || ''}
              labelCol={{ md: 24, lg: 5 }}
              wrapperCol={{ md: 24, lg: 17 }}
              style={{ marginLeft: '-4px' }}
            >
              {getFieldDecorator('city', {
                rules: [
                  { required: true, min: 3, message: 'Please input your city!' }
                ],
                initialValue: values.city
              })(
                <Input
                  prefix={
                    <Icon type="home" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  placeholder="City"
                />
              )}
            </Form.Item>
          </Col>
          <Col lg={6}>
            <Form.Item
              label="State"
              validateStatus={State ? 'error' : ''}
              help={State || ''}
              labelCol={{ md: 24, lg: 7 }}
              wrapperCol={{ md: 24, lg: 17 }}
            >
              {getFieldDecorator('state', {
                rules: [
                  {
                    required: true,
                    min: 2,
                    message: 'Please input your state!'
                  }
                ],
                initialValue: values.state
              })(
                <Input
                  prefix={
                    <Icon type="home" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  placeholder="State"
                />
              )}
            </Form.Item>
          </Col>
          <Col lg={8}>
            <Form.Item
              label="Zip"
              validateStatus={Zip ? 'error' : ''}
              help={Zip || ''}
              labelCol={{ md: 24, lg: 7 }}
              wrapperCol={{ md: 24, lg: 17 }}
            >
              {getFieldDecorator('zip', {
                rules: [{ required: true, message: 'Please input your zip!' }],
                initialValue: values.zip
              })(
                <Input
                  prefix={
                    <Icon type="code" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  placeholder="Zip"
                />
              )}
            </Form.Item>
          </Col>
        </Row>
      </StyledForm>
    </>
  )
}

export default Form.create({
  async onValuesChange({ onValidate, onAddressChange, form }, _, allValues) {
    const { getFieldsError } = form
    let errors = await getFieldsError()
    errors = hasErrors(getFieldsError())
    if (errors) {
      onValidate(false)
    } else {
      onAddressChange(allValues)
      onValidate(true)
    }
  }
})(Address)
