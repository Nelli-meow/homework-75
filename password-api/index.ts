import express from 'express';
import cors from 'cors';

const Vigenere = require('caesar-salad').Vigenere;
const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());

const mainPassword = 'hello';

app.get('/password', (req, res) => {
    res.send('simple page :)');
})

app.post('/encode', (req, res) => {
    const { password, message } = req.body;

    if (password === mainPassword) {
        const encoded = Vigenere.Cipher(password).crypt(message);
        res.json({ encoded: encoded });
    } else {
        res.send('password is wrong');
    }

});

app.post('/decode', (req, res) => {
    const { password, message } = req.body;

    if (password === mainPassword) {
        const decoded = Vigenere.Decipher(password).crypt(message);
        res.json({ decoded: decoded });
    }else {
        res.send('password is wrong');
    }

});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})