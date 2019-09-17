import React, { useState, useEffect } from 'react'
import Card from 'antd/es/card'
import Typography from 'antd/es/typography'
import Col from 'antd/es/col'
import Icon from 'antd/es/icon'
import Descriptions from 'antd/es/descriptions'
import Divider from 'antd/es/divider'
import QRCode from 'qrcode.react'
import Barcode from 'react-barcode'

import currencyFormatter from 'core/utils/currency'

import { StyledRow, OMGSUCHAHUGELETTER, StyledTitle } from './steps.styles'
import Actions from './actions'
import { ShippingOptions } from './shipping-option'

const { Title } = Typography

export default function Confirm({ onAction, wizardContext }) {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  const { shippingInfo } = wizardContext
  const { from, to, weight, shippingOption } = shippingInfo

  const shippingRate = 0.4
  const shippingCost = currencyFormatter().format(
    weight *
      shippingRate *
      (shippingOption === ShippingOptions.ground ? 1 : 1.5)
  )

  const formattedShippingRate = currencyFormatter().format(shippingRate)
  const today = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
  const zone = Math.round(Math.random() * 10)
  const rate = {
    label: shippingOption === ShippingOptions.ground ? 'Ground' : 'Priority',
    letter: shippingOption === ShippingOptions.ground ? 'G' : 'P',
    multiplier: shippingOption === ShippingOptions.ground ? '1.0' : '1.5'
  }
  const qrCodeValue = JSON.stringify(shippingInfo)
  return (
    <div data-testid="shipping-confirm">
      <Descriptions
        column={1}
        bordered
        title="Cost"
        style={{ marginBottom: 40 }}
      >
        <Descriptions.Item label="Shipping Rate">
          {formattedShippingRate}
        </Descriptions.Item>
        <Descriptions.Item label="Shipping Option">
          x {rate.multiplier} ({rate.label})
        </Descriptions.Item>
        <Descriptions.Item label="Weight">x {weight} (lbs)</Descriptions.Item>
        <Descriptions.Item label="Total">
          <strong data-testid="shipping-cost">{shippingCost}</strong>
        </Descriptions.Item>
      </Descriptions>
      <StyledRow>
        <Col lg={1}>
          <Icon type="mail" style={{ fontSize: 24 }} theme="twoTone" />
        </Col>
        <Col lg={11}>Snail Mail Postage Service</Col>
        <Col lg={12}>
          <Title
            level={4}
            style={{ textAlign: 'right', marginBottom: 0, lineHeight: 1 }}
          >
            Clever Trademark Here &reg;
          </Title>
        </Col>
      </StyledRow>
      <StyledRow>
        <Col lg={6}>
          <OMGSUCHAHUGELETTER>{rate.letter}</OMGSUCHAHUGELETTER>
        </Col>
        <Col lg={8} offset={2}>
          <Title level={4}>US POSTAGE AND FEES PAID</Title>
          <p>{today}</p>
          <p>Mailed From ZIP {from.zip}</p>
          <p>
            {weight} lb {rate.label} Rate
          </p>
          <p>Zone {zone}</p>
        </Col>
        <Col lg={8}>
          <QRCode size={192} value={qrCodeValue} />
        </Col>
      </StyledRow>
      <StyledRow>
        <StyledTitle level={3}>SMPS {rate.label} Mail</StyledTitle>
      </StyledRow>
      <StyledRow>
        <Col lg={12}>
          <address>
            <div>{from.name}</div>
            <div>{from.street}</div>
            <div>{`${from.city} ${from.state}, ${from.zip}`}</div>
          </address>
        </Col>
        <Col lg={12} offset={12}>
          <Card title="Recipient Address" loading={loading}>
            <div>{to.name}</div>
            <div>{to.street}</div>
            <div>{`${to.city} ${to.state}, ${to.zip}`}</div>
          </Card>
        </Col>
      </StyledRow>
      <StyledRow>
        <Col xs={24}>
          <div style={{ textAlign: 'center' }}>SMPS Tracking #</div>
        </Col>
        <Col xs={24}>
          <div style={{ textAlign: 'center' }}>
            <Barcode value="PublicisSapient FTW" />
          </div>
        </Col>
      </StyledRow>
      <Divider />
      <Actions onAction={onAction} isValid={true} isLastStep={true} />
    </div>
  )
}
