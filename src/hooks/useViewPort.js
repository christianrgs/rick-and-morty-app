import { useState, useEffect, useCallback, useMemo } from 'react';

const useViewport = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const handleWindowResize = useCallback(() => setWidth(window.innerWidth), []);
  const isMobile = useMemo(() => width <= 480, [width]);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, [handleWindowResize]);

  return { width, isMobile };
};

export default useViewport;
