import React, { useState } from 'react'

import Address from './address'
import Actions from './actions'

export default function ReceiverAddress({ onAction, wizardContext }) {
  let [isValid, setIsValid] = useState(false)

  const { setReceiver, shippingInfo } = wizardContext

  const { to } = shippingInfo

  const title = "Enter the receiver's address:"

  const handleAddressChange = address => {
    setReceiver(address)
  }
  return (
    <div data-testid="receiver-address-wrapper">
      <Address
        values={to}
        title={title}
        onValidate={setIsValid}
        onAddressChange={handleAddressChange}
      />
      <Actions onAction={onAction} isValid={isValid} />
    </div>
  )
}
