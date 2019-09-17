import styled from 'styled-components'
import Form from 'antd/es/form'
import Row from 'antd/es/row'
import Typography from 'antd/es/typography'

const { Title } = Typography
/*
  too magic number-y
*/
const StyledForm = styled(Form)`
  min-height: 192px;
`

const StyledRow = styled(Row)`
  border: 1px solid black;
  padding: 10px;
`
const Divider = styled.div`
  width: 8px;
  display: inline-block;
`

const OMGSUCHAHUGELETTER = styled.h6`
  font-size: 200px;
  line-height: 1;
  text-align: center;
  border-right: 1px solid black;
  margin-bottom: 0;
`

const StyledTitle = styled(Title)`
  text-align: center;
  && {
    margin-bottom: 0;
  }
`

export { StyledForm, StyledRow, Divider, OMGSUCHAHUGELETTER, StyledTitle }
