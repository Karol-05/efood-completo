import styled from 'styled-components'
import background from '../../assets/fundo.png'

export const Bar = styled.header`
  background-color: #ffebd9;
  background-image: url(${background});
  background-repeat: repeat;
`

export const Content = styled.div`
  height: 384px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 138px;
`

export const TopBar = styled.div`
  height: 186px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.img`
  width: 125px;
  height: 58px;
`

export const HeroTitle = styled.h2`
  width: 540px;

  color: #e66767;
  font-size: 36px;
  font-weight: 900;
  line-height: 42px;
  text-align: center;
`

export const LeftText = styled.span`
  color: #e66767;
  font-size: 18px;
  font-weight: 900;
  text-decoration: none;
`

export const RightText = styled.span`
  color: #e66767;
  font-size: 18px;
  font-weight: 900;
`