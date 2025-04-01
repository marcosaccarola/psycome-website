import { Card, CardMedia, Typography, Box } from '@mui/material';

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
}

const TeamMember = ({ name, role, description, imageUrl }: TeamMemberProps) => {
  return (
    <Card 
      className="card"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        transition: 'all 0.3s ease-in-out',
        background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
        border: '1px solid rgba(124, 58, 237, 0.1)',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 20px 25px -5px rgba(124, 58, 237, 0.15), 0 10px 10px -5px rgba(124, 58, 237, 0.1)',
          background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.08) 0%, rgba(255, 255, 255, 1) 100%)',
        },
      }}
    >
      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' },
        p: { xs: 2, md: 4 },
      }}>
        <Box sx={{
          width: { xs: '100%', md: '200px' },
          flexShrink: 0,
        }}>
          <CardMedia
            component="img"
            sx={{
              width: '100%',
              height: { xs: '300px', md: '250px' },
              objectFit: 'cover',
              borderRadius: 2,
              boxShadow: '0 4px 6px -1px rgba(124, 58, 237, 0.1), 0 2px 4px -1px rgba(124, 58, 237, 0.06)'
            }}
            image={imageUrl}
            alt={name}
          />
        </Box>
        <Box sx={{ 
          flex: '1 1 auto',
          ml: { xs: 0, md: 4 },
          mt: { xs: 2, md: 0 },
          display: 'flex',
          flexDirection: 'column'
        }}>
          <Box sx={{
            mb: 3,
            textAlign: { xs: 'center', md: 'left' }
          }}>
            <Typography 
              variant="h4" 
              component="h3" 
              gutterBottom 
              sx={{ 
                fontWeight: 700,
                background: 'linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              {name}
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                color: '#7C3AED',
                fontWeight: 600,
              }}
            >
              {role}
            </Typography>
          </Box>
          <Box>
            {description.split('\n\n').map((paragraph, index) => (
              <Typography 
                key={index}
                variant="body1" 
                component="p"
                sx={{ 
                  lineHeight: 1.7,
                  mb: 3,
                  color: 'rgba(17, 24, 39, 0.8)',
                  '&:last-child': {
                    mb: 0
                  }
                }}
              >
                {paragraph}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default TeamMember; 