import styled from 'styled-components'

export const Card = styled.div`
  width: 320px;
  height: 338px;
  background-color: #e66767;
  padding: 8px;
  box-sizing: border-box;
`

export const Image = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
  display: block;
  margin-bottom: 8px;
`

export const Name = styled.h3`
  color: #ffebd9;
  font-size: 16px;
  font-weight: 900;
  margin-bottom: 8px;
`

export const Description = styled.p`
  color: #ffebd9;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 8px;
  height: 88px;
  overflow: hidden;
`

export const Button = styled.button`
  width: 100%;
  height: 24px;
  border: none;
  background-color: #ffebd9;
  color: #e66767;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`