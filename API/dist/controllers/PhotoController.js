"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _multerConfigjs = require('../config/multerConfig.js'); var _multerConfigjs2 = _interopRequireDefault(_multerConfigjs);
var _Photojs = require('../models/Photo.js'); var _Photojs2 = _interopRequireDefault(_Photojs);

const upload = _multer2.default.call(void 0, _multerConfigjs2.default).single('photo-file');

class PhotoController {
  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }

      try {
        const { filename, originalname } = req.file;

        const { aluno_id } = req.body;

        const photo = await _Photojs2.default.create({ originalname, filename, aluno_id });

        return res.json(photo);
      } catch (error) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }
    });
  }
}

exports. default = new PhotoController();
