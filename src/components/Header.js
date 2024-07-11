import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItemButton, ListItemText, Box, useTheme, useMediaQuery, Divider, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../resources/logo.png';
import logoNaval from '../resources/naval.png';


function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
 

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const drawerContent = (
    <Box
      sx={{
        width: 250,
        bgcolor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        position: 'absolute',
        top: '64px',
        zIndex: theme.zIndex.drawer,
        borderBottom: `1px solid ${theme.palette.divider}`,
        paddingBottom: '16px',
      }}
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItemButton component={Link} to="/" onClick={toggleDrawer(false)}>
          <ListItemText primaryTypographyProps={{ sx: { fontSize: '1rem' } }} primary="Home" />
        </ListItemButton>
        <ListItemButton component={Link} to="/infographic" onClick={toggleDrawer(false)}>
          <ListItemText primaryTypographyProps={{ sx: { fontSize: '1rem' } }} primary="Info" />
        </ListItemButton>
        <Divider />
        <ListItemButton sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <Typography variant="h6" color="inherit" sx={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word', width: '100%', textAlign: 'center', marginBottom: '10px', fontSize: '1.2rem' }}>
              Presentación Gestión de los Procesos Productivos
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img
                src={logoNaval}
                alt="LogoNaval"
                style={{ height: 'auto', maxHeight: 50, marginRight: 10 }}
                aria-hidden="true"
              />
              <img
                src={logo}
                alt="Logo"
                style={{ height: 'auto', maxHeight: 80 }}
                aria-hidden="true"
              />
            </Box>
          </Box>
        </ListItemButton>
      

      </List>
    </Box>
  );

  return (
    <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
      <Toolbar>
        {isMobile ? (
          <>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap sx={{ flexGrow: 1, whiteSpace: 'pre-wrap', wordWrap: 'break-word', fontSize: '1.5rem' }}>
              Presentación Gestión de los Procesos Productivos
            </Typography>
          </>
        ) : (
          <>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
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
            <Typography variant="h6" noWrap sx={{ flexGrow: 1, whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
              Presentación Gestión de los Procesos Productivos
            </Typography>
          </>
        )}
        <Drawer
          anchor="left"
          open={isDrawerOpen}
          onClose={toggleDrawer(false)}
          PaperProps={{
            sx: {
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              width: '250px',
            },
          }}
        >
          {drawerContent}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
