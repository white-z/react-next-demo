import { useState, useEffect } from 'react';
import { debounce } from 'lodash';

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
      top: window.pageYOffset,
      left: window.pageXOffset
    });
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleScroll);
    return (): void => window.removeEventListener('scroll', handleScroll);
  });

  return windowOffset;
};

export default useWindowOffset;
