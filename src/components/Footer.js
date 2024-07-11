import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import logoNaval from '../resources/naval.png';
import logo from '../resources/logo.png';

function Footer() {
  return (
    <Box component="footer" sx={{ p: 2, textAlign: 'center', mt: 'auto', bgcolor: '#3f51b5', color: 'white' }}>
      <Grid container alignItems="center" justifyContent="center" spacing={2}>
        {/* Logotipo Naval */}
        <Grid item xs={6} sm={3}>
          <img 
            src={logoNaval}
            alt="LogoNaval" 
            style={{ height: 'auto', maxWidth: '100%' }} // Ajusta el tamaño según el ancho disponible
          />
        </Grid>
        
        {/* Logotipo Principal */}
        <Grid item xs={6} sm={3}>
          <img 
            src={logo}
            alt="Logo" 
            style={{ height: 'auto', maxWidth: '100%' }} // Ajusta el tamaño según el ancho disponible
          />
        </Grid>

        {/* Texto de Derechos de Autor */}
        <Grid item xs={12} sm={6}>
          <Typography variant="body2" sx={{ textAlign: 'center' }}>
            © 2024 Todos los derechos reservados.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
