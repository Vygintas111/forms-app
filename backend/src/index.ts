import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 6002;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Forms App Backend is running' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});