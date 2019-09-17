import React, { useContext } from 'react'

import Wizard from 'core/components/wizard'

import Header from './shipping-label-header'
import { ShippingInfoContext } from './shipping-info-context'
import {
  SenderAddress,
  ReceiverAddress,
  ShippingWeight,
  ShippingOption,
  Confirm
} from './steps'

export default function ShippingLabelMaker() {
  const wizardContext = useContext(ShippingInfoContext)

  const steps = [
    SenderAddress,
    ReceiverAddress,
    ShippingWeight,
    ShippingOption,
    Confirm
  ]

  const generateLabel = () => {
    window.print()
  }

  return (
    <Wizard
      wizardContext={wizardContext}
      header={Header}
      steps={steps}
      onComplete={generateLabel}
    />
  )
}
