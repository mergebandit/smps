import React from 'react'
import { render, fireEvent } from 'test/test-utils'
import ShippingLabelMaker from '../'
import { ShippingOptions } from '../steps/shipping-option'
import currencyFormatter from 'core/utils/currency'

describe('<ShippingLabelMaker />', () => {
  beforeEach(() => {
    jest.mock('qrcode.react', () => null)
    global.console = {
      error: jest.fn(),
      warn: jest.fn(),
      log: global.console.log
    }
  })

  const setupForm = async ({ getByLabelText }) => {
    const name = getByLabelText('Name')
    await fireEvent.change(name, { target: { value: 'My Name' } })
    const street = getByLabelText('Street')
    await fireEvent.change(street, { target: { value: 'My Street' } })
    const city = getByLabelText('City')
    await fireEvent.change(city, { target: { value: 'My City' } })
    const state = getByLabelText('State')
    await fireEvent.change(state, { target: { value: 'My State' } })
    const zip = getByLabelText('Zip')
    await fireEvent.change(zip, { target: { value: 'My Zip' } })

    return {
      name,
      street,
      city,
      state,
      zip
    }
  }

  const fireNext = ({ queryByTestId }) => {
    let button = queryByTestId('next-button')
    fireEvent.click(button)
  }

  const updateInput = ({ getByLabelText }, label, value) => {
    let input = getByLabelText(label)
    fireEvent.change(input, { target: { value } })
  }
  const updateRadio = ({ queryByTestId }, testId, idx) => {
    let results = queryByTestId(testId).querySelectorAll('input[type="radio"]')
    fireEvent.click(results[idx])
  }

  it('renders each step', async () => {
    const utils = render(<ShippingLabelMaker />)
    const { queryByTestId } = utils

    await setupForm(utils)
    expect(queryByTestId('sender-address-wrapper')).toBeInTheDocument()
    fireNext(utils)
    expect(queryByTestId('receiver-address-wrapper')).toBeInTheDocument()
    await setupForm(utils)
    fireNext(utils)
    expect(queryByTestId('shipping-weight-form')).toBeInTheDocument()
    updateInput(utils, 'Weight', 23)
    fireNext(utils)
    expect(queryByTestId('shipping-option')).toBeInTheDocument()
    updateRadio(utils, 'shipping-option-form', 1)
    fireNext(utils)
    expect(queryByTestId('shipping-confirm')).toBeInTheDocument()
  })

  it('prints the shipping label when onComplete() is called', async () => {
    const expectedShippingInfo = {
      from: {
        city: 'My City',
        name: 'My Name',
        state: 'My State',
        street: 'My Street',
        zip: 'My Zip'
      },
      shippingOption: 2,
      to: {
        city: 'My City',
        name: 'My Name',
        state: 'My State',
        street: 'My Street',
        zip: 'My Zip'
      },
      weight: 23
    }
    global.print = jest.fn()
    const utils = render(<ShippingLabelMaker />)
    await setupForm(utils)
    fireNext(utils)
    await setupForm(utils)
    fireNext(utils)
    updateInput(utils, 'Weight', 23)
    fireNext(utils)
    updateRadio(utils, 'shipping-option-form', 1)
    fireNext(utils)
    fireNext(utils)
    expect(global.print).toHaveBeenCalled()
  })

  it('prints the correct shipping cost', async () => {
    const weight = 23
    const shippingRate = 0.4
    let shippingOption = 2
    let shippingCost = currencyFormatter().format(
      weight *
        shippingRate *
        (shippingOption === ShippingOptions.ground ? 1 : 1.5)
    )

    const utils = render(<ShippingLabelMaker />)
    const { getByTestId } = utils
    await setupForm(utils)
    fireNext(utils)
    await setupForm(utils)
    fireNext(utils)
    updateInput(utils, 'Weight', 23)
    fireNext(utils)
    updateRadio(utils, 'shipping-option-form', 1)
    fireNext(utils)
    fireNext(utils)
    expect(getByTestId('shipping-cost')).toHaveTextContent(shippingCost)
  })
})
