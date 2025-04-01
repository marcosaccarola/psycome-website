import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7C3AED',
      light: '#A78BFA',
      dark: '#5B21B6',
    },
    secondary: {
      main: '#F4F3FF',
      light: '#FAF5FF',
      dark: '#E9D5FF',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F4F3FF',
    },
    text: {
      primary: '#1E293B',
      secondary: '#64748B',
    },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 800,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
      background: 'linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    h2: {
      fontSize: '2.25rem',
      fontWeight: 700,
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontSize: '1.875rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.4,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1.125rem',
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '1rem',
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          fontWeight: 600,
          transition: 'all 0.2s ease-in-out',
        },
        contained: {
          background: 'linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)',
          color: 'white',
          boxShadow: '0 4px 14px 0 rgba(124, 58, 237, 0.25)',
          '&:hover': {
            background: 'linear-gradient(135deg, #6D28D9 0%, #9333EA 100%)',
            boxShadow: '0 6px 20px 0 rgba(124, 58, 237, 0.35)',
            transform: 'translateY(-1px)',
          },
        },
        outlined: {
          borderColor: '#7C3AED',
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
            background: 'rgba(124, 58, 237, 0.04)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          boxShadow: 'none',
          borderBottom: '1px solid rgba(124, 58, 237, 0.1)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          borderRadius: '1.5rem',
          background: 'linear-gradient(135deg, #FFFFFF 0%, #F4F3FF 100%)',
          border: '1px solid rgba(124, 58, 237, 0.1)',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          '@media (min-width: 1200px)': {
            maxWidth: '1200px',
          },
        },
      },
    },
  },
  shape: {
    borderRadius: 16,
  },
});

export default theme; 