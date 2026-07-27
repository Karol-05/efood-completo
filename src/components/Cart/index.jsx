import { useDispatch, useSelector } from 'react-redux'

import { close, remove } from '../../reducers/cart'

import lixeira from '../../assets/images/lixeira.png'

import {
  Overlay,
  Sidebar,
  CartItem,
  ProductImage,
  Info,
  ProductName,
  Price,
  RemoveButton,
  Total,
  TotalValue,
  CheckoutButton
} from './styles'

function Cart() {
  const dispatch = useDispatch()

  const { items, isOpen } = useSelector((state) => state.cart)

  if (!isOpen) {
    return null
  }

  const getTotalPrice = () => {
    return items.reduce((acc, item) => acc + item.preco, 0)
  }

  return (
    <Overlay onClick={() => dispatch(close())}>
      <Sidebar onClick={(e) => e.stopPropagation()}>
        {items.map((item) => (
          <CartItem key={`${item.id}-${Math.random()}`}>
            <ProductImage
              src={item.foto}
              alt={item.nome}
            />

            <Info>
              <ProductName>{item.nome}</ProductName>

              <Price>
                R$ {item.preco.toFixed(2).replace('.', ',')}
              </Price>
            </Info>

            <RemoveButton
              onClick={() => dispatch(remove(item.id))}
            >
              <img
                src={lixeira}
                alt="Remover produto"
              />
            </RemoveButton>
          </CartItem>
        ))}

        <Total>
          <span>Valor total</span>

          <TotalValue>
            R$ {getTotalPrice().toFixed(2).replace('.', ',')}
          </TotalValue>
        </Total>

        <CheckoutButton>
          Continuar com a entrega
        </CheckoutButton>
      </Sidebar>
    </Overlay>
  )
}

export default Cart