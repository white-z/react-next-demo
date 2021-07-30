import { useState, useEffect } from 'react';
import { debounce } from 'lodash'
type WindowOffset = {
  top: number | undefined;
  left: number | undefined;
};

const useWindowOffset = (): WindowOffset => {
  const [windowOffset, setWindowOffset] = useState<WindowOffset>({
    top: undefined,
    left: undefined
  })
  const handleScroll = (e: Event) => {
    setWindowOffset({
      top: window.pageYOffset,
      left: window.pageXOffset
    })
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return (): void => window.removeEventListener('scroll', handleScroll);
  });

  return windowOffset;
};

export default useWindowOffset;
