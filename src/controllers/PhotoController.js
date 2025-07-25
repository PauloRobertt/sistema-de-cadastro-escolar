import multer from 'multer';
import multerConfig from '../config/multerConfig.cjs';
import Photo from '../models/Photo.js';

const upload = multer(multerConfig).single('photo-file');

class PhotoController {
  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }

      const { filename, originalname } = req.file;

      const { aluno_id } = req.body;

      const photo = await Photo.create({ originalname, filename, aluno_id });

      return res.json(photo);
    });
  }
}

export default new PhotoController();
