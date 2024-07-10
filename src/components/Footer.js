import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import logoNaval from '../resources/naval.png';
import logo from '../resources/logo.png';
function Footer() {
  return (
    <Box component="footer" sx={{ p: 2, textAlign: 'center', mt: 'auto', bgcolor: '#3f51b5', color: 'white' }}>
      <Grid container alignItems="center" justifyContent="left" spacing={2}>
        <Grid item>
          <img 
            src={logoNaval}
            alt="LogoNaval" 
            style={{ height: 40 }} // Ajusta el tamaño según sea necesario
          />
        </Grid>
        <Grid item>
        <img 
          src={logo}
          alt="Logo" 
          style={{  height: 95 }} // Ajusta el tamaño y el margen según sea necesario
        />
        </Grid>
 
 
       
        <Grid item>
          <Typography variant="body2">
            © 2024 Todos los derechos reservados.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
