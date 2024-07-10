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
      name: "Patente 1",
      img: patente 
    },
    {
      name: "Proyecto 1",
      img: proyecto 
    },
    {
      name: "Gozinto 1",
      img: gozinto 
    },
    {
      name: "Patente 2",
      img: patente2 
    },
    {
      name: "Gozinto 2",
      img: ej 
    }
  ];

  return (
    <Carousel interval={5000}>
      {items.map((item, i) => (
        <Paper key={i}>
          <img src={item.img} alt={item.name} style={{ width: '100%', height: '100vh', objectFit: 'cover' }} />
        </Paper>
      ))}
    </Carousel>
  );
}

export default CustomCarousel;
