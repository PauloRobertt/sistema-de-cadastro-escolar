import express from 'express';

import UserController from '../controllers/UserController.js';
import loginRequired from '../middlewares/loginRequired.js';

const router = express.Router();

router.get('/', loginRequired, UserController.index);
router.get('/:id', UserController.show);

router.post('/', UserController.store);
router.put('/', loginRequired, UserController.update);
router.delete('/', loginRequired, UserController.delete);

export default router;
