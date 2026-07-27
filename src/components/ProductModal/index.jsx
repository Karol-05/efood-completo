import { useDispatch } from 'react-redux'
import { add } from '../../reducers/cart'

import {
  Overlay,
  ModalContainer,
  Image,
  Content,
  Title,
  Description,
  Portion,
  AddButton,
  CloseButton
} from './styles'

function ProductModal({ product, onClose }) {
  const dispatch = useDispatch()

  if (!product) return null

  const handleAddToCart = () => {
    dispatch(add(product))
    onClose()
  }

  return (
    <Overlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>×</CloseButton>

        <Image
          src={product.foto}
          alt={product.nome}
        />

        <Content>
          <Title>{product.nome}</Title>

          <Description>{product.descricao}</Description>

          <Portion>Serve: {product.porcao}</Portion>

          <AddButton onClick={handleAddToCart}>
            Adicionar ao carrinho - R${' '}
            {product.preco.toFixed(2).replace('.', ',')}
          </AddButton>
        </Content>
      </ModalContainer>
    </Overlay>
  )
}

export default ProductModal