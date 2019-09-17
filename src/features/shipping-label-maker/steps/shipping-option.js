import React, { useState } from 'react'
import Form from 'antd/es/form'
import Radio from 'antd/es/radio'
import Typography from 'antd/es/typography'
import { StyledForm } from './steps.styles'

import Actions from './actions'

const { Title } = Typography

export const ShippingOptions = {
  ground: 1,
  priority: 2
}

function ShippingOption({ form, onAction, wizardContext }) {
  const { setShippingOption, shippingInfo } = wizardContext
  const { shippingOption } = shippingInfo

  const [hasValue, setHasValue] = useState(shippingOption)

  const baseLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 12 }
  }

  const handleShippingOptionChange = e => {
    setHasValue(true)
    setShippingOption(parseInt(e.target.value, 10))
  }

  return (
    <>
      <Title data-testid="shipping-option" level={2}>
        Select your shipping option:
      </Title>
      <StyledForm data-testid="shipping-option-form">
        <Form.Item label="Shipping Option" {...baseLayout}>
          <Radio.Group onChange={handleShippingOptionChange} defaultValue={shippingOption} buttonStyle="solid">
            <Radio.Button value={ShippingOptions.ground}>Ground</Radio.Button>
            <Radio.Button value={ShippingOptions.priority}>
              Priority
            </Radio.Button>
          </Radio.Group>
        </Form.Item>
      </StyledForm>
      <Actions onAction={onAction} isValid={hasValue} />
    </>
  )
}

export default Form.create()(ShippingOption)
