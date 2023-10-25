import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  Typography,
} from '@mui/material';

import { Notify } from 'notiflix';
import { NavLink } from 'react-router-dom';

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '300px',
    margin: '0 auto',
  },
  label: {
    marginTop: '1rem',
  },
  input: {
    width: '100%',
    marginBottom: '1rem',
  },
  button: {
    backgroundColor: 'blue',
    color: 'white',
    '&:hover': {
      backgroundColor: 'darkblue',
    },
  },
};

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [passwordError, setPasswordError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isPasswordValid = (password) => {
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password } = formData;

    if (!name || !email || !password) {
      Notify.failure('All fields are required');
      return;
    }

    if (!isPasswordValid(password)) {
      setPasswordError(
        "Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters. For example TgeV23592, 3Greioct."
      );
      return;
    }

    dispatch(register(formData))
      .unwrap()
      .then((originalPromiseResult) => {
        Notify.success(`${originalPromiseResult.user.name} welcome!`);
      })
      .catch(() => {
        Notify.failure("Sorry, something's wrong");
      });

    setFormData({
      name: '',
      email: '',
      password: '',
    });
    setPasswordError('');
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit} autoComplete="off">
      <FormControl>
        <InputLabel htmlFor="name" style={styles.label}>
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
          style={styles.input}
          value={formData.name}
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="email" style={styles.label}>
          Email
        </InputLabel>
        <Input
          id="email"
          type="email"
          name="email"
          pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zAZ0-9-]+)*$"
          title="Email may contain letters, numbers, an apostrophe, and must be followed by '@' domain name '.' domain suffix. For example Taras@ukr.ua, adrian@gmail.com, JacobM3rcer@hotmail.com"
          placeholder="Enter email ..."
          required
          style={styles.input}
          value={formData.email}
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="password" style={styles.label}>
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
          style={styles.input}
          value={formData.password}
          onChange={handleInputChange}
        />
        {passwordError && (
          <Typography color="error">{passwordError}</Typography>
        )}
      </FormControl>
      <Button type='submit' style={styles.button}>
        Register
      </Button>
      <Typography>
        <NavLink to="/login">Have an account? LogIn</NavLink>
      </Typography>
    </form>
  );
};

export default RegisterForm;
