import React, { createContext, useReducer } from 'react'

import baseShippingInfo from './base-shipping-info'

let ShippingInfoContext = createContext()
const { Provider, Consumer } = ShippingInfoContext

function reducer(state, action) {
  switch (action.type) {
    case 'receiver':
      return {
        ...state,
        to: action.payload
      }
    case 'sender':
      return {
        ...state,
        from: action.payload
      }
    case 'weight':
      return {
        ...state,
        weight: action.payload
      }
    case 'shippingOption':
      return {
        ...state,
        shippingOption: action.payload
      }
    default:
      throw new Error('Invalid action dispatched to shipping-info reducer')
  }
}

function ShippingInfoProvider({ children }) {
  const [ state, dispatch ] = useReducer(reducer, baseShippingInfo)
  return (
    <Provider value={{
      shippingInfo: state,
      setReceiver: payload => dispatch({ type: 'receiver', payload }),
      setSender: payload => dispatch({ type: 'sender', payload }),
      setWeight: payload => dispatch({ type: 'weight', payload }),
      setShippingOption: payload => dispatch({ type: 'shippingOption', payload })
    }}>
      {children}
    </Provider>
  )
}

export {
  ShippingInfoProvider,
  Consumer as ShippingInfoConsumer,
  ShippingInfoContext
}