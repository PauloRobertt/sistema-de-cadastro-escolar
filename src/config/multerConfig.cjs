const multer = require('multer');
const { extname, resolve } = require('path');

module.exports = {
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads'));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}${extname(file.originalname)}`);
    },
  }),
};
