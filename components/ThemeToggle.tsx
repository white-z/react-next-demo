import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes'
import { Div, Button, Icon } from "atomize";

export default function Home() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  if (!mounted) return null
  
  const isDark = resolvedTheme === 'dark';

  return (
    <Div d="flex">
      The current theme is: {resolvedTheme}
      <Button 
        h="2.5rem"
        w="2.5rem"
        bg="warning700"
        hoverBg="warning600"
        rounded="circle"
        m={{ r: "1rem" }}
        shadow="2"
        hoverShadow="4"
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
      >
        <Icon name="Search" size="20px" color="white" />
      </Button>
    </Div>
  )
}