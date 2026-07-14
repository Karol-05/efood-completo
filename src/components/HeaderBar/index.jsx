import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import {
  Bar,
  Container,
  Logo,
  LeftText,
  RightText,
  HeroText
} from './styles'

function HeaderBar({ home = false, cartItems = 0, openCart }) {
  return (
    <Bar>
      <Container home={home}>
        {home ? (
          <>
            <Logo src={logo} alt="eFood" />

            <HeroText>
              Viva experiências gastronômicas
              <br />
              no conforto da sua casa
            </HeroText>
          </>
        ) : (
          <>
            <Link
              to="/"
              style={{ textDecoration: 'none' }}
            >
              <LeftText>Restaurantes</LeftText>
            </Link>

            <Link to="/">
              <Logo src={logo} alt="eFood" />
            </Link>

            <RightText onClick={openCart}>
              {cartItems.length} produto(s) no carrinho
            </RightText>
          </>
        )}
      </Container>
    </Bar>
  )
}

export default HeaderBar