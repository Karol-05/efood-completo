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
  box-sizing: border-box;
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


export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 24px;
`


export const CheckoutButton = styled.button`
  width: 100%;
  min-height: 32px;

  background-color: #ffebd9;
  color: #e66767;

  border: none;
  cursor: pointer;

  font-size: 14px;
  font-weight: 700;
`


export const BackButton = styled.button`
  width: 100%;
  min-height: 32px;

  background-color: transparent;
  color: #ffebd9;

  border: 1px solid #ffebd9;

  cursor: pointer;

  font-size: 14px;
  font-weight: 700;
`


export const Title = styled.h3`
  color: #ffebd9;

  font-size: 18px;
  font-weight: 700;

  margin-bottom: 16px;
`


export const Label = styled.label`
  display: block;

  color: #ffebd9;

  font-size: 14px;
  font-weight: 700;

  margin-bottom: 8px;
  margin-top: 8px;
`


export const Input = styled.input`
  width: 100%;
  height: 32px;

  background-color: #ffebd9;

  border: none;

  padding: 0 8px;

  margin-bottom: 8px;

  box-sizing: border-box;

  font-size: 14px;

  &:focus {
    outline: none;
  }
`


export const Row = styled.div`
  display: flex;
  gap: 8px;

  > div {
    flex: 1;
  }
`


export const Text = styled.p`
  color: #ffebd9;

  font-size: 14px;

  line-height: 22px;

  margin-bottom: 24px;
`