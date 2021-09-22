import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes'
import { Div, Button, Icon } from "atomize";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(false)

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  if (!mounted) return null
  
  const isDark = resolvedTheme === 'dark';

  const changeTheme = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setTheme(isDark ? 'light' : 'dark')
    }, 1200)
  }

  return (
    <Div d="flex">
      The current theme is: {resolvedTheme}
      <Button 
        h="2.5rem"
        w="2.5rem"
        rounded="circle"
        m={{ r: "1rem" }}
        aria-label="Toggle Theme"
        shadow="2"
        hoverShadow="4"
        onClick={() => changeTheme()}
      >
        <Icon name={loading ? 'Loading' : 'Search'} size="20px" color="white"/>
      </Button>
    </Div>
  )
}