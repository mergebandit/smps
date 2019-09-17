import React from 'react'
import Typography from 'antd/es/typography'
import Progress from 'antd/es/progress'
import styled from 'styled-components'

const { Title } = Typography

const StyledHeader = styled.header`
  margin-bottom: 40px;
`

function Header({ progress }) {
  return (
    <StyledHeader>
      <Title>Shipping Label Maker</Title>
      <Progress percent={progress} showInfo={false} />
    </StyledHeader>
  )
}

export default Header
