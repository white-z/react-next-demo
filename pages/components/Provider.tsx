import { useEffect, useState } from 'react'
import { Provider as StyletronProvider } from 'styletron-react'
import { ThemeProvider as AtomizeProvider } from 'atomize';
import { ThemeProvider as DarkProvider } from 'next-themes'
import { styletron } from '../../styletron'

export default function Providers({ children }: any) {

  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  
  const body =
    <StyletronProvider value={styletron}>
      <AtomizeProvider>
        <DarkProvider>
          {children}
        </DarkProvider>
      </AtomizeProvider>
    </StyletronProvider>

  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{body}</div>
  }

  return body
}