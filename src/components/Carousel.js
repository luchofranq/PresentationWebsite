import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import patente from '../resources/patenteimg.jpeg';
import proyecto from '../resources/proyectoimg.jpeg';
import gozinto from '../resources/gozintoimg.jpeg';
import patente2 from '../resources/patented.jpg';
import ej from '../resources/ejemplopractico.jpeg';

function CustomCarousel() {
  const items = [
    {
      id: 'patente1',
      name: "Patente 1",
      img: patente 
    },
    {
      id: 'proyecto1',
      name: "Proyecto 1",
      img: proyecto 
    },
    {
      id: 'gozinto1',
      name: "Gozinto 1",
      img: gozinto 
    },
    {
      id: 'patente2',
      name: "Patente 2",
      img: patente2 
    },
    {
      id: 'ejemplopractico1',
      name: "Ejemplo Práctico 1",
      img: ej 
    }
  ];

  return (
    <Carousel
      interval={5000}
      animation="slide"
      navButtonsAlwaysVisible={true}
      indicators={false}
      timeout={500}
    >
      {items.map((item) => (
        <Paper key={item.id} style={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
          <img
            src={item.img}
            alt={item.name}
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }}
          />
        </Paper>
      ))}
    </Carousel>
  );
}

export default CustomCarousel;
