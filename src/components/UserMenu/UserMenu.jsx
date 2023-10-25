import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Button,
  Avatar,
  Typography,
  ListItem,
  ListItemText,
  ListItemAvatar,
  List,
  Grid,
} from '@mui/material';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Grid container justifyContent="flex-end" alignItems="center">
      <Grid item>
        <List>
          <ListItem alignItems="center">
            <ListItemAvatar>
              <Avatar></Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="h6" component="div">
                  {user.name}
                </Typography>
              }
              secondary={user.email}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={() => dispatch(logOut())}
              style={{ marginLeft: '8px' }}
            >
              LogOut
            </Button>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
};

export default UserMenu;
