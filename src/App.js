import React from 'react';


import ShippingLabelMaker, { ShippingInfoProvider } from 'features/shipping-label-maker'

function App() {
  return (
    <ShippingInfoProvider>
      <ShippingLabelMaker />
    </ShippingInfoProvider>
  );
}

export default App;
