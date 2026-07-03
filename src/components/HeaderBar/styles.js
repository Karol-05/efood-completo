import styled, { css } from 'styled-components'
import fundo from '../../assets/fundo-header.png'

export const Bar = styled.header`
  background-color: #fff8f2;
  background-image: url(${fundo});
  background-repeat: repeat;
`

export const Content = styled.div`
  min-height: 384px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${({ home }) =>
    !home &&
    css`
      min-height: 186px;

      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    `}
`

export const Logo = styled.img`
  width: 125px;
  height: auto;
`

export const LeftText = styled.div`
  font-size: 18px;
  font-weight: 900;

  a {
    color: #e66767;
    text-decoration: none;
  }
`

export const RightText = styled.div`
  font-size: 18px;
  font-weight: 900;
  color: #e66767;
`