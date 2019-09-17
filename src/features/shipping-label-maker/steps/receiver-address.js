import React, { useState, useContext } from 'react'

import Address from './address'
import Actions from './actions'

import { ShippingInfoContext } from '../shipping-info-context'

export default function ReceiverAddress({ onAction }) {
  let [isValid, setIsValid] = useState(false)

  const { setReceiver } = useContext(ShippingInfoContext)
  
  const title = "Enter the receiver's address:"

  const handleAddressChange = address => {
    setReceiver(address)
  }
  return (
    <div>
      <Address title={title} onValidate={setIsValid} onAddressChange={handleAddressChange} />
      <Actions onAction={onAction} isValid={isValid} />
    </div>
  )
}
