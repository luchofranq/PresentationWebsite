import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';

const useStyles = makeStyles(() => ({
  container: {
   
    maxWidth: '800px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  image: {
  
    maxWidth:'800px',
    transition: 'transform 0.3s ease-in-out',
  },
  zoomed: {
    transform: 'scale(1.5)',
  },
}));

const ZoomableImage = ({ src, alt }) => {
  const classes = useStyles();
  const [isZoomed, setIsZoomed] = useState(false);

  const handleImageClick = () => {
    setIsZoomed((prev) => !prev);
  };

  return (
    <Box className={classes.imageContainer} onClick={handleImageClick}>
      <img
        src={src}
        alt={alt}
        className={`${classes.image} ${isZoomed ? classes.zoomed : ''}`}
      />
    </Box>
  );
};

export default ZoomableImage;
