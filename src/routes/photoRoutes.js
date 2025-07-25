import express from 'express';
import multer from 'multer';

import PhotoController from '../controllers/PhotoController';
import multerConfig from '../config/multerConfig.cjs';

const upload = multer(multerConfig);

const router = express();

router.post('/', upload.single('photo-file'), PhotoController.store);

export default router;
