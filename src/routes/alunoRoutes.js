import express from 'express';

import AlunoController from '../controllers/AlunoController.js';
import loginRequired from '../middlewares/loginRequired.js';

const router = express.Router();

router.get('/', AlunoController.index);
router.get('/:id', AlunoController.show);

router.post('/', loginRequired, AlunoController.store);
router.put('/:id', loginRequired, AlunoController.update);
router.delete('/:id', loginRequired, AlunoController.delete);

export default router;

