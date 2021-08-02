import { useState, useEffect } from 'react';
import { debounce } from 'lodash'

export type WindowOffset = {
  readonly top: number | undefined;
  readonly left: number | undefined;
};

const useWindowOffset = (wait = 150): WindowOffset => {
  const [windowOffset, setWindowOffset] = useState<WindowOffset>({
    top: undefined,
    left: undefined
  })
  const handleScroll = debounce((): void => {
    setWindowOffset({
      top: window.pageYOffset,
      left: window.pageXOffset
    })
  }, wait);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return (): void => window.removeEventListener('scroll', handleScroll);
  });

  return windowOffset;
};

export default useWindowOffset;
