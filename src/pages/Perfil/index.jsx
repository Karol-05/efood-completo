import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Footer from '../../components/Footer'
import HeaderBar from '../../components/HeaderBar'
import ProductCard from '../../components/ProductCard'
import ProductModal from '../../components/ProductModal'

import API_URL from '../../services/api'

import {
  Banner,
  BannerContent,
  Category,
  Title,
  ProductsSection,
  ProductsList
} from './styles'

function Perfil({ cartItems, addToCart, openCart }) {
  const { id } = useParams()

  const [restaurant, setRestaurant] = useState(null)
  const [selectedProduct, setSelectedProduct] = useState(null)

  useEffect(() => {
    fetch(`${API_URL}/restaurantes`)
      .then((response) => response.json())
      .then((data) => {
        const restaurante = data.find(
          (item) => item.id === Number(id)
        )

        setRestaurant(restaurante)
      })
  }, [id])

  const openModal = (product) => {
    setSelectedProduct(product)
  }

  const closeModal = () => {
    setSelectedProduct(null)
  }

  if (!restaurant) {
    return <h2>Carregando...</h2>
  }

  return (
    <>
      <HeaderBar
        cartItems={cartItems}
        openCart={openCart}
      />

      <Banner
        style={{
          backgroundImage: `url(${restaurant.capa})`
        }}
      >
        <div className="container">
          <BannerContent>
            <Category>{restaurant.tipo}</Category>
            <Title>{restaurant.titulo}</Title>
          </BannerContent>
        </div>
      </Banner>

      <ProductsSection>
        <div className="container">
          <ProductsList>
            {restaurant.cardapio.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                openModal={openModal}
              />
            ))}
          </ProductsList>
        </div>
      </ProductsSection>

      <Footer />

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={closeModal}
          addToCart={addToCart}
        />
      )}
    </>
  )
}

export default Perfil