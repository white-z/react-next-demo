import type { AppProps } from 'next/app'
import Provider from '../components/Provider';
import { StyleReset } from 'atomize';

import '../styles/globals.scss'

function RootApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <StyleReset />
      <Component {...pageProps} />
    </Provider>
  )
}
export default RootApp
