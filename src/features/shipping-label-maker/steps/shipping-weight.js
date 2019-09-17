import React, { useEffect } from 'react'
import InputNumber from 'antd/es/input-number'
import Icon from 'antd/es/icon'
import Typography from 'antd/es/typography'
import Form from 'antd/es/form'

import { StyledForm } from './steps.styles'
import Actions from './actions'

const { Title } = Typography

function ShippingWeight({ form, onAction, wizardContext }) {
  const { validateFields } = form
  useEffect(() => {
    validateFields()
  }, [validateFields])

  const { setWeight } = wizardContext

  const {
    getFieldDecorator,
    getFieldError,
    isFieldTouched,
    getFieldValue
  } = form

  const Weight = isFieldTouched('weight') && getFieldError('weight')

  const baseLayout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 22 }
  }

  const isValid = !getFieldError('weight') && !!getFieldValue('weight')
  return (
    <>
      <Title level={2}>Enter the package weight:</Title>
      <StyledForm data-testid="shipping-weight-form">
        <Form.Item
          label="Weight"
          validateStatus={Weight ? 'error' : ''}
          help={Weight || ''}
          {...baseLayout}
        >
          {getFieldDecorator('weight', {
            rules: [
              {
                required: true,
                type: 'number',
                message: 'Please input shipping weight!'
              }
            ]
          })(
            <InputNumber
              prefix={
                <Icon type="dropbox" style={{ color: 'rgba(0,0,0,.25)' }} />
              }
              min={0}
              placeholder="Weight"
              onChange={setWeight}
              style={{ width: '100%' }}
            />
          )}
        </Form.Item>
      </StyledForm>
      <Actions onAction={onAction} isValid={isValid} />
    </>
  )
}

export default Form.create()(ShippingWeight)
