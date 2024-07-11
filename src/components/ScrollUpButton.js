import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!isVisible && window.scrollY > 400) {
        setIsVisible(true);
      } else if (isVisible && window.scrollY <= 400) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);

    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [isVisible]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={scrollTop}
      style={{
        display: isVisible ? 'block' : 'none',
        position: 'fixed',
        bottom: 80,
        right: 20,
        zIndex: 1000,
        '@media (max-width: 600px)': {
          bottom: 70, // Ajuste específico para dispositivos móviles (ej. celulares)
        },
      }}
    >
      <KeyboardArrowUpIcon />
    </Button>
  );
};

export default ScrollUpButton;
