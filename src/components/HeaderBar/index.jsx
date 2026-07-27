import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { open } from '../../reducers/cart'
import logo from '../../assets/images/logo.png'

import {
  Bar,
  Container,
  Logo,
  LeftText,
  RightText,
  HeroText
} from './styles'

function HeaderBar({ home = false }) {
  const dispatch = useDispatch()

  const { items } = useSelector((state) => state.cart)

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

            <RightText onClick={() => dispatch(open())}>
              {items.length} produto(s) no carrinho
            </RightText>
          </>
        )}
      </Container>
    </Bar>
  )
}

export default HeaderBar