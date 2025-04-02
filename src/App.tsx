import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, useTheme, useMediaQuery } from '@mui/material'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import TeamMember from './components/TeamMember'
import alessandraConte from './assets/alessandra_conte.png'
import marikaRosestolato from './assets/marika_rosestolato.png'

function App() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <div className="bg-gradient" />
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Box 
          sx={{ 
            position: 'relative',
            py: { xs: 8, md: 12 },
            overflow: 'hidden',
          }}
        >
          <Container maxWidth="lg">
            <Box 
              sx={{ 
                textAlign: 'center',
                maxWidth: '800px',
                mx: 'auto',
                px: 2,
              }}
            >
              <Typography 
                variant="h1" 
                className="gradient-text"
                sx={{ mb: 3 }}
              >
                Studio di Psicologia Psycome
              </Typography>
              <Typography 
                variant="h4" 
                color="text.secondary"
                sx={{ 
                  mb: 4,
                  fontWeight: 'normal',
                  '& .highlight': {
                    color: '#7C3AED',
                    fontWeight: 'bold'
                  }
                }}
              >
                I vantaggi di una <span className="highlight">strategia terapeutica mirata per bambini e adolescenti</span>.
                Stimolazione cognitiva per persone anziane con decadimento cognitivo.
                Corsi di formazione e aggiornamento per operatori sanitari, insegnanti e genitori.
              </Typography>
              <Button 
                variant="contained" 
                size="large"
                sx={{ 
                  px: 4, 
                  py: 1.5,
                  fontSize: '1.125rem',
                }}
              >
                Prenota una Consulenza
              </Button>
            </Box>
          </Container>
        </Box>

        {/* Team Section */}
        <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
          <Container maxWidth="lg">
            <Typography variant="h2" 
              component="h2" 
              align="center" 
              gutterBottom
              sx={{
                background: 'linear-gradient(45deg, #7C3AED 30%, #A78BFA 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 6
              }}
            >
              Le Psicologhe
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <TeamMember
                name="Alessandra Conte"
                role="Psicologa e Psicoterapeuta"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
                imageUrl={alessandraConte}
              />
              <TeamMember
                name="Marika Rosestolato"
                role="Psicologa e Psicoterapeuta"
                description={`Psicologa e Psicoterapeuta a indirizzo sistemico relazionale, si occupa di diagnosi e trattamento dei disturbi specifici dell'apprendimento e dei maggiori disturbi dell'età evolutiva (ADHD, Disturbi dello Spettro Autistico, Disturbi d'ansia).

Sviluppa progetti di prevenzione delle difficoltà di apprendimento associate nella scuola e corsi di formazione rivolti a genitori ed insegnanti.

Laurea Triennale in Scienze Psicologiche della Personalità e delle Relazioni Interpersonali presso l'Università degli Studi di Padova nel 2007 e la Laurea Specialistica in Psicologia Clinico-Dinamica nel 2010. Si è specializzata in Psicoterapia Sistemico-Relazionale presso EIDOS.

E' iscritta all'Ordine degli Psicologi del Veneto Albo A n°8381.`}
                imageUrl={marikaRosestolato}
              />
              
              {/* Collaboratori */}
              <Box sx={{ 
                display: 'grid', 
                gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, 
                gap: 3,
                mt: 8
              }}>
                <Card sx={{ 
                  maxWidth: 345,
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)'
                  }
                }}>
                  <Box sx={{ 
                    position: 'relative',
                    paddingTop: '60%',
                    backgroundColor: '#f0f0f0'
                  }}>
                    <Box
                      component="img"
                      src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=180&q=80"
                      alt="Collaboratore 1"
                      sx={{
                        position: 'absolute',
                        top: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </Box>
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Dr. Lorem Ipsum
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                    </Typography>
                  </CardContent>
                </Card>

                <Card sx={{ 
                  maxWidth: 345,
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)'
                  }
                }}>
                  <Box sx={{ 
                    position: 'relative',
                    paddingTop: '60%',
                    backgroundColor: '#f0f0f0'
                  }}>
                    <Box
                      component="img"
                      src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=180&q=80"
                      alt="Collaboratore 2"
                      sx={{
                        position: 'absolute',
                        top: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </Box>
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Dr.ssa Dolor Sit
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                    </Typography>
                  </CardContent>
                </Card>

                <Card sx={{ 
                  maxWidth: 345,
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)'
                  }
                }}>
                  <Box sx={{ 
                    position: 'relative',
                    paddingTop: '60%',
                    backgroundColor: '#f0f0f0'
                  }}>
                    <Box
                      component="img"
                      src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=180&q=80"
                      alt="Collaboratore 3"
                      sx={{
                        position: 'absolute',
                        top: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center top'
                      }}
                    />
                  </Box>
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Dr. Amet Consectetur
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* Features Section */}
        <Box sx={{ py: { xs: 8, md: 12 } }}>
          <Container maxWidth="lg">
            <Typography 
              variant="h2" 
              align="center"
              className="gradient-text"
              sx={{ mb: 3 }}
            >
              Psicologia dell'Età Evolutiva
            </Typography>
            <Typography 
              variant="h5" 
              align="center"
              color="text.secondary"
              sx={{ mb: 8 }}
            >
              Percorsi personalizzati per il benessere e lo sviluppo dei più giovani
            </Typography>
            <Box sx={{ 
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: 4,
            }}>
              {[
                {
                  title: 'ADHD e Parent Training',
                  description: 'Diagnosi e interventi in soggetti con ADHD e preparazione del contesto familiare'
                },
                {
                  title: 'Disturbi Specifici dell\'apprendimento',
                  description: 'Valutazione, Diagnosi e Intervento sui Disturbi Specifici dell\'apprendimento'
                },
                {
                  title: 'Disturbi del Comportamento',
                  description: 'Supporto e intervento sui Disturbi del Comportamento e difficoltà emotivo-relazionali. Disturbi d\'Ansia. Supporto alle famiglie e alla genitorialità'
                },
                {
                  title: 'Supporto scolastico',
                  description: 'Percorsi di intervento didattico individuale e di gruppo'
                },
                {
                  title: 'Corsi di formazione e informazione',
                  description: 'Interventi nelle scuole primarie e secondarie'
                },
                {
                  title: 'Interventi logopedici',
                  description: ''
                }
              ].map((feature, index) => (
                <Box 
                  key={index}
                  className="card"
                  sx={{ 
                    p: 4,
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                    border: '1px solid rgba(124, 58, 237, 0.1)',
                    borderRadius: 2,
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 20px 25px -5px rgba(124, 58, 237, 0.15), 0 10px 10px -5px rgba(124, 58, 237, 0.1)',
                      background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.08) 0%, rgba(255, 255, 255, 1) 100%)',
                    }
                  }}
                >
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      mb: 2,
                      color: '#7C3AED',
                      fontWeight: 600
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography 
                    color="text.secondary"
                    sx={{ lineHeight: 1.7 }}
                  >
                    {feature.description}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>

        {/* Adult Neuropsychology Section */}
        <Box sx={{ 
          py: { xs: 8, md: 12 },
          background: 'linear-gradient(180deg, var(--background) 0%, var(--secondary) 100%)',
        }}>
          <Container maxWidth="lg">
            <Typography 
              variant="h2" 
              align="center"
              className="gradient-text"
              sx={{ mb: 3 }}
            >
              Neuropsicologia dell'età Adulta
            </Typography>
            <Typography 
              variant="h5" 
              align="center"
              color="text.secondary"
              sx={{ mb: 8 }}
            >
              Valutazione, diagnosi e supporto per il benessere cognitivo in età adulta
            </Typography>
            <Box sx={{ 
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: 4,
              maxWidth: '1200px',
              mx: 'auto'
            }}>
              {[
                {
                  title: 'Valutazione e Diagnosi',
                  description: 'Diagnosi delle principali Demenze Corticali e Sottocorticali, MCI e Demenze Vascolari'
                },
                {
                  title: 'Rinforzo e Stimolazione cognitiva',
                  description: 'Interventi individuali e collettivi sul Decadimento Cognitivo'
                },
                {
                  title: 'Collaborazioni mediche',
                  description: 'Collaborazione con Distretti di Neuropsichiatria e U.O.C ospedaliere. Supervisione e collaborazione in equipè multi-professionale.'
                }
              ].map((feature, index) => (
                <Box 
                  key={index}
                  className="card"
                  sx={{ 
                    p: 4,
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                    border: '1px solid rgba(124, 58, 237, 0.1)',
                    borderRadius: 2,
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 20px 25px -5px rgba(124, 58, 237, 0.15), 0 10px 10px -5px rgba(124, 58, 237, 0.1)',
                      background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.08) 0%, rgba(255, 255, 255, 1) 100%)',
                    }
                  }}
                >
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      mb: 2,
                      color: '#7C3AED',
                      fontWeight: 600
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography 
                    color="text.secondary"
                    sx={{ lineHeight: 1.7 }}
                  >
                    {feature.description}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>
      </main>

      <Footer />
      </div>
  )
}

export default App
