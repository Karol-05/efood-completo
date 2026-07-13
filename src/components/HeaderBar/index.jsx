import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

import {
  Bar,
  Content,
  Logo,
  HeroTitle,
  LeftText,
  RightText,
  TopBar
} from './styles'

function HeaderBar({ home = false, cartItems = 0 }) {
  if (home) {
    return (
      <Bar>
        <Content>
          <Logo src={logo} alt="eFood" />

          <HeroTitle>
            Viva experiências gastronômicas
            <br />
            no conforto da sua casa
          </HeroTitle>
        </Content>
      </Bar>
    )
  }

  return (
    <Bar>
      <TopBar className="container">
        <LeftText as={Link} to="/">
          Restaurantes
        </LeftText>

        <Logo src={logo} alt="eFood" />

        <RightText>
          {cartItems} produto(s) no carrinho
        </RightText>
      </TopBar>
    </Bar>
  )
}

export default HeaderBar