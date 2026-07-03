import styled from 'styled-components'

export const Card = styled.div`
  width: 472px;
  background-color: #fff8f2;
  border: 1px solid #e66767;
  position: relative;
`

export const CardImage = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
  display: block;
`

export const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

export const Tag = styled.span`
  background: #e66767;
  color: #ffebd9;
  font-size: 12px;
  font-weight: 700;
  padding: 6px 8px;
`

export const Content = styled.div`
  padding: 8px;
`

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #e66767;
`

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    font-size: 18px;
    font-weight: 700;
    color: #e66767;
  }
`

export const Star = styled.img`
  width: 21px;
  height: 21px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: #e66767;
  margin-bottom: 16px;
`

export const Button = styled.button`
  background-color: #e66767;
  color: #ffebd9;
  border: none;
  cursor: pointer;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 700;
`