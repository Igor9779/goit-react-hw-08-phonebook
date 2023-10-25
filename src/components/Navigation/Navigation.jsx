import React from 'react';
import { Link } from 'react-router-dom';
import {  Toolbar, Typography, Button } from '@mui/material';
import { useAuth } from 'hooks/useAuth';
import { Box, Container } from '@mui/system';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

return (
    <Toolbar>
      <Container >
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}
        >
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography variant="h5" sx={{ scale: 1.5 }}>
              PhoneBook.
            </Typography>
          </Link>
        </Typography>
        {isLoggedIn && (
          <Box ml="auto">
            <Button component={Link} to="/contacts" color="inherit">
              Contacts
            </Button>
          </Box>
        )}
      </Container>
    </Toolbar>
  );
};

export default Navigation;
