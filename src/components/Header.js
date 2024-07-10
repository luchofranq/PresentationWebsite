import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import logo from '../resources/logo.png';
import logoNaval from '../resources/naval.png';

function Header() {
  const location = useLocation();

  // Verificar si estamos en la página Infographic
  const isInfographicPage = location.pathname === '/infographic';

  return (
    <AppBar position="static">
      <Toolbar>
        <img 
          src={logoNaval}
          alt="LogoNaval" 
          style={{ marginRight: 10, height: 50 }}
        />
        <img 
          src={logo}
          alt="Logo" 
          style={{ marginRight: 10, height: 80 }}
        />
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Presentación Gestión de los Procesos Productivos
        </Typography>
        {/* Mostrar el botón Home solo en la página Infographic */}
        {isInfographicPage && (
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
        )}
        <Button color="inherit" component={Link} to="/infographic">
          Info
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
