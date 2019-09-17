const BaseShippingInfo = {
  from: {
    name: '',
    street: '',
    city: '',
    state: '',
    zip: ''
  },
  to: {
    name: '',
    street: '',
    city: '',
    state: '',
    zip: ''
  },
  weight: 0,
  shippingOption: 1
}

BaseShippingInfo.from = {
  name: 'Scott Silvi',
  street: '123 Anywhere St',
  city: 'Hawley',
  state: 'MN',
  zip: 56549
}

BaseShippingInfo.to = {
  name: 'Andy Warhol',
  street: '987 spelled wrong',
  city: 'New York',
  state: 'NY',
  zip: '10023'
}

BaseShippingInfo.weight = 4.2
BaseShippingInfo.shippingOption = 2

export default BaseShippingInfo