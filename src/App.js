import React from 'react';


import { ShippingInfoProvider, ShippingLabelMaker } from 'features/shipping-label-maker'

function App() {
  return (
    <ShippingInfoProvider>
      <ShippingLabelMaker />
    </ShippingInfoProvider>
  );
}

export default App;
