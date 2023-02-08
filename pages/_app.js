import Layaout from '../components/Layaout'
import { LoadingProvider } from '../components/hooks/useLoading'
import Navbar from '../components/navbar/Navbar'
import '../styles/globals.scss'

export default function App({ Component, pageProps }) {
  return(
    <LoadingProvider>
      <Layaout>
        <Navbar/>
        <Component {...pageProps} />
      </Layaout>
    </LoadingProvider>
  )
}
