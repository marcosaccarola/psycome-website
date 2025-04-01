import { AppBar, Toolbar, Button, IconButton, Box, useMediaQuery, useTheme, Drawer, List, ListItem, ListItemText, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import logo from '../assets/logo.png';

const Logo = () => (
  <img src={logo} alt="Psyram Studio" style={{ width: '72px', height: '72px', objectFit: 'contain', borderRadius: '50%' }} />
);

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleContact = () => {
    if (isMobile) {
      window.open('whatsapp://send?phone=+INSERISCI_NUMERO_QUI', '_blank');
    } else {
      window.location.href = 'mailto:INSERISCI_EMAIL_QUI';
    }
  };

  const menuItems = ['Home', 'Servizi', 'Chi Siamo', 'Contatti'];

  const drawer = (
    <Box sx={{ width: 250, p: 2 }}>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemText 
              primary={item} 
              sx={{ 
                py: 1.5,
                '& .MuiTypography-root': {
                  fontSize: '1.1rem',
                  fontWeight: 500,
                }
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar sx={{ px: { xs: 0 }, py: 1.5 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Logo />
              <Box 
                sx={{ 
                  fontWeight: 700, 
                  fontSize: '1.25rem',
                  color: theme.palette.text.primary,
                  display: { xs: 'none', sm: 'block' }
                }}
              >
                Psyram Studio
              </Box>
            </Box>
          </Box>

          {isMobile ? (
            <>
              <IconButton
                color="primary"
                aria-label="contact"
                onClick={handleContact}
                sx={{ mr: 1 }}
              >
                <WhatsAppIcon />
              </IconButton>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            </>
          ) : (
            <>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                {menuItems.map((item) => (
                  <Button 
                    key={item} 
                    sx={{ 
                      color: theme.palette.text.primary,
                      fontWeight: 500,
                      '&:hover': {
                        color: theme.palette.primary.main,
                        backgroundColor: 'transparent',
                      }
                    }}
                  >
                    {item}
                  </Button>
                ))}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleContact}
                  startIcon={<EmailIcon />}
                  sx={{
                    ml: 2,
                    px: 3,
                  }}
                >
                  Contattaci
                </Button>
              </Box>
            </>
          )}

          <Drawer
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            PaperProps={{
              sx: {
                backgroundColor: theme.palette.background.paper,
              }
            }}
          >
            {drawer}
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar; 