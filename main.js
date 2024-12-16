
import express from 'express';
import bookroute from './routes/books.js'; 
import connectdb from './lib/db.js';

const app = express();
const port = 3000;

connectdb();


// middleware to understand json
app.use(express.json());


app.get('/', (req, res) => {
  res.json('Hello World!');
});

app.use('/book', bookroute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
