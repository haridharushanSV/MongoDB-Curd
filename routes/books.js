
import express from 'express';

const router = express.Router();

import { booksindex, bookscreate, booksput, booksdel } from '../controller/books.controller.js'; // Ensure `.js` is included
//reading
router.get('/', booksindex);

// creat
router.post('/', bookscreate);

//update
router.put('/:id',booksput);

//del
router.delete('/:id',booksdel);

export default router;

// svharisaravanan
// 