import logoImg from '../assets/logo.svg'
import { globalStyles } from '../styles/global'
import { Container, Header } from '../styles/pages/app'

globalStyles()

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Header>
        <img src={logoImg.src} alt="" />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}

export default MyApp
