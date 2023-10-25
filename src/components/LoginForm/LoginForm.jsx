import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { FormControl, InputLabel, Input, Button, Typography } from '@mui/material';
import { Notify } from 'notiflix';
import { NavLink } from 'react-router-dom';

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

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then((originalPromiseResult) => {
        Notify.success(`${originalPromiseResult.user.name} welcome back!`);
      })
      .catch(() => {
        Notify.failure('Incorrect login or password');
      });

    form.reset();
  };

  return (
    <form style={formStyles} onSubmit={handleSubmit} autoComplete="off">
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
          required
          placeholder="Enter email ..."
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
          required
          placeholder="Enter password ..."
          style={inputStyles}
        />
      </FormControl>
      <Button type="submit" style={buttonStyles}>
        LogIn
      </Button>
      <Typography>
        <NavLink to="/register">Don't have an account? Sign up!</NavLink>
      </Typography>
    </form>
  );
};

export default LoginForm;
