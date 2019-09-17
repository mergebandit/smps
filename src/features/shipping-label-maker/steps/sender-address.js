import React, { useContext, useState } from 'react'

import Address from './address'
import Actions from './actions'

import { ShippingInfoContext } from '../shipping-info-context'

export default function SenderAddress({ onAction }) {
  let [isValid, setIsValid] = useState(false)

  const { setSender } = useContext(ShippingInfoContext)

  const title = "Enter the sender's address:"

  const handleAddressChange = address => {
    setSender(address)
  }
  return (
    <div>
      <Address title={title} onValidate={setIsValid} onAddressChange={handleAddressChange} />
      <Actions onAction={onAction} isValid={isValid} />
    </div>
  )
}
