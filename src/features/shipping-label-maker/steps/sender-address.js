import React, { useState } from 'react'

import Address from './address'
import Actions from './actions'

export default function SenderAddress({ onAction, wizardContext }) {
  let [isValid, setIsValid] = useState(false)

  /*
   * How I would use context directly
   *
   * import { useContext } from 'React'
   * import { ShippingInfoContext } from '../shipping-info-context'
   *
   * export default function ... {
   *  const { setSender } = useContext(ShippingInfoContext)
   * }
   *
   */

  const { setSender } = wizardContext

  const title = "Enter the sender's address:"

  const handleAddressChange = address => {
    setSender(address)
  }

  return (
    <div data-testid="sender-address-wrapper">
      <Address
        title={title}
        onValidate={setIsValid}
        onAddressChange={handleAddressChange}
      />
      <Actions onAction={onAction} isValid={isValid} />
    </div>
  )
}
