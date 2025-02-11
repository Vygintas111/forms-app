import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {AuthController} from "./controllers/authController";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 6002;

app.use(cors());
app.use(express.json());

app.use('/api', (req, res, next) => {
    console.log(`Request received: ${req.method} ${req.url}`);
    next();
})

app.get('/api', (req, res) => {
    res.json({ message: 'Forms App Backend is running' });
});

app.post('/api/auth/login', AuthController.register);
app.post('/api/auth/register', AuthController.login);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});