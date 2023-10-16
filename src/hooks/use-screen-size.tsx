import { useLayoutEffect, useState } from 'react';
import debounce from 'lodash.debounce';

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const handleResize = debounce(() => {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    }, 300);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenSize;
};

export default useScreenSize;
