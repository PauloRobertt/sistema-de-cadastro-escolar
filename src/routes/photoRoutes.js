import express from 'express';

import PhotoController from '../controllers/PhotoController.js';

const router = express();

router.post('/', PhotoController.store);

export default router;
