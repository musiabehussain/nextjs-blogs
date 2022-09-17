import NavBAr from '../components/NavBAr'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return<>
  <NavBAr/>
  <Component {...pageProps} />
  </>
}

export default MyApp
