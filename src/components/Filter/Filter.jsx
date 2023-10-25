import { useDispatch, useSelector } from 'react-redux';

import { setContactsFilter } from 'redux/contacts/filtersSlice';
import { selectContactsFilter } from 'redux/contacts/selectors';

import { TextField } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectContactsFilter);

  const handleChangeFilter = ({ currentTarget: { value } }) => {
    const normalizedValue = value.toLowerCase().trim();
    dispatch(setContactsFilter(normalizedValue));
  };

  return (
    <TextField
      label="Filter Contacts"
      variant="outlined"
      fullWidth
      value={filter}
      onChange={handleChangeFilter}
      placeholder="Enter contact name"
    />
  );
};
