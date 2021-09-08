import { Provider as StyletronProvider } from 'styletron-react'
import { ThemeProvider as DarkProvider } from 'next-themes'
import { ThemeProvider as AtomizeProvider } from 'atomize';
import atomizeTheme from '@/styles/atomize.theme'

import { styletron } from '../../styletron'

export default function Providers({ children }: any) {
  return (
    <StyletronProvider value={styletron}>
      <AtomizeProvider theme={atomizeTheme}>
        <DarkProvider>
          {children}
        </DarkProvider>
      </AtomizeProvider>
    </StyletronProvider>
  )
}