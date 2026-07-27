import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: flex-end;
  z-index: 1000;
`

export const Sidebar = styled.aside`
  width: 360px;
  height: 100vh;
  background-color: #e66767;
  padding: 32px 8px 16px;
  overflow-y: auto;
`

export const CartItem = styled.div`
  display: flex;
  position: relative;
  background-color: #ffebd9;
  padding: 8px;
  margin-bottom: 16px;
`

export const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`

export const Info = styled.div`
  margin-left: 8px;
`

export const ProductName = styled.h3`
  font-size: 18px;
  font-weight: 900;
  color: #e66767;
  margin-bottom: 16px;
`

export const Price = styled.span`
  font-size: 14px;
  color: #4b4b4b;
`

export const RemoveButton = styled.button`
  position: absolute;
  right: 8px;
  bottom: 8px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  img {
    width: 16px;
    height: 16px;
    display: block;
  }
`

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0 16px;
  color: #ffebd9;
  font-size: 14px;
  font-weight: 700;
`

export const TotalValue = styled.span``

export const CheckoutButton = styled.button`
  width: 100%;
  height: 24px;
  background-color: #ffebd9;
  color: #e66767;
  border: none;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`