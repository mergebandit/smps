import React from 'react'
import { render } from '@testing-library/react'
import { ShippingInfoProvider } from 'features/shipping-label-maker'

const AllTheProviders = ({ children }) => {
  return <ShippingInfoProvider>{children}</ShippingInfoProvider>
}

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }

// Unnecessary usage of a QR code in an attempt to be cool resulted in having to mock this funcion.
HTMLCanvasElement.prototype.getContext = jest.fn()
