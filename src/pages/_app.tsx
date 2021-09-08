import type { AppProps } from 'next/app'
import Provider from '../components/Provider';
import '../styles/globals.scss'

function RootApp({ Component, pageProps, router }: AppProps) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  )
}
export default RootApp
