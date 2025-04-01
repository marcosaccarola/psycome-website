import { Box, Container, Typography, Link, Grid, Modal, Card, CardContent, Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { useState } from 'react';

const Footer = () => {
  const [openModal, setOpenModal] = useState(false);
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const handleContactClick = () => {
    if (isMobile) {
      window.location.href = 'tel:NUMERO_DA_INSERIRE';
    } else {
      setOpenModal(true);
    }
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:info@studiopsyram.it';
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f5f5f5',
        py: 8,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Colonna 1: Info Centro e Orari */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Sede e Orari
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              <strong>Indirizzo:</strong><br />
              Martellago (Venezia)<br />
              Via Castellana 40/L<br /><br />
              <strong>Partita IVA:</strong> 04136030279
            </Typography>
            <Card 
              onClick={handleContactClick}
              sx={{ 
                cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 16px rgba(79, 70, 229, 0.15)',
                },
                bgcolor: 'white',
                color: '#4F46E5',
                borderRadius: '100px',
                boxShadow: '0 4px 12px rgba(79, 70, 229, 0.08)',
              }}
            >
              <CardContent sx={{ 
                display: 'flex', 
                alignItems: 'center',
                py: '12px !important',
                px: 3,
                gap: 1
              }}>
                <PhoneIcon sx={{ fontSize: 20 }} />
                <Box>
                  <Typography variant="body1" sx={{ 
                    fontWeight: 500,
                    fontSize: '1rem',
                    lineHeight: 1.2,
                    mb: 0.5
                  }}>
                    Orario del centro: 9.30-13.00 / 14.00-18.00
                  </Typography>
                  <Typography variant="body2" sx={{
                    fontSize: '0.875rem',
                    opacity: 0.9
                  }}>
                    Si risponde al telefono solo in orario pomeridiano
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Colonna 2: Servizi e Specialisti */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              I Nostri Servizi
            </Typography>
            <Box mb={2}>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                <strong>Presso il centro vi sono specialisti:</strong>
              </Typography>
              <Typography component="ul" variant="body2" color="text.secondary" sx={{ pl: 2, mb: 2 }}>
                <li>Logopedisti</li>
                <li>Neuropsichiatri</li>
                <li>Formatori</li>
                <li>Esperti in Disturbi Specifici dell'Apprendimento</li>
              </Typography>
            </Box>
            <Box mb={2}>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                <strong>Modalità di consulenza:</strong>
              </Typography>
              <Typography component="ul" variant="body2" color="text.secondary" sx={{ pl: 2 }}>
                <li>Online</li>
                <li>Al telefono</li>
                <li>Presenziale</li>
              </Typography>
            </Box>
          </Grid>

          {/* Colonna 3: Dettagli Servizio */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Dettagli Servizio
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              <strong>Tipo di terapia:</strong> Neuropsicologia<br />
              <strong>Tecniche e metodi:</strong> Terapia Strategica
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              <strong>Pazienti:</strong><br />
              Bambini, Adolescenti, Terza età
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              <strong>Prezzo medio per seduta:</strong><br />
              Da 40 a 80 euro
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              <strong>Servizi aggiuntivi:</strong><br />
              • Aiuto psicologico d'urgenza: Sì<br />
              • Consulenze nel fine settimana: Sì
            </Typography>
          </Grid>

          {/* Sezione a tutta larghezza per info aggiuntive */}
          <Grid item xs={12}>
            <Box sx={{ borderTop: 1, borderColor: 'divider', pt: 4, mt: 2 }}>
              <Typography variant="body2" color="text.secondary" paragraph>
                <strong>I nostri corsi e seminari:</strong><br />
                Corsi di formazione e aggiornamento ad operatori sanitari, insegnanti, genitori
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                <strong>Riconoscimenti e Associazioni:</strong><br />
                AIRIPA. AID. SPAN. FEDERAZIONE ALZHEIMER ITALIA
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box mt={4} textAlign="center">
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Studio Psyram. Tutti i diritti riservati.
          </Typography>
        </Box>

        {/* Modal per desktop */}
        <Modal
          open={openModal}
          onClose={() => setOpenModal(false)}
          aria-labelledby="contact-modal"
          aria-describedby="contact-modal-description"
        >
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
          }}>
            <Typography variant="h6" gutterBottom>
              Contattaci
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Per chiamare il numero di telefono è necessario aprire il sito dal tuo smartphone.
              Preferisci inviarci una email?
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
              <Button 
                variant="outlined" 
                onClick={() => setOpenModal(false)}
              >
                Chiudi
              </Button>
              <Button
                variant="contained"
                startIcon={<EmailIcon />}
                onClick={handleEmailClick}
              >
                Invia Email
              </Button>
            </Box>
          </Box>
        </Modal>
      </Container>
    </Box>
  );
};

export default Footer; 