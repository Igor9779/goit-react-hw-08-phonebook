import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  Typography,
  Link,
} from '@mui/material';
import { Notify } from 'notiflix';

const formStyles = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '300px',
  margin: '0 auto',
};

const labelStyles = {
  marginTop: '1rem',
};

const inputStyles = {
  width: '100%',
  marginBottom: '1rem',
};

const buttonStyles = {
  backgroundColor: 'blue',
  color: 'white',
  '&:hover': {
    backgroundColor: 'darkblue',
  },
};

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then((originalPromiseResult) => {
        Notify.success(`${originalPromiseResult.user.name} welcome!`);
      })
      .catch(() => {
        Notify.failure("Sorry, something's wrong");
      });

    form.reset();
  };

  return (
    <form style={formStyles} onSubmit={handleSubmit} autoComplete="off">
      <FormControl>
        <InputLabel htmlFor="name" style={labelStyles}>
          Name
        </InputLabel>
        <Input
          id="name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Enter name ..."
          required
          style={inputStyles}
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="email" style={labelStyles}>
          Email
        </InputLabel>
        <Input
          id="email"
          type="email"
          name="email"
          pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
          title="Email may contain letters, numbers, an apostrophe, and must be followed by '@' domain name '.' domain suffix. For example Taras@ukr.ua, adrian@gmail.com, JacobM3rcer@hotmail.com"
          placeholder="Enter email ..."
          required
          style={inputStyles}
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="password" style={labelStyles}>
          Password
        </InputLabel>
        <Input
          id="password"
          type="password"
          name="password"
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
          title="Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters. For example TgeV23592, 3Greioct."
          placeholder="Enter password ..."
          required
          style={inputStyles}
        />
      </FormControl>
      <Button type="submit" style={buttonStyles}>
        Register
      </Button>
      <Typography>
        <Link to="/login">Have an account? LogIn</Link>
      </Typography>
    </form>
  );
};

export default RegisterForm;
