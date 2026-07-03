import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

import {
  Bar,
  Content,
  LeftText,
  Logo,
  RightText
} from './styles'

function HeaderBar({ home = false, cartItems = 0 }) {
  return (
    <Bar>
      <div className="container">
        <Content home={home}>
          {home ? (
            <Logo src={logo} alt="eFood" />
          ) : (
            <>
              <LeftText>
                <Link to="/">Restaurantes</Link>
              </LeftText>

              <Link to="/">
                <Logo src={logo} alt="eFood" />
              </Link>

              <RightText>
                {cartItems} produto(s) no carrinho
              </RightText>
            </>
          )}
        </Content>
      </div>
    </Bar>
  )
}

export default HeaderBar