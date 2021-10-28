import { useState, useEffect } from 'react';

export type WindowOffset = {
  readonly top: number | undefined;
  readonly left: number | undefined;
  readonly bottom: number | undefined;
  readonly right: number | undefined;
}

export const useWindowOffset = (): WindowOffset => {
  const [windowOffset, setWindowOffset] = useState<WindowOffset>({
    top: undefined,
    left: undefined,
    bottom: undefined,
    right: undefined
  });
  const handleScroll = (): void => {
    setWindowOffset({
      top: window.pageYOffset >> 0,
      left: window.pageXOffset >> 0,
      bottom: (document.documentElement.scrollHeight - window.pageYOffset - window.innerHeight) >> 0,
      right: (document.documentElement.scrollWidth - window.pageXOffset - window.innerWidth) >> 0
    });
  };
  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll);
    return (): void => {
      window.removeEventListener('scroll', handleScroll)
    };
  }, []);

  return windowOffset;
};

export default useWindowOffset;
