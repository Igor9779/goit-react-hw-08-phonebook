import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, Button, Box } from '@mui/material';

const linkStyle = {
  fontWeight: 600,
  fontSize: '18px',
  textDecoration: 'none',
  color: '#000000', 
};

const buttonStyle = {
  backgroundColor: '#FFBB18', 
  color: '#000',
  borderRadius: '14px',
  transition: 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover, &:focus': {
    backgroundColor: '#FF9500', 
    transform: 'scale(1.05)',
  },
};

const LoggedNav = () => {
  return (
    <Box sx={{ marginLeft: 'auto' }}>
      <List>
        <ListItem>
          <Link to="/login" style={linkStyle}>
            <Button sx={buttonStyle}>Login</Button>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/register" style={linkStyle}>
            <Button sx={buttonStyle}>Sign Up</Button>
          </Link>
        </ListItem>
      </List>
    </Box>
  );
};

export default LoggedNav;
