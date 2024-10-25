import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/hello/:name', (req, res) => {
    res.send("otra ruta")
});

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
})