import styled from 'styled-components'

export const FooterArea = styled.footer`
  background-color: #ffebd9;
  padding: 40px 0;
  text-align: center;
`

export const FooterLogo = styled.img`
  width: 125px;
  margin: 0 auto 32px;
  display: block;
`

export const Icons = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 80px;
`

export const Icon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 24px;
    height: 24px;
    display: block;
  }
`

export const Text = styled.p`
  max-width: 480px;
  margin: 0 auto;
  font-size: 10px;
  line-height: 22px;
  color: #e66767;
`