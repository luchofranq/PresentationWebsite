import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  container: {
    width: '100%', // Ajustar a ancho completo
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    minHeight: '100vh',
    overflow: 'hidden', // Asegura que no se salga de los límites
  },
  image: {
    width: '100%', // Ajustar a ancho completo
    height: 'auto', // Mantener la proporción de la imagen
    transition: 'transform 0.3s ease-in-out',
    cursor: 'pointer', // Cambiar el cursor al pasar sobre la imagen
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
    <Box className={classes.container} onClick={handleImageClick}>
      <img
        src={src}
        alt={alt}
        className={`${classes.image} ${isZoomed ? classes.zoomed : ''}`}
      />
    </Box>
  );
};

ZoomableImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default ZoomableImage;
