import styled, { css } from 'styled-components'
import fundo from '../../assets/images/fundo.png'

export const Bar = styled.header`
  background-color: #ffebd9;
  background-image: url(${fundo});
  background-repeat: repeat;
`

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ home }) =>
    home
      ? css`
          height: 384px;
          justify-content: center;
        `
      : css`
          height: 186px;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        `}
`

export const Logo = styled.img`
  width: 125px;
  height: 58px;
`

export const HeroText = styled.h2`
  margin-top: 138px;

  font-size: 36px;
  font-weight: 900;
  line-height: 42px;

  color: #e66767;
  text-align: center;
`

export const LeftText = styled.span`
  color: #e66767;
  font-size: 18px;
  font-weight: 900;
`

export const RightText = styled.span`
  color: #e66767;
  font-size: 18px;
  font-weight: 900;
  cursor: pointer;
`