import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

import {
  FooterArea,
  Logo,
  Social,
  Icon,
  Text
} from './styles'

function Footer() {
  return (
    <FooterArea>
      <Logo src={logo} alt="eFood" />

      <Social>
        <Icon src={instagram} alt="Instagram" />
        <Icon src={facebook} alt="Facebook" />
        <Icon src={twitter} alt="Twitter" />
      </Social>

      <Text>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </Text>
    </FooterArea>
  )
}

export default Footer