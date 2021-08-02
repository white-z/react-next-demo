import { useState, useEffect } from 'react';
import { debounce } from 'lodash';

export type WindowDimentions = {
  readonly width: number | undefined;
  readonly height: number | undefined;
};

const useWindowDimentions = (wait = 150): WindowDimentions => {
  const [windowDimentions, seWindowDimentions] = useState<WindowDimentions>({
    width: undefined,
    height: undefined
  });
  const handleResize = debounce((): void => {
    seWindowDimentions({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }, wait);
  handleResize();
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return (): void => window.removeEventListener('resize', handleResize);
  });

  return windowDimentions;
};

export default useWindowDimentions;
