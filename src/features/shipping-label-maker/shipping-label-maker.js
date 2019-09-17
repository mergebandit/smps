import React, { useContext } from 'react'
import Row from 'antd/es/row'
import Col from 'antd/es/col'
import Layout from 'antd/es/layout'

import Wizard from 'core/components/wizard'

import Header from './shipping-label-header'
import { ShippingInfoContext } from './shipping-info-context'
import { SenderAddress, ReceiverAddress, ShippingWeight, ShippingOption, Confirm } from './steps'

const { Header: LayoutHeader, Content } = Layout;

export default function ShippingLabelMaker() {
  const { shippingInfo } = useContext(ShippingInfoContext)

  const steps = [SenderAddress, ReceiverAddress, ShippingWeight, ShippingOption, Confirm]

  const generateLabel = () => {
    console.log('shippingInfo', shippingInfo)
  }

  return (
    <Layout>
      <LayoutHeader />
      <Content style={{ marginBottom: 40 }}>
        <Row style={{ marginTop: 40 }}>
          <Col span={14} offset={5}>
            <Wizard
              wizardContext={shippingInfo}
              header={Header}
              steps={steps}
              onComplete={generateLabel}
            />
          </Col>
        </Row>
      </Content>
    </Layout>
  )
}
