import { Provider as StyletronProvider } from 'styletron-react'
import { ThemeProvider as AtomizeProvider } from 'atomize';
import { ThemeProvider as DarkProvider } from 'next-themes'

import { styletron } from '../styletron'


export default function Providers({ children }: any) {
  return (
    <DarkProvider>
      <StyletronProvider value={styletron}>
        {children}
      </StyletronProvider>
    </DarkProvider>
  )
}