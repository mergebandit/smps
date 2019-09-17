import React from 'react';
import Login from 'core/components/login'
import Layout from 'antd/es/layout'
import Row from 'antd/es/row'
import Col from 'antd/es/col'

import ShippingLabelMaker, { ShippingInfoProvider } from 'features/shipping-label-maker'

const { Header, Content } = Layout;

const Foo = Login(ShippingLabelMaker)
function App() {
  return (
    <Layout>
      <Header />
      <Content style={{ marginBottom: 40 }}>
        <Row style={{ marginTop: 40 }}>
          <Col span={14} offset={5}>
            <ShippingInfoProvider>
              <Foo />
            </ShippingInfoProvider>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default App;
