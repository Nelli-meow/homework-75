import { Button, Container, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import * as React from 'react';
import axiosApi from '../axiosApi.ts';

const PasswordField = () => {
  const [formData, setFormData] = useState({
    password: '',
    message: '',
  });


  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitFormHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const encodeMessage = async () => {
    if (!formData.password || !formData.message) {
      alert('Enter your password and message!');
      return;
    }

    try {
      const response = await axiosApi.post('/encode', formData);

      setFormData(prevState => ({
        ...prevState,
        message: response.data.encoded,
      }));

    } catch (e) {
      console.error(e);
    }
  };

  const decodeMessage = async () => {
    if (!formData.password || !formData.message) {
      alert('Enter your password and message!');
      return;
    }

    try {
      const response = await axiosApi.post('/decode', formData);
      setFormData(prevState => ({
        ...prevState,
        message: response.data.decoded,
      }));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form
      onSubmit={submitFormHandler}
      autoComplete="off"
    >
      <Container
        fixed
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Stack
          spacing={2}
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h3>Encode message</h3>
          <TextField
            id="outlined-basic"
            label="message"
            variant="outlined"
            name="message"
            value={formData.message}
            onChange={inputChangeHandler}
          />
          <Button
            onClick={encodeMessage}
            type="button"
            variant="outlined"
          >
            Encode
          </Button>

          <h3>Password</h3>
          <TextField
            id="outlined-basic"
            variant="outlined"
            name="password"
            value={formData.password}
            onChange={inputChangeHandler}
          />

          <h3>Decode message</h3>
          <TextField
            id="outlined-basic"
            label="message"
            variant="outlined"
            name="message"
            value={formData.message}
            onChange={inputChangeHandler}
          />
          <Button
            onClick={decodeMessage}
            type="button"
            variant="outlined"
          >
            Decode
          </Button>
        </Stack>
      </Container>
    </form>
  );
};

export default PasswordField;
