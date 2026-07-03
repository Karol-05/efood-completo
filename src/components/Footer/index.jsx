import logo from '../../assets/logo.png'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'

import {
  FooterArea,
  FooterLogo,
  Icons,
  Icon,
  Text
} from './styles'

function Footer() {
  return (
    <FooterArea>
      <div className="container">
        <FooterLogo
          src={logo}
          alt="eFood"
        />

        <Icons>
          <Icon href="#">
            <img
              src={instagram}
              alt="Instagram"
            />
          </Icon>

          <Icon href="#">
            <img
              src={facebook}
              alt="Facebook"
            />
          </Icon>

          <Icon href="#">
            <img
              src={twitter}
              alt="Twitter"
            />
          </Icon>
        </Icons>

        <Text>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </Text>
      </div>
    </FooterArea>
  )
}

export default Footer