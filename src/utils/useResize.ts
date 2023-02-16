/* eslint-disable unicorn/filename-case */
import { useEffect,useState } from 'react';

import {
  SCREEN_LG,
  SCREEN_MD,
  SCREEN_SM,
  SCREEN_XL,
  SCREEN_XXL,
} from './breackpoints';

export const useResize = () => {
  const [widthRes, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event: any) => {
      setWidth(event.target.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    widthRes,
    isScreenSm: widthRes >= SCREEN_SM,
    isScreenMd: widthRes >= SCREEN_MD,
    isScreenLg: widthRes >= SCREEN_LG,
    isScreenXl: widthRes >= SCREEN_XL,
    isScreenXxl: widthRes >= SCREEN_XXL,
  };
};
