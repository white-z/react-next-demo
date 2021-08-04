import { useState, useEffect } from 'react';

export type WindowOffset = {
  readonly top: number | undefined;
  readonly left: number | undefined;
};

const useWindowOffset = (): WindowOffset => {
  const [windowOffset, setWindowOffset] = useState<WindowOffset>({
    top: undefined,
    left: undefined
  });
  const handleScroll = (): void => {
    setWindowOffset({
      top: window.pageYOffset >> 0,
      left: window.pageXOffset >> 0
    });
  };
  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return (): void => window.removeEventListener('scroll', handleScroll);
  }, []);

  return windowOffset;
};

export default useWindowOffset;
