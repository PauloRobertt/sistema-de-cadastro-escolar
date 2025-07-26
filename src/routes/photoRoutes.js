import express from 'express';

import PhotoController from '../controllers/PhotoController.js';
import loginRequired from '../middlewares/loginRequired.js';

const router = express();

router.post('/', loginRequired, PhotoController.store);

export default router;
