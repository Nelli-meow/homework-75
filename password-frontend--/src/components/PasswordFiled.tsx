import { Button, Container, Stack, TextField } from '@mui/material';

const PasswordField = () => {
  return (
    <>
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
          <TextField id="outlined-basic" label="message" variant="outlined" />
          <Button variant="outlined">encode</Button>

          <h3>Password</h3>
          <TextField id="outlined-basic" variant="outlined" />

          <h3>Decode message</h3>
          <TextField id="outlined-basic" label="message" variant="outlined" />
          <Button variant="outlined">decode</Button>
        </Stack>
      </Container>
    </>
  );
};

export default PasswordField;