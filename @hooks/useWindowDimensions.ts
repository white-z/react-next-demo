import { useState, useEffect } from 'react';
import { debounce } from 'lodash';

export type WindowDimentions = {
  readonly width: number | undefined;
  readonly height: number | undefined;
};

export const useWindowDimensions = (wait = 150): WindowDimentions => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimentions>({
    width: undefined,
    height: undefined
  });
  const handleResize = debounce((): void => {
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }, wait);
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return (): void => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
};

export default useWindowDimensions;
