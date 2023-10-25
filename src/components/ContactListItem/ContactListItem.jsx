
import { useDispatch } from 'react-redux';

import { ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import { Person as UserIcon, Phone as PhoneIcon, Delete as DeleteIcon } from '@mui/icons-material';

import { deleteContact } from 'redux/contacts/operations';

import { Notify } from 'notiflix';

export const ContactsListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = userId => {
    dispatch(deleteContact(userId))
      .unwrap()
      .then(originalPromiseResult => {
        Notify.success(
          `${originalPromiseResult.name} successfully deleted from contacts`
        );
      })
      .catch(() => {
        Notify.failure("Sorry, something's wrong");
      });
  };

  return (
    <ListItem key={id}>
      <ListItemText
        primary={
          <>
            <UserIcon fontSize="small" style={{ marginRight: '4px' }} />
            {name}
          </>
        }
        secondary={
          <>
            <PhoneIcon fontSize="small" style={{ marginRight: '4px' }} />
            {number}
          </>
        }
      />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteContact(id)}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
