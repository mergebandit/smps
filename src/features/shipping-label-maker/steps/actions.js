import React from 'react'
import Button from 'antd/es/button'
import Row from 'antd/es/row'

import { WizardAction } from 'core/components/wizard'

import { Divider } from './steps.styles'

export default function Actions({ onAction, isValid, isLastStep }) {
  
  const { type, text, action } = {
    type: isLastStep ? 'primary' : 'default',
    text: isLastStep ? 'Print Label' : 'Next',
    action: isLastStep ? WizardAction.end : WizardAction.next
  }
  return (
    <Row type='flex' justify='center'>
      <Button onClick={() => onAction(WizardAction.prev)}>Prev</Button>
      <Divider />
      <Button type={type} disabled={false} onClick={() => onAction(action)}>{text}</Button>
    </Row>
  )
}
