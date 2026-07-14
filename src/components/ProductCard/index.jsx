import {
  Card,
  Image,
  Name,
  Description,
  Button
} from './styles'

function ProductCard({ product, openModal }) {
  return (
    <Card>
      <Image
        src={product.foto}
        alt={product.nome}
      />

      <Name>{product.nome}</Name>

      <Description>{product.descricao}</Description>

      <Button onClick={() => openModal(product)}>
        Mais detalhes
      </Button>
    </Card>
  )
}

export default ProductCard