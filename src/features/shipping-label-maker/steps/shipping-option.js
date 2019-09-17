import React, { useContext, useState } from 'react'
import Form from 'antd/es/form'
import Radio from 'antd/es/radio'
import Typography from 'antd/es/typography'
import { StyledForm } from './steps.styles'

import { ShippingInfoContext } from '../shipping-info-context'

import Actions from './actions'

const { Title } = Typography

export const ShippingOptions = {
  ground: 1,
  priority: 2
}

function ShippingOption({ form, onAction }) {
  const [hasValue, setHasValue] = useState(false)
  const { setShippingOption } = useContext(ShippingInfoContext)

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
      <Title level={2}>Select your shipping option:</Title>
      <StyledForm>
        <Form.Item label="Shipping Option" {...baseLayout}>
          <Radio.Group onChange={handleShippingOptionChange}>
            <Radio.Button value={ShippingOptions.ground}>Ground</Radio.Button>
            <Radio.Button value={ShippingOptions.priority}>Priority</Radio.Button>
          </Radio.Group>
        </Form.Item>
      </StyledForm>
      <Actions onAction={onAction} isValid={hasValue} />
    </>
  )
}

export default Form.create()(ShippingOption)