import express from 'express';

const router = express.Router();

console.log('Route sendo executado!');

router.get('/', (req, res) => {
  console.log('/ sendo executado!');
  res.send('Página Home');
});

export default router;
