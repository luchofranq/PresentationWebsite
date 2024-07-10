import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../resources/logo.png';
import logoNaval from '../resources/naval.png';
function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
      <img 
          src={logoNaval}
          alt="LogoNaval" 
          style={{ marginRight: 5, height: 50 }} // Ajusta el tamaño y el margen según sea necesario
        />
        <img 
          src={logo}
          alt="Logo" 
          style={{ marginRight: 5, height: 95 }} // Ajusta el tamaño y el margen según sea necesario
        />
       
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Presentación Gestión de los Procesos Productivos
        </Typography>
       
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/infographic">
          Info
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
