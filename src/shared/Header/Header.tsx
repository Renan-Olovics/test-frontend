import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import styles from './styles';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      <Box sx={styles.filler} />
      <Box sx={styles.headerWrapper}>
        <Container sx={styles.header} onClick={() => navigate('/')}>
          Test App
        </Container>
        <Container sx={styles.header} onClick={() => navigate('remixes')}>
          remixes
        </Container>
      </Box>
    </header>
  );
};

export default Header;
