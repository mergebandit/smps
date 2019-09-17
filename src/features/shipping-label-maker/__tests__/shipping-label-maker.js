import React from 'react';
import { render, fireEvent } from 'test/test-utils';
import ShippingLabelMaker from '../';
import BaseShippingInfo from '../base-shipping-info';
import { ShippingOptions } from '../steps/shipping-option'
import currencyFormatter from 'core/utils/currency'

describe('<ShippingLabelMaker />', () => {
  beforeEach(() => {
    jest.mock('qrcode.react', () => null)
    global.console = {
      error: jest.fn(),
      warn: jest.fn(),
      log: jest.fn()
    }
  })
  it('renders each step', () => {
    const { getByText, queryByTestId } = render(<ShippingLabelMaker />)
    expect(queryByTestId('address-header')).toBeInTheDocument()
    fireEvent.click(getByText('Next'))
    expect(queryByTestId('address-header')).toBeInTheDocument()
    fireEvent.click(getByText('Next'))
    expect(queryByTestId('shipping-weight')).toBeInTheDocument()
    fireEvent.click(getByText('Next'))
    expect(queryByTestId('shipping-option')).toBeInTheDocument()
    fireEvent.click(getByText('Next'))
    expect(queryByTestId('shipping-confirm')).toBeInTheDocument()
  });

  it('prints the shipping label when onComplete() is called', () => {
    const { getByText } = render(<ShippingLabelMaker />)
    fireEvent.click(getByText('Next'))
    fireEvent.click(getByText('Next'))
    fireEvent.click(getByText('Next'))
    fireEvent.click(getByText('Next'))
    fireEvent.click(getByText('Print Label'))
    expect(global.console.log).toHaveBeenCalledWith('shippingInfo', BaseShippingInfo)
  })

  it('prints the correct shipping cost', () => {
    const weight = 23
    const shippingRate = 0.40
    let shippingOption = 2
    let shippingCost = currencyFormatter().format(weight * shippingRate * (shippingOption === ShippingOptions.ground ? 1 : 1.5))

    const { getByTestId, getByText, queryByTestId, getByLabelText } = render(<ShippingLabelMaker />)
    fireEvent.click(getByText('Next'))
    fireEvent.click(getByText('Next'))
    let input = getByLabelText('Weight')
    fireEvent.change(input, { target: { value: '23' } })
    fireEvent.click(getByText('Next'))
    let [, input2] = queryByTestId('shipping-option-form').querySelectorAll('input[type="radio"]')
    fireEvent.click(input2)
    fireEvent.click(getByText('Next'))
    fireEvent.click(getByText('Print Label'))
    expect(getByTestId('shipping-cost')).toHaveTextContent(shippingCost)

  })
})